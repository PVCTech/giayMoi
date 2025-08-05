const {
	jsPDF
} = window.jspdf;


async function fetchImageAsBase64(url) {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Không thể tải ảnh: ${response.statusText}`);
	}
	const blob = await response.blob();

	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => resolve(reader.result);
		reader.onerror = reject;
		reader.readAsDataURL(blob);
	});
}


class GiayMoi
{
	constructor(Style = 0, tenDonViCapTren = 'Tap doan', tenDonVi = 'cty', tieuDe = 'GIẤY MỜI', veViec = '', kinhMoi = '', toiDu = '', toiDu2 = '', thoiGian = '', diaDiem = '', quanTrong = '',
		ngayKy = '', chucDanh = '', tenNguoiMoi = '') {
		this.Style = Style;
		this.tenDonViCapTren = tenDonViCapTren;
		this.tenDonVi = tenDonVi;
		this.tieuDe = tieuDe;
		this.veViec = veViec;
		this.kinhMoi = kinhMoi;
		this.toiDu = toiDu;
		this.toiDu2 = toiDu2;
		this.thoiGian = thoiGian;
		this.diaDiem = diaDiem;
		this.quanTrong = quanTrong;
		this.ngayKy = ngayKy;
		this.chucDanh = chucDanh;
		this.tenNguoiMoi = tenNguoiMoi;
	}

	setThongTinChung() {
		this.Style = danhSachStyle.index;
		this.tenDonViCapTren = $('#tenDonViCapTren').val();
		this.tenDonVi = $('#tenDonVi').val();
		this.tieuDe = $('#tieuDe').val();
		this.veViec = $('#veViec').val();
		this.kinhMoi = $('#kinhMoi').val();
		this.toiDu = $('#toiDu').val();
		this.toiDu2 = $('#toiDu2').val();
		this.thoiGian = $('#thoiGian').val();
		this.diaDiem = $('#diaDiem').val();
		this.quanTrong = $('#quanTrong').val();
		this.ngayKy = $('#tinh').val() + ', ngày ' + $('#ngay').val() + ' tháng ' + $('#thang').val() + ' năm ' + $('#nam').val();
		this.chucDanh = $('#chucDanh').val();
		this.tenNguoiMoi = $('#tenNguoiMoi').val();
	}

	async draw(top,f) {
		var marginTop = top + 20;
		var marginLeft = 10;
		var w = 210;
		var h = 280;
		var y = marginTop;
		var x1 = 0;
		var x2 = 0;
		var coChuMacDinh = danhSachStyle.data[danhSachStyle.index]['coChuMacDinh'];
		var indexCu = parseInt($('#indexKhachMoi').val());
		indexCu ++;
		$('#indexKhachMoi').val(indexCu);
		this.kinhMoi = $('#kinhMoi').val();

		x1 = marginLeft + 50;
		x2 = w - marginLeft - 50;

		try {
			const base64Image = await fetchImageAsBase64('oop/bg/' + danhSachStyle.data[danhSachStyle.index]['hinhNen']);
			f.addImage(base64Image, 'JPEG', 0, top, w, h/2);
		} catch (error) {
			console.error("Lỗi khi tải ảnh hoặc tạo PDF:", error);
		}


		f.setFont("DejaVuSans", "normal");
		f.setFontSize(coChuMacDinh);
		f.text(this.tenDonViCapTren.toUpperCase(), x1, y, {
			align: "center"
		});

		f.text('CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM', x2, y, {
			align: "center"
		});

		f.setFont("DejaVuSans", "bold");
		y = y + 6;
		f.text(this.tenDonVi.toUpperCase(), x1, y, {
			align: "center"
		});
		f.text('Độc lập - Tự do - Hạnh phúc', x2, y, {
			align: "center"
		});
		f.setFont("DejaVuSans", "normal");
		f.text('--------- *** ---------', x2, y +5, {
			align: "center"
		});

		y += 18;
		f.setFont("DejaVuSans", "bold");
		f.setFontSize(danhSachStyle.data[danhSachStyle.index]['coChuTieuDeMacDinh']);
		f.text(this.tieuDe.toUpperCase(), w/2, y, {
			align: "center"
		});

		f.setFontSize(coChuMacDinh);
		if (this.veViec.length > 0) {
			y = y + 6;
			f.setFont("DejaVuSans", "italic"); // Nghiêng
			f.text(this.veViec, w/2, y, {
				align: "center"
			});
		}

		y += 10;
		x1 = marginLeft + 10;
		f.setFont("DejaVuSans", "bold");
		f.text('Kính mời: ', x1, y, {
			align: "left"
		});
		f.text('Tới dự: ', x1, y + 6, {
			align: "left"
		});
		f.text('Thời gian: ', x1, y + 18, {
			align: "left"
		});
		f.text('Địa điểm: ', x1, y + 24, {
			align: "left"
		});

		f.setFont("DejaVuSans", "normal");
		var xungHo = $('#xungHo').text();
		f.text(xungHo + ' ' + danhSachKhachMoi2[parseInt($('#indexKhachMoi').val())].toUpperCase(), x1 + 30, y, {
			align: "left"
		});
		y += 6;
		f.text(this.toiDu, x1 + 30, y, {
			align: "left"
		});
		y += 6;
		f.text(this.toiDu2, x1, y, {
			align: "left"
		});
		y += 6;
		f.text(this.thoiGian, x1 + 30, y, {
			align: "left"
		});
		y += 6;
		f.text(this.diaDiem, x1 + 30, y, {
			align: "left"
		});
		y += 6;
		f.text(this.quanTrong, x1 + 10, y, {
			align: "left"
		});

		y += 8;
		f.setFont("DejaVuSans", "italic");
		f.text(this.ngayKy, w - marginLeft - 10, y, {
			align: "right"
		});
		y += 6;
		f.setFont("DejaVuSans", "normal");
		f.text(this.chucDanh, w - marginLeft - 50, y, {
			align: "center"
		});
		y += 20;
		f.text(this.tenNguoiMoi.toUpperCase(), w - marginLeft - 50, y, {
			align: "center"
		});

		/*
f.addPage("a4");
f.setFontSize(danhSachStyle.data[danhSachStyle.index]['coChuMacDinh']);
f.text("Thông tin bổ sung", 105, 20, { align: "center" });
f.setTextColor("#FF0000");
*/
	}

	savePDF(tenGiayMoi, f) {
		f.save(tenGiayMoi + ".pdf");
		$('#countDown').text('Ok!');
		setTimeout(function(){$('#countDown').text('');},500);
	}
}

var gm1 = new GiayMoi();
gm1.setThongTinChung();


async function inHangLoat()
{
    $('#countDown').text('Đang tạo file...!');
	
    var f = new jsPDF
    ({
    	orientation: "portrait",
    	unit: "mm",
    	format: "a4",
    });
    
    f.addFont("oop/font/DejaVuSans.ttf", "DejaVuSans", "normal");
    f.addFont("oop/font/DejaVuSans-Bold.ttf", "DejaVuSans", "bold");
    f.addFont("oop/font/DejaVuSans-Oblique.ttf", "DejaVuSans", "italic");
    $('#indexKhachMoi').val('-1');
	gm1.setThongTinChung();
	var danhSachKhachMoi3 = $("#danhSachTen").val().split('\n');
	if (danhSachKhachMoi3.length > 0)
	{
	    danhSachKhachMoi2 = [];
	    for (var j=0; j < danhSachKhachMoi3.length; j ++)
	    {
	        if (danhSachKhachMoi3[j].length){danhSachKhachMoi2.push(danhSachKhachMoi3[j]);}
	    }
	}
	
	for (var i = 0; i < danhSachKhachMoi2.length; i++) {
		if (danhSachKhachMoi2[i].length > 0) {
			if (i > 1 && i%2 == 0) {
				setTimeout(function() {f.addPage("a4");}, i*500);
			}
			
			if (i%2 == 0) {
				setTimeout(function() 
				{
				    gm1.draw(10,f);
				}, i * 500);
			} else
			{
				setTimeout(function() 
				{
				    gm1.draw(150,f);
				}, i * 500);
			}
		}
	}
	
	setTimeout(function() 
	{
	    gm1.savePDF('Giay moi', f);
	}, danhSachKhachMoi2.length * 510);
	
	setTimeout(function() 
	{
	    $('#countDown').text('Save!');
	    setTimeout(function() {$('#countDown').text('');}, 500);
	}, danhSachKhachMoi2.length * 515);
	
}