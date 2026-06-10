#include<bits/stdc++.h>
// #include <iostream>
using namespace std;

int main(){
    // pattern 1
   /* int row;
    cout<<"Enter number of rows\n";
    cin>>row;
    for(int i=0;i<row;i++){
        for(int j=0;j<5;j++){
            cout<<"*";
        }
        cout<<endl;
    }*/

    // pattern 2
   /* int row;
    cout<<"Enter number of rows\n";
    cin>>row;
    for(int i=1;i<=row;i++){
        for(int j=1;j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }*/

    // pattern 3
    /*int row;
    cout<<"Enter number of rows\n";
    cin>>row;
    for(int i=1;i<=row;i++){
        for(int j=1;j<=i;j++){
            cout<<j;
        }
        cout<<endl;
    }*/

    // pattern 4
    /*int row;
    cout<<"Enter number of rows\n";
    cin>>row;
    for(int i=1;i<=5;i++){
        for(int j=1;j<=i;j++){
            cout<<i;
        }
        cout<<endl;
    }*/

    // pattern 5
   /*int row;
    cout<<"Enter number of rows\n";
    cin>>row;
    for(int i=0;i<row;i++){
        for(int j=0;j<(row-i);j++){
            cout<<"*";
        }
        cout<<endl;
    }*/

    // pattern 6
    /* int row;
    cout<<"Enter number of rows\n";
    cin>>row;
    for(int i=0;i<row;i++){
        for(int j=1;j<=row-i;j++){
            cout<<j;
        }
        cout<<endl;
    }*/

    // pattern 7
   /* int row;
    cout<<"Enter number of rows\n";
    cin>>row;
    for(int i=1;i<=row;i++){
        for(int j=1;j<=row-i;j++){
            cout<<" ";
        }
        for(int k=0;k<2*i-1;k++){
            cout<<"*";
        }
        cout<<endl;
    }*/

    // pattern 8
    /*int row;
    cout<<"Enter number of rows\n";
    cin>>row;
    for(int i=1;i<=row;i++){
        for(int j=1;j<i;j++){
            cout<<" ";
        }
        for(int k=0;k<row*2-(2*i-1);k++){
            cout<<"*";
        }
        cout<<endl;
    }*/

    // pattern 9
        /*int row;
    cout<<"Enter number of rows\n";
    cin>>row;

    // upper half of diamond
    for(int i=1;i<=row;i++){
        for(int j=1;j<=row-i;j++){
            cout<<" ";
        }
        for(int k=0;k<2*i-1;k++){
            cout<<"*";
        }
        cout<<endl;
    }

    // lower half of diamond
    for(int i=2;i<=row;i++){
        for(int j=1;j<i;j++){
            cout<<" ";
        }
        for(int k=0;k<row*2-(2*i-1);k++){
            cout<<"*";
        }
        cout<<endl;
    }
        */

        // pattern 10
        /*int row;
    cout<<"Enter number of rows\n";
    cin>>row;
        for(int i=1;i<=row;i++){
            for(int j=1;j<=i;j++){
                cout<<"*";
            }
            cout<<endl;
        }
        for(int i=1;i<=row-1;i++){
            for(int j=1;j<=row-i;j++){
                cout<<"*";
            }
            cout<<endl;
        } */

        // pattern 11
       /* int row;
    cout<<"Enter number of rows\n";
    cin>>row;
       int start = 1;
    for (int i = 0; i < row; i++) {
        if (i % 2 == 0) start = 1;
        else start = 0;
        
        for (int j = 0; j <= i; j++) {
            cout << start;
            start = 1 - start;
        }
        cout << endl;
    } */

        // pattern 12
       /* int row;
    cout<<"Enter number of rows\n";
    cin>>row;
       for(int i = 1; i <= row; i++) {
    for(int j = 1; j <= i; j++) {
        cout << j;
    }

    for(int l = 1; l <= 2 * (row - i); l++) {
        cout << " ";
    }

    for(int k = i; k >= 1; k--) {
        cout << k;
    }

    cout << endl;
}
*/
    // pattern 13
   /* int count=1;
    for(int i=1;i<=5;i++){
        for(int j=1;j<=i;j++){
            cout<<count<<" ";
            count++;
        }
        cout<<endl;
    }
        */

        // pattern 14

     /*   for(int i=1;i<=5;i++){
            char ch='A';
            for(int j=1;j<=i;j++){
                cout<<ch;
                ch++;
            }
            cout<<endl;
        }*/

        // pattern 15
        /*  for(int i=0;i<5;i++){
            char ch='A';
            for(int j=0;j<5-i;j++){
                cout<<ch;
                ch++;
            }
            cout<<endl;
        } */

        // pattern 16
       /*   char ch='A';
        for(int i=1;i<=5;i++){
            
            for(int j=1;j<=i;j++){
                cout<<ch;
                
            }
            ch++;
            cout<<endl;
        }*/
    // Pattern 18
   /* for(char i='I';i>='A';i--){
        char ch=i;
        for(char j=i;j<='I';j++){
            cout<<ch;
            ch++;
        }
        cout<<endl;
    }*/




}