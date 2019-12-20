<script>
//<![CDATA[
window['onload'] = function() {
    $('.loading')['fadeOut'](function() {
        $(this)['remove']()
    });
    $('#slider')['removeClass']('slider-loading');
    $('#slider-content')['html'](slider_content['join'](''));
    if (slider_content['length'] != 0x1) {
        $('#slider-control')['html'](slider_control['join'](''))
    };
    if ($('#slider')['hasClass']('slider-error') === ![]) {
        if (slider_content['length'] == 0x0) {
            $('#slider')['addClass']('slider-no-topics')
        }
    };
    var _0xba5exb = document['getElementById']('header-buttons-content');
    document['getElementsByClassName']('about-content')[0]['innerHTML'] = _0xba5exb['getElementsByTagName']('about')[0]['innerHTML'];
    document['getElementsByClassName']('share-content')[0]['innerHTML'] = _0xba5exb['getElementsByTagName']('share')[0]['innerHTML'];
    if (document['getElementById']('similar_posts_content') != null) {
        execute_related();
        var _0xba5exc = _0xba5exb['getElementsByTagName']('author');
        var _0xba5exd = document['getElementsByClassName']('inner-auth-name')[0]['getElementsByTagName']('p')[0]['innerHTML'];
        for (i = 0x0; i < _0xba5exc['length']; i++) {
            if (_0xba5exd == _0xba5exc[0]['getElementsByTagName']('name')[0]['innerHTML']) {
                if (_0xba5exc[i]['getElementsByTagName']('facebook')[0] != null) {
                    document['getElementsByClassName']('fb_url')[0]['setAttribute']('href', _0xba5exc[i]['getElementsByTagName']('facebook')[0]['innerHTML'])
                } else {
                    if (document['getElementsByClassName']('fb_url')[0] != null) {
                        document['getElementsByClassName']('fb_url')[0]['style']['display'] = 'none'
                    }
                };
                if (_0xba5exc[i]['getElementsByTagName']('twitter')[0] != null) {
                    document['getElementsByClassName']('tw_url')[0]['setAttribute']('href', _0xba5exc[i]['getElementsByTagName']('twitter')[0]['innerHTML'])
                } else {
                    if (document['getElementsByClassName']('tw_url')[0] != null) {
                        document['getElementsByClassName']('tw_url')[0]['style']['display'] = 'none'
                    }
                };
                if (_0xba5exc[i]['getElementsByTagName']('youtube')[0] != null) {
                    document['getElementsByClassName']('yt_url')[0]['setAttribute']('href', _0xba5exc[i]['getElementsByTagName']('youtube')[0]['innerHTML'])
                } else {
                    if (document['getElementsByClassName']('yt_url')[0] != null) {
                        document['getElementsByClassName']('yt_url')[0]['style']['display'] = 'none'
                    }
                };
                if (_0xba5exc[i]['getElementsByTagName']('googleplus')[0] != null) {
                    document['getElementsByClassName']('gp_url')[0]['setAttribute']('href', _0xba5exc[i]['getElementsByTagName']('googleplus')[0]['innerHTML'])
                } else {
                    if (document['getElementsByClassName']('gp_url')[0] != null) {
                        document['getElementsByClassName']('gp_url')[0]['style']['display'] = 'none'
                    }
                };
                break
            }
        }
    };
   
};
var slider_ref = 0x0;
var slider_interval = setInterval(sliding, 0x1388);
var isPaused = ![];

function sliding(_0xba5ex13) {
    if (isPaused === ![]) {
        if (_0xba5ex13 == undefined) {
            if (slider_ref == slider_content['length'] - 0x1) {
                $('#slider-content')['removeClass']('translate-300 translate-600 translate-900 translate-1200');
                slider_ref = 0x0;
                $('#slider-content')['addClass']('translate-' + 0x12c * slider_ref)
            } else {
                slider_ref++;
                $('#slider-content')['addClass']('translate-' + 0x12c * slider_ref)
            }
        } else {
            $('#slider-content')['removeClass']('translate-0 translate-300 translate-600 translate-900 translate-1200');
            $('#slider-content')['addClass']('translate-' + _0xba5ex13 * 0x12c);
            isPaused = !![]
        }
    }
}
window['onscroll'] = function() {
    if (document['body']['scrollTop'] > 0x0 || document['documentElement']['scrollTop'] > 0x0) {
        $('#header')['addClass']('fixed-header-shadow')
    } else {
        $('#header')['removeClass']('fixed-header-shadow')
    }
};

