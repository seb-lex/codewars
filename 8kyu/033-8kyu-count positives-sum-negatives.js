function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    const positive = 0;
    const negative = 0;
    
    for (const i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}
