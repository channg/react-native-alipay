/**
 * Created by Nevo on 10/07/12.
 */
'use strict';

/**
 * This exposes the native ToastAndroid module as a JS module. This has a function 'show'
 * which takes the following parameters:
 *
 * 1. String message: A string with the text to toast
 * 2. int duration: The duration of the toast. May be ToastAndroid.SHORT or ToastAndroid.LONG
 */
import { NativeModules } from 'react-native';

export default class Alipay {
    static pay(orderInfo, callback) {
        NativeModules.RNAlipay.pay(orderInfo, callback);
    }
}
