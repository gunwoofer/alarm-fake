import React, { useState } from "react";
import { Button, View, Alert } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ActionButton from 'react-native-action-button';
import { createAlarm } from 'react-native-simple-alarm';




export const AlarmAdder = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.log("A date has been picked: ", date);
    if (date < Date.now()) {
        Alert.alert('Pas une heure du passé reflechis..');
        hideDatePicker();
    }
    createAlarm({
        active: false,
        date: date.format(),
        message: 'message',
        snooze: 1,
      })

  };




  return (
    <>
    <ActionButton
        buttonColor="blue"
        onPress={() => { showDatePicker()}}
    />
    <View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
    </>
  );
};
