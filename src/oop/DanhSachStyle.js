class DanhSachStyle
{
	constructor(id, data, index = 0)
	{
		this.id = id;
		this.data = data;
		this.index = index;
		
		var HTML = `<select id="${this.id}" style="width:20vw;border-radius:5px;padding:3px;" onchange="danhSachStyle.select();">`;
			HTML += this.danhSachOption();						
		HTML += '</select><br>';
		$('#leftBanner').append(HTML);
	}

	setDanhSach(dataMoi)
	{
		this.data = dataMoi;
		$('#' + this.id).html(this.danhSachOption());
	}

	danhSachOption()
	{
		var HTML = '';
		for (var i=0;i<this.data.length;i++)
		{
			HTML += `<option value="${this.data[i]['value']}">${this.data[i]['caption']}</option>`;
		}
		return HTML;
	}

	change()
	{
		document.getElementById('paper').style.backgroundImage = "url('oop/bg/" + this.data[this.index]['hinhNen'] + "')";
	}

	select()
	{
		this.index = $('#' + this.id).val();
		this.change();
	}

}



var style1 = {'value' : 0, 'caption': 'Style 1', 
	fontMacDinh : "Times New Roman,Sans-serif", coChuMacDinh : '12' , coChuTieuDeMacDinh : '22', 
	mauChuMacDinh : 'green',hinhNen : 'bg1.jpg'};
var style2 = {'value' : 1, 'caption': 'Style 2', 
	fontMacDinh : "Times New Roman,Sans-serif", coChuMacDinh : '12' , coChuTieuDeMacDinh : '22', 
	mauChuMacDinh : 'green',hinhNen : 'bg2.jpg'};
var style3 = {'value' : 2, 'caption': 'Style 3', 
	fontMacDinh : "Times New Roman,Sans-serif", coChuMacDinh : '12' , coChuTieuDeMacDinh : '22', 
	mauChuMacDinh : 'green',hinhNen : 'bg3.jpg'};
var style4 = {'value' : 3, 'caption': 'Style 4', 
	fontMacDinh : "Times New Roman,Sans-serif", coChuMacDinh : '12' , coChuTieuDeMacDinh : '22', 
	mauChuMacDinh : 'green',hinhNen : 'bg4.jpg'};
var style5 = {'value' : 4, 'caption': 'Style 5', 
	fontMacDinh : "Times New Roman,Sans-serif", coChuMacDinh : '12' , coChuTieuDeMacDinh : '22', 
	mauChuMacDinh : 'green',hinhNen : 'bg5.jpg'};

var danhSachStyle = new DanhSachStyle('danhSachStyle',[style1, style2, style3, style4, style5]);