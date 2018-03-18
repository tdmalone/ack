/**
 * A simple Lambda function that normalizes and sends an incoming payload to an SNS topic, while
 * acknowledging back to the sender ASAP.
 *
 * @author Tim Malone <tdmalone@gmail.com>
 */

'use strict';

const aws = require( 'aws-sdk' );
const sns = new aws.SNS();

/* eslint-disable no-process-env */
const config = {
  responseText: process.env.RESPONSE_TEXT || '',
  snsTopic:     process.env.SNS_TOPIC
};
/* eslint-enable no-process-env */

exports.handler = ( event, context, callback ) => {

  // TODO: Determine if we have GET params, JSON POST data, or x-www-form-urlencoded POST data.
  // TODO: Normalize it into JSON.
  // TODO: Send it to SNS.

  callback();

}; // Exports.handler.
