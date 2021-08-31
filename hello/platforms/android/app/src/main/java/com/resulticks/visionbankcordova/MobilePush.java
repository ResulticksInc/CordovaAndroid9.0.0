package com.resulticks.visionbankcordova;

import android.app.Application;

import io.mob.resu.reandroidsdk.AppConstants;
import io.mob.resu.reandroidsdk.ReAndroidSDK;

public class MobilePush extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        ReAndroidSDK.getInstance(this);

    }
}

