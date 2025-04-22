pragma circom 2.1.4;

template IdentityVerification() {
    // Private inputs
    signal private input age;
    signal private input documentHash;
    
    // Public inputs
    signal input minimumAge;
    signal input expectedDocumentHash;
    
    // Output
    signal output isValid;
    
    // Constraints
    age >= minimumAge;
    documentHash === expectedDocumentHash;
    
    // Set output
    isValid <== 1;
}

component main = IdentityVerification(); 