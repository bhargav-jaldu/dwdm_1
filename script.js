    let n = prompt('Enter number of paris: ')
        const arr = [];
        for(let i=0;i<=n;i++) {
            alert("Enter number of positives and negatives: ");
            let x= prompt("Positives: ")
            let y= prompt("negatives: ")
            arr.push(parseInt(x));
            arr.push(parseInt(y));
        }

        // ArrayList<Double> entropy = new ArrayList<>();
        // document.write("<h1>ARRAY IS: </h1>", arr)
        const entropy = [];

        for(let i=0;i<arr.length;i=i+2){
            let u=(arr[i]+arr[i+1]);
            let y=arr[i]/u;
            let a=arr[i+1]/u;
            let e=(-y*(Math.log(y) / Math.log(2))-a*(Math.log(a) / Math.log(2)));
            //System.out.println("e"+);
            console.log(u)
            entropy.push(e);

        }

        document.write("<div class='container'> <h1>Entropy values are: </h1> ");

        for (let i = 0; i < entropy.length; i++) {
            // System.out.println(entropy[i) + " ");
            document.write(entropy[i] + " ");
            document.write("<br>");
        }

        // ArrayList<Double> ie1 = new ArrayList<>();
        const ie1 = [];

        let j=1;
        let w=0;
        let i=0;
        while(i<arr.length){
            if(i==0){
                w=(arr[i]+arr[i+1]);
                i=i+2;
            }

            else{
                let x=(arr[i]+arr[i+1]);
                let y=(x/w)*entropy[j];
                ie1.push(y);
                j=j+1;
                i=i+2;
            }
        }

        document. write("\n");

        document.write("<h1>Information values individual: </h2>");
        document.write("\n");

        let answer=0;

        for (let i1 = 0; i1 < ie1.length; i1=i1+1) {
            document.write(ie1[i1] + " ");
        }
        document.write('\n');

        document.write("<h1>Total Information: </h2> ");
        for (let i1 = 0; i1 < ie1.length; i1=i1+1) {
            let d1 = ie1[i1];
            if(isNaN(d1)){

            }
            else{
                answer=answer+ie1[i1];
            }
        }
        document.write(answer);

        document.write("<h1>Gain: </h1>  ");
        document.write(`${entropy[0]-answer} </div>`);
