//
//  LeanplumSdk.m
//  RondoApp
//
//  Created by Alik . Risco on 9.01.20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(LeanplumSdk, NSObject)
  RCT_EXTERN_METHOD(setAppIdForDevelopmentMode: (NSString *)appId accessKey:(NSString *)accessKey)
  RCT_EXTERN_METHOD(setAppIdForProductionMode: (NSString *)appId accessKey:(NSString *)accessKey)
  RCT_EXTERN_METHOD(setDeviceId: (NSString *)id)
  RCT_EXTERN_METHOD(setUserId: (NSString *)id)
  RCT_EXTERN_METHOD(start)
  RCT_EXTERN_METHOD(track: (NSString *)event params:(NSDictionary *)params)
  RCT_EXTERN_METHOD(disableLocationCollection)
  RCT_EXTERN_METHOD(setDeviceLocation: (double *)latitude longitude:(double *)longitude type:(NSInteger *)type)
@end
