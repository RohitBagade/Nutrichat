
const submitBtn = document.querySelector('.send');
const chatArea = document.querySelector('.chatContainer');
const inputElm = document.querySelector('.msgBox');
const table = document.querySelector('.tableContainer');
const form = document.querySelector('.form');
const user = document.querySelector('.user');
const pass = document.querySelector('.pass');


var a;
var userInput = '';
var qn = 0;
var cal = 0;
var Protein = 0;
var Carb = 0;
var Fat = 0;
var ft;
var ag;
var de;
var br = "breakfast";
var lu = "lunch";
var di = "dinner";
var bw = "bworkout";
var aw = "aworkout";
var bc = 0;
var lc = 0;
var dc = 0;
var bwc = 0;
var awc = 0;

const ba1 = document.querySelector('.ba1');
const bm1 = document.querySelector('.bm1');
const bq1 = document.querySelector('.bq1');
const bp1 = document.querySelector('.bp1');
const bc1 = document.querySelector('.bc1');
const bf1 = document.querySelector('.bf1');
const b1 = document.querySelector('.b1');
const bu1 = document.querySelector('.bu1');

const ba2 = document.querySelector('.ba2');
const bm2 = document.querySelector('.bm2');
const bq2 = document.querySelector('.bq2');
const bp2 = document.querySelector('.bp2');
const bc2 = document.querySelector('.bc2');
const bf2 = document.querySelector('.bf2');
const b2 = document.querySelector('.b2');
const bu2 = document.querySelector('.bu2');

const ba3 = document.querySelector('.ba3');
const bm3 = document.querySelector('.bm3');
const bq3 = document.querySelector('.bq3');
const bp3 = document.querySelector('.bp3');
const bc3 = document.querySelector('.bc3');
const bf3 = document.querySelector('.bf3');
const b3 = document.querySelector('.b3');
const bu3 = document.querySelector('.bu3');

const bsum = document.querySelector('.bs');

var bv1 = bq1.innerHTML;
var bpv1 = bp1.innerHTML;
var bcv1 = bc1.innerHTML;
var bfv1 = bf1.innerHTML;
var bv2 = bq2.innerHTML;
var bpv2 = bp2.innerHTML;
var bcv2 = bc2.innerHTML;
var bfv2 = bf2.innerHTML;
var bv3 = bq3.innerHTML;
var bpv3 = bp3.innerHTML;
var bcv3 = bc3.innerHTML;
var bfv3 = bf3.innerHTML;
var bsv = 0;


const la1 = document.querySelector('.la1');
const lm1 = document.querySelector('.lm1');
const lq1 = document.querySelector('.lq1');
const lp1 = document.querySelector('.lp1');
const lc1 = document.querySelector('.lc1');
const lf1 = document.querySelector('.lf1');
const l1 = document.querySelector('.l1');
const lu1 = document.querySelector('.lu1');

const la2 = document.querySelector('.la2');
const lm2 = document.querySelector('.lm2');
const lq2 = document.querySelector('.lq2');
const lp2 = document.querySelector('.lp2');
const lc2 = document.querySelector('.lc2');
const lf2 = document.querySelector('.lf2');
const l2 = document.querySelector('.l2');
const lu2 = document.querySelector('.lu2');

const la3 = document.querySelector('.la3');
const lm3 = document.querySelector('.lm3');
const lq3 = document.querySelector('.lq3');
const lp3 = document.querySelector('.lp3');
const lc3 = document.querySelector('.lc3');
const lf3 = document.querySelector('.lf3');
const l3 = document.querySelector('.l3');
const lu3 = document.querySelector('.lu3');

const la4 = document.querySelector('.la4');
const lm4 = document.querySelector('.lm4');
const lq4 = document.querySelector('.lq4');
const lp4 = document.querySelector('.lp4');
const lc4 = document.querySelector('.lc4');
const lf4 = document.querySelector('.lf4');
const l4 = document.querySelector('.l4');
const lu4 = document.querySelector('.lu4');

const lsum = document.querySelector('.ls');

var lv1 = lq1.innerHTML;
var lpv1 = lp1.innerHTML;
var lcv1 = lc1.innerHTML;
var lfv1 = lf1.innerHTML;
var lv2 = lq2.innerHTML;
var lpv2 = lp2.innerHTML;
var lcv2 = lc2.innerHTML;
var lfv2 = lf2.innerHTML;
var lv3 = lq3.innerHTML;
var lpv3 = lp3.innerHTML;
var lcv3 = lc3.innerHTML;
var lfv3 = lf3.innerHTML;
var lv4 = lq4.innerHTML;
var lpv4 = lp4.innerHTML;
var lcv4 = lc4.innerHTML;
var lfv4 = lf4.innerHTML;
var lsv = 0;


const da1 = document.querySelector('.da1');
const dm1 = document.querySelector('.dm1');
const dq1 = document.querySelector('.dq1');
const dp1 = document.querySelector('.dp1');
const dc1 = document.querySelector('.dc1');
const df1 = document.querySelector('.df1');
const d1 = document.querySelector('.d1');
const du1 = document.querySelector('.du1');

const da2 = document.querySelector('.da2');
const dm2 = document.querySelector('.dm2');
const dq2 = document.querySelector('.dq2');
const dp2 = document.querySelector('.dp2');
const dc2 = document.querySelector('.dc2');
const df2 = document.querySelector('.df2');
const d2 = document.querySelector('.d2');
const du2 = document.querySelector('.du2');

const da3 = document.querySelector('.da3');
const dm3 = document.querySelector('.dm3');
const dq3 = document.querySelector('.dq3');
const dp3 = document.querySelector('.dp3');
const dc3 = document.querySelector('.dc3');
const df3 = document.querySelector('.df3');
const d3 = document.querySelector('.d3');
const du3 = document.querySelector('.du3');

const da4 = document.querySelector('.da4');
const dm4 = document.querySelector('.dm4');
const dq4 = document.querySelector('.dq4');
const dp4 = document.querySelector('.dp4');
const dc4 = document.querySelector('.dc4');
const df4 = document.querySelector('.df4');
const d4 = document.querySelector('.d4');
const du4 = document.querySelector('.du4');

const dsum = document.querySelector('.ds');

