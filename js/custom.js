/* Değişen Kampanya Yazıları */

var liste = ["1. Üründe %40 İndirim","2. Üründe %50 İndirim","3. Üründe %60 İndirim"];
var sayac = 0;
var degisenKampanyaYazilari = document.getElementsByClassName("degisenKampanyaYazilari");
function yaz(event){
    degisenKampanyaYazilari[0].innerHTML = liste[sayac%liste.length];
    sayac++;
    degisenKampanyaYazilari[1].innerHTML = liste[sayac%liste.length];
    sayac++;
    degisenKampanyaYazilari[2].innerHTML = liste[sayac%liste.length];
    sayac++;
    degisenKampanyaYazilari[3].innerHTML = liste[sayac%liste.length];
    sayac++;
    degisenKampanyaYazilari[4].innerHTML = liste[sayac%liste.length];
    sayac++;
    degisenKampanyaYazilari[5].innerHTML = liste[sayac%liste.length];
    sayac++;
    degisenKampanyaYazilari[6].innerHTML = liste[sayac%liste.length];
    sayac++;
    degisenKampanyaYazilari[7].innerHTML = liste[sayac%liste.length];
    sayac++;

}

setInterval(yaz,1000);

/* Fatura Tipi */

function faturatipi(){
    var fatura = document.getElementById('fatura-tipi');
    if(fatura.selectedIndex==0){
        document.getElementById('bireysel-fatura').style.display = 'block';
    }
    else{
        document.getElementById('bireysel-fatura').style.display = 'none'
    }
    if(fatura.selectedIndex==1){
        document.getElementById('kurumsal-fatura').style.display = 'block';
    }
    else{
        document.getElementById('kurumsal-fatura').style.display = 'none';
    }
}

/* Onaylama Bildirimi Sweet Alert */

$('.sepet').click(function(){

    Swal.fire({
    position: 'center-center',
    icon: 'success',
    title: 'Ürününüz Sepete Eklendi!',
    showConfirmButton: false,
    timer: 1500
    })

    });

    $('.favori').click(function(){

    Swal.fire({
    position: 'center-center',
    icon: 'success',
    title: 'Ürününüz Favorilere Eklendi!',
    showConfirmButton: false,
    timer: 1500
    })

    });

/* Karşılaştırma Tablosu */

jQuery(function($){
    var ttCompareTable = $('#tt-compare-table');
    if (ttCompareTable.length){
        
        var ttCompareItemCount = ttCompareTable.find('.tt-item').size();
        if(ttCompareItemCount > 0){
            $('#tt-compare-countitem').html(ttCompareItemCount);
        };
        //slider kısmı
        ttCompareTable.slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 410,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        var ttCompareSlickBtn = ttCompareTable.find('.slick-arrow').size();
        if(ttCompareSlickBtn > 0){
            ttCompareTable.addClass('slick-init');
        };

        //Remove tıklandıktan sonra
        ttCompareTable.on('click', '.js-remove-item', function() {
            $(this).closest('.tt-item').remove();
        });

        alignmentColHeight();
        $(window).on('load', function(){
            alignmentColHeight();
        });

        $(window).resize(debouncer(function(e){
            alignmentColHeight();
        }));
    };
    function alignmentColHeight(){
            var ttwindowWidth = window.innerWidth || $(window).width();
            if(ttwindowWidth > 409){
                calculatingMaxHeight(ttCompareTable.find('.tt-item .js-description'));
                calculatingMaxHeight(ttCompareTable.find('.tt-item .tt-image-box'));
                calculatingMaxHeight(ttCompareTable.find('.tt-item'));
            } else{
                ttCompareTable.find('.tt-item .js-description').css("height", "auto");
                ttCompareTable.find('.tt-item .tt-image-box').css("height", "auto");
            };

    };
    function calculatingMaxHeight($obj){
        var maxHeight = 0;
        $obj.css("height", "auto").each(function(){
                $(this).css("height", "auto");
                var colHeight = $(this).height();
                if($(this).height() > maxHeight){
                        maxHeight = $(this).height();
                };
        });
        $obj.height(maxHeight);
    };
    function debouncer(func, timeout) {
        var timeoutID, timeout = timeout || 500;
        return function() {
                var scope = this,
                        args = arguments;
                clearTimeout(timeoutID);
                timeoutID = setTimeout(function() {
                        func.apply(scope, Array.prototype.slice.call(args));
                }, timeout);
        }
    };
});

/* FAVORİLER */

jQuery(function($){
	var jsWishlistRemoveitem = $('#js-wishlist-removeitem');
	if(jsWishlistRemoveitem.length){
		jsWishlistRemoveitem.on('click', '.js-removeitem', function(){
			$(this).closest('.tt-item').remove();
		});
	};
});

/* Alışveriş Kartı */

jQuery(function($){
	var $window = $(window),
		$ttPageContent = $('#tt-pageContent'),
		ttwindowWidth = window.innerWidth || $window.width(),
		blocks = {
			ttShopCart: $ttPageContent.find('.tt-shopcart-table, .tt-shopcart-table-02')
		};
	if (blocks.ttShopCart.length) {
		ttShopCart(ttwindowWidth);
	};
	var ttCachedWidth = $window.width();
	$window.on('resize', function () {
		var newWidth = $window.width();
		if(newWidth !== ttCachedWidth){
			ttCachedWidth = newWidth;
			var ttwindowWidth = window.innerWidth || $window.width();

			if (blocks.ttShopCart.length) {
					ttShopCart(ttwindowWidth);
			};
		}
	});
	function ttShopCart(ttwindowWidth){
		ttwindowWidth <= 789 ?  insertDesctopeObj() : insertMobileObj();

		function insertDesctopeObj(){
				blocks.ttShopCart.find('tr').each(function(){
					var objDesctope = $(this).find('.detach-quantity-desctope .tt-input-counter').detach().get(0);
					$(this).find('.detach-quantity-mobile').append(objDesctope);
				});
		};
		function insertMobileObj(){
				blocks.ttShopCart.find('tr').each(function(){
					var objMobile = $(this).find('.detach-quantity-mobile .tt-input-counter').detach().get(0);
					$(this).find('.detach-quantity-desctope').append(objMobile);
				});
		};
	};
});

/* Sweet Alert */

    $('#onayla').click(function(){

    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Ürününüz sepete eklendi!',
    showConfirmButton: false,
    timer: 1500
    })

    });

    $('.favori-active').click(function(){

    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Favorilere eklendi!',
    showConfirmButton: false,
    timer: 1500
    })

    });