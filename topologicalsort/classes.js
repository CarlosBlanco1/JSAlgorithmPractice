/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    const courseToPrereqs = new Map();
    const courses = new Array(numCourses).fill(0);
    const taken = [];

    for(let i = 0; i < numCourses; i++)
    {
        courseToPrereqs.set(i, []);
    }

    for(let i = 0; i < prerequisites.length; i++)
    {
        var course = prerequisites[i][0];
        var preCourse = prerequisites[i][1];

        courseToPrereqs.set(course, [...courseToPrereqs.get(course), preCourse]);
    }

    var DFS = function(course, courses, courseToPrereqs) {

        if(courses[course] == 2) return;

        if(courses[course] == 1)
        {
            hasCycle = true;
            return;
        }

        let preReqs = courseToPrereqs.get(course);

        for(let i = 0; i < preReqs.length; i++)
        {
            if(courses[preReqs[i]] != 2)
            {
                courses[course] = 1;
                DFS(preReqs[i], courses, courseToPrereqs);
            }
        }

        courses[course] = 2;
        taken.push(course);
    }

    var hasCycle = false;

    for(let i = 0; i < courses.length; i++)
    {
        DFS(i, courses, courseToPrereqs);
    }

    if(hasCycle) return false;

    return taken.length == numCourses;
};