var dv1 = dq1.innerHTML;
var dv2 = dq2.innerHTML;
var dv3 = dq3.innerHTML;
var dv4 = dq4.innerHTML;
var dpv1 = dp1.innerHTML;
var dcv1 = dc1.innerHTML;
var dfv1 = df1.innerHTML;
var dpv2 = dp2.innerHTML;
var dcv2 = dc2.innerHTML;
var dfv2 = df2.innerHTML;
var dpv3 = dp3.innerHTML;
var dcv3 = dc3.innerHTML;
var dfv3 = df3.innerHTML;
var dpv4 = dp4.innerHTML;
var dcv4 = dc4.innerHTML;
var dfv4 = df4.innerHTML;
var dsv = 0;


const bwa1 = document.querySelector('.bwa1');
const bwm1 = document.querySelector('.bwm1');
const bwq1 = document.querySelector('.bwq1');
const bwp1 = document.querySelector('.bwp1');
const bwc1 = document.querySelector('.bwc1');
const bwf1 = document.querySelector('.bwf1');
const bw1 = document.querySelector('.bw1');
const bwu1 = document.querySelector('.bwu1');

const bwa2 = document.querySelector('.bwa2');
const bwm2 = document.querySelector('.bwm2');
const bwq2 = document.querySelector('.bwq2');
const bwp2 = document.querySelector('.bwp2');
const bwc2 = document.querySelector('.bwc2');
const bwf2 = document.querySelector('.bwf2');
const bw2 = document.querySelector('.bw2');
const bwu2 = document.querySelector('.bwu2');

const bwsum = document.querySelector('.bws');

var bwv1 = bwq1.innerHTML;
var bwv2 = bwq2.innerHTML;
var bwpv1 = bwp1.innerHTML;
var bwcv1 = bwc1.innerHTML;
var bwfv1 = bwf1.innerHTML;
var bwpv2 = bwp2.innerHTML;
var bwcv2 = bwc2.innerHTML;
var bwfv2 = bwf2.innerHTML;
var bwsv = 0;


const awa1 = document.querySelector('.awa1');
const awm1 = document.querySelector('.awm1');
const awq1 = document.querySelector('.awq1');
const awp1 = document.querySelector('.awp1');
const awc1 = document.querySelector('.awc1');
const awf1 = document.querySelector('.awf1');
const aw1 = document.querySelector('.aw1');
const awu1 = document.querySelector('.awu1');

const awa2 = document.querySelector('.awa2');
const awm2 = document.querySelector('.awm2');
const awq2 = document.querySelector('.awq2');
const awp2 = document.querySelector('.awp2');
const awc2 = document.querySelector('.awc2');
const awf2 = document.querySelector('.awf2');
const aw2 = document.querySelector('.aw2');
const awu2 = document.querySelector('.awu2');

const awsum = document.querySelector('.aws');

var awv1 = awq1.innerHTML;
var awv2 = awq2.innerHTML;
var awpv1 = awp1.innerHTML;
var awcv1 = awc1.innerHTML;
var awfv1 = awf1.innerHTML;
var awpv2 = awp2.innerHTML;
var awcv2 = awc2.innerHTML;
var awfv2 = awf2.innerHTML;
var awsv = 0;

var Quiz = [
//0 : name
    "",
//1 : Gender
    `What's Your Gender?<br>
    (Male or Female)`,
//2 : Age
    "What is your Age ?",
//3 : height
    "What is your height ?",
//4 : Weight
    "What is your Weight ?",
//5 : Activity
    `How Active Are You?<br>
    1. Sedentary (little or no exercise)<br>
    2. Lightly active (exercise 1 to 3 days/week)<br>
    3. Moderately active (exercise 3 to 5 days/week)<br>
    4. Active (exercise 6 to 7 days/week)<br>
    5. Very active (hard exercise 6 to 7 days/week)<br>
    (Choose one option)`,
//6 : Goal
    `What is your Goal ?<br>
    1. Muscle Gain<br>
    2. Fat Loss<br>
    3. Maintain<br>
    (Choose One)`,
// 7 : foodType
    `What is your food type ?<br>
    1. veg<br>
    2. nonveg<br>
    3. vegan<br>
    4. anything<br>
    (Write any One)`,
//8 : allergy
    `Are there any sort of allergies that need to be taken care of?<br>
    1. Egg<br>
    2. Wheat<br>
    3. Peanut<br>
    4. Dryfruit<br>
    5. Milk<br>
    6. null<br>
    (Write any One)`,
//9 : disease
    `do you have any disease ?<br>
    1. blood pressure<br>
    2. diabetes I<br>
    3. diabetes II<br>
    4. heart disease<br>
    5. kidney disease<br>
    6. cholesterol<br>
    7. Digestive Disorders<br>
    8. Alzheimer<br>
    9. Cancer<br>
    10. none<br>
    (Write any One)`,
//10 : Breakfast
    `What Would You Like to Have For Breakfast?<br>
    (choose 3 products for breakfast)`, ``, ``, ``,
//14 : Lunch
    `What Would You Like to Have For Lunch?<br>
    (choose any 4 products)`, ``, ``, ``, ``,
//19 : Dinner
    `What Would You Like to Have For Dinner?<br>
    (choose any 4 products)`, ``, ``, ``, ``,
//24 : Before Workout
    `What would you like to eat at Before Workout?<br>
    (choose any 2 products)`, ``, ``,
//27 : After Workout
    `What would you like to eat After Workout?<br>
    (choose any 2 products)`, ``, ``,
//30 : report
    `Click on Adjust to adjust the quantity of products.`

        
]

var goals = {1 : Gain, 2 : Fit, 3 : Loss};
var foodType = {1 : 'Veg', 2 : 'NonVeg', 3 : 'Vegan', 4 : 'Anything'};
var allergy = {1 : 'Egg', 2 : 'Wheat', 3 : 'Peanut', 4 : 'Dryfruit', 5 : 'Milk', 6 : 'null'};
var disease = {1 : 'Blood_Pressure', 2  : 'Diabetes_I', 3  : 'Diabetes_II', 4  : 'Heart_Disease', 5  : 'Kidney_Disease', 6  : 'Cholesterol', 7  : 'Digestive_Disorders', 8  : 'Alzheimer', 9  : 'Cancer', 10  : 'none'};

// submitBtn.addEventListener('click', function send() {
//     userInput = inputElm.value;

//     let temp = `<div class="clientChat">${userInput}</div>`
    
//     if(userInput != '')
//     {
//         chatArea.insertAdjacentHTML("beforeend", temp);
//         inputElm.value = '';
//     }
// })

function submit()
{
    var username = user.value;
    var password = pass.value;
    clientdata(username, password);
    form.style.display="none";
    let temp = `<div class="botChat">Hii, Myself NUTRICHAT The Bot. What is your name?</div>`;
    chatArea.insertAdjacentHTML("beforeend", temp);
}

