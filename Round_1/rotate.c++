#include <bits/stdc++.h>
using namespace std;


void revString(string &org_str,int s, int d){
    while(s<d){
        char t=org_str[s];
        org_str[s]=org_str[d];
        org_str[d]=t;
        s++;
        d--;
    }
}

void rotateString(string &org_str,int k){
    int n=org_str.length();
    k=k%n;
    revString(org_str,0,k-1);
    revString(org_str,k,n-1);
    revString(org_str,0,n-1);
}

int main(){
    string org_str;
    cin>>org_str;
    int k;
    cin>>k;

   rotateString(org_str,k);
   cout<<org_str<<endl;
}