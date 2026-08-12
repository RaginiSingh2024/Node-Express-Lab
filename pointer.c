:wq
#include <stdio.h>

int main() {
    int num = 10;       // variable
    int *ptr;           // pointer declaration
    ptr = &num;         // store address of num in pointer

    printf("Value of num: %d\n", num);
    printf("Address of num: %p\n", &num);
    printf("Pointer ptr stores: %p\n", ptr);
    printf("Value at address ptr points to: %d\n", *ptr);

    return 0;
}
gcc pointer.c -o pointer

