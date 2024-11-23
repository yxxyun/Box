globalThis.getHeaders= function(input){
    let t = Math.round(new Date().getTime()/1000).toString();
	let headers = {
        'User-Agent': 'okhttp/4.1.0'
	};
	return headers
}
var rule = {
    title:'腾云驾雾',
    host:'https://v.%71%71.com',
    homeUrl:'/x/bu/pagesheet/list?_all=1&append=1&channel=choice&listpage=1&offset=0&pagesize=25&iarea=-1&sort=19',
    detailUrl:'https://node.video.%71%71.com/x/api/float_vinfo2?cid=fyid',
    searchUrl: 'https://v.%71%71.com/x/search/?q=**&stag=1',
    //searchUrl: 'https://tv.aiseet.atianqi.com/i-tvbin/qtv_video/search/get_search_baseline?request_type=homepage&req_page_size=20&req_page_num=0&key=**&Q-UA=QV%3D1%26PR%3DVIDEO%26PT%3DSNMAPP%26CHID%3D15000%26RL%3D2560*1440%26VN%3D15.7.0%26VN_CODE%3D1231008%26VN_BUILD%3D1018%26SV%3D12%26SI%3D32%26MD%3DV2199GA%26DV%3DPD2203%26BD%3DV2199GA%26DE%3D%26MF%3Dvivo%26TVKPlatform%3D670603%26HOST_VN%3D15.7.0%26HOST_VC%3D1231008%26HOST_VB%3D1018%26HOST_API%3D7',
    searchable: 2,
    quickSearch:1,
    filterable:1,
    multi:1,
    url:'/x/bu/pagesheet/list?_all=1&append=1&channel=fyclass&listpage=1&offset=0&pagesize=25&iarea=-1',
    filter_url:'sort={{fl.sort}}&iyear={{fl.year or 2024}}&ipay={{fl.pay}}',
    filter:{"choice": [{"key": "sort","name": "排序","value": [{"n": "最热","v": "18"},{"n": "最新","v": "19"},{"n": "好评","v": "16"},{"n": "高分好评","v": "21"}]},{"key": "pay","name": "资费","value": [{"n": "全部","v": "-1"},{"n": "免费","v": "867"},{"n": "会员","v": "6"}]},{"key": "year","name": "年代","value": [{"n": "全部","v": "-1"},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},{"n": "2021","v": "2021"},{"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},{"n": "2016","v": "2016"},{"n": "2015","v": "2015"}]}],"tv": [{"key": "sort","name": "排序","value": [{"n": "最热","v": "18"},{"n": "最新","v": "19"},{"n": "好评","v": "16"},{"n": "高分好评","v": "21"}]},{"key": "pay","name": "资费","value": [{"n": "全部","v": "-1"},{"n": "免费","v": "867"},{"n": "会员","v": "6"}]},{"key": "year","name": "年代","value": [{"n": "全部","v": "-1"},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},{"n": "2021","v": "2021"},{"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},{"n": "2016","v": "2016"},{"n": "2015","v": "2015"}]}],"movie": [{"key": "sort","name": "排序","value": [{"n": "最热","v": "18"},{"n": "最新","v": "19"},{"n": "好评","v": "16"},{"n": "高分好评","v": "21"}]},{"key": "pay","name": "资费","value": [{"n": "全部","v": "-1"},{"n": "免费","v": "867"},{"n": "会员","v": "6"}]},{"key": "year","name": "年代","value": [{"n": "全部","v": "-1"},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},{"n": "2021","v": "2021"},{"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},{"n": "2016","v": "2016"},{"n": "2015","v": "2015"}]}],"variety": [{"key": "sort","name": "排序","value": [{"n": "最热","v": "18"},{"n": "最新","v": "19"},{"n": "好评","v": "16"},{"n": "高分好评","v": "21"}]},{"key": "pay","name": "资费","value": [{"n": "全部","v": "-1"},{"n": "免费","v": "867"},{"n": "会员","v": "6"}]},{"key": "year","name": "年代","value": [{"n": "全部","v": "-1"},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},{"n": "2021","v": "2021"},{"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},{"n": "2016","v": "2016"},{"n": "2015","v": "2015"}]}],"cartoon": [{"key": "sort","name": "排序","value": [{"n": "最热","v": "18"},{"n": "最新","v": "19"},{"n": "好评","v": "16"},{"n": "高分好评","v": "21"}]},{"key": "pay","name": "资费","value": [{"n": "全部","v": "-1"},{"n": "免费","v": "867"},{"n": "会员","v": "6"}]},{"key": "year","name": "年代","value": [{"n": "全部","v": "-1"},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},{"n": "2021","v": "2021"},{"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},{"n": "2016","v": "2016"},{"n": "2015","v": "2015"}]}],"child": [{"key": "sort","name": "排序","value": [{"n": "最热","v": "18"},{"n": "最新","v": "19"},{"n": "好评","v": "16"},{"n": "高分好评","v": "21"}]},{"key": "pay","name": "资费","value": [{"n": "全部","v": "-1"},{"n": "免费","v": "867"},{"n": "会员","v": "6"}]},{"key": "year","name": "年代","value": [{"n": "全部","v": "-1"},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},{"n": "2021","v": "2021"},{"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},{"n": "2016","v": "2016"},{"n": "2015","v": "2015"}]}],"doco": [{"key": "sort","name": "排序","value": [{"n": "最热","v": "18"},{"n": "最新","v": "19"},{"n": "好评","v": "16"},{"n": "高分好评","v": "21"}]},{"key": "pay","name": "资费","value": [{"n": "全部","v": "-1"},{"n": "免费","v": "867"},{"n": "会员","v": "6"}]},{"key": "year","name": "年代","value": [{"n": "全部","v": "-1"},{"n": "2024","v": "2024"},{"n": "2023","v": "2023"},{"n": "2022","v": "2022"},{"n": "2021","v": "2021"},{"n": "2020","v": "2020"},{"n": "2019","v": "2019"},{"n": "2018","v": "2018"},{"n": "2017","v": "2017"},{"n": "2016","v": "2016"},{"n": "2015","v": "2015"}]}]},
    headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.6261.95 Safari/537.36'
    },
    timeout:5000,
    cate_exclude:'会员|游戏|全部',
    class_name:'精选&电视剧&电影&综艺&动漫&少儿&纪录片',
    class_url:'choice&tv&movie&variety&cartoon&child&doco',
    limit:20,
    play_parse:true,
	lazy:`js:
        try {
            function getvideo(url) {
                let jData = JSON.parse(request(url, {
                    headers: getHeaders(url)
                }));
                return jData.url
            }
			let videoUrl = getvideo('http://139.224.73.238:16555/qq2.php?url=' + input);
			input = {
                jx: 0,
                url: videoUrl,
                parse: 0
            }
        } catch (e) {
            log(e.toString())
        }
	`,
    推荐:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级:'.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    二级:'js:VOD={};let d=[];let video_list=[];let video_lists=[];let list=[];let QZOutputJson;let html=fetch(input,fetch_params);let sourceId=/get_playsource/.test(input)?input.match(/id=(\\d*?)&/)[1]:input.split("cid=")[1];let cid=sourceId;let detailUrl="https://v.%71%71.com/detail/m/"+cid+".html";log("详情页:"+detailUrl);var pdfh=jsp.pdfh;var pd=jsp.pd;try{let json=JSON.parse(html);VOD={vod_url:input,vod_name:json.c.title,type_name:json.typ.join(","),vod_actor:json.nam.join(","),vod_year:json.c.year,vod_content:json.c.description,vod_remarks:json.rec,vod_pic:urljoin2(input,json.c.pic)}}catch(e){log("解析片名海报等基础信息发生错误:"+e.message)}if(/get_playsource/.test(input)){eval(html);let indexList=QZOutputJson.PlaylistItem.indexList;indexList.forEach(function(it){let dataUrl="https://s.video.qq.com/get_playsource?id="+sourceId+"&plat=2&type=4&data_type=3&range="+it+"&video_type=10&plname=qq&otype=json";eval(fetch(dataUrl,fetch_params));let vdata=QZOutputJson.PlaylistItem.videoPlayList;vdata.forEach(function(item){d.push({title:item.title,pic_url:item.pic,desc:item.episode_number+"\\t\\t\\t播放量："+item.thirdLine,url:item.playUrl})});video_lists=video_lists.concat(vdata)})}else{let json=JSON.parse(html);video_lists=json.c.video_ids;let url="https://v.qq.com/x/cover/"+sourceId+".html";if(video_lists.length===1){let vid=video_lists[0];url="https://v.qq.com/x/cover/"+cid+"/"+vid+".html";d.push({title:"在线播放",url:url})}else if(video_lists.length>1){for(let i=0;i<video_lists.length;i+=30){video_list.push(video_lists.slice(i,i+30))}video_list.forEach(function(it,idex){let o_url="https://union.video.qq.com/fcgi-bin/data?otype=json&tid=682&appid=20001238&appkey=6c03bbe9658448a4&union_platform=1&idlist="+it.join(",");let o_html=fetch(o_url,fetch_params);eval(o_html);QZOutputJson.results.forEach(function(it1){it1=it1.fields;let url="https://v.qq.com/x/cover/"+cid+"/"+it1.vid+".html";let parts=it1.series_part_title.split(" ")[1];d.push({title:parts?parts:it1.title,pic_url:it1.pic160x90.replace("/160",""),desc:it1.video_checkup_time,url:url,type:it1.category_map&&it1.category_map.length>1?it1.category_map[1]:""})})})}}let yg=d.filter(function(it){return it.type&&it.type!=="正片"});let zp=d.filter(function(it){return!(it.type&&it.type!=="正片")});VOD.vod_play_from=yg.length<1?"腾讯":"正片$$$预告及花絮";VOD.vod_play_url=yg.length<1?d.map(function(it){return it.title+"$"+it.url}).join("#"):[zp,yg].map(function(it){return it.map(function(its){return its.title+"$"+its.url}).join("#")}).join("$$$");',
    搜索: `js:
            let d = [];
            pdfa = jsp.pdfa;
            pdfh = jsp.pdfh;
            pd = jsp.pd;
            let html = request(input);
            let baseList = pdfa(html, "body&&.result_item_v");
            baseList.forEach(function(it) {
                let longText = pdfh(it, ".result_title&&Text");
                let shortText = pdfh(it, ".sub&&Text");
                let url = pd(it, "div.result_item_v&&data-id");
                let img = pd(it, ".figure_pic&&src");
                let fromTag = pdfh(it, ".result_source&&Text");
                let markAlt = pd(it, ".mark_v img&&alt"); 
                if (fromTag.match(/腾讯/) && shortText && !markAlt.match(/预告/)) {
                    d.push({
                        title: longText.split(shortText)[0],
                        img: img,
                        url: 'https://node.video.qq.com/x/api/float_vinfo2?cid=' + url,
                        desc: shortText.replace('(', "").replace(')', "")
                    })
               }     
            });
            setResult(d);
     `, 
    /*搜索: `js:
		let d = [];
		let html = request(input);
		let json = JSON.parse(html);
        json.data.areas[0].base_info.contents.forEach(content => {
                const pageSnapshot = content.common_single_info.main.action.pageSnapshot;
                let data = JSON.parse(request(pageSnapshot.url));                
                d.push({
                    url:  'https://node.video.qq.com/x/api/float_vinfo2?cid=' + data.base_info.cover_id,
                    title: data.base_info.title,
                    img: data.header.img_url_hz,
                    desc: data.header.sub_title
                })
            });        
		setResult(d);
     `, */      
}