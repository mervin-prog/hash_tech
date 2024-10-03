#include <bits/stdc++.h>
using namespace std;

string rotateString(string org_str,int k){
    int n=org_str.length();
    k=k%n;

    string res="";
    for(int i=k; i<n; i++)
    res+=org_str[i];

    for(int i=0; i<k; i++)
    res+=org_str[i];

    return res;
}

int main(){
    string org_str;
    cin>>org_str;
    int k;
    cin>>k;

   string res_string=rotateString(org_str,k);
   cout<<res_string<<endl;
}