#include <stdio.h>
#include <string.h>
void main(){
  int year =1700;
  if((year%400==0) || (year%4==0 && year%100!=0)){
    printf("Leap Year");
  }
  else{
    printf("Not Leap Year");
  }
}