function re_measure() {
    if (menu['matches']) {
        if (document['getElementById']('res-nav') != null) {
            document['getElementById']('res-nav')['setAttribute']('id', 'nav')
        }
    } else {
        if (document['getElementById']('nav') != null) {
            document['getElementById']('nav')['setAttribute']('id', 'res-nav')
        }
    }
}
var menu_width = Number(document['getElementById']('nav')['getElementsByTagName']('ul')[0]['clientWidth']) + 0x32;
const menu = window['matchMedia']('(min-width: ' + menu_width + 'px)');
window['onresize'] = re_measure;
re_measure();
var popular_post = document['getElementsByClassName']('PopularPosts');
if (popular_post[0] !== undefined) {
    var popular_posts = document['getElementsByClassName']('item-content');
    for (i = 0x0; i < popular_posts['length']; i++) {
        var popular_post_thumb = popular_posts[i]['getElementsByClassName']('item-thumbnail')[0];
        if (popular_post_thumb !== undefined) {
            popular_post_thumb['getElementsByTagName']('img')[0]['src'] = popular_post_thumb['getElementsByTagName']('img')[0]['src']['replace']('w72-h72-p-k-no-nu', 's250');
            popular_post_thumb['getElementsByTagName']('img')[0]['src'] = popular_post_thumb['getElementsByTagName']('img')[0]['src']['replace']('w72-h72-n-k-no-nu', 's250')
        } else {
            var popular_img_creator = document['createElement']('div');
            popular_img_creator['setAttribute']('class', 'item-thumbnail');
            popular_img_creator['innerHTML'] = '<img src=\'https://3.bp.blogspot.com/-23RYzUI8-y8/WVpzwBCR42I/AAAAAAAAEsk/clN3fmD7yboU875BxQtrZXGXgfPpa5AugCLcBGAs/s250-c/no_image.png\'/>';
            popular_posts[i]['insertBefore'](popular_img_creator, popular_posts[i]['childNodes'][0])
        }
    }
};
var floatingWindow = document['getElementById']('floating-window');
var floatingWindowContent = document['getElementById']('floating-window-content');
var floatingWindowToggle = ![];

function close_floating_window() {
    $('#floating-window')['addClass']('floating-window-opacity');
    setTimeout(function() {
        $('#floating-window')['addClass']('display-none-iso')
    }, 0x12c);
    floatingWindowToggle = ![]
}

function open_floating_window(_0xba5ex20) {
    $('#floating-window-content .floating-cont, #floating-window .noti-reload, #floating-window .floating-title')['addClass']('display-none-iso');
    $('#floating-window')['removeClass']('display-none-iso');
    if (_0xba5ex20 == 'noti') {
        $('#floating-window-content .noti-content, #floating-window .noti-title, #floating-window .noti-reload')['removeClass']('display-none-iso');
        setTimeout(function() {
            $('#floating-window')['removeClass']('floating-window-opacity')
        }, 0x32);
        floatingWindowToggle = !![]
    } else {
        if (_0xba5ex20 == 'about') {
            $('#floating-window-content .about-content, #floating-window .about-title')['removeClass']('display-none-iso');
            setTimeout(function() {
                $('#floating-window')['removeClass']('floating-window-opacity')
            }, 0x32);
            floatingWindowToggle = !![]
        } else {
            if (_0xba5ex20 == 'share') {
                $('#floating-window-content .share-content, #floating-window .share-title')['removeClass']('display-none-iso');
                setTimeout(function() {
                    $('#floating-window')['removeClass']('floating-window-opacity')
                }, 0x32);
                floatingWindowToggle = !![]
            } else {
                if (_0xba5ex20 == 'contact') {
                    $('#floating-window-content .contact-content, #floating-window .contact-title')['removeClass']('display-none-iso');
                    setTimeout(function() {
                        $('#floating-window')['removeClass']('floating-window-opacity')
                    }, 0x32);
                    floatingWindowToggle = !![]
                }
            }
        }
    }
}

