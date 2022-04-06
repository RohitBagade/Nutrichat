
    var goals = {1 : Gain, 2 : Fit, 3 : Loss}
    
    function Gain()
    {
        return 9;
    }
    
    function Fit()
    {
        return 5;
    }
    
    function Loss()
    {
        return 4;
    }

    var a = goals[1]();

    console.log(a+=1);




