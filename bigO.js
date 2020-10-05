function exampleLogarithmic(n) {
    for (var i = 1; i < n; i=i*2) {
        console.log(i);
    }
}

exampleLogarithmic(100);

// Coefficient Rule: “Get Rid of Constants” (💯)
// If f(n) is O(g(n)) , then kf(n) is O(g(n)) , for any constant k>0.

// Sum Rule: “Add Big-Os Up” (➕)
// If f(n) is O(h(n)) and g(n) is O(p(n)) , then f(n)+g(n) is O(h(n)+p(n)).

// Product Rule: “Multiply Big-Os” (❌)
// If f(n) is O(h(n)) and g(n) is O(p(n)) , then f(n)g(n) is O(h(n)p(n))

// Polynomial Rule: “Big-O to the Power of k” (📈)
// If f(n) is a polynomial of degree k , then f(n) is O(n^k)

