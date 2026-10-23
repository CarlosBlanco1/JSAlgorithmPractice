/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {

    let coursesInOrder = new Set();

    let courseToPrerequisites = new Map();
    let taken = new Array(numCourses).fill(true);

    for(let i = 0; i < numCourses; i++)
    {
        courseToPrerequisites.set(i, []);
    }

    for(let i = 0; i < prerequisites.length; i++)
    {
        let c = prerequisites[i][0];
        let pr = prerequisites[i][1];

        taken[c] = false;
        courseToPrerequisites.get(c).push(pr);
    }

    for(let i = 0; i < numCourses; i++)
    {
        if(taken[i]) coursesInOrder.add(i);
    }

    let DFS = function(course, explored) {

        explored.add(course)
        let prs = courseToPrerequisites.get(course);

        for(const pr of prs)
        {
            if(explored.has(pr)) return;
            if(!taken[pr]) DFS(pr, explored);
            if(!taken[pr]) return;
        }

        coursesInOrder.add(course);
        explored.delete(course)
        taken[course] = true;
    }

    for(let i = 0; i < numCourses; i++)
    {
        DFS(i, new Set());
        if(!taken[i]) return [];
    }

    return Array.from(coursesInOrder);
};