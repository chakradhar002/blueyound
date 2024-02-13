

        function* fun() { 
            yield 10; 
            yield 20; 
            yield 30; 
        } 
        
        // Calling the Generate Function 
        let gen = fun(); 
        console.log(gen.next().value); 
        console.log(gen.next().value); 
        console.log(gen.next().value);
