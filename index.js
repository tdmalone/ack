/**
 * A simple Lambda function that normalizes and sends an incoming payload to an SNS topic, while
 * acknowledging back to the sender ASAP. Designed to be used as a Lambda proxy integration on an
 * API Gateway endpoint.
 *
 * @author Tim Malone <tdmalone@gmail.com>
 */

'use strict';

const aws = require( 'aws-sdk' ),
      parser = require( '@tdmalone/simple-body-parser' ),
      response = require( '@tdmalone/lambda-proxy-response' );

const sns = new aws.SNS();

/* eslint-disable no-process-env */
const config = {
  responseText: process.env.RESPONSE_TEXT || '',
  snsTopic:     process.env.SNS_TOPIC
};
/* eslint-enable no-process-env */

exports.handler = ( event, context, callback ) => {

  // Get and parse the body.
  const body = parser( event.body || '{}', event.headers['content-type']);

  // Bring in query string params, allowing body params to override.
  const data = Object.assign( event.queryStringParameters, body );

  // Send to SNS.
  const snsMessage = {
    Message:  JSON.stringify( data ),
    TopicArn: config.snsTopic
  };

  sendToSns( snsMessage )
    .then( () => {
      response( null, config.responseText, callback );
    })
    .catch( ( error ) => {
      response( error, null, callback );
    });

}; // Exports.handler.

/**
 * A simple wrapper around AWS SDK's sns.publish to make it return a Promise.
 *
 * @param {object} params A collection of parameters as accepted by AWS.sns().
 * @return {Promise} A promise to send the given message to SNS.
 */
function sendToSns( params ) {
  return new Promise( ( resolve, reject ) => {
    sns.publish( params, ( error, result ) => {

      if ( error ) return reject( error );
      resolve( result );

    });
  });
}