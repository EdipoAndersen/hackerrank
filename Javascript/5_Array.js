var maior = 0;
    var maior2 = 0;

    for(var i=0; i<=nums.length;i++){
        if(maior < nums[i]){
            maior2 = maior;
            maior = nums[i];
        }else if((maior2 < nums[i]) && (maior != nums[i])){
            maior2 = nums[i];
        }
    }

    return maior2;