{

    // Problem 5: Answer --->

    type Person = {
        name: string;
        age: number;
    }

    function getProperty<T, K extends keyof T>(person: T, key: K) { 
        
        return person[key];
        
    }

    // const person:Person = { name: "Alice", age: 30 };
    // console.log(getProperty(person, "name"));


}