function addQuant()
{
    if(a==1)
    {
        table.style.display="none";
        return a=0;
    }
    else
    {
        table.style.display="flex";
        return a=1;
    }
}

inputElm.addEventListener('keyup', e => {
    e.preventDefault();
    if(e.key === 'Enter')
    {
        assign();
    }
});

function assign()
{
    // alert("hii");
    userInput = inputElm.value;

    let temp = `<div class="clientChat">${userInput}</div>`
    
    if(userInput != '')
    {
        chatArea.insertAdjacentHTML("beforeend", temp);
        scrollDown();
        inputElm.value = '';
        Store(userInput);
        getQuiz();
        scrollDown();
    }
}

function scrollDown()
{
    chatArea.scrollTo(0, chatArea.scrollHeight);
}

function getQuiz()
{
    if(qn == 29)
    {
        qn++;
        let temp = `<div class="botChat">${Quiz[qn]}</div>`;
        chatArea.insertAdjacentHTML("beforeend", temp);
        // report();
        temp = `<div class="botChat botbtn"><button onclick="addQuant()" id="adjQt">Adjust</button></div>`;
        chatArea.insertAdjacentHTML("beforeend", temp);
    }
    else if(qn == 26)
    {
        qn++;
        let temp = `<div class="botChat">${Quiz[qn]}</div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
        list(aw);
        qn++;
    }
    else if(qn == 23)
    {
        qn++;
        let temp = `<div class="botChat">${Quiz[qn]}</div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
        list(bw);
        qn++;
    }
    else if(qn == 18)
    {
        qn++;
        let temp = `<div class="botChat">${Quiz[qn]}</div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
        list(di);
        qn++;
    }
    else if(qn == 13)
    {  
        qn++;
        let temp = `<div class="botChat">${Quiz[qn]}</div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
        list(lu);
        qn++;
    }
    else if(qn == 9)
    {
        diseases(Quiz[qn]);
        de = Quiz[qn];
        qn++;
        let temp = `<div class="botChat">${Quiz[qn]}</div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
        list(br);
        qn++;
    }
    else if(qn == 8)
    {
        allergies(Quiz[qn]);
        ag = Quiz[qn];
        qn++;
        let temp = `<div class="botChat">${Quiz[qn]}</div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
    }
    else if(qn == 7)
    {
        type(Quiz[qn]);
        ft = Quiz[qn];
        qn++;
        let temp = `<div class="botChat">${Quiz[qn]}</div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
    }
    else if(qn == 6)
    {
        Calories(Quiz[1], parseInt(Quiz[2]), parseFloat(Quiz[3]), parseFloat(Quiz[4]), parseFloat(Quiz[5]));
        var str = goals[Quiz[6]](cal);
        Quiz[qn] = str;
        qn++;
        let temp = `<div class="botChat">${Quiz[qn]}</div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
    }
    else if(qn == 5)
    {
        Activity(Quiz[qn]);
        qn++
        let temp = `<div class="botChat">${Quiz[qn]}</div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
    }
    else if(qn < 5)
    {
        qn++;
        let temp = `<div class="botChat">${Quiz[qn]}</div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
    }
    else
    {
        qn++;
    }
}

function Store(ans)
{
    Quiz[qn] = ans;
    if(qn == 11)
    {
        breakfast1(ans);
    }
    else if(qn == 12)
    {
        breakfast2(ans);
    }
    else if(qn == 13)
    {
        breakfast3(ans);

    }
    else if(qn == 15)
    {
        lunch1(ans);
    }
    else if(qn == 16)
    {
        lunch2(ans);
    }
    else if(qn == 17)
    {
        lunch3(ans);
    }
    else if(qn == 18)
    {
        lunch4(ans);
    }
    else if(qn == 20)
    {
        dinner1(ans);
    }
    else if(qn == 21)
    {
        dinner2(ans);
    }
    else if(qn == 22)
    {
        dinner3(ans);
    }
    else if(qn == 23)
    {
        dinner4(ans);
    }
    else if(qn == 25)
    {
        beforew1(ans);
    }
    else if(qn == 26)
    {
        beforew2(ans);
    }
    else if(qn == 28)
    {
        afterw1(ans);   
    }
    else if(qn == 29)
    {
        afterw2(ans);
    }

}

function Activity(no)
{
    var rate = {1 : 1.2, 2 : 1.375, 3 : 1.55, 4 : 1.725, 5 : 1.9}

    Quiz[5] = rate[no];
}

function goal(no)
{
    Quiz[6] = goals[no];
}

function type(no)
{
    Quiz[7] = foodType[no];
}

function allergies(no)
{
    Quiz[8] = allergy[no];
}

function diseases(no)
{
    Quiz[9] = disease[no];
}

function Calories(Gender, Age, Height, Weight, Rate)
{
    if(Gender == "Male")
    {
        BMR = (9.99 * Weight) + (6.25 * Height) - (4.92 * Age) + 5 ;
    }
    else
    {
        BMR = (9.99 * Weight) + (6.25 * Height) - (4.92 * Age) - 161 ;
    }

    cal = BMR * Rate ;
}	

function Gain(cal)
{
    cal += 500;
    Protein = parseInt((cal * 0.3) / 4);
    Carb = parseInt((cal * 0.5) / 4) ;
    Fat = parseInt((cal * 0.2) / 9) ;
    perMealCal(cal);

    let temp = `
    Your Daily Calorie Intake is ${cal}<br>
    You will Need ${Protein}g of Protein.<br>
    You will Need ${Carb}g of Carbs.<br>
    You will Need ${Fat}g of Fat.<br>`
    // chatArea.insertAdjacentHTML("beforeend", temp);
    return temp;
}

function Fit(cal)
{
    Protein = parseInt((cal * 0.3) / 4) ;
    Carb = parseInt((cal * 0.4) / 4) ;
    Fat = parseInt((cal * 0.3) / 9) ;
    perMealCal(cal);

    let temp = `
    Your Daily Calorie Intake is ${cal}<br>
    You will Need ${Protein}g of Protein.<br>
    You will Need ${Carb}g of Carbs.<br>
    You will Need ${Fat}g of Fat.<br>`
    // chatArea.insertAdjacentHTML("beforeend", temp);
    return temp;
}