function open_blogger_comments() {
    if (document['getElementsByClassName']('comment-form')[0] !== undefined) {
        var _0xba5ex22 = document['getElementsByClassName']('avatar-image-container');
        for (i = 0x0; i < _0xba5ex22['length']; i++) {
            if (_0xba5ex22[i]['getElementsByTagName']('img')[0]['src']['search']('s35-c') != -0x1) {
                _0xba5ex22[i]['getElementsByTagName']('img')[0]['src'] = _0xba5ex22[i]['getElementsByTagName']('img')[0]['src']['replace']('s35-c', 's50-c')
            } else {
                if (_0xba5ex22[i]['getElementsByTagName']('img')[0]['src']['search']('blank.gif') != -0x1) {
                    _0xba5ex22[i]['getElementsByTagName']('img')[0]['src'] = 'https://2.bp.blogspot.com/-qJSIkWXnKO4/WmJ0vZETduI/AAAAAAAAFRc/tnu_Q8flIXY9Skbz_dW6w06kMHAq6An0wCLcBGAs/s1600/Auth-No-Pic%2B50x50.png';
                    document['getElementsByTagName']('cite')[i]['innerHTML'] = 'بواسطة زائر'
                }
            }
        };
        var _0xba5ex23 = document['getElementsByClassName']('comment-replies');
        for (i = 0x0; i < _0xba5ex23['length']; i++) {
            if (_0xba5ex23[i]['getElementsByClassName']('thread-count')[0] !== undefined) {
                var _0xba5ex24 = _0xba5ex23[i]['getElementsByClassName']('thread-expanded');
                for (j = 0x0; j < _0xba5ex24['length']; j++) {
                    _0xba5ex24[j]['classList']['add']('thread-collapsed');
                    _0xba5ex24[j]['classList']['remove']('thread-expanded')
                };
                _0xba5ex23[i]['getElementsByClassName']('thread-count')[0]['getElementsByTagName']('a')[0]['innerHTML'] = ' عرض ' + _0xba5ex23[i]['getElementsByClassName']('comment')['length'] + ' من الردود ';
                if (_0xba5ex23[i]['getElementsByClassName']('blog-author')[0] !== undefined) {
                    if (document['getElementsByClassName']('comment-header')[i]['getElementsByClassName']('admin-reply')[0] === undefined) {
                        document['getElementsByClassName']('comment-header')[i]['innerHTML'] = document['getElementsByClassName']('comment-header')[i]['innerHTML'] + '<span title=\'تم الرد على هذا التعليق من قبل ناشر الموضوع\' class=\'admin-reply\'><i class=\'fa fa-check\' aria-hidden=\'true\'></i> تم الرد بواسطة الأدمن</span>'
                    }
                }
            }
        };
        var _0xba5ex25 = document['getElementsByClassName']('comment-content');
        for (i = 0x0; i < _0xba5ex25['length']; i++) {
            var _0xba5ex26 = document['getElementsByClassName']('comment-content')[i]['innerHTML'];
            var _0xba5ex27 = _0xba5ex26['replace'](/smile1/g, '<img src=\'https://3.bp.blogspot.com/-cDPcAUdSMnU/V9wx5GO-wVI/AAAAAAAAD5Q/m-hkg8_OlroeQ1TGlI2e0vtDvJLzzscVQCLcB/s1600/1.png\' title=\'smile1\'/>');
            var _0xba5ex28 = _0xba5ex27['replace'](/smile2/g, '<img src=\'https://3.bp.blogspot.com/-hlRGLUySQp4/V9wx5QsO8GI/AAAAAAAAD5c/P0v3wxe5sacc6IUiTcZ84Jptti_iny-wACLcB/s1600/2.png\' title=\'smile2\'/>');
            var _0xba5ex29 = _0xba5ex28['replace'](/smile3/g, '<img src=\'https://1.bp.blogspot.com/-pkpegcqXDAU/V9wx5tULQDI/AAAAAAAAD5k/PwBDNVrVo8crBT8KajndNWZF4fDn8P4CwCLcB/s1600/3.png\' title=\'smile3\'/>');
            var _0xba5ex2a = _0xba5ex29['replace'](/smile4/g, '<img src=\'https://4.bp.blogspot.com/-3E8J91LzGDU/V9wx53-VYDI/AAAAAAAAD5o/3Mr8aS9T40Yoc0pHes8k9oBOm2XEeFxlwCLcB/s1600/4.png\' title=\'smile4\'/>');
            var _0xba5ex2b = _0xba5ex2a['replace'](/smile5/g, '<img src=\'https://3.bp.blogspot.com/-6-l0BL_bCCA/V9wx5A8yVAI/AAAAAAAAD5U/YoSPZCTpl6Ukji8svLbaY7J3e2fFNJFpQCLcB/s1600/13.png\' title=\'smile5\'/>');
            var _0xba5ex2c = _0xba5ex2b['replace'](/smile6/g, '<img src=\'https://1.bp.blogspot.com/-zG24Mt8vJMo/V9xL2P4V1CI/AAAAAAAAD54/9T912q-3k6MctocgapAyZqLIStHAOpVKACLcB/s1600/25.png\' title=\'smile6\'/>');
            var _0xba5ex2d = _0xba5ex2c['replace'](/smile7/g, '<img src=\'https://1.bp.blogspot.com/-iQrRlwyUPTw/V9wx5VXpHvI/AAAAAAAAD5g/a_l2KtSkEFM127N0FF5vZN0uUTsrM_xwgCLcB/s1600/21.png\' title=\'smile7\'/>');
            var _0xba5ex2e = _0xba5ex2d['replace'](/smile8/g, '<img src=\'https://4.bp.blogspot.com/-09EMED85BTw/V9wx6R4rprI/AAAAAAAAD5s/d78w1frK888IMq6WJWkoMBZntijyQsPSACLcB/s1600/22.png\' title=\'smile8\'/>');
            document['getElementsByClassName']('comment-content')[i]['innerHTML'] = _0xba5ex2e
        };
        document['getElementsByClassName']('comment-form')[0]['style']['display'] = 'block';
        document['getElementsByClassName']('comments-content')[0]['style']['display'] = 'block'
    } else {
        document['getElementsByClassName']('comment-footer')[0]['style']['background'] = '#fffca4';
        if (document['getElementsByClassName']('comments-content')[0] !== undefined) {
            document['getElementsByClassName']('comments-content')[0]['style']['display'] = 'block';
            var _0xba5ex22 = document['getElementsByClassName']('avatar-image-container');
            for (i = 0x0; i < _0xba5ex22['length']; i++) {
                if (_0xba5ex22[i]['getElementsByTagName']('img')[0]['src']['search']('s35-c') != -0x1) {
                    _0xba5ex22[i]['getElementsByTagName']('img')[0]['src'] = _0xba5ex22[i]['getElementsByTagName']('img')[0]['src']['replace']('s35-c', 's50-c')
                } else {
                    if (_0xba5ex22[i]['getElementsByTagName']('img')[0]['src']['search']('blank.gif') != -0x1) {
                        _0xba5ex22[i]['getElementsByTagName']('img')[0]['src'] = 'https://2.bp.blogspot.com/-qJSIkWXnKO4/WmJ0vZETduI/AAAAAAAAFRc/tnu_Q8flIXY9Skbz_dW6w06kMHAq6An0wCLcBGAs/s1600/Auth-No-Pic%2B50x50.png';
                        document['getElementsByTagName']('cite')[i]['innerHTML'] = 'بواسطة زائر'
                    }
                }
            }
        }
    }
}
var f_video = document['getElementsByClassName']('separator');
for (i = 0x0; i < f_video['length']; i++) {
    if (f_video[i]['getElementsByClassName']('YOUTUBE-iframe-video')[0] !== undefined) {
        f_video[i]['classList']['add']('b_video');
        f_video[i]['setAttribute']('onclick', 'v_show(this)')
    }
};

