---
layout: project
type: project
publish: false

title: A Simple Pathfinding Algorithm
languages: [C++, Qt4]
cover_image:

excerpt: "Using Dijkstra's algorithm to navigate obstacles."

github: "https://github.com/mclayton7/PathExplorationQt4"

sources: ["http://en.wikipedia.org/wiki/Dijkstra%27s_algorithm", "http://users.ece.gatech.edu/~riley/ece3090"]

author:
  name: Mac Clayton
  link: "http://macclayton.com"  
---

#Intro
[Pathfinding](http://en.wikipedia.org/wiki/Pathfinding)(also known as graph traversal) algorithms are used to find the shortest path between two points, while navigating obstacles (whether they be walls or roads).
They're found in many places, from navigation systems to AI in video games. The field was pioneered by [Edsger Dijkstra](http://en.wikipedia.org/wiki/Edsger_W._Dijkstra), who first published his graph search algorithm in 1956. His algorithm is often used in designing network routers. His research has spawned other algorithms like [A star](http://en.wikipedia.org/wiki/A*_search_algorithm). A* uses heuristics to improve performance by using a [best-first search](http://en.wikipedia.org/wiki/Best-first_search).


###The Algorithm [from Wikipedia]
1. Let the node at which we are starting be called the initial node. Let the distance of node Y be the distance from the initial node to Y. Dijkstra's algorithm will assign some initial distance values and will try to improve them step by step.
2. Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes.
3. Mark all nodes unvisited. Set the initial node as current. Create a set of the unvisited nodes called the unvisited set consisting of all the nodes.
4. For the current node, consider all of its unvisited neighbors and calculate their tentative distances. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one. For example, if the current node A is marked with a distance of 6, and the edge connecting it with a neighbor B has length 2, then the distance to B (through A) will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 then change it for 8. Otherwise, keep the current value.
5. When we are done considering all of the neighbors of the current node, mark the current node as visited and remove it from the unvisited set. A visited node will never be checked again.
6. If the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the unvisited set is infinity (when planning a complete traversal; occurs when there is no connection between the initial node and remaining unvisited nodes), then stop. The algorithm has finished.
7. Select the unvisited node that is marked with the smallest tentative distance, and set it as the new "current node" then go back to step 3.

#The Implementation
Using C++ and the Qt4 Library, we'll implement a variation of Dijstra's algorithm.

###Our Implementation:
First create...
Initialize the `pending` container with a single entry indicating the destination pixel (using the `Point` class), and a cost of zero to reach the destination from that point.
###Needed Variables:
* A `distance` vector that indicates how far each cube element is from the specified destination. All values should be initialized to "infinity", except for the destination, which should be zero. For this application, we'll use 10e10 to represent infinity.
* A `pending` container, which holds the cube elements for which we know a distance, but that distance may not yet be the shortest. We'll use a `multimap` for this container.

###While the `pending` container is NOT empty:

1. Get the first element from the `pending` container, and remove it. Define `thisDist` as the distance from the destination to the point defined in the element.
2. For each neighbor of this element, determine if the location is a valid avatar placement (make sure it doesn't touch or cover any obstacles). If it's not valid, ignore it.
3. Define `moveDist[i]` as the cost for a move to each of the 26 possible neighbors. The costs are either &radic;1, &radic;2, or &radic;3.
4. For each valid neighbor, calculate the distance from the destination pointto that neighbor: `neighborDist = thisDist + moveDist[i]`.
5. If `neighborDist` is *less than* the distance for that neighbor found in the global `distance` array, we have found a potential short path, and perform the following. If not, then ignore it.
    * Set the new shorter distance to theis neighbor in the global `distance` array.
    * Add this neighbor to the `pending` container. Remember that this container is *sorted*, using distance as the sort key. This will cause all neighbors of this to be checked later (checking the closest ones first). Keep in mind that this neighbor might already be in the `pending` container with a longer distance.
    * If the current element is the starting location, the pending loop terminates. Unless the starting location is *not valid*, this should always occur *before* the `pending` container is emptied.
6. At this point, the algorithm has finished and completely populated the `distance` container, with each element containing the explored cube elements and their shortest distance to the destination. The value is stored in `distance` for the starting point cube element/point is the minimum distance to the destination. There are likely to be many pixels that were never "visited", but they are known to not be of interest as they're not along the shortest path.

##Example output:
