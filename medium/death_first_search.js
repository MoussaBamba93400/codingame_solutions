// First using graph as a Data structure and Breadth first search for the algo 

var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways



class Graph
{	
	constructor(v)
	{
		this.V = v;
		this.result = ""; 
        this.gateWay = [];
		this.adj = new Array(v);
		for(let i = 0; i < v; i++)
			this.adj[i] = [];
	}
	
	
	addEdge(v, w)
	{
		this.adj[v].push(w);
	}


	
	BFS(s)
        {
            // Mark all the vertices as not visited(By default
            // set as false)
            let visited = new Array(this.V);
            for(let i = 0; i < this.V; i++)
                visited[i] = false;
             

             let toggle = true;   
            // Create a queue for BFS
            let queue=[];
             
            // Mark the current node as visited and enqueue it
            visited[s]=true;
            queue.push(s);
             
            while(queue.length>0)
            {
                // Dequeue a vertex from queue and print it
                s = queue[0];
              
                queue.shift();
                 
               
                this.adj[s].forEach((adjacent,i) => {
                    if(!visited[adjacent] && toggle)
                    {
                     
                        visited[adjacent]=true;
                        queue.push(adjacent)
                        
                        if(this.gateWay.includes(adjacent)) {
                            let id = this.adj[s].indexOf(adjacent);
							this.adj[s].splice(id, 1);
                            
						    let idGate = this.adj[adjacent].indexOf(s);
							this.adj[adjacent].splice(idGate, 1);
                            
                            
							this.result = s + " " + adjacent;
                           
                          

                            toggle = false;
						}                         
                            
                        
                    }
                });
            }
        }

    addGateWay(gate) {
         this.gateWay.push(gate)
    }


	
	
	
}


const graphe = new Graph(N);

for (let i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    const N2 = parseInt(inputs[1]);

    graphe.addEdge(N1,N2)
    graphe.addEdge(N2,N1)
}


for (let i = 0; i < E; i++) {
    const EI = parseInt(readline()); // the index of a gateway node
    graphe.addGateWay(EI)
}




while (true) {
    const SI = parseInt(readline()); // The index of the node on which the Bobnet agent is positioned this turn
    
    graphe.BFS(SI)
    
    // Example: 0 1 are the indices of the nodes you wish to sever the link between
    console.log(graphe.result);
   
}
