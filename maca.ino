#include <Q2HX711.h>                              //Download it here: https://electronoobs.com/eng_arduino_hx711.php
const byte hx711_data_pin = 3;
const byte hx711_clock_pin = 2;
Q2HX711 hx711(hx711_data_pin, hx711_clock_pin);
void setup() {
  Serial.begin(9600);
}
void loop() {
  Serial.println(hx711.read()/100.0);
  delay(500);
}