function v_show(_0xba5ex31) {
    if (_0xba5ex31['getAttribute']('class')['search']('f_video') == -0x1) {
        _0xba5ex31['classList']['add']('f_video')
    } else {
        _0xba5ex31['classList']['remove']('f_video')
    }
}
var yt_iframe = document['getElementsByClassName']('YOUTUBE-iframe-video');
if (yt_iframe !== undefined) {
    for (i = 0x0; i < yt_iframe['length']; i++) {
        var yt_iframe_height = yt_iframe[i]['clientWidth'] * 0.53;
        yt_iframe[i]['style']['height'] = yt_iframe_height
    }
};
var post_tables = document['getElementsByClassName']('entry-content')[0]['getElementsByClassName']('tr-caption-container');
if (post_tables != undefined) {
    for (i = 0x0; i < post_tables['length']; i++) {
        table_img = post_tables[i]['getElementsByTagName']('IMG')[0];
        if (table_img != undefined) {
            var table_dir = table_img['getAttribute']('alt')
        };
        if (table_dir == 'يسار') {
            post_tables[i]['getElementsByTagName']('tr')[0]['style']['float'] = 'left'
        }
    }
};
if (window['getComputedStyle'](document['getElementsByClassName']('item-control')[0], null)['getPropertyValue']('display') == 'inline') {
    var ex_noti = document['createElement']('script');
    ex_noti['setAttribute']('src', '');
    ex_noti['setAttribute']('id', 'ex-noti');
    document['body']['appendChild'](ex_noti)
};

