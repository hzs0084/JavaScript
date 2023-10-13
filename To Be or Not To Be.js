var expect = function(val)
{
    return { 
    //Fun fact: If you write a return statement there should be no line break
    //Otherwise JavaScript will freak the out and throw syntax errors
        toBe: function(compareVal)
            {
                if (val === compareVal){ 
                    return true;
                }
                else{
                    throw new Error("Not Equal");       
                }
            },
        notToBe :function(compareVal)
        {
            if (val !== compareVal) {
              return true;
            } else {
              throw new Error("Equal");
            }
        }
    };
};

//This is a test for git

  //Example Test Cases:
  try {
    console.log(expect(5).toBe(5)); // true
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(expect(5).notToBe(5)); // Throws "Equal"
  } catch (error) {
    console.error(error.message);
  }
  