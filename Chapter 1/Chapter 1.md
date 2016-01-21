1.  Show that *a + b* can be less than *min(a,b).

    > True if *a and b* are both  < 0

2. Show that *a * b* can be less than *min(a,b)*.

    > True if *a and b* lie on opposite sides of 0 on the number line; i.e. *a > 0 and b < 0* or vice   versa.

3. Design/draw a road network with two points *a* and *b* such that the fastest route between *a* and *b* is not the shortest route.

    > Two points at the end of a horse-shoe shaped curve separated by water. Shortest route requires crossing the water while land route
nearly circumnavigates the curve.

4. Design/draw a road network with two points *a* and *b* such that the shortest route between *a* and *b* is not the route with the fewest turns.

    > A route with a staircase-function like route might be the shortest if it is the most direct access route. Other routes with fewer turns might require travelling redundant distances.
    
5. The knapsack problem is as follows: given a set of integers S={s1,s2,…,sn}, and a target number T, find a subset of S which adds up exactly to T. For example, there exists a subset within S={1,2,5,9,10} that adds up to T=22 but not T=23. Find counterexamples to each of the following algorithms for the knapsack problem. That is, giving an S and T such that the subset is selected using the algorithm does not leave the knapsack completely full, even though such a solution exists.

    - Put the elements of S in the knapsack in left to right order if they fit, i.e. the first-fit algorithm.
    
        > S = {1,2,3} T = 5        
    
    - Put the elements of S in the knapsack from smallest to largest, i.e. the best-fit algorithm.
        
        > S = {3,4,5} T = 9
        
    - Put the elements of S in the knapsack from largest to smallest.
        
        > S = {1,2,3} T = 4

6. The set cover problem is as follows: given a set of subsets S1,...,Sm of the universal set U={1,...,n}, find the smallest subset of subsets T⊂S such that ∪ti∈Tti=U. For example, there are the following subsets, S1={1,3,5}, S2={2,4}, S3={1,4}, and S4={2,5} The set cover would then be S1 and S2. Find a counterexample for the following algorithm: Select the largest subset for the cover, and then delete all its elements from the universal set. Repeat by adding the subset containing the largest number of uncovered elements until all are covered.

    > U = {1,2,3,4,5,6,7,8,9,10}
    
    > S1 = {4,5,6,7,8,9}
    
    > S2 = {5,6,7,8,10}
    
    > S3 = {1,2,3,4,5,6}
    
    > S4 = {1,3,5,7,9}
    
    > S5 = {2,4,6,8,10}
    
    > Optimal solution is S4 U S5; however the specified algorithm will choose one of S1, S2 or S5 and then go on to choose two more sets to get a full cover (leading to three set selections).
