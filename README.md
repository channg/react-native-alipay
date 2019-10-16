# react-native-alipays

React Native Module for alipay.com

## install

```
yarn add react-native-alipay-cy
```

## Android

```
react-native link react-native-alipay-cy
```

* edit android/build.gradle

```
repositories {
    flatDir {
        dirs project(':react-native-alipay-cy').file('libs')
    }
}
```

### Manually

* android/settings.gradle

```
include ':react-native-alipay-cy'
project(':react-native-alipay-cy').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-alipay-cy/android')
```

* android/app/build.gradle

```
dependencies {
    compile project(':react-native-alipay-cy')
}
```

* register module (in MainActivity.java)

```java
...

import com.alipay.AlipayPackage; // <--- IMPORT

public class MainActivity extends ReactActivity {

    ...

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new AlipayPackage() // <--- ADD HERE
        );
    }
}
```

## iOS

### RN > 0.6.0
```
pod install
```

### With rnpm

```
react-native link react-native-alipay-cy
```

### Manually

> Link `AlipayModule` library from your `node_modules/react-native-alipay-cy/ios` folder like its [described here](http://facebook.github.io/react-native/docs/linking-libraries-ios.html). Don't forget to add it to "Build Phases" of project.

### Config

* Added the following libraries to your "Link Binary With Libraries":
  * [x] CoreMotion.framework
  * [x] CoreTelephony.framework
  * [x] libc++
  * [x] libz
  
* add `URL Schema` as your app id for `URL type` in `Targets - info`

### General Usage

```javascript
import Alipay from 'react-native-alipay-cy';

```

```javascript
Alipay.pay("signed pay info string"), data => {
    console.log(data);
};

```