function check_noti() {
    setTimeout(function() {
        if (window['getComputedStyle'](document['getElementsByClassName']('item-control')[0], null)['getPropertyValue']('display') == 'inline') {
            document['getElementsByClassName']('notifications-btn')[0]['classList']['remove']('display-none');
            var _0xba5ex38 = document['getElementsByClassName']('single-noti')['length'];
            if (document['cookie']['search']('noti_no') == -0x1) {
                document['cookie'] = 'noti_no=' + _0xba5ex38 + '; expires=Thu, 18 Dec 2222 12:00:00 UTC'
            } else {
                old_noti_num = document['cookie']['split'](';');
                for (i = 0x0; i < old_noti_num['length']; i++) {
                    if (old_noti_num[i]['search']('noti_no') != -0x1) {
                        old_noti_num = old_noti_num[i]['split']('=')[1]
                    }
                };
                if (_0xba5ex38 != old_noti_num) {
                    document['getElementsByClassName']('notifications-btn')[0]['innerHTML'] = _0xba5ex38;
                    document['getElementsByClassName']('notifications-btn')[0]['style']['background'] = 'tomato';
                    document['getElementsByClassName']('notifications-btn')[0]['style']['color'] = '#fff';
                    document['cookie'] = 'noti_no=' + _0xba5ex38 + '; expires=Thu, 18 Dec 2222 12:00:00 UTC'
                } else {
                    document['getElementsByClassName']('notifications-btn')[0]['innerHTML'] = '<i aria-hidden=\'true\' class=\'fa fa-globe\'></i>';
                    document['getElementsByClassName']('notifications-btn')[0]['removeAttribute']('style')
                }
            }
        } else {
            $('.notifications-btn, .noti-content')['replaceWith']('')
        }
    }, 0xbb8)
}
var lastScrollTop = 0x0;
$(window)['scroll'](function(_0xba5ex3a) {
    var _0xba5ex3b = $(this)['scrollTop']();
    if (_0xba5ex3b > lastScrollTop) {
        document['getElementById']('header')['style']['top'] = '-80px'
    } else {
        document['getElementById']('header')['style']['top'] = '0'
    };
    lastScrollTop = _0xba5ex3b
});
if (allow_chat_head == 'on' || allow_chat_head == 'true' || allow_chat_head === !![]) {
    setTimeout(function() {
        if (document['cookie']['search']('chat_closed') == -0x1) {
            start_chating()
        }
    }, 4000)
}
//]]>
</script>
