/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.getElementById("ubtn").addEventListener("click", register);

    }
    
};

function register() {
    var resUser = {
        uniqueId: 'BZOPP0365H',
        name: 'buvanesh',
        age: '58',
        email: 'buvanesh@gmail.com',
        phone: '9786483048',
        gender: 'male',
        token: 'ftBTbiSgYdU:APA91bFuoBDx0o8MlD-aKfJRvmQszZ0_NLNPHplVCF91fQYRIqp2SXWqteWDg_qa5YzQAcQ71NjNj_rfqXa7Woq2decTlN81sZXopLO5nkwgsNlQVChW866DoONt27bKtA2QQGCOxNKn',
        profileUrl: 'ytutuu'
    }

    ReCordovaPlugin.userRegister(resUser);
}


app.initialize();