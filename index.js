'use strict';

import React from 'react';

import {Platform} from 'react-native';

import {PickerIOS} from '@react-native-picker/picker';

import WheelCurvedPicker from './WheelCurvedPicker';

import PickerHeader from './src/PickerHeader';

import CommonPicker from './src/CommonPicker';

import RegionPicker from './src/RegionPicker';

import DatePicker from './src/DatePicker';

import DateRangePicker from './src/DateRangePicker';

export {PickerHeader, CommonPicker, RegionPicker, DatePicker, DateRangePicker};

export default Platform.OS === 'ios' ? PickerIOS : WheelCurvedPicker;
