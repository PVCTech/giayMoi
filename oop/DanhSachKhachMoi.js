var danhSachKhachMoi2 = [];
class DanhSachKhachMoi
{
	constructor(DS = [])
	{
		var HTML = `<div id="DivTongCBCNV" style="margin-top: 10px;">Tổng số: 2 người</div>
					<textarea rows="20" id="danhSachTen" style="border-radius:5px;width:250px;height:75%;font-family:Times new roman;font-size:16px;padding-left:5px;" onkeyup="danhSachKhachMoi.phanTichDanhSach();">ho va ten 1
ho va ten 2
ho va ten 3</textarea>`;
		$('#leftBanner').append(HTML);
		this.danhSach = DS;
		danhSachKhachMoi2 = $("#danhSachTen").val().split('\n');
	}

	phanTichDanhSach()
	{
		var danhSachKhachMoi3 = $("#danhSachTen").val().split('\n');
		if (danhSachKhachMoi3.length > 0)
		{
		    danhSachKhachMoi2 = [];
		    for (var j=0; j < danhSachKhachMoi3.length; j ++)
		    {
		        if (danhSachKhachMoi3[j].length){danhSachKhachMoi2.push(danhSachKhachMoi3[j]);}
		    }
		}
		
		var SoLuong = 0;
		for (var i=0;i<danhSachKhachMoi2.length;i++)
		{
			if (danhSachKhachMoi2[i].length>0)
			{
			    SoLuong ++;
			}
		}
		this.danhSach = danhSachKhachMoi2;
		$('#kinhMoi').val(danhSachKhachMoi2[0]);
		$("#DivTongCBCNV").text("Tổng số: " + SoLuong + " người");
	}
}