function Loss(cal)
{
    cal -= 500;
    Protein = parseInt((cal * 0.5) / 4) ;
    Carb = parseInt((cal * 0.2) / 4) ;
    Fat = parseInt((cal * 0.3) / 9) ;
    perMealCal(cal);

    let temp = `
    Your Daily Calorie Intake is ${cal}<br>
    You will Need ${Protein}g of Protein.<br>
    You will Need ${Carb}g of Carbs.<br>
    You will Need ${Fat}g of Fat.<br>`
    // chatArea.insertAdjacentHTML("beforeend", temp);
    return temp;
}

function perMealCal(cal)
{
    bc = cal * 0.18;
    lc = cal * 0.35;
    dc = cal * 0.27;
    bwc = cal * 0.1;
    awc = cal * 0.1;

    bt.innerHTML = bc;
    lt.innerHTML = lc;
    dt.innerHTML = dc;
    bwt.innerHTML = bwc;
    awt.innerHTML = awc;

}

function list(m)
{
    var data = "foodtype="+ft+"&allergy="+ag+"&disease="+de+"&meal="+m;
    $.ajax({
        url: "getList.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        let temp = `<div class="botChat">${result}</div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
        scrollDown();
    }
    });
}

// function product(no, num, qn)
// {
//     var data = "no="+no+"&num="+num;
//     $.ajax({
        
//         url: "details.php",
//         data: data,
//         type: "POST",
//     success:function(result)
//     {
//         Quiz[qn] = result;
//     }
//     });
// }

function breakfast1(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        b1.innerHTML = arr[1];
        bpv1 = parseFloat(arr[2]);
        bcv1 = parseFloat(arr[3]);
        bfv1 = parseFloat(arr[4]);
        bu1.innerHTML = arr[5];
        bv1 = parseFloat(arr[6]);
        bq1.innerHTML = bv1;
        bp1.innerHTML = bpv1;
        bc1.innerHTML = bcv1;
        bf1.innerHTML = bfv1;
    }
    });
}

function breakfast2(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        b2.innerHTML = arr[1];
        bpv2 = parseFloat(arr[2]);
        bcv2 = parseFloat(arr[3]);
        bfv2 = parseFloat(arr[4]);
        bu2.innerHTML = arr[5];
        bqv2 = parseFloat(arr[6]);
        bq2.innerHTML = bv2;
        bp2.innerHTML = bpv2;
        bc2.innerHTML = bcv2;
        bf2.innerHTML = bfv2;
    }
    });
}

function breakfast3(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        b3.innerHTML = arr[1];
        bpv3 = parseFloat(arr[2]);
        bcv3 = parseFloat(arr[3]);
        bfv3 = parseFloat(arr[4]);
        bu3.innerHTML = arr[5];
        bqv3 = parseFloat(arr[6]);
        bq3.innerHTML = bv3;
        bp3.innerHTML = bpv3;
        bc3.innerHTML = bcv3;
        bf3.innerHTML = bfv3;
    }
    });
}

function lunch1(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        l1.innerHTML = arr[1];
        lpv1 = parseFloat(arr[2]);
        lcv1 = parseFloat(arr[3]);
        lfv1 = parseFloat(arr[4]);
        luv1 = arr[5];
        lqv1 = parseFloat(arr[6]);
        lq1.innerHTML = lv1;
        lp1.innerHTML = lpv1;
        lc1.innerHTML = lcv1;
        lf1.innerHTML = lfv1;
        
    }
    });
}

function lunch2(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        l2.innerHTML = arr[1];
        lpv2 = parseFloat(arr[2]);
        lcv2 = parseFloat(arr[3]);
        lfv2 = parseFloat(arr[4]);
        lu2.innerHTML = arr[5];
        lqv2 = parseFloat(arr[6]);
        lq2.innerHTML = lv2;
        lp2.innerHTML = lpv2;
        lc2.innerHTML = lcv2;
        lf2.innerHTML = lfv2;
    }
    });
}

function lunch3(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        l3.innerHTML = arr[1];
        lpv3 = parseFloat(arr[2]);
        lcv3 = parseFloat(arr[3]);
        lfv3 = parseFloat(arr[4]);
        lu3.innerHTML = arr[5];
        lqv3 = parseFloat(arr[6]);
        lq3.innerHTML = lv3;
        lp3.innerHTML = lpv3;
        lc3.innerHTML = lcv3;
        lf3.innerHTML = lfv3;
    }
    });
}

function lunch4(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        l4.innerHTML = arr[1];
        lpv4 = parseFloat(arr[2]);
        lcv4 = parseFloat(arr[3]);
        lfv4 = parseFloat(arr[4]);
        lu4.innerHTML = arr[5];
        lqv4 = parseFloat(arr[6]);
        lq4.innerHTML = lv4;
        lp4.innerHTML = lpv4;
        lc4.innerHTML = lcv4;
        lf4.innerHTML = lfv4;
    }
    });
}

function dinner1(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        d1.innerHTML = arr[1];
        dpv1 = parseFloat(arr[2]);
        dcv1 = parseFloat(arr[3]);
        dfv1 = parseFloat(arr[4]);
        du1.innerHTML = arr[5];
        dqv1 = parseFloat(arr[6]);
        dq1.innerHTML = dv1;
        dp1.innerHTML = dpv1;
        dc1.innerHTML = dcv1;
        df1.innerHTML = dfv1;
    }
    });
}

function dinner2(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        d2.innerHTML = arr[1];
        dpv2 = parseFloat(arr[2]);
        dcv2 = parseFloat(arr[3]);
        dfv2 = parseFloat(arr[4]);
        du2.innerHTML = arr[5];
        dqv2 = parseFloat(arr[6]);
        dq2.innerHTML = dv2;
        dp2.innerHTML = dpv2;
        dc2.innerHTML = dcv2;
        df2.innerHTML = dfv2;
    }
    });
}

function dinner3(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        d3.innerHTML = arr[1];
        dpv3 = parseFloat(arr[2]);
        dcv3 = parseFloat(arr[3]);
        dfv3 = parseFloat(arr[4]);
        du3.innerHTML = arr[5];
        dqv3 = parseFloat(arr[6]);
        dq3.innerHTML = dv3;
        dp3.innerHTML = dpv3;
        dc3.innerHTML = dcv3;
        df3.innerHTML = dfv3;
    }
    });
}

function dinner4(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        d4.innerHTML = arr[1];
        dpv4 = parseFloat(arr[2]);
        dcv4 = parseFloat(arr[3]);
        dfv4 = parseFloat(arr[4]);
        du4.innerHTML = arr[5];
        dqv4 = parseFloat(arr[6]);
        dq4.innerHTML = dv4;
        dp4.innerHTML = dpv4;
        dc4.innerHTML = dcv4;
        df4.innerHTML = dfv4;
    }
    });
}

