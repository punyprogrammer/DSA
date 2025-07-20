/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if(n>4800) return 1.0;
    // dp state [soupA,soupB]
    const dp =  new Map();
    function solve(soupALeft,soupBLeft){
        const compositeKey = `${soupALeft}_${soupBLeft}`;
        // if B becomes empty first return 0.0
        if(soupALeft && !soupBLeft) return 0.0;
        // if both become empty simulatanously
        if(!soupALeft && !soupBLeft) return 0.5;
        // if a becomes empty firts
        if(!soupALeft && soupBLeft) return 1.0;
        if(dp.has(compositeKey)) return dp.get(compositeKey);

        let totalProb = 0;
        totalProb += solve(Math.max(0,soupALeft - 4),soupBLeft)
        totalProb += solve(Math.max(0,soupALeft - 3),Math.max(0,soupBLeft - 1));
        totalProb += solve(Math.max(0,soupALeft - 2),Math.max(0,soupBLeft - 2));
        totalProb += solve(Math.max(0,soupALeft - 1),Math.max(0,soupBLeft - 3));
        totalProb/=4;
        dp.set(compositeKey,totalProb);
        return totalProb;
    }
    return solve(n/25,n/25);
};
