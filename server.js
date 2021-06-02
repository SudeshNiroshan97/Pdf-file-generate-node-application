
   

	function Header()
	{
		//Put the watermark
		$this.SetFont('Arial','B',50);
		$this.SetTextColor(255,192,203);
		//$this.RotatedText(85,100,'P A I D',45);
	}

	function RotatedText($x, $y, $txt, $angle)
	{
		//Text rotated around its origin
		$this.Rotate($angle,$x,$y);
		$this.Text($x,$y,$txt);
		$this.Rotate(0);
	}


	function Footer()
	{
		//Position at 1.5 cm from bottom
		$this.SetY(-10);
		//Arial italic 8
		$this.SetFont('Arial','I',6);
		$this.SetTextColor(128);

		//Page number
	//	$this.Cell(0,10,'Page '.$this.PageNo().'/{nb}',0,0,'R');

	}


$pdf = new PDF();
$pdf.AliasNbPages();
$pdf.AddPage();

// Add a Unicode font (uses UTF-8)
//$pdf.AddFont('DejaVu','','tahoma.ttf',true);
//$pdf.SetFont('DejaVu','',10);

$pdf.line(200,35,200,286);//vate kotuva
$pdf.line(10,286,200,286);//vate kotuva
$pdf.line(10,286,10,10);//vate kotuva
$pdf.line(10,10,104,10);//vate kotuva

$pdf.line(104,98,104,10);//meda ira
$pdf.line(10,35,200,35);//tiras palamu ira
$pdf.line(10,60,200,60);//tiras devana ira
$pdf.line(10,77,200,77);//tiras tevana ira
$pdf.line(10,98,200,98);//tiras hataravana ira

//------------
$pdf.line(10,105,200,105);// 

$pdf.line(10,230,200,230);// 
$pdf.line(10,237,200,237);// 
$pdf.line(10,245,200,245);// 

//------------
$pdf.line(20,98,20,230);// 


$pdf.line(84,98,84,230);//
$pdf.line(94,98,94,230);//
$pdf.line(104,98,104,230);//
$pdf.line(125,98,125,230);//
$pdf.line(135,98,135,230);// 
$pdf.line(155,98,155,230);// 
$pdf.line(180,98,180,230);// 

//======================================
$pdf.AddFont('DejaVubd','','tahomabd.ttf',true);
$pdf.SetFont('DejaVubd','',8);
$pdf.Text(11,13,"Invoice Receiver :"); 
$pdf.Text(11,39,"Customer :");
$pdf.Text(105,39,"Invoice No"); 
$pdf.Text(105,43,"Reference No"); 
$pdf.Text(105,47,"Invoice Date"); 
$pdf.Text(105,51,"VAT REG. No");  
$pdf.Text(105,55,"Agrement No"); 

$pdf.Text(105,63,"Shipment No");  
$pdf.Text(105,67,"Shipment Type"); 
$pdf.Text(105,71,"Vessel");  
$pdf.Text(105,75,"Voyage"); 

$pdf.Text(11,63,"Place of Dispatch");  
$pdf.Text(11,67,"Date of Dispatch"); 
$pdf.Text(11,71,"Port of Loading");  
$pdf.Text(11,75,"Vessel Sailing Date");  

$pdf.Text(105,80,"Transport Documents Numbers");   
$pdf.Text(105,84,"LBL"); 
$pdf.Text(105,88,"HBL"); 
$pdf.Text(105,92,"CMR");  


$pdf.Text(11,80,"POD");  
$pdf.Text(11,84,"Arival POD");  
$pdf.Text(11,88,"Gate Out POD"); 
$pdf.Text(11,92,"Place Of Delivery"); 
$pdf.Text(11,96,"Arrival-Destination"); 


$pdf.Text(13,102,"No"); 
$pdf.Text(40,102,"Service description");
$pdf.Text(86,102,"QTY");
$pdf.Text(96,102,"CCY");
$pdf.Text(111,102,"Tariff");
$pdf.Text(127,102,"CCY");
$pdf.Text(143,102,"XRT");
$pdf.Text(161,102,"Amount");
$pdf.Text(187,102,"VAT");

//if($logo=="") $logo="logo.jpg";
if($logo=="") $logo="MT-Logo.png";
$filename = '../../images/'.$logo ;


if (file_exists($filename)) {
   $pdf.image('../../images/'.$logo,106,10,18); 
} else {
    //$pdf.image('../../images/logo.jpg',106,10,18); 
    $pdf.image('../../images/MT-Logo.png',106,10,18); 
 }