function beforew1(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        bw1.innerHTML = arr[1];
        bwpv1 = parseFloat(arr[2]);
        bwcv1 = parseFloat(arr[3]);
        bwfv1 = parseFloat(arr[4]);
        bwu1.innerHTML = arr[5];
        bwqv1 = parseFloat(arr[6]);
        bwq1.innerHTML = bwv1;
        bwp1.innerHTML = bwpv1;
        bwc1.innerHTML = bwcv1;
        bwf1.innerHTML = bwfv1;
    }
    });
}

function beforew2(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        bw2.innerHTML = arr[1];
        bwpv2 = parseFloat(arr[2]);
        bwcv2 = parseFloat(arr[3]);
        bwfv2 = parseFloat(arr[4]);
        bwu2.innerHTML = arr[5];
        bwqv2 = parseFloat(arr[6]);
        bwq2.innerHTML = bwv2;
        bwp2.innerHTML = bwpv2;
        bwc2.innerHTML = bwcv2;
        bwf2.innerHTML = bwfv2;
    }
    });
}

function afterw1(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        aw1.innerHTML = arr[1];
        awpv1 = parseFloat(arr[2]);
        awcv1 = parseFloat(arr[3]);
        awfv1 = parseFloat(arr[4]);
        awu1.innerHTML = arr[5];
        awqv1 = parseFloat(arr[6]);
        awq1.innerHTML = awv1;
        awp1.innerHTML = awpv1;
        awc1.innerHTML = awcv1;
        awf1.innerHTML = awfv1;
    }
    });
}

function afterw2(no)
{
    var data = "no="+no;
    $.ajax({
        
        url: "details.php",
        data: data,
        type: "POST",
    success:function(result)
    {
        var arr = result.split("_");
        aw2.innerHTML = arr[1];
        awpv2 = parseFloat(arr[2]);
        awcv2 = parseFloat(arr[3]);
        awfv2 = parseFloat(arr[4]);
        awu2.innerHTML = arr[5];
        awqv2 = parseFloat(arr[6]);
        awq2.innerHTML = awv2;
        awp2.innerHTML = awpv2;
        awc2.innerHTML = awcv2;
        awf2.innerHTML = awfv2;
    }
    });
}




function clientdata(username, password)
{
    var data = "username="+username+"&password="+password;
    $.ajax({
        
        url: "clientdata.php",
        data: data,
        type: "POST",
    // success:function(result)
    // {
    //     alert(result);
    // }
    });
}


function report()
{
    var rep = `
    Your Data :<br>
    Name = ${Quiz[0]}<br>
    Gender = ${Quiz[1]}<br>
    Age = ${Quiz[2]}<br>
    Heigth = ${Quiz[3]}<br>
    Weigth = ${Quiz[4]}<br>
    Activity Rate = ${Quiz[5]}<br><br>
    
    Based on above values,<br>
    Here is your Calorie Count:<br><br>
    ${Quiz[6]}
    <br>
    BreakFast:<br>
    ${Quiz[11]} ${Quiz[12]} ${Quiz[13]}<br>

    Lunch:<br>
    ${Quiz[15]} ${Quiz[16]} ${Quiz[17]} ${Quiz[18]}<br>

    Dinner:<br>
    ${Quiz[20]} ${Quiz[21]} ${Quiz[22]} ${Quiz[23]}<br>

    Before Workout:<br>
    ${Quiz[25]} ${Quiz[26]}<br>

    After Workout:<br>
    ${Quiz[28]} ${Quiz[29]}<br>

    `;

    let temp = `<div class="botChat">${rep}</div>`
    chatArea.insertAdjacentHTML("beforeend", temp);
}

function bs()
{
    bsv = parseFloat(bp1.innerHTML) + parseFloat(bc1.innerHTML) + parseFloat(bf1.innerHTML) + parseFloat(bp2.innerHTML) + parseFloat(bc2.innerHTML) + parseFloat(bf2.innerHTML) + parseFloat(bp3.innerHTML) + parseFloat(bc3.innerHTML) + parseFloat(bf3.innerHTML);
    bsum.innerHTML = parseInt(bsv);
}


ba1.addEventListener("click", ()=>{
    
    if(bsv <= 1000)
    {
        bv1++;
        bq1.innerHTML = bv1;
        bp1.innerHTML = (bpv1 * bv1).toFixed(1);
        bc1.innerHTML = (bcv1 * bv1).toFixed(1);
        bf1.innerHTML = (bfv1 * bv1).toFixed(1);
        bs();
        if(bsv > 1000)
        {
            var d = bsv - 1000;
            bp1.innerHTML = (parseFloat(bp1.innerHTML) - parseFloat(d * 0.235)).toFixed(1);
            bc1.innerHTML = (parseFloat(bc1.innerHTML) - parseFloat(d * 0.235)).toFixed(1);
            bf1.innerHTML = (parseFloat(bf1.innerHTML) - parseFloat(d * 0.53)).toFixed(1);
            bs();
        }
    }
    
});


