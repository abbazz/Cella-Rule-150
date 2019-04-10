// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------
// Group GKS memberss: Abbas, Srikant, Yash
// FUN. Draw filled rect.
//This file contains the  logic for auto generation of cella rule 150

var mat = [];

function draw_rect( ctx, stroke, fill ) 
{stroke = stroke || 'orange';
    fill = fill || 'orange';
    ctx.save( );
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.rect(199,0,9,9);
	ctx.stroke();
    ctx.fill();
    ctx.restore( );
	

}

function cella150()
{
	// creating array of size 400 because of the grid size It can be made dynamic according to the grid size
	for(var i = 0; i<400; i++)
	{
		mat[i] = new Array(400);
	}
	// creating arrays of array of mat variable and initialize them to zero
	for (i = 0; i < 400; i++) {
        for (j = 0; j < 400; j++) {
            mat[i][j] = 0;
        }
    }
	//Setting the middle value of the first row to 1 for auto generation of code
	mat[0][200] = 1;
	
	for(var i = 1; i<400; i++)
	{
		for(var j = 0; j<400; j++)
		{
			var t1=0;
             if(j-1>=0){
              t1=mat[i-1][j-1]; // assigning j-1 value to temporary variable for testinf it against our rules of row i
             }
           var t2=0;
             if(j+1<400){
              t3=mat[i-1][j+1];  // assigning j-1 value to temporary variable for testinf it against our rules of row i
             }
			 t2= mat[i-1][j];  //assigning j value to temporary variable for testinf it against our rules of row i
			 
			 //testing the values to the rules and changing the values of mat[][] according to the cella150 rule
			 if (t1==1){
				 if(t2==t3)
				 {
					 mat[i][j]=1;
				 }
			 }else{
				if(t2!=t3){
					mat[i][j]=1;  
				}		    
			 }
		 
			}
			 
		}
		//rctx.restore();
	}



// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
	//===Calling cella function where the logic resides
	cella150();
	//Printing cells on grid accordingg to the generated output
	for(i=0;i<400;i=i+8){    
         for(j=0;j<400;j=j+8){
			 if(mat[i][j]==1){
              rctx.fillRect(j,i,8,8);
 			  //using size 8*8 for  proper pixel output on the grid
			 } 
		 }
	 }
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}