ba2.addEventListener("click", ()=>{
    
    if(bsv <= 1000)
    {
        bv2++;
        bq2.innerHTML = bv2;
        bp2.innerHTML = (bpv2 * bv2).toFixed(1);
        bc2.innerHTML = (bcv2 * bv2).toFixed(1);
        bf2.innerHTML = (bfv2 * bv2).toFixed(1);
        bs();
        if(bsv > 1000)
        {
            var d = bsv - 1000;
            bp2.innerHTML = (parseInt(bp2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bc2.innerHTML = (parseInt(bc2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bf2.innerHTML = (parseInt(bf2.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            bs();
        }
    }
});


ba3.addEventListener("click", ()=>{
    
    if(bsv <= 1000)
    {
        bv3++;
        bq3.innerHTML = bv3;
        bp3.innerHTML = (bpv3 * bv3).toFixed(1);
        bc3.innerHTML = (bcv3 * bv3).toFixed(1);
        bf3.innerHTML = (bfv3 * bv3).toFixed(1);
        bs();
        if(bsv > 1000)
        {
            var d = bsv - 1000;
            bp3.innerHTML = (parseInt(bp3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bc3.innerHTML = (parseInt(bc3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bf3.innerHTML = (parseInt(bf3.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            bs();
        }
    }
});

//-----------------------------------------------------------------------------------

bm1.addEventListener("click", ()=>{
    
    bv1--;
    bq1.innerHTML = bv1;
    bp1.innerHTML = (bpv1 * bv1).toFixed(1);
    bc1.innerHTML = (bcv1 * bv1).toFixed(1);
    bf1.innerHTML = (bfv1 * bv1).toFixed(1);
    bs();
    if(bsv > 1000)
    {
        var d = bsv - 1000;
        bp1.innerHTML = (parseInt(bp1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
        bc1.innerHTML = (parseInt(bc1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
        bf1.innerHTML = (parseInt(bf1.innerHTML) - parseInt(d * 0.53)).toFixed(1);
        bs();
    }
});


bm2.addEventListener("click", ()=>{

    bv2--;
    bq2.innerHTML = bv2;
    bp2.innerHTML = (bpv2 * bv2).toFixed(1);
    bc2.innerHTML = (bcv2 * bv2).toFixed(1);
    bf2.innerHTML = (bfv2 * bv2).toFixed(1);
    bs();
    if(bsv > 1000)
    {
        var d = bsv - 1000;
        bp2.innerHTML = (parseInt(bp2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
        bc2.innerHTML = (parseInt(bc2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
        bf2.innerHTML = (parseInt(bf2.innerHTML) - parseInt(d * 0.53)).toFixed(1);
        bs();
    }
});


bm3.addEventListener("click", ()=>{

    bv3--;
    bq3.innerHTML = bv3;
    bp3.innerHTML = (bpv3 * bv3).toFixed(1);
    bc3.innerHTML = (bcv3 * bv3).toFixed(1);
    bf3.innerHTML = (bfv3 * bv3).toFixed(1);
    bs();
    if(bsv > 1000)
    {
        var d = bsv - 1000;
        bp3.innerHTML = (parseInt(bp3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
        bc3.innerHTML = (parseInt(bc3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
        bf3.innerHTML = (parseInt(bf3.innerHTML) - parseInt(d * 0.53)).toFixed(1);
        bs();
    }
});
// -------------------------------------------------------------------------------------------------

function ls()
{
    lsv = parseFloat(lp1.innerHTML) + parseFloat(lc1.innerHTML) + parseFloat(lf1.innerHTML) + parseFloat(lp2.innerHTML) + parseFloat(lc2.innerHTML) + parseFloat(lf2.innerHTML) + parseFloat(lp3.innerHTML) + parseFloat(lc3.innerHTML) + parseFloat(lf3.innerHTML) + parseFloat(lp4.innerHTML) + parseFloat(lc4.innerHTML) + parseFloat(lf4.innerHTML);
    lsum.innerHTML = parseInt(lsv);
}


la1.addEventListener("click", ()=>{

    if(lsv <= 1000)
    {
        lv1++;
        lq1.innerHTML = lv1;
        lp1.innerHTML = (lpv1 * lv1).toFixed(1);
        lc1.innerHTML = (lcv1 * lv1).toFixed(1);
        lf1.innerHTML = (lfv1 * lv1).toFixed(1);
        ls();
        if(lsv > 1000)
        {
            var d = lsv - 1000;
            lp1.innerHTML = (parseInt(lp1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lc1.innerHTML = (parseInt(lc1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lf1.innerHTML = (parseInt(lf1.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ls();
        }
    }

});


la2.addEventListener("click", ()=>{
    
    if(lsv <= 1000)
    {
        lv2++;
        lq2.innerHTML = lv2;
        lp2.innerHTML = (lpv2 * lv2).toFixed(1);
        lc2.innerHTML = (lcv2 * lv2).toFixed(1);
        lf2.innerHTML = (lfv2 * lv2).toFixed(1);
        ls();
        if(lsv > 1000)
        {
            var d = lsv - 1000;
            lp2.innerHTML = (parseInt(lp2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lc2.innerHTML = (parseInt(lc2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lf2.innerHTML = (parseInt(lf2.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ls();
        }
    }
});


la3.addEventListener("click", ()=>{
    
    if(lsv <= 1000)
    {
        lv3++;
        lq3.innerHTML = lv3;
        lp3.innerHTML = (lpv3 * lv3).toFixed(1);
        lc3.innerHTML = (lcv3 * lv3).toFixed(1);
        lf3.innerHTML = (lfv3 * lv3).toFixed(1);
        ls();
        if(lsv > 1000)
        {
            var d = lsv - 1000;
            lp3.innerHTML = (parseInt(lp3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lc3.innerHTML = (parseInt(lc3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lf3.innerHTML = (parseInt(lf3.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ls();
        }
    }
});


la4.addEventListener("click", ()=>{
    
    if(lsv <= 1000)
    {
        lv4++;
        lq4.innerHTML = lv4;
        lp4.innerHTML = (lpv4 * lv4).toFixed(1);
        lc4.innerHTML = (lcv4 * lv4).toFixed(1);
        lf4.innerHTML = (lfv4 * lv4).toFixed(1);
        ls();
        if(lsv > 1000)
        {
            var d = lsv - 1000;
            lp4.innerHTML = (parseInt(lp4.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lc4.innerHTML = (parseInt(lc4.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lf4.innerHTML = (parseInt(lf4.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ls();
        }
    }
});

//-----------------------------------------------------------------------------------

lm1.addEventListener("click", ()=>{
    
        lv1--;
        lq1.innerHTML = lv1;
        lp1.innerHTML = (lpv1 * lv1).toFixed(1);
        lc1.innerHTML = (lcv1 * lv1).toFixed(1);
        lf1.innerHTML = (lfv1 * lv1).toFixed(1);
        ls();
        if(lsv > 1000)
        {
            var d = lsv - 1000;
            lp1.innerHTML = (parseInt(lp1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lc1.innerHTML = (parseInt(lc1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lf1.innerHTML = (parseInt(lf1.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ls();
        }
});


lm2.addEventListener("click", ()=>{
    
        lv2--;
        lq2.innerHTML = lv2;
        lp2.innerHTML = (lpv2 * lv2).toFixed(1);
        lc2.innerHTML = (lcv2 * lv2).toFixed(1);
        lf2.innerHTML = (lfv2 * lv2).toFixed(1);
        ls();
        if(lsv > 1000)
        {
            var d = lsv - 1000;
            lp2.innerHTML = (parseInt(lp2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lc2.innerHTML = (parseInt(lc2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lf2.innerHTML = (parseInt(lf2.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ls();
        }
});


lm3.addEventListener("click", ()=>{
    
        lv3--;
        lq3.innerHTML = lv3;
        lp3.innerHTML = (lpv3 * lv3).toFixed(1);
        lc3.innerHTML = (lcv3 * lv3).toFixed(1);
        lf3.innerHTML = (lfv3 * lv3).toFixed(1);
        ls();
        if(lsv > 1000)
        {
            var d = lsv - 1000;
            lp3.innerHTML = (parseInt(lp3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lc3.innerHTML = (parseInt(lc3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lf3.innerHTML = (parseInt(lf3.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ls();
        }
});


lm4.addEventListener("click", ()=>{
    
    lv4--;
    lq4.innerHTML = lv4;
    lp4.innerHTML = (lpv4 * lv4).toFixed(1);
    lc4.innerHTML = (lcv4 * lv4).toFixed(1);
    lf4.innerHTML = (lfv4 * lv4).toFixed(1);
    ls();
    if(lsv > 1000)
    {
        var d = lsv - 1000;
        lp4.innerHTML = (parseInt(lp4.innerHTML) - parseInt(d * 0.235)).toFixed(1);
        lc4.innerHTML = (parseInt(lc4.innerHTML) - parseInt(d * 0.235)).toFixed(1);
        lf4.innerHTML = (parseInt(lf4.innerHTML) - parseInt(d * 0.53)).toFixed(1);
        ls();
    }
});


function ds()
{
    dsv = parseFloat(dp1.innerHTML) + parseFloat(dc1.innerHTML) + parseFloat(df1.innerHTML) + parseFloat(dp2.innerHTML) + parseFloat(dc2.innerHTML) + parseFloat(df2.innerHTML) + parseFloat(dp3.innerHTML) + parseFloat(dc3.innerHTML) + parseFloat(df3.innerHTML) + parseFloat(dp4.innerHTML) + parseFloat(dc4.innerHTML) + parseFloat(df4.innerHTML);
    dsum.innerHTML = parseInt(dsv);
}


da1.addEventListener("click", ()=>{

    if(dsv <= 1000)
    {
        dv1++;
        dq1.innerHTML = dv1;
        dp1.innerHTML = (dpv1 * dv1).toFixed(1);
        dc1.innerHTML = (dcv1 * dv1).toFixed(1);
        df1.innerHTML = (dfv1 * dv1).toFixed(1);
        ds();
        if(dsv > 1000)
        {
            var d = dsv - 1000;
            dp1.innerHTML = (parseInt(dp1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            dc1.innerHTML = (parseInt(dc1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            df1.innerHTML = (parseInt(df1.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ds();
        }
    }

});


da2.addEventListener("click", ()=>{
    
    if(dsv <= 1000)
    {
        dv2++;
        dq2.innerHTML = dv2;
        dp2.innerHTML = (dpv2 * dv2).toFixed(1);
        dc2.innerHTML = (dcv2 * dv2).toFixed(1);
        df2.innerHTML = (dfv2 * dv2).toFixed(1);
        ds();
        if(dsv > 1000)
        {
            var d = dsv - 1000;
            dp2.innerHTML = (parseInt(dp2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            dc2.innerHTML = (parseInt(dc2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            df2.innerHTML = (parseInt(df2.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ds();
        }
    }
});


da3.addEventListener("click", ()=>{
    
    if(dsv <= 1000)
    {
        dv3++;
        dq3.innerHTML = dv3;
        dp3.innerHTML = (dpv3 * dv3).toFixed(1);
        dc3.innerHTML = (dcv3 * dv3).toFixed(1);
        df3.innerHTML = (dfv3 * dv3).toFixed(1);
        ds();
        if(dsv > 1000)
        {
            var d = dsv - 1000;
            dp3.innerHTML = (parseInt(dp3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            dc3.innerHTML = (parseInt(dc3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            df3.innerHTML = (parseInt(df3.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ds();
        }
    }
});


da4.addEventListener("click", ()=>{
    
    if(dsv <= 1000)
    {
        dv4++;
        dq4.innerHTML = dv4;
        dp4.innerHTML = (dpv4 * dv4).toFixed(1);
        dc4.innerHTML = (dcv4 * dv4).toFixed(1);
        df4.innerHTML = (dfv4 * dv4).toFixed(1);
        ds();
        if(dsv > 1000)
        {
            var d = dsv - 1000;
            dp4.innerHTML = (parseInt(dp4.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            dc4.innerHTML = (parseInt(dc4.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            df4.innerHTML = (parseInt(df4.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ds();
        }
    }
});

//-----------------------------------------------------------------------------------

dm1.addEventListener("click", ()=>{
    
        dv1--;
        dq1.innerHTML = dv1;
        dp1.innerHTML = (dpv1 * dv1).toFixed(1);
        dc1.innerHTML = (dcv1 * dv1).toFixed(1);
        df1.innerHTML = (dfv1 * dv1).toFixed(1);
        ds();
        if(dsv > 1000)
        {
            var d = dsv - 1000;
            lp1.innerHTML = (parseInt(lp1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lc1.innerHTML = (parseInt(lc1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            lf1.innerHTML = (parseInt(lf1.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ls();
        }
});


dm2.addEventListener("click", ()=>{
    
        dv2--;
        dq2.innerHTML = dv2;
        dp2.innerHTML = (dpv2 * dv2).toFixed(1);
        dc2.innerHTML = (dcv2 * dv2).toFixed(1);
        df2.innerHTML = (dfv2 * dv2).toFixed(1);
        ds();
        if(dsv > 1000)
        {
            var d = dsv - 1000;
            dp2.innerHTML = (parseInt(dp2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            dc2.innerHTML = (parseInt(dc2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            df2.innerHTML = (parseInt(df2.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ds();
        }
});


dm3.addEventListener("click", ()=>{
    
        dv3--;
        dq3.innerHTML = dv3;
        dp3.innerHTML = (dpv3 * dv3).toFixed(1);
        dc3.innerHTML = (dcv3 * dv3).toFixed(1);
        df3.innerHTML = (dfv3 * dv3).toFixed(1);
        ds();
        if(dsv > 1000)
        {
            var d = dsv - 1000;
            dp3.innerHTML = (parseInt(dp3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            dc3.innerHTML = (parseInt(dc3.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            df3.innerHTML = (parseInt(df3.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            ds();
        }
});


dm4.addEventListener("click", ()=>{
    
    dv4--;
    dq4.innerHTML = dv4;
    dp4.innerHTML = (dpv4 * dv4).toFixed(1);
    dc4.innerHTML = (dcv4 * dv4).toFixed(1);
    df4.innerHTML = (dfv4 * dv4).toFixed(1);
    ds();
    if(dsv > 1000)
    {
        var d = dsv - 1000;
        dp4.innerHTML = (parseInt(dp4.innerHTML) - parseInt(d * 0.235)).toFixed(1);
        dc4.innerHTML = (parseInt(dc4.innerHTML) - parseInt(d * 0.235)).toFixed(1);
        df4.innerHTML = (parseInt(df4.innerHTML) - parseInt(d * 0.53)).toFixed(1);
        ds();
    }
});


function bws()
{
    bwsv = parseFloat(bwp1.innerHTML) + parseFloat(bwc1.innerHTML) + parseFloat(bwf1.innerHTML) + parseFloat(bwp2.innerHTML) + parseFloat(bwc2.innerHTML) + parseFloat(bwf2.innerHTML);
    bwsum.innerHTML = parseInt(bwsv);
}


bwa1.addEventListener("click", ()=>{

    if(bwsv <= 1000)
    {
        bwv1++;
        bwq1.innerHTML = bwv1;
        bwp1.innerHTML = (bwpv1 * bwv1).toFixed(1);
        bwc1.innerHTML = (bwcv1 * bwv1).toFixed(1);
        bwf1.innerHTML = (bwfv1 * bwv1).toFixed(1);
        bws();
        if(bwsv > 1000)
        {
            var d = bwsv - 1000;
            bwp1.innerHTML = (parseInt(bwp1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bwc1.innerHTML = (parseInt(bwc1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bwf1.innerHTML = (parseInt(bwf1.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            bws();
        }
    }

});


bwa2.addEventListener("click", ()=>{
    
    if(bwsv <= 1000)
    {
        bwv2++;
        bwq2.innerHTML = bwv2;
        bwp2.innerHTML = (bwpv2 * bwv2).toFixed(1);
        bwc2.innerHTML = (bwcv2 * bwv2).toFixed(1);
        bwf2.innerHTML = (bwfv2 * bwv2).toFixed(1);
        bws();
        if(bwsv > 1000)
        {
            var d = bwsv - 1000;
            bwp2.innerHTML = (parseInt(bwp2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bwc2.innerHTML = (parseInt(bwc2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bwf2.innerHTML = (parseInt(bwf2.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            bws();
        }
    }
});

//-----------------------------------------------------------------------------------

bwm1.addEventListener("click", ()=>{
    
        bwv1--;
        bwq1.innerHTML = bwv1;
        bwp1.innerHTML = (bwpv1 * bwv1).toFixed(1);
        bwc1.innerHTML = (bwcv1 * bwv1).toFixed(1);
        bwf1.innerHTML = (bwfv1 * bwv1).toFixed(1);
        bws();
        if(bwsv > 1000)
        {
            var d = bwsv - 1000;
            bwp1.innerHTML = (parseInt(bwp1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bwc1.innerHTML = (parseInt(bwc1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bwf1.innerHTML = (parseInt(bwf1.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            bws();
        }
});


bwm2.addEventListener("click", ()=>{
    
        bwv2--;
        bwq2.innerHTML = bwv2;
        bwp2.innerHTML = (bwpv2 * bwv2).toFixed(1);
        bwc2.innerHTML = (bwcv2 * bwv2).toFixed(1);
        bwf2.innerHTML = (bwfv2 * bwv2).toFixed(1);
        bws();
        if(bwsv > 1000)
        {
            var d = bwsv - 1000;
            bwp2.innerHTML = (parseInt(bwp2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bwc2.innerHTML = (parseInt(bwc2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            bwf2.innerHTML = (parseInt(bwf2.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            bws();
        }
});


function aws()
{
    awsv = parseFloat(awp1.innerHTML) + parseFloat(awc1.innerHTML) + parseFloat(awf1.innerHTML) + parseFloat(awp2.innerHTML) + parseFloat(awc2.innerHTML) + parseFloat(awf2.innerHTML);
    awsum.innerHTML = parseInt(awsv);
}


awa1.addEventListener("click", ()=>{

    if(awsv <= 1000)
    {
        awv1++;
        awq1.innerHTML = awv1;
        awp1.innerHTML = (awpv1 * awv1).toFixed(1);
        awc1.innerHTML = (awcv1 * awv1).toFixed(1);
        awf1.innerHTML = (awfv1 * awv1).toFixed(1);
        aws();
        if(awsv > 1000)
        {
            var d = awsv - 1000;
            awp1.innerHTML = (parseInt(awp1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            awc1.innerHTML = (parseInt(awc1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            awf1.innerHTML = (parseInt(awf1.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            aws();
        }
    }

});


awa2.addEventListener("click", ()=>{
    
    if(awsv <= 1000)
    {
        awv2++;
        awq2.innerHTML = awv2;
        awp2.innerHTML = (awpv2 * awv2).toFixed(1);
        awc2.innerHTML = (awcv2 * awv2).toFixed(1);
        awf2.innerHTML = (awfv2 * awv2).toFixed(1);
        aws();
        if(awsv > 1000)
        {
            var d = awsv - 1000;
            awp2.innerHTML = (parseInt(awp2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            awc2.innerHTML = (parseInt(awc2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            awf2.innerHTML = (parseInt(awf2.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            aws();
        }
    }
});

//-----------------------------------------------------------------------------------

awm1.addEventListener("click", ()=>{
    
        awv1--;
        awq1.innerHTML = awv1;
        awp1.innerHTML = (awpv1 * awv1).toFixed(1);
        awc1.innerHTML = (awcv1 * awv1).toFixed(1);
        awf1.innerHTML = (awfv1 * awv1).toFixed(1);
        aws();
        if(awsv > 1000)
        {
            var d = awsv - 1000;
            awp1.innerHTML = (parseInt(awp1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            awc1.innerHTML = (parseInt(awc1.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            awf1.innerHTML = (parseInt(awf1.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            aws();
        }
});


awm2.addEventListener("click", ()=>{
    
        awv2--;
        awq2.innerHTML = awv2;
        awp2.innerHTML = (awpv2 * awv2).toFixed(1);
        awc2.innerHTML = (awcv2 * awv2).toFixed(1);
        awf2.innerHTML = (awfv2 * awv2).toFixed(1);
        aws();
        if(awsv > 1000)
        {
            var d = awsv - 1000;
            awp2.innerHTML = (parseInt(awp2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            awc2.innerHTML = (parseInt(awc2.innerHTML) - parseInt(d * 0.235)).toFixed(1);
            awf2.innerHTML = (parseInt(awf2.innerHTML) - parseInt(d * 0.53)).toFixed(1);
            aws();
        }
});

    











