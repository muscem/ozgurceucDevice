



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = null;
 
 
 var CS_env = {"profileUrl":null,"projectHomeUrl":"/a/eclipselabs.org/p/mobile-web-development-with-phonegap","token":null,"loggedInUserEmail":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","assetVersionPath":"http://www.gstatic.com/codesite/ph/16993219237270412160","domainName":"eclipselabs.org","projectName":"mobile-web-development-with-phonegap","relativeBaseUrl":"/a/eclipselabs.org"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-20478043-1'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>phonegap-1.0.0.js - 
 mobile-web-development-with-phonegap -
 
 
 AppLaud Eclipse plug-in to facilitate Web Developers creating mobile apps - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16993219237270412160/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16993219237270412160/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16993219237270412160/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/16993219237270412160/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 <a href="#" id="projects-dropdown" onclick="return false;"><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=http%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fphonegap%2Fjs%2Fphonegap-1.0.0.js%3Fr%3D99&amp;followup=http%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fphonegap%2Fjs%2Fphonegap-1.0.0.js%3Fr%3D99" onclick="_CS_click('/gb/ph/signin');"><u>Sign in</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap">
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/">
 
 
 <img src="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/logo?cct=1341553427"
 alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/"><span itemprop="name">mobile-web-development-with-phonegap</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/"><span itemprop="description">AppLaud Eclipse plug-in to facilitate Web Developers creating mobile apps</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/a/eclipselabs.org/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/list">Changes</a></span> &nbsp;
 
 &nbsp;
 
 
 <form action="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/search" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/?r=99">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/?r=99">trunk</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/?r=99">com.mds.apg</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/?r=99">resources</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/?r=99">phonegap</a><span class="sp">/&nbsp;</span><a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/js/?r=99">js</a><span class="sp">/&nbsp;</span>phonegap-1.0.0.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>r99</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn99_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn99_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn99_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn99_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn99_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn99_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn99_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn99_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn99_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn99_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn99_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn99_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn99_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn99_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn99_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn99_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn99_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn99_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn99_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn99_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn99_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn99_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn99_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn99_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn99_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn99_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn99_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn99_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn99_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn99_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn99_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn99_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn99_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn99_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn99_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn99_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn99_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn99_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn99_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn99_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn99_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn99_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn99_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn99_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn99_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn99_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn99_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn99_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn99_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn99_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn99_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn99_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn99_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn99_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn99_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn99_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn99_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn99_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn99_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn99_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn99_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn99_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn99_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn99_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn99_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn99_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn99_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn99_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn99_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn99_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn99_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn99_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn99_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn99_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn99_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn99_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn99_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn99_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn99_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn99_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn99_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn99_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn99_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn99_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn99_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn99_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn99_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn99_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn99_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn99_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn99_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn99_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn99_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn99_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn99_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn99_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn99_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn99_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn99_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn99_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn99_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn99_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn99_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn99_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn99_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn99_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn99_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn99_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn99_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn99_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn99_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn99_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn99_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn99_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn99_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn99_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn99_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn99_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn99_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn99_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn99_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn99_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn99_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn99_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn99_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn99_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn99_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn99_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn99_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn99_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn99_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn99_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn99_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn99_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn99_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn99_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn99_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn99_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn99_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn99_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn99_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn99_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn99_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn99_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn99_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn99_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn99_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn99_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn99_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn99_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn99_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn99_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn99_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn99_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn99_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn99_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn99_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn99_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn99_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn99_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn99_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn99_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn99_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn99_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn99_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn99_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn99_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn99_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn99_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn99_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn99_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn99_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn99_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn99_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn99_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn99_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn99_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn99_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn99_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn99_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn99_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn99_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn99_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn99_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn99_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn99_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn99_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn99_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn99_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn99_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn99_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn99_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn99_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn99_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn99_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn99_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn99_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn99_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn99_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn99_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn99_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn99_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn99_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn99_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn99_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn99_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn99_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn99_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn99_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn99_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn99_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn99_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn99_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn99_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn99_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn99_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn99_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn99_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn99_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn99_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn99_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn99_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn99_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn99_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn99_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn99_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn99_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn99_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn99_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn99_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn99_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn99_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn99_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn99_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn99_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn99_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn99_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn99_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn99_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn99_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn99_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn99_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn99_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn99_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn99_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn99_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn99_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn99_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn99_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn99_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn99_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn99_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn99_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn99_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn99_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn99_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn99_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn99_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn99_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn99_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn99_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn99_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn99_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn99_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn99_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn99_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn99_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn99_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn99_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn99_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn99_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn99_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn99_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn99_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn99_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn99_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn99_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn99_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn99_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn99_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn99_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn99_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn99_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn99_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn99_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn99_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn99_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn99_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn99_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn99_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn99_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn99_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn99_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn99_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn99_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn99_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn99_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn99_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn99_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn99_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn99_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn99_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn99_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn99_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn99_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn99_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn99_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn99_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn99_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn99_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn99_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn99_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn99_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn99_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn99_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn99_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn99_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn99_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn99_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn99_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn99_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn99_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn99_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn99_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn99_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn99_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn99_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn99_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn99_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn99_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn99_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn99_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn99_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn99_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn99_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn99_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn99_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn99_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn99_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn99_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn99_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn99_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn99_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn99_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn99_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn99_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn99_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn99_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn99_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn99_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn99_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn99_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn99_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn99_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn99_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn99_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn99_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn99_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn99_359"

><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn99_360"

><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn99_361"

><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn99_362"

><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn99_363"

><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn99_364"

><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn99_365"

><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn99_366"

><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn99_367"

><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn99_368"

><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn99_369"

><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn99_370"

><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn99_371"

><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn99_372"

><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn99_373"

><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn99_374"

><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn99_375"

><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn99_376"

><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn99_377"

><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn99_378"

><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn99_379"

><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn99_380"

><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn99_381"

><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn99_382"

><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn99_383"

><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn99_384"

><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn99_385"

><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn99_386"

><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn99_387"

><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn99_388"

><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn99_389"

><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn99_390"

><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn99_391"

><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn99_392"

><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn99_393"

><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn99_394"

><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn99_395"

><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn99_396"

><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn99_397"

><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn99_398"

><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn99_399"

><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn99_400"

><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn99_401"

><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn99_402"

><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn99_403"

><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn99_404"

><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn99_405"

><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn99_406"

><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn99_407"

><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn99_408"

><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn99_409"

><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn99_410"

><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn99_411"

><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn99_412"

><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn99_413"

><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn99_414"

><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn99_415"

><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn99_416"

><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn99_417"

><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn99_418"

><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn99_419"

><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn99_420"

><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn99_421"

><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn99_422"

><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn99_423"

><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn99_424"

><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn99_425"

><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn99_426"

><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn99_427"

><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn99_428"

><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn99_429"

><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn99_430"

><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn99_431"

><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn99_432"

><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn99_433"

><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn99_434"

><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn99_435"

><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn99_436"

><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn99_437"

><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn99_438"

><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn99_439"

><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn99_440"

><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn99_441"

><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn99_442"

><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn99_443"

><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn99_444"

><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn99_445"

><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn99_446"

><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn99_447"

><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn99_448"

><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn99_449"

><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn99_450"

><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn99_451"

><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn99_452"

><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn99_453"

><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn99_454"

><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn99_455"

><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn99_456"

><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn99_457"

><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn99_458"

><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn99_459"

><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn99_460"

><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn99_461"

><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn99_462"

><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn99_463"

><td id="463"><a href="#463">463</a></td></tr
><tr id="gr_svn99_464"

><td id="464"><a href="#464">464</a></td></tr
><tr id="gr_svn99_465"

><td id="465"><a href="#465">465</a></td></tr
><tr id="gr_svn99_466"

><td id="466"><a href="#466">466</a></td></tr
><tr id="gr_svn99_467"

><td id="467"><a href="#467">467</a></td></tr
><tr id="gr_svn99_468"

><td id="468"><a href="#468">468</a></td></tr
><tr id="gr_svn99_469"

><td id="469"><a href="#469">469</a></td></tr
><tr id="gr_svn99_470"

><td id="470"><a href="#470">470</a></td></tr
><tr id="gr_svn99_471"

><td id="471"><a href="#471">471</a></td></tr
><tr id="gr_svn99_472"

><td id="472"><a href="#472">472</a></td></tr
><tr id="gr_svn99_473"

><td id="473"><a href="#473">473</a></td></tr
><tr id="gr_svn99_474"

><td id="474"><a href="#474">474</a></td></tr
><tr id="gr_svn99_475"

><td id="475"><a href="#475">475</a></td></tr
><tr id="gr_svn99_476"

><td id="476"><a href="#476">476</a></td></tr
><tr id="gr_svn99_477"

><td id="477"><a href="#477">477</a></td></tr
><tr id="gr_svn99_478"

><td id="478"><a href="#478">478</a></td></tr
><tr id="gr_svn99_479"

><td id="479"><a href="#479">479</a></td></tr
><tr id="gr_svn99_480"

><td id="480"><a href="#480">480</a></td></tr
><tr id="gr_svn99_481"

><td id="481"><a href="#481">481</a></td></tr
><tr id="gr_svn99_482"

><td id="482"><a href="#482">482</a></td></tr
><tr id="gr_svn99_483"

><td id="483"><a href="#483">483</a></td></tr
><tr id="gr_svn99_484"

><td id="484"><a href="#484">484</a></td></tr
><tr id="gr_svn99_485"

><td id="485"><a href="#485">485</a></td></tr
><tr id="gr_svn99_486"

><td id="486"><a href="#486">486</a></td></tr
><tr id="gr_svn99_487"

><td id="487"><a href="#487">487</a></td></tr
><tr id="gr_svn99_488"

><td id="488"><a href="#488">488</a></td></tr
><tr id="gr_svn99_489"

><td id="489"><a href="#489">489</a></td></tr
><tr id="gr_svn99_490"

><td id="490"><a href="#490">490</a></td></tr
><tr id="gr_svn99_491"

><td id="491"><a href="#491">491</a></td></tr
><tr id="gr_svn99_492"

><td id="492"><a href="#492">492</a></td></tr
><tr id="gr_svn99_493"

><td id="493"><a href="#493">493</a></td></tr
><tr id="gr_svn99_494"

><td id="494"><a href="#494">494</a></td></tr
><tr id="gr_svn99_495"

><td id="495"><a href="#495">495</a></td></tr
><tr id="gr_svn99_496"

><td id="496"><a href="#496">496</a></td></tr
><tr id="gr_svn99_497"

><td id="497"><a href="#497">497</a></td></tr
><tr id="gr_svn99_498"

><td id="498"><a href="#498">498</a></td></tr
><tr id="gr_svn99_499"

><td id="499"><a href="#499">499</a></td></tr
><tr id="gr_svn99_500"

><td id="500"><a href="#500">500</a></td></tr
><tr id="gr_svn99_501"

><td id="501"><a href="#501">501</a></td></tr
><tr id="gr_svn99_502"

><td id="502"><a href="#502">502</a></td></tr
><tr id="gr_svn99_503"

><td id="503"><a href="#503">503</a></td></tr
><tr id="gr_svn99_504"

><td id="504"><a href="#504">504</a></td></tr
><tr id="gr_svn99_505"

><td id="505"><a href="#505">505</a></td></tr
><tr id="gr_svn99_506"

><td id="506"><a href="#506">506</a></td></tr
><tr id="gr_svn99_507"

><td id="507"><a href="#507">507</a></td></tr
><tr id="gr_svn99_508"

><td id="508"><a href="#508">508</a></td></tr
><tr id="gr_svn99_509"

><td id="509"><a href="#509">509</a></td></tr
><tr id="gr_svn99_510"

><td id="510"><a href="#510">510</a></td></tr
><tr id="gr_svn99_511"

><td id="511"><a href="#511">511</a></td></tr
><tr id="gr_svn99_512"

><td id="512"><a href="#512">512</a></td></tr
><tr id="gr_svn99_513"

><td id="513"><a href="#513">513</a></td></tr
><tr id="gr_svn99_514"

><td id="514"><a href="#514">514</a></td></tr
><tr id="gr_svn99_515"

><td id="515"><a href="#515">515</a></td></tr
><tr id="gr_svn99_516"

><td id="516"><a href="#516">516</a></td></tr
><tr id="gr_svn99_517"

><td id="517"><a href="#517">517</a></td></tr
><tr id="gr_svn99_518"

><td id="518"><a href="#518">518</a></td></tr
><tr id="gr_svn99_519"

><td id="519"><a href="#519">519</a></td></tr
><tr id="gr_svn99_520"

><td id="520"><a href="#520">520</a></td></tr
><tr id="gr_svn99_521"

><td id="521"><a href="#521">521</a></td></tr
><tr id="gr_svn99_522"

><td id="522"><a href="#522">522</a></td></tr
><tr id="gr_svn99_523"

><td id="523"><a href="#523">523</a></td></tr
><tr id="gr_svn99_524"

><td id="524"><a href="#524">524</a></td></tr
><tr id="gr_svn99_525"

><td id="525"><a href="#525">525</a></td></tr
><tr id="gr_svn99_526"

><td id="526"><a href="#526">526</a></td></tr
><tr id="gr_svn99_527"

><td id="527"><a href="#527">527</a></td></tr
><tr id="gr_svn99_528"

><td id="528"><a href="#528">528</a></td></tr
><tr id="gr_svn99_529"

><td id="529"><a href="#529">529</a></td></tr
><tr id="gr_svn99_530"

><td id="530"><a href="#530">530</a></td></tr
><tr id="gr_svn99_531"

><td id="531"><a href="#531">531</a></td></tr
><tr id="gr_svn99_532"

><td id="532"><a href="#532">532</a></td></tr
><tr id="gr_svn99_533"

><td id="533"><a href="#533">533</a></td></tr
><tr id="gr_svn99_534"

><td id="534"><a href="#534">534</a></td></tr
><tr id="gr_svn99_535"

><td id="535"><a href="#535">535</a></td></tr
><tr id="gr_svn99_536"

><td id="536"><a href="#536">536</a></td></tr
><tr id="gr_svn99_537"

><td id="537"><a href="#537">537</a></td></tr
><tr id="gr_svn99_538"

><td id="538"><a href="#538">538</a></td></tr
><tr id="gr_svn99_539"

><td id="539"><a href="#539">539</a></td></tr
><tr id="gr_svn99_540"

><td id="540"><a href="#540">540</a></td></tr
><tr id="gr_svn99_541"

><td id="541"><a href="#541">541</a></td></tr
><tr id="gr_svn99_542"

><td id="542"><a href="#542">542</a></td></tr
><tr id="gr_svn99_543"

><td id="543"><a href="#543">543</a></td></tr
><tr id="gr_svn99_544"

><td id="544"><a href="#544">544</a></td></tr
><tr id="gr_svn99_545"

><td id="545"><a href="#545">545</a></td></tr
><tr id="gr_svn99_546"

><td id="546"><a href="#546">546</a></td></tr
><tr id="gr_svn99_547"

><td id="547"><a href="#547">547</a></td></tr
><tr id="gr_svn99_548"

><td id="548"><a href="#548">548</a></td></tr
><tr id="gr_svn99_549"

><td id="549"><a href="#549">549</a></td></tr
><tr id="gr_svn99_550"

><td id="550"><a href="#550">550</a></td></tr
><tr id="gr_svn99_551"

><td id="551"><a href="#551">551</a></td></tr
><tr id="gr_svn99_552"

><td id="552"><a href="#552">552</a></td></tr
><tr id="gr_svn99_553"

><td id="553"><a href="#553">553</a></td></tr
><tr id="gr_svn99_554"

><td id="554"><a href="#554">554</a></td></tr
><tr id="gr_svn99_555"

><td id="555"><a href="#555">555</a></td></tr
><tr id="gr_svn99_556"

><td id="556"><a href="#556">556</a></td></tr
><tr id="gr_svn99_557"

><td id="557"><a href="#557">557</a></td></tr
><tr id="gr_svn99_558"

><td id="558"><a href="#558">558</a></td></tr
><tr id="gr_svn99_559"

><td id="559"><a href="#559">559</a></td></tr
><tr id="gr_svn99_560"

><td id="560"><a href="#560">560</a></td></tr
><tr id="gr_svn99_561"

><td id="561"><a href="#561">561</a></td></tr
><tr id="gr_svn99_562"

><td id="562"><a href="#562">562</a></td></tr
><tr id="gr_svn99_563"

><td id="563"><a href="#563">563</a></td></tr
><tr id="gr_svn99_564"

><td id="564"><a href="#564">564</a></td></tr
><tr id="gr_svn99_565"

><td id="565"><a href="#565">565</a></td></tr
><tr id="gr_svn99_566"

><td id="566"><a href="#566">566</a></td></tr
><tr id="gr_svn99_567"

><td id="567"><a href="#567">567</a></td></tr
><tr id="gr_svn99_568"

><td id="568"><a href="#568">568</a></td></tr
><tr id="gr_svn99_569"

><td id="569"><a href="#569">569</a></td></tr
><tr id="gr_svn99_570"

><td id="570"><a href="#570">570</a></td></tr
><tr id="gr_svn99_571"

><td id="571"><a href="#571">571</a></td></tr
><tr id="gr_svn99_572"

><td id="572"><a href="#572">572</a></td></tr
><tr id="gr_svn99_573"

><td id="573"><a href="#573">573</a></td></tr
><tr id="gr_svn99_574"

><td id="574"><a href="#574">574</a></td></tr
><tr id="gr_svn99_575"

><td id="575"><a href="#575">575</a></td></tr
><tr id="gr_svn99_576"

><td id="576"><a href="#576">576</a></td></tr
><tr id="gr_svn99_577"

><td id="577"><a href="#577">577</a></td></tr
><tr id="gr_svn99_578"

><td id="578"><a href="#578">578</a></td></tr
><tr id="gr_svn99_579"

><td id="579"><a href="#579">579</a></td></tr
><tr id="gr_svn99_580"

><td id="580"><a href="#580">580</a></td></tr
><tr id="gr_svn99_581"

><td id="581"><a href="#581">581</a></td></tr
><tr id="gr_svn99_582"

><td id="582"><a href="#582">582</a></td></tr
><tr id="gr_svn99_583"

><td id="583"><a href="#583">583</a></td></tr
><tr id="gr_svn99_584"

><td id="584"><a href="#584">584</a></td></tr
><tr id="gr_svn99_585"

><td id="585"><a href="#585">585</a></td></tr
><tr id="gr_svn99_586"

><td id="586"><a href="#586">586</a></td></tr
><tr id="gr_svn99_587"

><td id="587"><a href="#587">587</a></td></tr
><tr id="gr_svn99_588"

><td id="588"><a href="#588">588</a></td></tr
><tr id="gr_svn99_589"

><td id="589"><a href="#589">589</a></td></tr
><tr id="gr_svn99_590"

><td id="590"><a href="#590">590</a></td></tr
><tr id="gr_svn99_591"

><td id="591"><a href="#591">591</a></td></tr
><tr id="gr_svn99_592"

><td id="592"><a href="#592">592</a></td></tr
><tr id="gr_svn99_593"

><td id="593"><a href="#593">593</a></td></tr
><tr id="gr_svn99_594"

><td id="594"><a href="#594">594</a></td></tr
><tr id="gr_svn99_595"

><td id="595"><a href="#595">595</a></td></tr
><tr id="gr_svn99_596"

><td id="596"><a href="#596">596</a></td></tr
><tr id="gr_svn99_597"

><td id="597"><a href="#597">597</a></td></tr
><tr id="gr_svn99_598"

><td id="598"><a href="#598">598</a></td></tr
><tr id="gr_svn99_599"

><td id="599"><a href="#599">599</a></td></tr
><tr id="gr_svn99_600"

><td id="600"><a href="#600">600</a></td></tr
><tr id="gr_svn99_601"

><td id="601"><a href="#601">601</a></td></tr
><tr id="gr_svn99_602"

><td id="602"><a href="#602">602</a></td></tr
><tr id="gr_svn99_603"

><td id="603"><a href="#603">603</a></td></tr
><tr id="gr_svn99_604"

><td id="604"><a href="#604">604</a></td></tr
><tr id="gr_svn99_605"

><td id="605"><a href="#605">605</a></td></tr
><tr id="gr_svn99_606"

><td id="606"><a href="#606">606</a></td></tr
><tr id="gr_svn99_607"

><td id="607"><a href="#607">607</a></td></tr
><tr id="gr_svn99_608"

><td id="608"><a href="#608">608</a></td></tr
><tr id="gr_svn99_609"

><td id="609"><a href="#609">609</a></td></tr
><tr id="gr_svn99_610"

><td id="610"><a href="#610">610</a></td></tr
><tr id="gr_svn99_611"

><td id="611"><a href="#611">611</a></td></tr
><tr id="gr_svn99_612"

><td id="612"><a href="#612">612</a></td></tr
><tr id="gr_svn99_613"

><td id="613"><a href="#613">613</a></td></tr
><tr id="gr_svn99_614"

><td id="614"><a href="#614">614</a></td></tr
><tr id="gr_svn99_615"

><td id="615"><a href="#615">615</a></td></tr
><tr id="gr_svn99_616"

><td id="616"><a href="#616">616</a></td></tr
><tr id="gr_svn99_617"

><td id="617"><a href="#617">617</a></td></tr
><tr id="gr_svn99_618"

><td id="618"><a href="#618">618</a></td></tr
><tr id="gr_svn99_619"

><td id="619"><a href="#619">619</a></td></tr
><tr id="gr_svn99_620"

><td id="620"><a href="#620">620</a></td></tr
><tr id="gr_svn99_621"

><td id="621"><a href="#621">621</a></td></tr
><tr id="gr_svn99_622"

><td id="622"><a href="#622">622</a></td></tr
><tr id="gr_svn99_623"

><td id="623"><a href="#623">623</a></td></tr
><tr id="gr_svn99_624"

><td id="624"><a href="#624">624</a></td></tr
><tr id="gr_svn99_625"

><td id="625"><a href="#625">625</a></td></tr
><tr id="gr_svn99_626"

><td id="626"><a href="#626">626</a></td></tr
><tr id="gr_svn99_627"

><td id="627"><a href="#627">627</a></td></tr
><tr id="gr_svn99_628"

><td id="628"><a href="#628">628</a></td></tr
><tr id="gr_svn99_629"

><td id="629"><a href="#629">629</a></td></tr
><tr id="gr_svn99_630"

><td id="630"><a href="#630">630</a></td></tr
><tr id="gr_svn99_631"

><td id="631"><a href="#631">631</a></td></tr
><tr id="gr_svn99_632"

><td id="632"><a href="#632">632</a></td></tr
><tr id="gr_svn99_633"

><td id="633"><a href="#633">633</a></td></tr
><tr id="gr_svn99_634"

><td id="634"><a href="#634">634</a></td></tr
><tr id="gr_svn99_635"

><td id="635"><a href="#635">635</a></td></tr
><tr id="gr_svn99_636"

><td id="636"><a href="#636">636</a></td></tr
><tr id="gr_svn99_637"

><td id="637"><a href="#637">637</a></td></tr
><tr id="gr_svn99_638"

><td id="638"><a href="#638">638</a></td></tr
><tr id="gr_svn99_639"

><td id="639"><a href="#639">639</a></td></tr
><tr id="gr_svn99_640"

><td id="640"><a href="#640">640</a></td></tr
><tr id="gr_svn99_641"

><td id="641"><a href="#641">641</a></td></tr
><tr id="gr_svn99_642"

><td id="642"><a href="#642">642</a></td></tr
><tr id="gr_svn99_643"

><td id="643"><a href="#643">643</a></td></tr
><tr id="gr_svn99_644"

><td id="644"><a href="#644">644</a></td></tr
><tr id="gr_svn99_645"

><td id="645"><a href="#645">645</a></td></tr
><tr id="gr_svn99_646"

><td id="646"><a href="#646">646</a></td></tr
><tr id="gr_svn99_647"

><td id="647"><a href="#647">647</a></td></tr
><tr id="gr_svn99_648"

><td id="648"><a href="#648">648</a></td></tr
><tr id="gr_svn99_649"

><td id="649"><a href="#649">649</a></td></tr
><tr id="gr_svn99_650"

><td id="650"><a href="#650">650</a></td></tr
><tr id="gr_svn99_651"

><td id="651"><a href="#651">651</a></td></tr
><tr id="gr_svn99_652"

><td id="652"><a href="#652">652</a></td></tr
><tr id="gr_svn99_653"

><td id="653"><a href="#653">653</a></td></tr
><tr id="gr_svn99_654"

><td id="654"><a href="#654">654</a></td></tr
><tr id="gr_svn99_655"

><td id="655"><a href="#655">655</a></td></tr
><tr id="gr_svn99_656"

><td id="656"><a href="#656">656</a></td></tr
><tr id="gr_svn99_657"

><td id="657"><a href="#657">657</a></td></tr
><tr id="gr_svn99_658"

><td id="658"><a href="#658">658</a></td></tr
><tr id="gr_svn99_659"

><td id="659"><a href="#659">659</a></td></tr
><tr id="gr_svn99_660"

><td id="660"><a href="#660">660</a></td></tr
><tr id="gr_svn99_661"

><td id="661"><a href="#661">661</a></td></tr
><tr id="gr_svn99_662"

><td id="662"><a href="#662">662</a></td></tr
><tr id="gr_svn99_663"

><td id="663"><a href="#663">663</a></td></tr
><tr id="gr_svn99_664"

><td id="664"><a href="#664">664</a></td></tr
><tr id="gr_svn99_665"

><td id="665"><a href="#665">665</a></td></tr
><tr id="gr_svn99_666"

><td id="666"><a href="#666">666</a></td></tr
><tr id="gr_svn99_667"

><td id="667"><a href="#667">667</a></td></tr
><tr id="gr_svn99_668"

><td id="668"><a href="#668">668</a></td></tr
><tr id="gr_svn99_669"

><td id="669"><a href="#669">669</a></td></tr
><tr id="gr_svn99_670"

><td id="670"><a href="#670">670</a></td></tr
><tr id="gr_svn99_671"

><td id="671"><a href="#671">671</a></td></tr
><tr id="gr_svn99_672"

><td id="672"><a href="#672">672</a></td></tr
><tr id="gr_svn99_673"

><td id="673"><a href="#673">673</a></td></tr
><tr id="gr_svn99_674"

><td id="674"><a href="#674">674</a></td></tr
><tr id="gr_svn99_675"

><td id="675"><a href="#675">675</a></td></tr
><tr id="gr_svn99_676"

><td id="676"><a href="#676">676</a></td></tr
><tr id="gr_svn99_677"

><td id="677"><a href="#677">677</a></td></tr
><tr id="gr_svn99_678"

><td id="678"><a href="#678">678</a></td></tr
><tr id="gr_svn99_679"

><td id="679"><a href="#679">679</a></td></tr
><tr id="gr_svn99_680"

><td id="680"><a href="#680">680</a></td></tr
><tr id="gr_svn99_681"

><td id="681"><a href="#681">681</a></td></tr
><tr id="gr_svn99_682"

><td id="682"><a href="#682">682</a></td></tr
><tr id="gr_svn99_683"

><td id="683"><a href="#683">683</a></td></tr
><tr id="gr_svn99_684"

><td id="684"><a href="#684">684</a></td></tr
><tr id="gr_svn99_685"

><td id="685"><a href="#685">685</a></td></tr
><tr id="gr_svn99_686"

><td id="686"><a href="#686">686</a></td></tr
><tr id="gr_svn99_687"

><td id="687"><a href="#687">687</a></td></tr
><tr id="gr_svn99_688"

><td id="688"><a href="#688">688</a></td></tr
><tr id="gr_svn99_689"

><td id="689"><a href="#689">689</a></td></tr
><tr id="gr_svn99_690"

><td id="690"><a href="#690">690</a></td></tr
><tr id="gr_svn99_691"

><td id="691"><a href="#691">691</a></td></tr
><tr id="gr_svn99_692"

><td id="692"><a href="#692">692</a></td></tr
><tr id="gr_svn99_693"

><td id="693"><a href="#693">693</a></td></tr
><tr id="gr_svn99_694"

><td id="694"><a href="#694">694</a></td></tr
><tr id="gr_svn99_695"

><td id="695"><a href="#695">695</a></td></tr
><tr id="gr_svn99_696"

><td id="696"><a href="#696">696</a></td></tr
><tr id="gr_svn99_697"

><td id="697"><a href="#697">697</a></td></tr
><tr id="gr_svn99_698"

><td id="698"><a href="#698">698</a></td></tr
><tr id="gr_svn99_699"

><td id="699"><a href="#699">699</a></td></tr
><tr id="gr_svn99_700"

><td id="700"><a href="#700">700</a></td></tr
><tr id="gr_svn99_701"

><td id="701"><a href="#701">701</a></td></tr
><tr id="gr_svn99_702"

><td id="702"><a href="#702">702</a></td></tr
><tr id="gr_svn99_703"

><td id="703"><a href="#703">703</a></td></tr
><tr id="gr_svn99_704"

><td id="704"><a href="#704">704</a></td></tr
><tr id="gr_svn99_705"

><td id="705"><a href="#705">705</a></td></tr
><tr id="gr_svn99_706"

><td id="706"><a href="#706">706</a></td></tr
><tr id="gr_svn99_707"

><td id="707"><a href="#707">707</a></td></tr
><tr id="gr_svn99_708"

><td id="708"><a href="#708">708</a></td></tr
><tr id="gr_svn99_709"

><td id="709"><a href="#709">709</a></td></tr
><tr id="gr_svn99_710"

><td id="710"><a href="#710">710</a></td></tr
><tr id="gr_svn99_711"

><td id="711"><a href="#711">711</a></td></tr
><tr id="gr_svn99_712"

><td id="712"><a href="#712">712</a></td></tr
><tr id="gr_svn99_713"

><td id="713"><a href="#713">713</a></td></tr
><tr id="gr_svn99_714"

><td id="714"><a href="#714">714</a></td></tr
><tr id="gr_svn99_715"

><td id="715"><a href="#715">715</a></td></tr
><tr id="gr_svn99_716"

><td id="716"><a href="#716">716</a></td></tr
><tr id="gr_svn99_717"

><td id="717"><a href="#717">717</a></td></tr
><tr id="gr_svn99_718"

><td id="718"><a href="#718">718</a></td></tr
><tr id="gr_svn99_719"

><td id="719"><a href="#719">719</a></td></tr
><tr id="gr_svn99_720"

><td id="720"><a href="#720">720</a></td></tr
><tr id="gr_svn99_721"

><td id="721"><a href="#721">721</a></td></tr
><tr id="gr_svn99_722"

><td id="722"><a href="#722">722</a></td></tr
><tr id="gr_svn99_723"

><td id="723"><a href="#723">723</a></td></tr
><tr id="gr_svn99_724"

><td id="724"><a href="#724">724</a></td></tr
><tr id="gr_svn99_725"

><td id="725"><a href="#725">725</a></td></tr
><tr id="gr_svn99_726"

><td id="726"><a href="#726">726</a></td></tr
><tr id="gr_svn99_727"

><td id="727"><a href="#727">727</a></td></tr
><tr id="gr_svn99_728"

><td id="728"><a href="#728">728</a></td></tr
><tr id="gr_svn99_729"

><td id="729"><a href="#729">729</a></td></tr
><tr id="gr_svn99_730"

><td id="730"><a href="#730">730</a></td></tr
><tr id="gr_svn99_731"

><td id="731"><a href="#731">731</a></td></tr
><tr id="gr_svn99_732"

><td id="732"><a href="#732">732</a></td></tr
><tr id="gr_svn99_733"

><td id="733"><a href="#733">733</a></td></tr
><tr id="gr_svn99_734"

><td id="734"><a href="#734">734</a></td></tr
><tr id="gr_svn99_735"

><td id="735"><a href="#735">735</a></td></tr
><tr id="gr_svn99_736"

><td id="736"><a href="#736">736</a></td></tr
><tr id="gr_svn99_737"

><td id="737"><a href="#737">737</a></td></tr
><tr id="gr_svn99_738"

><td id="738"><a href="#738">738</a></td></tr
><tr id="gr_svn99_739"

><td id="739"><a href="#739">739</a></td></tr
><tr id="gr_svn99_740"

><td id="740"><a href="#740">740</a></td></tr
><tr id="gr_svn99_741"

><td id="741"><a href="#741">741</a></td></tr
><tr id="gr_svn99_742"

><td id="742"><a href="#742">742</a></td></tr
><tr id="gr_svn99_743"

><td id="743"><a href="#743">743</a></td></tr
><tr id="gr_svn99_744"

><td id="744"><a href="#744">744</a></td></tr
><tr id="gr_svn99_745"

><td id="745"><a href="#745">745</a></td></tr
><tr id="gr_svn99_746"

><td id="746"><a href="#746">746</a></td></tr
><tr id="gr_svn99_747"

><td id="747"><a href="#747">747</a></td></tr
><tr id="gr_svn99_748"

><td id="748"><a href="#748">748</a></td></tr
><tr id="gr_svn99_749"

><td id="749"><a href="#749">749</a></td></tr
><tr id="gr_svn99_750"

><td id="750"><a href="#750">750</a></td></tr
><tr id="gr_svn99_751"

><td id="751"><a href="#751">751</a></td></tr
><tr id="gr_svn99_752"

><td id="752"><a href="#752">752</a></td></tr
><tr id="gr_svn99_753"

><td id="753"><a href="#753">753</a></td></tr
><tr id="gr_svn99_754"

><td id="754"><a href="#754">754</a></td></tr
><tr id="gr_svn99_755"

><td id="755"><a href="#755">755</a></td></tr
><tr id="gr_svn99_756"

><td id="756"><a href="#756">756</a></td></tr
><tr id="gr_svn99_757"

><td id="757"><a href="#757">757</a></td></tr
><tr id="gr_svn99_758"

><td id="758"><a href="#758">758</a></td></tr
><tr id="gr_svn99_759"

><td id="759"><a href="#759">759</a></td></tr
><tr id="gr_svn99_760"

><td id="760"><a href="#760">760</a></td></tr
><tr id="gr_svn99_761"

><td id="761"><a href="#761">761</a></td></tr
><tr id="gr_svn99_762"

><td id="762"><a href="#762">762</a></td></tr
><tr id="gr_svn99_763"

><td id="763"><a href="#763">763</a></td></tr
><tr id="gr_svn99_764"

><td id="764"><a href="#764">764</a></td></tr
><tr id="gr_svn99_765"

><td id="765"><a href="#765">765</a></td></tr
><tr id="gr_svn99_766"

><td id="766"><a href="#766">766</a></td></tr
><tr id="gr_svn99_767"

><td id="767"><a href="#767">767</a></td></tr
><tr id="gr_svn99_768"

><td id="768"><a href="#768">768</a></td></tr
><tr id="gr_svn99_769"

><td id="769"><a href="#769">769</a></td></tr
><tr id="gr_svn99_770"

><td id="770"><a href="#770">770</a></td></tr
><tr id="gr_svn99_771"

><td id="771"><a href="#771">771</a></td></tr
><tr id="gr_svn99_772"

><td id="772"><a href="#772">772</a></td></tr
><tr id="gr_svn99_773"

><td id="773"><a href="#773">773</a></td></tr
><tr id="gr_svn99_774"

><td id="774"><a href="#774">774</a></td></tr
><tr id="gr_svn99_775"

><td id="775"><a href="#775">775</a></td></tr
><tr id="gr_svn99_776"

><td id="776"><a href="#776">776</a></td></tr
><tr id="gr_svn99_777"

><td id="777"><a href="#777">777</a></td></tr
><tr id="gr_svn99_778"

><td id="778"><a href="#778">778</a></td></tr
><tr id="gr_svn99_779"

><td id="779"><a href="#779">779</a></td></tr
><tr id="gr_svn99_780"

><td id="780"><a href="#780">780</a></td></tr
><tr id="gr_svn99_781"

><td id="781"><a href="#781">781</a></td></tr
><tr id="gr_svn99_782"

><td id="782"><a href="#782">782</a></td></tr
><tr id="gr_svn99_783"

><td id="783"><a href="#783">783</a></td></tr
><tr id="gr_svn99_784"

><td id="784"><a href="#784">784</a></td></tr
><tr id="gr_svn99_785"

><td id="785"><a href="#785">785</a></td></tr
><tr id="gr_svn99_786"

><td id="786"><a href="#786">786</a></td></tr
><tr id="gr_svn99_787"

><td id="787"><a href="#787">787</a></td></tr
><tr id="gr_svn99_788"

><td id="788"><a href="#788">788</a></td></tr
><tr id="gr_svn99_789"

><td id="789"><a href="#789">789</a></td></tr
><tr id="gr_svn99_790"

><td id="790"><a href="#790">790</a></td></tr
><tr id="gr_svn99_791"

><td id="791"><a href="#791">791</a></td></tr
><tr id="gr_svn99_792"

><td id="792"><a href="#792">792</a></td></tr
><tr id="gr_svn99_793"

><td id="793"><a href="#793">793</a></td></tr
><tr id="gr_svn99_794"

><td id="794"><a href="#794">794</a></td></tr
><tr id="gr_svn99_795"

><td id="795"><a href="#795">795</a></td></tr
><tr id="gr_svn99_796"

><td id="796"><a href="#796">796</a></td></tr
><tr id="gr_svn99_797"

><td id="797"><a href="#797">797</a></td></tr
><tr id="gr_svn99_798"

><td id="798"><a href="#798">798</a></td></tr
><tr id="gr_svn99_799"

><td id="799"><a href="#799">799</a></td></tr
><tr id="gr_svn99_800"

><td id="800"><a href="#800">800</a></td></tr
><tr id="gr_svn99_801"

><td id="801"><a href="#801">801</a></td></tr
><tr id="gr_svn99_802"

><td id="802"><a href="#802">802</a></td></tr
><tr id="gr_svn99_803"

><td id="803"><a href="#803">803</a></td></tr
><tr id="gr_svn99_804"

><td id="804"><a href="#804">804</a></td></tr
><tr id="gr_svn99_805"

><td id="805"><a href="#805">805</a></td></tr
><tr id="gr_svn99_806"

><td id="806"><a href="#806">806</a></td></tr
><tr id="gr_svn99_807"

><td id="807"><a href="#807">807</a></td></tr
><tr id="gr_svn99_808"

><td id="808"><a href="#808">808</a></td></tr
><tr id="gr_svn99_809"

><td id="809"><a href="#809">809</a></td></tr
><tr id="gr_svn99_810"

><td id="810"><a href="#810">810</a></td></tr
><tr id="gr_svn99_811"

><td id="811"><a href="#811">811</a></td></tr
><tr id="gr_svn99_812"

><td id="812"><a href="#812">812</a></td></tr
><tr id="gr_svn99_813"

><td id="813"><a href="#813">813</a></td></tr
><tr id="gr_svn99_814"

><td id="814"><a href="#814">814</a></td></tr
><tr id="gr_svn99_815"

><td id="815"><a href="#815">815</a></td></tr
><tr id="gr_svn99_816"

><td id="816"><a href="#816">816</a></td></tr
><tr id="gr_svn99_817"

><td id="817"><a href="#817">817</a></td></tr
><tr id="gr_svn99_818"

><td id="818"><a href="#818">818</a></td></tr
><tr id="gr_svn99_819"

><td id="819"><a href="#819">819</a></td></tr
><tr id="gr_svn99_820"

><td id="820"><a href="#820">820</a></td></tr
><tr id="gr_svn99_821"

><td id="821"><a href="#821">821</a></td></tr
><tr id="gr_svn99_822"

><td id="822"><a href="#822">822</a></td></tr
><tr id="gr_svn99_823"

><td id="823"><a href="#823">823</a></td></tr
><tr id="gr_svn99_824"

><td id="824"><a href="#824">824</a></td></tr
><tr id="gr_svn99_825"

><td id="825"><a href="#825">825</a></td></tr
><tr id="gr_svn99_826"

><td id="826"><a href="#826">826</a></td></tr
><tr id="gr_svn99_827"

><td id="827"><a href="#827">827</a></td></tr
><tr id="gr_svn99_828"

><td id="828"><a href="#828">828</a></td></tr
><tr id="gr_svn99_829"

><td id="829"><a href="#829">829</a></td></tr
><tr id="gr_svn99_830"

><td id="830"><a href="#830">830</a></td></tr
><tr id="gr_svn99_831"

><td id="831"><a href="#831">831</a></td></tr
><tr id="gr_svn99_832"

><td id="832"><a href="#832">832</a></td></tr
><tr id="gr_svn99_833"

><td id="833"><a href="#833">833</a></td></tr
><tr id="gr_svn99_834"

><td id="834"><a href="#834">834</a></td></tr
><tr id="gr_svn99_835"

><td id="835"><a href="#835">835</a></td></tr
><tr id="gr_svn99_836"

><td id="836"><a href="#836">836</a></td></tr
><tr id="gr_svn99_837"

><td id="837"><a href="#837">837</a></td></tr
><tr id="gr_svn99_838"

><td id="838"><a href="#838">838</a></td></tr
><tr id="gr_svn99_839"

><td id="839"><a href="#839">839</a></td></tr
><tr id="gr_svn99_840"

><td id="840"><a href="#840">840</a></td></tr
><tr id="gr_svn99_841"

><td id="841"><a href="#841">841</a></td></tr
><tr id="gr_svn99_842"

><td id="842"><a href="#842">842</a></td></tr
><tr id="gr_svn99_843"

><td id="843"><a href="#843">843</a></td></tr
><tr id="gr_svn99_844"

><td id="844"><a href="#844">844</a></td></tr
><tr id="gr_svn99_845"

><td id="845"><a href="#845">845</a></td></tr
><tr id="gr_svn99_846"

><td id="846"><a href="#846">846</a></td></tr
><tr id="gr_svn99_847"

><td id="847"><a href="#847">847</a></td></tr
><tr id="gr_svn99_848"

><td id="848"><a href="#848">848</a></td></tr
><tr id="gr_svn99_849"

><td id="849"><a href="#849">849</a></td></tr
><tr id="gr_svn99_850"

><td id="850"><a href="#850">850</a></td></tr
><tr id="gr_svn99_851"

><td id="851"><a href="#851">851</a></td></tr
><tr id="gr_svn99_852"

><td id="852"><a href="#852">852</a></td></tr
><tr id="gr_svn99_853"

><td id="853"><a href="#853">853</a></td></tr
><tr id="gr_svn99_854"

><td id="854"><a href="#854">854</a></td></tr
><tr id="gr_svn99_855"

><td id="855"><a href="#855">855</a></td></tr
><tr id="gr_svn99_856"

><td id="856"><a href="#856">856</a></td></tr
><tr id="gr_svn99_857"

><td id="857"><a href="#857">857</a></td></tr
><tr id="gr_svn99_858"

><td id="858"><a href="#858">858</a></td></tr
><tr id="gr_svn99_859"

><td id="859"><a href="#859">859</a></td></tr
><tr id="gr_svn99_860"

><td id="860"><a href="#860">860</a></td></tr
><tr id="gr_svn99_861"

><td id="861"><a href="#861">861</a></td></tr
><tr id="gr_svn99_862"

><td id="862"><a href="#862">862</a></td></tr
><tr id="gr_svn99_863"

><td id="863"><a href="#863">863</a></td></tr
><tr id="gr_svn99_864"

><td id="864"><a href="#864">864</a></td></tr
><tr id="gr_svn99_865"

><td id="865"><a href="#865">865</a></td></tr
><tr id="gr_svn99_866"

><td id="866"><a href="#866">866</a></td></tr
><tr id="gr_svn99_867"

><td id="867"><a href="#867">867</a></td></tr
><tr id="gr_svn99_868"

><td id="868"><a href="#868">868</a></td></tr
><tr id="gr_svn99_869"

><td id="869"><a href="#869">869</a></td></tr
><tr id="gr_svn99_870"

><td id="870"><a href="#870">870</a></td></tr
><tr id="gr_svn99_871"

><td id="871"><a href="#871">871</a></td></tr
><tr id="gr_svn99_872"

><td id="872"><a href="#872">872</a></td></tr
><tr id="gr_svn99_873"

><td id="873"><a href="#873">873</a></td></tr
><tr id="gr_svn99_874"

><td id="874"><a href="#874">874</a></td></tr
><tr id="gr_svn99_875"

><td id="875"><a href="#875">875</a></td></tr
><tr id="gr_svn99_876"

><td id="876"><a href="#876">876</a></td></tr
><tr id="gr_svn99_877"

><td id="877"><a href="#877">877</a></td></tr
><tr id="gr_svn99_878"

><td id="878"><a href="#878">878</a></td></tr
><tr id="gr_svn99_879"

><td id="879"><a href="#879">879</a></td></tr
><tr id="gr_svn99_880"

><td id="880"><a href="#880">880</a></td></tr
><tr id="gr_svn99_881"

><td id="881"><a href="#881">881</a></td></tr
><tr id="gr_svn99_882"

><td id="882"><a href="#882">882</a></td></tr
><tr id="gr_svn99_883"

><td id="883"><a href="#883">883</a></td></tr
><tr id="gr_svn99_884"

><td id="884"><a href="#884">884</a></td></tr
><tr id="gr_svn99_885"

><td id="885"><a href="#885">885</a></td></tr
><tr id="gr_svn99_886"

><td id="886"><a href="#886">886</a></td></tr
><tr id="gr_svn99_887"

><td id="887"><a href="#887">887</a></td></tr
><tr id="gr_svn99_888"

><td id="888"><a href="#888">888</a></td></tr
><tr id="gr_svn99_889"

><td id="889"><a href="#889">889</a></td></tr
><tr id="gr_svn99_890"

><td id="890"><a href="#890">890</a></td></tr
><tr id="gr_svn99_891"

><td id="891"><a href="#891">891</a></td></tr
><tr id="gr_svn99_892"

><td id="892"><a href="#892">892</a></td></tr
><tr id="gr_svn99_893"

><td id="893"><a href="#893">893</a></td></tr
><tr id="gr_svn99_894"

><td id="894"><a href="#894">894</a></td></tr
><tr id="gr_svn99_895"

><td id="895"><a href="#895">895</a></td></tr
><tr id="gr_svn99_896"

><td id="896"><a href="#896">896</a></td></tr
><tr id="gr_svn99_897"

><td id="897"><a href="#897">897</a></td></tr
><tr id="gr_svn99_898"

><td id="898"><a href="#898">898</a></td></tr
><tr id="gr_svn99_899"

><td id="899"><a href="#899">899</a></td></tr
><tr id="gr_svn99_900"

><td id="900"><a href="#900">900</a></td></tr
><tr id="gr_svn99_901"

><td id="901"><a href="#901">901</a></td></tr
><tr id="gr_svn99_902"

><td id="902"><a href="#902">902</a></td></tr
><tr id="gr_svn99_903"

><td id="903"><a href="#903">903</a></td></tr
><tr id="gr_svn99_904"

><td id="904"><a href="#904">904</a></td></tr
><tr id="gr_svn99_905"

><td id="905"><a href="#905">905</a></td></tr
><tr id="gr_svn99_906"

><td id="906"><a href="#906">906</a></td></tr
><tr id="gr_svn99_907"

><td id="907"><a href="#907">907</a></td></tr
><tr id="gr_svn99_908"

><td id="908"><a href="#908">908</a></td></tr
><tr id="gr_svn99_909"

><td id="909"><a href="#909">909</a></td></tr
><tr id="gr_svn99_910"

><td id="910"><a href="#910">910</a></td></tr
><tr id="gr_svn99_911"

><td id="911"><a href="#911">911</a></td></tr
><tr id="gr_svn99_912"

><td id="912"><a href="#912">912</a></td></tr
><tr id="gr_svn99_913"

><td id="913"><a href="#913">913</a></td></tr
><tr id="gr_svn99_914"

><td id="914"><a href="#914">914</a></td></tr
><tr id="gr_svn99_915"

><td id="915"><a href="#915">915</a></td></tr
><tr id="gr_svn99_916"

><td id="916"><a href="#916">916</a></td></tr
><tr id="gr_svn99_917"

><td id="917"><a href="#917">917</a></td></tr
><tr id="gr_svn99_918"

><td id="918"><a href="#918">918</a></td></tr
><tr id="gr_svn99_919"

><td id="919"><a href="#919">919</a></td></tr
><tr id="gr_svn99_920"

><td id="920"><a href="#920">920</a></td></tr
><tr id="gr_svn99_921"

><td id="921"><a href="#921">921</a></td></tr
><tr id="gr_svn99_922"

><td id="922"><a href="#922">922</a></td></tr
><tr id="gr_svn99_923"

><td id="923"><a href="#923">923</a></td></tr
><tr id="gr_svn99_924"

><td id="924"><a href="#924">924</a></td></tr
><tr id="gr_svn99_925"

><td id="925"><a href="#925">925</a></td></tr
><tr id="gr_svn99_926"

><td id="926"><a href="#926">926</a></td></tr
><tr id="gr_svn99_927"

><td id="927"><a href="#927">927</a></td></tr
><tr id="gr_svn99_928"

><td id="928"><a href="#928">928</a></td></tr
><tr id="gr_svn99_929"

><td id="929"><a href="#929">929</a></td></tr
><tr id="gr_svn99_930"

><td id="930"><a href="#930">930</a></td></tr
><tr id="gr_svn99_931"

><td id="931"><a href="#931">931</a></td></tr
><tr id="gr_svn99_932"

><td id="932"><a href="#932">932</a></td></tr
><tr id="gr_svn99_933"

><td id="933"><a href="#933">933</a></td></tr
><tr id="gr_svn99_934"

><td id="934"><a href="#934">934</a></td></tr
><tr id="gr_svn99_935"

><td id="935"><a href="#935">935</a></td></tr
><tr id="gr_svn99_936"

><td id="936"><a href="#936">936</a></td></tr
><tr id="gr_svn99_937"

><td id="937"><a href="#937">937</a></td></tr
><tr id="gr_svn99_938"

><td id="938"><a href="#938">938</a></td></tr
><tr id="gr_svn99_939"

><td id="939"><a href="#939">939</a></td></tr
><tr id="gr_svn99_940"

><td id="940"><a href="#940">940</a></td></tr
><tr id="gr_svn99_941"

><td id="941"><a href="#941">941</a></td></tr
><tr id="gr_svn99_942"

><td id="942"><a href="#942">942</a></td></tr
><tr id="gr_svn99_943"

><td id="943"><a href="#943">943</a></td></tr
><tr id="gr_svn99_944"

><td id="944"><a href="#944">944</a></td></tr
><tr id="gr_svn99_945"

><td id="945"><a href="#945">945</a></td></tr
><tr id="gr_svn99_946"

><td id="946"><a href="#946">946</a></td></tr
><tr id="gr_svn99_947"

><td id="947"><a href="#947">947</a></td></tr
><tr id="gr_svn99_948"

><td id="948"><a href="#948">948</a></td></tr
><tr id="gr_svn99_949"

><td id="949"><a href="#949">949</a></td></tr
><tr id="gr_svn99_950"

><td id="950"><a href="#950">950</a></td></tr
><tr id="gr_svn99_951"

><td id="951"><a href="#951">951</a></td></tr
><tr id="gr_svn99_952"

><td id="952"><a href="#952">952</a></td></tr
><tr id="gr_svn99_953"

><td id="953"><a href="#953">953</a></td></tr
><tr id="gr_svn99_954"

><td id="954"><a href="#954">954</a></td></tr
><tr id="gr_svn99_955"

><td id="955"><a href="#955">955</a></td></tr
><tr id="gr_svn99_956"

><td id="956"><a href="#956">956</a></td></tr
><tr id="gr_svn99_957"

><td id="957"><a href="#957">957</a></td></tr
><tr id="gr_svn99_958"

><td id="958"><a href="#958">958</a></td></tr
><tr id="gr_svn99_959"

><td id="959"><a href="#959">959</a></td></tr
><tr id="gr_svn99_960"

><td id="960"><a href="#960">960</a></td></tr
><tr id="gr_svn99_961"

><td id="961"><a href="#961">961</a></td></tr
><tr id="gr_svn99_962"

><td id="962"><a href="#962">962</a></td></tr
><tr id="gr_svn99_963"

><td id="963"><a href="#963">963</a></td></tr
><tr id="gr_svn99_964"

><td id="964"><a href="#964">964</a></td></tr
><tr id="gr_svn99_965"

><td id="965"><a href="#965">965</a></td></tr
><tr id="gr_svn99_966"

><td id="966"><a href="#966">966</a></td></tr
><tr id="gr_svn99_967"

><td id="967"><a href="#967">967</a></td></tr
><tr id="gr_svn99_968"

><td id="968"><a href="#968">968</a></td></tr
><tr id="gr_svn99_969"

><td id="969"><a href="#969">969</a></td></tr
><tr id="gr_svn99_970"

><td id="970"><a href="#970">970</a></td></tr
><tr id="gr_svn99_971"

><td id="971"><a href="#971">971</a></td></tr
><tr id="gr_svn99_972"

><td id="972"><a href="#972">972</a></td></tr
><tr id="gr_svn99_973"

><td id="973"><a href="#973">973</a></td></tr
><tr id="gr_svn99_974"

><td id="974"><a href="#974">974</a></td></tr
><tr id="gr_svn99_975"

><td id="975"><a href="#975">975</a></td></tr
><tr id="gr_svn99_976"

><td id="976"><a href="#976">976</a></td></tr
><tr id="gr_svn99_977"

><td id="977"><a href="#977">977</a></td></tr
><tr id="gr_svn99_978"

><td id="978"><a href="#978">978</a></td></tr
><tr id="gr_svn99_979"

><td id="979"><a href="#979">979</a></td></tr
><tr id="gr_svn99_980"

><td id="980"><a href="#980">980</a></td></tr
><tr id="gr_svn99_981"

><td id="981"><a href="#981">981</a></td></tr
><tr id="gr_svn99_982"

><td id="982"><a href="#982">982</a></td></tr
><tr id="gr_svn99_983"

><td id="983"><a href="#983">983</a></td></tr
><tr id="gr_svn99_984"

><td id="984"><a href="#984">984</a></td></tr
><tr id="gr_svn99_985"

><td id="985"><a href="#985">985</a></td></tr
><tr id="gr_svn99_986"

><td id="986"><a href="#986">986</a></td></tr
><tr id="gr_svn99_987"

><td id="987"><a href="#987">987</a></td></tr
><tr id="gr_svn99_988"

><td id="988"><a href="#988">988</a></td></tr
><tr id="gr_svn99_989"

><td id="989"><a href="#989">989</a></td></tr
><tr id="gr_svn99_990"

><td id="990"><a href="#990">990</a></td></tr
><tr id="gr_svn99_991"

><td id="991"><a href="#991">991</a></td></tr
><tr id="gr_svn99_992"

><td id="992"><a href="#992">992</a></td></tr
><tr id="gr_svn99_993"

><td id="993"><a href="#993">993</a></td></tr
><tr id="gr_svn99_994"

><td id="994"><a href="#994">994</a></td></tr
><tr id="gr_svn99_995"

><td id="995"><a href="#995">995</a></td></tr
><tr id="gr_svn99_996"

><td id="996"><a href="#996">996</a></td></tr
><tr id="gr_svn99_997"

><td id="997"><a href="#997">997</a></td></tr
><tr id="gr_svn99_998"

><td id="998"><a href="#998">998</a></td></tr
><tr id="gr_svn99_999"

><td id="999"><a href="#999">999</a></td></tr
><tr id="gr_svn99_1000"

><td id="1000"><a href="#1000">1000</a></td></tr
><tr id="gr_svn99_1001"

><td id="1001"><a href="#1001">1001</a></td></tr
><tr id="gr_svn99_1002"

><td id="1002"><a href="#1002">1002</a></td></tr
><tr id="gr_svn99_1003"

><td id="1003"><a href="#1003">1003</a></td></tr
><tr id="gr_svn99_1004"

><td id="1004"><a href="#1004">1004</a></td></tr
><tr id="gr_svn99_1005"

><td id="1005"><a href="#1005">1005</a></td></tr
><tr id="gr_svn99_1006"

><td id="1006"><a href="#1006">1006</a></td></tr
><tr id="gr_svn99_1007"

><td id="1007"><a href="#1007">1007</a></td></tr
><tr id="gr_svn99_1008"

><td id="1008"><a href="#1008">1008</a></td></tr
><tr id="gr_svn99_1009"

><td id="1009"><a href="#1009">1009</a></td></tr
><tr id="gr_svn99_1010"

><td id="1010"><a href="#1010">1010</a></td></tr
><tr id="gr_svn99_1011"

><td id="1011"><a href="#1011">1011</a></td></tr
><tr id="gr_svn99_1012"

><td id="1012"><a href="#1012">1012</a></td></tr
><tr id="gr_svn99_1013"

><td id="1013"><a href="#1013">1013</a></td></tr
><tr id="gr_svn99_1014"

><td id="1014"><a href="#1014">1014</a></td></tr
><tr id="gr_svn99_1015"

><td id="1015"><a href="#1015">1015</a></td></tr
><tr id="gr_svn99_1016"

><td id="1016"><a href="#1016">1016</a></td></tr
><tr id="gr_svn99_1017"

><td id="1017"><a href="#1017">1017</a></td></tr
><tr id="gr_svn99_1018"

><td id="1018"><a href="#1018">1018</a></td></tr
><tr id="gr_svn99_1019"

><td id="1019"><a href="#1019">1019</a></td></tr
><tr id="gr_svn99_1020"

><td id="1020"><a href="#1020">1020</a></td></tr
><tr id="gr_svn99_1021"

><td id="1021"><a href="#1021">1021</a></td></tr
><tr id="gr_svn99_1022"

><td id="1022"><a href="#1022">1022</a></td></tr
><tr id="gr_svn99_1023"

><td id="1023"><a href="#1023">1023</a></td></tr
><tr id="gr_svn99_1024"

><td id="1024"><a href="#1024">1024</a></td></tr
><tr id="gr_svn99_1025"

><td id="1025"><a href="#1025">1025</a></td></tr
><tr id="gr_svn99_1026"

><td id="1026"><a href="#1026">1026</a></td></tr
><tr id="gr_svn99_1027"

><td id="1027"><a href="#1027">1027</a></td></tr
><tr id="gr_svn99_1028"

><td id="1028"><a href="#1028">1028</a></td></tr
><tr id="gr_svn99_1029"

><td id="1029"><a href="#1029">1029</a></td></tr
><tr id="gr_svn99_1030"

><td id="1030"><a href="#1030">1030</a></td></tr
><tr id="gr_svn99_1031"

><td id="1031"><a href="#1031">1031</a></td></tr
><tr id="gr_svn99_1032"

><td id="1032"><a href="#1032">1032</a></td></tr
><tr id="gr_svn99_1033"

><td id="1033"><a href="#1033">1033</a></td></tr
><tr id="gr_svn99_1034"

><td id="1034"><a href="#1034">1034</a></td></tr
><tr id="gr_svn99_1035"

><td id="1035"><a href="#1035">1035</a></td></tr
><tr id="gr_svn99_1036"

><td id="1036"><a href="#1036">1036</a></td></tr
><tr id="gr_svn99_1037"

><td id="1037"><a href="#1037">1037</a></td></tr
><tr id="gr_svn99_1038"

><td id="1038"><a href="#1038">1038</a></td></tr
><tr id="gr_svn99_1039"

><td id="1039"><a href="#1039">1039</a></td></tr
><tr id="gr_svn99_1040"

><td id="1040"><a href="#1040">1040</a></td></tr
><tr id="gr_svn99_1041"

><td id="1041"><a href="#1041">1041</a></td></tr
><tr id="gr_svn99_1042"

><td id="1042"><a href="#1042">1042</a></td></tr
><tr id="gr_svn99_1043"

><td id="1043"><a href="#1043">1043</a></td></tr
><tr id="gr_svn99_1044"

><td id="1044"><a href="#1044">1044</a></td></tr
><tr id="gr_svn99_1045"

><td id="1045"><a href="#1045">1045</a></td></tr
><tr id="gr_svn99_1046"

><td id="1046"><a href="#1046">1046</a></td></tr
><tr id="gr_svn99_1047"

><td id="1047"><a href="#1047">1047</a></td></tr
><tr id="gr_svn99_1048"

><td id="1048"><a href="#1048">1048</a></td></tr
><tr id="gr_svn99_1049"

><td id="1049"><a href="#1049">1049</a></td></tr
><tr id="gr_svn99_1050"

><td id="1050"><a href="#1050">1050</a></td></tr
><tr id="gr_svn99_1051"

><td id="1051"><a href="#1051">1051</a></td></tr
><tr id="gr_svn99_1052"

><td id="1052"><a href="#1052">1052</a></td></tr
><tr id="gr_svn99_1053"

><td id="1053"><a href="#1053">1053</a></td></tr
><tr id="gr_svn99_1054"

><td id="1054"><a href="#1054">1054</a></td></tr
><tr id="gr_svn99_1055"

><td id="1055"><a href="#1055">1055</a></td></tr
><tr id="gr_svn99_1056"

><td id="1056"><a href="#1056">1056</a></td></tr
><tr id="gr_svn99_1057"

><td id="1057"><a href="#1057">1057</a></td></tr
><tr id="gr_svn99_1058"

><td id="1058"><a href="#1058">1058</a></td></tr
><tr id="gr_svn99_1059"

><td id="1059"><a href="#1059">1059</a></td></tr
><tr id="gr_svn99_1060"

><td id="1060"><a href="#1060">1060</a></td></tr
><tr id="gr_svn99_1061"

><td id="1061"><a href="#1061">1061</a></td></tr
><tr id="gr_svn99_1062"

><td id="1062"><a href="#1062">1062</a></td></tr
><tr id="gr_svn99_1063"

><td id="1063"><a href="#1063">1063</a></td></tr
><tr id="gr_svn99_1064"

><td id="1064"><a href="#1064">1064</a></td></tr
><tr id="gr_svn99_1065"

><td id="1065"><a href="#1065">1065</a></td></tr
><tr id="gr_svn99_1066"

><td id="1066"><a href="#1066">1066</a></td></tr
><tr id="gr_svn99_1067"

><td id="1067"><a href="#1067">1067</a></td></tr
><tr id="gr_svn99_1068"

><td id="1068"><a href="#1068">1068</a></td></tr
><tr id="gr_svn99_1069"

><td id="1069"><a href="#1069">1069</a></td></tr
><tr id="gr_svn99_1070"

><td id="1070"><a href="#1070">1070</a></td></tr
><tr id="gr_svn99_1071"

><td id="1071"><a href="#1071">1071</a></td></tr
><tr id="gr_svn99_1072"

><td id="1072"><a href="#1072">1072</a></td></tr
><tr id="gr_svn99_1073"

><td id="1073"><a href="#1073">1073</a></td></tr
><tr id="gr_svn99_1074"

><td id="1074"><a href="#1074">1074</a></td></tr
><tr id="gr_svn99_1075"

><td id="1075"><a href="#1075">1075</a></td></tr
><tr id="gr_svn99_1076"

><td id="1076"><a href="#1076">1076</a></td></tr
><tr id="gr_svn99_1077"

><td id="1077"><a href="#1077">1077</a></td></tr
><tr id="gr_svn99_1078"

><td id="1078"><a href="#1078">1078</a></td></tr
><tr id="gr_svn99_1079"

><td id="1079"><a href="#1079">1079</a></td></tr
><tr id="gr_svn99_1080"

><td id="1080"><a href="#1080">1080</a></td></tr
><tr id="gr_svn99_1081"

><td id="1081"><a href="#1081">1081</a></td></tr
><tr id="gr_svn99_1082"

><td id="1082"><a href="#1082">1082</a></td></tr
><tr id="gr_svn99_1083"

><td id="1083"><a href="#1083">1083</a></td></tr
><tr id="gr_svn99_1084"

><td id="1084"><a href="#1084">1084</a></td></tr
><tr id="gr_svn99_1085"

><td id="1085"><a href="#1085">1085</a></td></tr
><tr id="gr_svn99_1086"

><td id="1086"><a href="#1086">1086</a></td></tr
><tr id="gr_svn99_1087"

><td id="1087"><a href="#1087">1087</a></td></tr
><tr id="gr_svn99_1088"

><td id="1088"><a href="#1088">1088</a></td></tr
><tr id="gr_svn99_1089"

><td id="1089"><a href="#1089">1089</a></td></tr
><tr id="gr_svn99_1090"

><td id="1090"><a href="#1090">1090</a></td></tr
><tr id="gr_svn99_1091"

><td id="1091"><a href="#1091">1091</a></td></tr
><tr id="gr_svn99_1092"

><td id="1092"><a href="#1092">1092</a></td></tr
><tr id="gr_svn99_1093"

><td id="1093"><a href="#1093">1093</a></td></tr
><tr id="gr_svn99_1094"

><td id="1094"><a href="#1094">1094</a></td></tr
><tr id="gr_svn99_1095"

><td id="1095"><a href="#1095">1095</a></td></tr
><tr id="gr_svn99_1096"

><td id="1096"><a href="#1096">1096</a></td></tr
><tr id="gr_svn99_1097"

><td id="1097"><a href="#1097">1097</a></td></tr
><tr id="gr_svn99_1098"

><td id="1098"><a href="#1098">1098</a></td></tr
><tr id="gr_svn99_1099"

><td id="1099"><a href="#1099">1099</a></td></tr
><tr id="gr_svn99_1100"

><td id="1100"><a href="#1100">1100</a></td></tr
><tr id="gr_svn99_1101"

><td id="1101"><a href="#1101">1101</a></td></tr
><tr id="gr_svn99_1102"

><td id="1102"><a href="#1102">1102</a></td></tr
><tr id="gr_svn99_1103"

><td id="1103"><a href="#1103">1103</a></td></tr
><tr id="gr_svn99_1104"

><td id="1104"><a href="#1104">1104</a></td></tr
><tr id="gr_svn99_1105"

><td id="1105"><a href="#1105">1105</a></td></tr
><tr id="gr_svn99_1106"

><td id="1106"><a href="#1106">1106</a></td></tr
><tr id="gr_svn99_1107"

><td id="1107"><a href="#1107">1107</a></td></tr
><tr id="gr_svn99_1108"

><td id="1108"><a href="#1108">1108</a></td></tr
><tr id="gr_svn99_1109"

><td id="1109"><a href="#1109">1109</a></td></tr
><tr id="gr_svn99_1110"

><td id="1110"><a href="#1110">1110</a></td></tr
><tr id="gr_svn99_1111"

><td id="1111"><a href="#1111">1111</a></td></tr
><tr id="gr_svn99_1112"

><td id="1112"><a href="#1112">1112</a></td></tr
><tr id="gr_svn99_1113"

><td id="1113"><a href="#1113">1113</a></td></tr
><tr id="gr_svn99_1114"

><td id="1114"><a href="#1114">1114</a></td></tr
><tr id="gr_svn99_1115"

><td id="1115"><a href="#1115">1115</a></td></tr
><tr id="gr_svn99_1116"

><td id="1116"><a href="#1116">1116</a></td></tr
><tr id="gr_svn99_1117"

><td id="1117"><a href="#1117">1117</a></td></tr
><tr id="gr_svn99_1118"

><td id="1118"><a href="#1118">1118</a></td></tr
><tr id="gr_svn99_1119"

><td id="1119"><a href="#1119">1119</a></td></tr
><tr id="gr_svn99_1120"

><td id="1120"><a href="#1120">1120</a></td></tr
><tr id="gr_svn99_1121"

><td id="1121"><a href="#1121">1121</a></td></tr
><tr id="gr_svn99_1122"

><td id="1122"><a href="#1122">1122</a></td></tr
><tr id="gr_svn99_1123"

><td id="1123"><a href="#1123">1123</a></td></tr
><tr id="gr_svn99_1124"

><td id="1124"><a href="#1124">1124</a></td></tr
><tr id="gr_svn99_1125"

><td id="1125"><a href="#1125">1125</a></td></tr
><tr id="gr_svn99_1126"

><td id="1126"><a href="#1126">1126</a></td></tr
><tr id="gr_svn99_1127"

><td id="1127"><a href="#1127">1127</a></td></tr
><tr id="gr_svn99_1128"

><td id="1128"><a href="#1128">1128</a></td></tr
><tr id="gr_svn99_1129"

><td id="1129"><a href="#1129">1129</a></td></tr
><tr id="gr_svn99_1130"

><td id="1130"><a href="#1130">1130</a></td></tr
><tr id="gr_svn99_1131"

><td id="1131"><a href="#1131">1131</a></td></tr
><tr id="gr_svn99_1132"

><td id="1132"><a href="#1132">1132</a></td></tr
><tr id="gr_svn99_1133"

><td id="1133"><a href="#1133">1133</a></td></tr
><tr id="gr_svn99_1134"

><td id="1134"><a href="#1134">1134</a></td></tr
><tr id="gr_svn99_1135"

><td id="1135"><a href="#1135">1135</a></td></tr
><tr id="gr_svn99_1136"

><td id="1136"><a href="#1136">1136</a></td></tr
><tr id="gr_svn99_1137"

><td id="1137"><a href="#1137">1137</a></td></tr
><tr id="gr_svn99_1138"

><td id="1138"><a href="#1138">1138</a></td></tr
><tr id="gr_svn99_1139"

><td id="1139"><a href="#1139">1139</a></td></tr
><tr id="gr_svn99_1140"

><td id="1140"><a href="#1140">1140</a></td></tr
><tr id="gr_svn99_1141"

><td id="1141"><a href="#1141">1141</a></td></tr
><tr id="gr_svn99_1142"

><td id="1142"><a href="#1142">1142</a></td></tr
><tr id="gr_svn99_1143"

><td id="1143"><a href="#1143">1143</a></td></tr
><tr id="gr_svn99_1144"

><td id="1144"><a href="#1144">1144</a></td></tr
><tr id="gr_svn99_1145"

><td id="1145"><a href="#1145">1145</a></td></tr
><tr id="gr_svn99_1146"

><td id="1146"><a href="#1146">1146</a></td></tr
><tr id="gr_svn99_1147"

><td id="1147"><a href="#1147">1147</a></td></tr
><tr id="gr_svn99_1148"

><td id="1148"><a href="#1148">1148</a></td></tr
><tr id="gr_svn99_1149"

><td id="1149"><a href="#1149">1149</a></td></tr
><tr id="gr_svn99_1150"

><td id="1150"><a href="#1150">1150</a></td></tr
><tr id="gr_svn99_1151"

><td id="1151"><a href="#1151">1151</a></td></tr
><tr id="gr_svn99_1152"

><td id="1152"><a href="#1152">1152</a></td></tr
><tr id="gr_svn99_1153"

><td id="1153"><a href="#1153">1153</a></td></tr
><tr id="gr_svn99_1154"

><td id="1154"><a href="#1154">1154</a></td></tr
><tr id="gr_svn99_1155"

><td id="1155"><a href="#1155">1155</a></td></tr
><tr id="gr_svn99_1156"

><td id="1156"><a href="#1156">1156</a></td></tr
><tr id="gr_svn99_1157"

><td id="1157"><a href="#1157">1157</a></td></tr
><tr id="gr_svn99_1158"

><td id="1158"><a href="#1158">1158</a></td></tr
><tr id="gr_svn99_1159"

><td id="1159"><a href="#1159">1159</a></td></tr
><tr id="gr_svn99_1160"

><td id="1160"><a href="#1160">1160</a></td></tr
><tr id="gr_svn99_1161"

><td id="1161"><a href="#1161">1161</a></td></tr
><tr id="gr_svn99_1162"

><td id="1162"><a href="#1162">1162</a></td></tr
><tr id="gr_svn99_1163"

><td id="1163"><a href="#1163">1163</a></td></tr
><tr id="gr_svn99_1164"

><td id="1164"><a href="#1164">1164</a></td></tr
><tr id="gr_svn99_1165"

><td id="1165"><a href="#1165">1165</a></td></tr
><tr id="gr_svn99_1166"

><td id="1166"><a href="#1166">1166</a></td></tr
><tr id="gr_svn99_1167"

><td id="1167"><a href="#1167">1167</a></td></tr
><tr id="gr_svn99_1168"

><td id="1168"><a href="#1168">1168</a></td></tr
><tr id="gr_svn99_1169"

><td id="1169"><a href="#1169">1169</a></td></tr
><tr id="gr_svn99_1170"

><td id="1170"><a href="#1170">1170</a></td></tr
><tr id="gr_svn99_1171"

><td id="1171"><a href="#1171">1171</a></td></tr
><tr id="gr_svn99_1172"

><td id="1172"><a href="#1172">1172</a></td></tr
><tr id="gr_svn99_1173"

><td id="1173"><a href="#1173">1173</a></td></tr
><tr id="gr_svn99_1174"

><td id="1174"><a href="#1174">1174</a></td></tr
><tr id="gr_svn99_1175"

><td id="1175"><a href="#1175">1175</a></td></tr
><tr id="gr_svn99_1176"

><td id="1176"><a href="#1176">1176</a></td></tr
><tr id="gr_svn99_1177"

><td id="1177"><a href="#1177">1177</a></td></tr
><tr id="gr_svn99_1178"

><td id="1178"><a href="#1178">1178</a></td></tr
><tr id="gr_svn99_1179"

><td id="1179"><a href="#1179">1179</a></td></tr
><tr id="gr_svn99_1180"

><td id="1180"><a href="#1180">1180</a></td></tr
><tr id="gr_svn99_1181"

><td id="1181"><a href="#1181">1181</a></td></tr
><tr id="gr_svn99_1182"

><td id="1182"><a href="#1182">1182</a></td></tr
><tr id="gr_svn99_1183"

><td id="1183"><a href="#1183">1183</a></td></tr
><tr id="gr_svn99_1184"

><td id="1184"><a href="#1184">1184</a></td></tr
><tr id="gr_svn99_1185"

><td id="1185"><a href="#1185">1185</a></td></tr
><tr id="gr_svn99_1186"

><td id="1186"><a href="#1186">1186</a></td></tr
><tr id="gr_svn99_1187"

><td id="1187"><a href="#1187">1187</a></td></tr
><tr id="gr_svn99_1188"

><td id="1188"><a href="#1188">1188</a></td></tr
><tr id="gr_svn99_1189"

><td id="1189"><a href="#1189">1189</a></td></tr
><tr id="gr_svn99_1190"

><td id="1190"><a href="#1190">1190</a></td></tr
><tr id="gr_svn99_1191"

><td id="1191"><a href="#1191">1191</a></td></tr
><tr id="gr_svn99_1192"

><td id="1192"><a href="#1192">1192</a></td></tr
><tr id="gr_svn99_1193"

><td id="1193"><a href="#1193">1193</a></td></tr
><tr id="gr_svn99_1194"

><td id="1194"><a href="#1194">1194</a></td></tr
><tr id="gr_svn99_1195"

><td id="1195"><a href="#1195">1195</a></td></tr
><tr id="gr_svn99_1196"

><td id="1196"><a href="#1196">1196</a></td></tr
><tr id="gr_svn99_1197"

><td id="1197"><a href="#1197">1197</a></td></tr
><tr id="gr_svn99_1198"

><td id="1198"><a href="#1198">1198</a></td></tr
><tr id="gr_svn99_1199"

><td id="1199"><a href="#1199">1199</a></td></tr
><tr id="gr_svn99_1200"

><td id="1200"><a href="#1200">1200</a></td></tr
><tr id="gr_svn99_1201"

><td id="1201"><a href="#1201">1201</a></td></tr
><tr id="gr_svn99_1202"

><td id="1202"><a href="#1202">1202</a></td></tr
><tr id="gr_svn99_1203"

><td id="1203"><a href="#1203">1203</a></td></tr
><tr id="gr_svn99_1204"

><td id="1204"><a href="#1204">1204</a></td></tr
><tr id="gr_svn99_1205"

><td id="1205"><a href="#1205">1205</a></td></tr
><tr id="gr_svn99_1206"

><td id="1206"><a href="#1206">1206</a></td></tr
><tr id="gr_svn99_1207"

><td id="1207"><a href="#1207">1207</a></td></tr
><tr id="gr_svn99_1208"

><td id="1208"><a href="#1208">1208</a></td></tr
><tr id="gr_svn99_1209"

><td id="1209"><a href="#1209">1209</a></td></tr
><tr id="gr_svn99_1210"

><td id="1210"><a href="#1210">1210</a></td></tr
><tr id="gr_svn99_1211"

><td id="1211"><a href="#1211">1211</a></td></tr
><tr id="gr_svn99_1212"

><td id="1212"><a href="#1212">1212</a></td></tr
><tr id="gr_svn99_1213"

><td id="1213"><a href="#1213">1213</a></td></tr
><tr id="gr_svn99_1214"

><td id="1214"><a href="#1214">1214</a></td></tr
><tr id="gr_svn99_1215"

><td id="1215"><a href="#1215">1215</a></td></tr
><tr id="gr_svn99_1216"

><td id="1216"><a href="#1216">1216</a></td></tr
><tr id="gr_svn99_1217"

><td id="1217"><a href="#1217">1217</a></td></tr
><tr id="gr_svn99_1218"

><td id="1218"><a href="#1218">1218</a></td></tr
><tr id="gr_svn99_1219"

><td id="1219"><a href="#1219">1219</a></td></tr
><tr id="gr_svn99_1220"

><td id="1220"><a href="#1220">1220</a></td></tr
><tr id="gr_svn99_1221"

><td id="1221"><a href="#1221">1221</a></td></tr
><tr id="gr_svn99_1222"

><td id="1222"><a href="#1222">1222</a></td></tr
><tr id="gr_svn99_1223"

><td id="1223"><a href="#1223">1223</a></td></tr
><tr id="gr_svn99_1224"

><td id="1224"><a href="#1224">1224</a></td></tr
><tr id="gr_svn99_1225"

><td id="1225"><a href="#1225">1225</a></td></tr
><tr id="gr_svn99_1226"

><td id="1226"><a href="#1226">1226</a></td></tr
><tr id="gr_svn99_1227"

><td id="1227"><a href="#1227">1227</a></td></tr
><tr id="gr_svn99_1228"

><td id="1228"><a href="#1228">1228</a></td></tr
><tr id="gr_svn99_1229"

><td id="1229"><a href="#1229">1229</a></td></tr
><tr id="gr_svn99_1230"

><td id="1230"><a href="#1230">1230</a></td></tr
><tr id="gr_svn99_1231"

><td id="1231"><a href="#1231">1231</a></td></tr
><tr id="gr_svn99_1232"

><td id="1232"><a href="#1232">1232</a></td></tr
><tr id="gr_svn99_1233"

><td id="1233"><a href="#1233">1233</a></td></tr
><tr id="gr_svn99_1234"

><td id="1234"><a href="#1234">1234</a></td></tr
><tr id="gr_svn99_1235"

><td id="1235"><a href="#1235">1235</a></td></tr
><tr id="gr_svn99_1236"

><td id="1236"><a href="#1236">1236</a></td></tr
><tr id="gr_svn99_1237"

><td id="1237"><a href="#1237">1237</a></td></tr
><tr id="gr_svn99_1238"

><td id="1238"><a href="#1238">1238</a></td></tr
><tr id="gr_svn99_1239"

><td id="1239"><a href="#1239">1239</a></td></tr
><tr id="gr_svn99_1240"

><td id="1240"><a href="#1240">1240</a></td></tr
><tr id="gr_svn99_1241"

><td id="1241"><a href="#1241">1241</a></td></tr
><tr id="gr_svn99_1242"

><td id="1242"><a href="#1242">1242</a></td></tr
><tr id="gr_svn99_1243"

><td id="1243"><a href="#1243">1243</a></td></tr
><tr id="gr_svn99_1244"

><td id="1244"><a href="#1244">1244</a></td></tr
><tr id="gr_svn99_1245"

><td id="1245"><a href="#1245">1245</a></td></tr
><tr id="gr_svn99_1246"

><td id="1246"><a href="#1246">1246</a></td></tr
><tr id="gr_svn99_1247"

><td id="1247"><a href="#1247">1247</a></td></tr
><tr id="gr_svn99_1248"

><td id="1248"><a href="#1248">1248</a></td></tr
><tr id="gr_svn99_1249"

><td id="1249"><a href="#1249">1249</a></td></tr
><tr id="gr_svn99_1250"

><td id="1250"><a href="#1250">1250</a></td></tr
><tr id="gr_svn99_1251"

><td id="1251"><a href="#1251">1251</a></td></tr
><tr id="gr_svn99_1252"

><td id="1252"><a href="#1252">1252</a></td></tr
><tr id="gr_svn99_1253"

><td id="1253"><a href="#1253">1253</a></td></tr
><tr id="gr_svn99_1254"

><td id="1254"><a href="#1254">1254</a></td></tr
><tr id="gr_svn99_1255"

><td id="1255"><a href="#1255">1255</a></td></tr
><tr id="gr_svn99_1256"

><td id="1256"><a href="#1256">1256</a></td></tr
><tr id="gr_svn99_1257"

><td id="1257"><a href="#1257">1257</a></td></tr
><tr id="gr_svn99_1258"

><td id="1258"><a href="#1258">1258</a></td></tr
><tr id="gr_svn99_1259"

><td id="1259"><a href="#1259">1259</a></td></tr
><tr id="gr_svn99_1260"

><td id="1260"><a href="#1260">1260</a></td></tr
><tr id="gr_svn99_1261"

><td id="1261"><a href="#1261">1261</a></td></tr
><tr id="gr_svn99_1262"

><td id="1262"><a href="#1262">1262</a></td></tr
><tr id="gr_svn99_1263"

><td id="1263"><a href="#1263">1263</a></td></tr
><tr id="gr_svn99_1264"

><td id="1264"><a href="#1264">1264</a></td></tr
><tr id="gr_svn99_1265"

><td id="1265"><a href="#1265">1265</a></td></tr
><tr id="gr_svn99_1266"

><td id="1266"><a href="#1266">1266</a></td></tr
><tr id="gr_svn99_1267"

><td id="1267"><a href="#1267">1267</a></td></tr
><tr id="gr_svn99_1268"

><td id="1268"><a href="#1268">1268</a></td></tr
><tr id="gr_svn99_1269"

><td id="1269"><a href="#1269">1269</a></td></tr
><tr id="gr_svn99_1270"

><td id="1270"><a href="#1270">1270</a></td></tr
><tr id="gr_svn99_1271"

><td id="1271"><a href="#1271">1271</a></td></tr
><tr id="gr_svn99_1272"

><td id="1272"><a href="#1272">1272</a></td></tr
><tr id="gr_svn99_1273"

><td id="1273"><a href="#1273">1273</a></td></tr
><tr id="gr_svn99_1274"

><td id="1274"><a href="#1274">1274</a></td></tr
><tr id="gr_svn99_1275"

><td id="1275"><a href="#1275">1275</a></td></tr
><tr id="gr_svn99_1276"

><td id="1276"><a href="#1276">1276</a></td></tr
><tr id="gr_svn99_1277"

><td id="1277"><a href="#1277">1277</a></td></tr
><tr id="gr_svn99_1278"

><td id="1278"><a href="#1278">1278</a></td></tr
><tr id="gr_svn99_1279"

><td id="1279"><a href="#1279">1279</a></td></tr
><tr id="gr_svn99_1280"

><td id="1280"><a href="#1280">1280</a></td></tr
><tr id="gr_svn99_1281"

><td id="1281"><a href="#1281">1281</a></td></tr
><tr id="gr_svn99_1282"

><td id="1282"><a href="#1282">1282</a></td></tr
><tr id="gr_svn99_1283"

><td id="1283"><a href="#1283">1283</a></td></tr
><tr id="gr_svn99_1284"

><td id="1284"><a href="#1284">1284</a></td></tr
><tr id="gr_svn99_1285"

><td id="1285"><a href="#1285">1285</a></td></tr
><tr id="gr_svn99_1286"

><td id="1286"><a href="#1286">1286</a></td></tr
><tr id="gr_svn99_1287"

><td id="1287"><a href="#1287">1287</a></td></tr
><tr id="gr_svn99_1288"

><td id="1288"><a href="#1288">1288</a></td></tr
><tr id="gr_svn99_1289"

><td id="1289"><a href="#1289">1289</a></td></tr
><tr id="gr_svn99_1290"

><td id="1290"><a href="#1290">1290</a></td></tr
><tr id="gr_svn99_1291"

><td id="1291"><a href="#1291">1291</a></td></tr
><tr id="gr_svn99_1292"

><td id="1292"><a href="#1292">1292</a></td></tr
><tr id="gr_svn99_1293"

><td id="1293"><a href="#1293">1293</a></td></tr
><tr id="gr_svn99_1294"

><td id="1294"><a href="#1294">1294</a></td></tr
><tr id="gr_svn99_1295"

><td id="1295"><a href="#1295">1295</a></td></tr
><tr id="gr_svn99_1296"

><td id="1296"><a href="#1296">1296</a></td></tr
><tr id="gr_svn99_1297"

><td id="1297"><a href="#1297">1297</a></td></tr
><tr id="gr_svn99_1298"

><td id="1298"><a href="#1298">1298</a></td></tr
><tr id="gr_svn99_1299"

><td id="1299"><a href="#1299">1299</a></td></tr
><tr id="gr_svn99_1300"

><td id="1300"><a href="#1300">1300</a></td></tr
><tr id="gr_svn99_1301"

><td id="1301"><a href="#1301">1301</a></td></tr
><tr id="gr_svn99_1302"

><td id="1302"><a href="#1302">1302</a></td></tr
><tr id="gr_svn99_1303"

><td id="1303"><a href="#1303">1303</a></td></tr
><tr id="gr_svn99_1304"

><td id="1304"><a href="#1304">1304</a></td></tr
><tr id="gr_svn99_1305"

><td id="1305"><a href="#1305">1305</a></td></tr
><tr id="gr_svn99_1306"

><td id="1306"><a href="#1306">1306</a></td></tr
><tr id="gr_svn99_1307"

><td id="1307"><a href="#1307">1307</a></td></tr
><tr id="gr_svn99_1308"

><td id="1308"><a href="#1308">1308</a></td></tr
><tr id="gr_svn99_1309"

><td id="1309"><a href="#1309">1309</a></td></tr
><tr id="gr_svn99_1310"

><td id="1310"><a href="#1310">1310</a></td></tr
><tr id="gr_svn99_1311"

><td id="1311"><a href="#1311">1311</a></td></tr
><tr id="gr_svn99_1312"

><td id="1312"><a href="#1312">1312</a></td></tr
><tr id="gr_svn99_1313"

><td id="1313"><a href="#1313">1313</a></td></tr
><tr id="gr_svn99_1314"

><td id="1314"><a href="#1314">1314</a></td></tr
><tr id="gr_svn99_1315"

><td id="1315"><a href="#1315">1315</a></td></tr
><tr id="gr_svn99_1316"

><td id="1316"><a href="#1316">1316</a></td></tr
><tr id="gr_svn99_1317"

><td id="1317"><a href="#1317">1317</a></td></tr
><tr id="gr_svn99_1318"

><td id="1318"><a href="#1318">1318</a></td></tr
><tr id="gr_svn99_1319"

><td id="1319"><a href="#1319">1319</a></td></tr
><tr id="gr_svn99_1320"

><td id="1320"><a href="#1320">1320</a></td></tr
><tr id="gr_svn99_1321"

><td id="1321"><a href="#1321">1321</a></td></tr
><tr id="gr_svn99_1322"

><td id="1322"><a href="#1322">1322</a></td></tr
><tr id="gr_svn99_1323"

><td id="1323"><a href="#1323">1323</a></td></tr
><tr id="gr_svn99_1324"

><td id="1324"><a href="#1324">1324</a></td></tr
><tr id="gr_svn99_1325"

><td id="1325"><a href="#1325">1325</a></td></tr
><tr id="gr_svn99_1326"

><td id="1326"><a href="#1326">1326</a></td></tr
><tr id="gr_svn99_1327"

><td id="1327"><a href="#1327">1327</a></td></tr
><tr id="gr_svn99_1328"

><td id="1328"><a href="#1328">1328</a></td></tr
><tr id="gr_svn99_1329"

><td id="1329"><a href="#1329">1329</a></td></tr
><tr id="gr_svn99_1330"

><td id="1330"><a href="#1330">1330</a></td></tr
><tr id="gr_svn99_1331"

><td id="1331"><a href="#1331">1331</a></td></tr
><tr id="gr_svn99_1332"

><td id="1332"><a href="#1332">1332</a></td></tr
><tr id="gr_svn99_1333"

><td id="1333"><a href="#1333">1333</a></td></tr
><tr id="gr_svn99_1334"

><td id="1334"><a href="#1334">1334</a></td></tr
><tr id="gr_svn99_1335"

><td id="1335"><a href="#1335">1335</a></td></tr
><tr id="gr_svn99_1336"

><td id="1336"><a href="#1336">1336</a></td></tr
><tr id="gr_svn99_1337"

><td id="1337"><a href="#1337">1337</a></td></tr
><tr id="gr_svn99_1338"

><td id="1338"><a href="#1338">1338</a></td></tr
><tr id="gr_svn99_1339"

><td id="1339"><a href="#1339">1339</a></td></tr
><tr id="gr_svn99_1340"

><td id="1340"><a href="#1340">1340</a></td></tr
><tr id="gr_svn99_1341"

><td id="1341"><a href="#1341">1341</a></td></tr
><tr id="gr_svn99_1342"

><td id="1342"><a href="#1342">1342</a></td></tr
><tr id="gr_svn99_1343"

><td id="1343"><a href="#1343">1343</a></td></tr
><tr id="gr_svn99_1344"

><td id="1344"><a href="#1344">1344</a></td></tr
><tr id="gr_svn99_1345"

><td id="1345"><a href="#1345">1345</a></td></tr
><tr id="gr_svn99_1346"

><td id="1346"><a href="#1346">1346</a></td></tr
><tr id="gr_svn99_1347"

><td id="1347"><a href="#1347">1347</a></td></tr
><tr id="gr_svn99_1348"

><td id="1348"><a href="#1348">1348</a></td></tr
><tr id="gr_svn99_1349"

><td id="1349"><a href="#1349">1349</a></td></tr
><tr id="gr_svn99_1350"

><td id="1350"><a href="#1350">1350</a></td></tr
><tr id="gr_svn99_1351"

><td id="1351"><a href="#1351">1351</a></td></tr
><tr id="gr_svn99_1352"

><td id="1352"><a href="#1352">1352</a></td></tr
><tr id="gr_svn99_1353"

><td id="1353"><a href="#1353">1353</a></td></tr
><tr id="gr_svn99_1354"

><td id="1354"><a href="#1354">1354</a></td></tr
><tr id="gr_svn99_1355"

><td id="1355"><a href="#1355">1355</a></td></tr
><tr id="gr_svn99_1356"

><td id="1356"><a href="#1356">1356</a></td></tr
><tr id="gr_svn99_1357"

><td id="1357"><a href="#1357">1357</a></td></tr
><tr id="gr_svn99_1358"

><td id="1358"><a href="#1358">1358</a></td></tr
><tr id="gr_svn99_1359"

><td id="1359"><a href="#1359">1359</a></td></tr
><tr id="gr_svn99_1360"

><td id="1360"><a href="#1360">1360</a></td></tr
><tr id="gr_svn99_1361"

><td id="1361"><a href="#1361">1361</a></td></tr
><tr id="gr_svn99_1362"

><td id="1362"><a href="#1362">1362</a></td></tr
><tr id="gr_svn99_1363"

><td id="1363"><a href="#1363">1363</a></td></tr
><tr id="gr_svn99_1364"

><td id="1364"><a href="#1364">1364</a></td></tr
><tr id="gr_svn99_1365"

><td id="1365"><a href="#1365">1365</a></td></tr
><tr id="gr_svn99_1366"

><td id="1366"><a href="#1366">1366</a></td></tr
><tr id="gr_svn99_1367"

><td id="1367"><a href="#1367">1367</a></td></tr
><tr id="gr_svn99_1368"

><td id="1368"><a href="#1368">1368</a></td></tr
><tr id="gr_svn99_1369"

><td id="1369"><a href="#1369">1369</a></td></tr
><tr id="gr_svn99_1370"

><td id="1370"><a href="#1370">1370</a></td></tr
><tr id="gr_svn99_1371"

><td id="1371"><a href="#1371">1371</a></td></tr
><tr id="gr_svn99_1372"

><td id="1372"><a href="#1372">1372</a></td></tr
><tr id="gr_svn99_1373"

><td id="1373"><a href="#1373">1373</a></td></tr
><tr id="gr_svn99_1374"

><td id="1374"><a href="#1374">1374</a></td></tr
><tr id="gr_svn99_1375"

><td id="1375"><a href="#1375">1375</a></td></tr
><tr id="gr_svn99_1376"

><td id="1376"><a href="#1376">1376</a></td></tr
><tr id="gr_svn99_1377"

><td id="1377"><a href="#1377">1377</a></td></tr
><tr id="gr_svn99_1378"

><td id="1378"><a href="#1378">1378</a></td></tr
><tr id="gr_svn99_1379"

><td id="1379"><a href="#1379">1379</a></td></tr
><tr id="gr_svn99_1380"

><td id="1380"><a href="#1380">1380</a></td></tr
><tr id="gr_svn99_1381"

><td id="1381"><a href="#1381">1381</a></td></tr
><tr id="gr_svn99_1382"

><td id="1382"><a href="#1382">1382</a></td></tr
><tr id="gr_svn99_1383"

><td id="1383"><a href="#1383">1383</a></td></tr
><tr id="gr_svn99_1384"

><td id="1384"><a href="#1384">1384</a></td></tr
><tr id="gr_svn99_1385"

><td id="1385"><a href="#1385">1385</a></td></tr
><tr id="gr_svn99_1386"

><td id="1386"><a href="#1386">1386</a></td></tr
><tr id="gr_svn99_1387"

><td id="1387"><a href="#1387">1387</a></td></tr
><tr id="gr_svn99_1388"

><td id="1388"><a href="#1388">1388</a></td></tr
><tr id="gr_svn99_1389"

><td id="1389"><a href="#1389">1389</a></td></tr
><tr id="gr_svn99_1390"

><td id="1390"><a href="#1390">1390</a></td></tr
><tr id="gr_svn99_1391"

><td id="1391"><a href="#1391">1391</a></td></tr
><tr id="gr_svn99_1392"

><td id="1392"><a href="#1392">1392</a></td></tr
><tr id="gr_svn99_1393"

><td id="1393"><a href="#1393">1393</a></td></tr
><tr id="gr_svn99_1394"

><td id="1394"><a href="#1394">1394</a></td></tr
><tr id="gr_svn99_1395"

><td id="1395"><a href="#1395">1395</a></td></tr
><tr id="gr_svn99_1396"

><td id="1396"><a href="#1396">1396</a></td></tr
><tr id="gr_svn99_1397"

><td id="1397"><a href="#1397">1397</a></td></tr
><tr id="gr_svn99_1398"

><td id="1398"><a href="#1398">1398</a></td></tr
><tr id="gr_svn99_1399"

><td id="1399"><a href="#1399">1399</a></td></tr
><tr id="gr_svn99_1400"

><td id="1400"><a href="#1400">1400</a></td></tr
><tr id="gr_svn99_1401"

><td id="1401"><a href="#1401">1401</a></td></tr
><tr id="gr_svn99_1402"

><td id="1402"><a href="#1402">1402</a></td></tr
><tr id="gr_svn99_1403"

><td id="1403"><a href="#1403">1403</a></td></tr
><tr id="gr_svn99_1404"

><td id="1404"><a href="#1404">1404</a></td></tr
><tr id="gr_svn99_1405"

><td id="1405"><a href="#1405">1405</a></td></tr
><tr id="gr_svn99_1406"

><td id="1406"><a href="#1406">1406</a></td></tr
><tr id="gr_svn99_1407"

><td id="1407"><a href="#1407">1407</a></td></tr
><tr id="gr_svn99_1408"

><td id="1408"><a href="#1408">1408</a></td></tr
><tr id="gr_svn99_1409"

><td id="1409"><a href="#1409">1409</a></td></tr
><tr id="gr_svn99_1410"

><td id="1410"><a href="#1410">1410</a></td></tr
><tr id="gr_svn99_1411"

><td id="1411"><a href="#1411">1411</a></td></tr
><tr id="gr_svn99_1412"

><td id="1412"><a href="#1412">1412</a></td></tr
><tr id="gr_svn99_1413"

><td id="1413"><a href="#1413">1413</a></td></tr
><tr id="gr_svn99_1414"

><td id="1414"><a href="#1414">1414</a></td></tr
><tr id="gr_svn99_1415"

><td id="1415"><a href="#1415">1415</a></td></tr
><tr id="gr_svn99_1416"

><td id="1416"><a href="#1416">1416</a></td></tr
><tr id="gr_svn99_1417"

><td id="1417"><a href="#1417">1417</a></td></tr
><tr id="gr_svn99_1418"

><td id="1418"><a href="#1418">1418</a></td></tr
><tr id="gr_svn99_1419"

><td id="1419"><a href="#1419">1419</a></td></tr
><tr id="gr_svn99_1420"

><td id="1420"><a href="#1420">1420</a></td></tr
><tr id="gr_svn99_1421"

><td id="1421"><a href="#1421">1421</a></td></tr
><tr id="gr_svn99_1422"

><td id="1422"><a href="#1422">1422</a></td></tr
><tr id="gr_svn99_1423"

><td id="1423"><a href="#1423">1423</a></td></tr
><tr id="gr_svn99_1424"

><td id="1424"><a href="#1424">1424</a></td></tr
><tr id="gr_svn99_1425"

><td id="1425"><a href="#1425">1425</a></td></tr
><tr id="gr_svn99_1426"

><td id="1426"><a href="#1426">1426</a></td></tr
><tr id="gr_svn99_1427"

><td id="1427"><a href="#1427">1427</a></td></tr
><tr id="gr_svn99_1428"

><td id="1428"><a href="#1428">1428</a></td></tr
><tr id="gr_svn99_1429"

><td id="1429"><a href="#1429">1429</a></td></tr
><tr id="gr_svn99_1430"

><td id="1430"><a href="#1430">1430</a></td></tr
><tr id="gr_svn99_1431"

><td id="1431"><a href="#1431">1431</a></td></tr
><tr id="gr_svn99_1432"

><td id="1432"><a href="#1432">1432</a></td></tr
><tr id="gr_svn99_1433"

><td id="1433"><a href="#1433">1433</a></td></tr
><tr id="gr_svn99_1434"

><td id="1434"><a href="#1434">1434</a></td></tr
><tr id="gr_svn99_1435"

><td id="1435"><a href="#1435">1435</a></td></tr
><tr id="gr_svn99_1436"

><td id="1436"><a href="#1436">1436</a></td></tr
><tr id="gr_svn99_1437"

><td id="1437"><a href="#1437">1437</a></td></tr
><tr id="gr_svn99_1438"

><td id="1438"><a href="#1438">1438</a></td></tr
><tr id="gr_svn99_1439"

><td id="1439"><a href="#1439">1439</a></td></tr
><tr id="gr_svn99_1440"

><td id="1440"><a href="#1440">1440</a></td></tr
><tr id="gr_svn99_1441"

><td id="1441"><a href="#1441">1441</a></td></tr
><tr id="gr_svn99_1442"

><td id="1442"><a href="#1442">1442</a></td></tr
><tr id="gr_svn99_1443"

><td id="1443"><a href="#1443">1443</a></td></tr
><tr id="gr_svn99_1444"

><td id="1444"><a href="#1444">1444</a></td></tr
><tr id="gr_svn99_1445"

><td id="1445"><a href="#1445">1445</a></td></tr
><tr id="gr_svn99_1446"

><td id="1446"><a href="#1446">1446</a></td></tr
><tr id="gr_svn99_1447"

><td id="1447"><a href="#1447">1447</a></td></tr
><tr id="gr_svn99_1448"

><td id="1448"><a href="#1448">1448</a></td></tr
><tr id="gr_svn99_1449"

><td id="1449"><a href="#1449">1449</a></td></tr
><tr id="gr_svn99_1450"

><td id="1450"><a href="#1450">1450</a></td></tr
><tr id="gr_svn99_1451"

><td id="1451"><a href="#1451">1451</a></td></tr
><tr id="gr_svn99_1452"

><td id="1452"><a href="#1452">1452</a></td></tr
><tr id="gr_svn99_1453"

><td id="1453"><a href="#1453">1453</a></td></tr
><tr id="gr_svn99_1454"

><td id="1454"><a href="#1454">1454</a></td></tr
><tr id="gr_svn99_1455"

><td id="1455"><a href="#1455">1455</a></td></tr
><tr id="gr_svn99_1456"

><td id="1456"><a href="#1456">1456</a></td></tr
><tr id="gr_svn99_1457"

><td id="1457"><a href="#1457">1457</a></td></tr
><tr id="gr_svn99_1458"

><td id="1458"><a href="#1458">1458</a></td></tr
><tr id="gr_svn99_1459"

><td id="1459"><a href="#1459">1459</a></td></tr
><tr id="gr_svn99_1460"

><td id="1460"><a href="#1460">1460</a></td></tr
><tr id="gr_svn99_1461"

><td id="1461"><a href="#1461">1461</a></td></tr
><tr id="gr_svn99_1462"

><td id="1462"><a href="#1462">1462</a></td></tr
><tr id="gr_svn99_1463"

><td id="1463"><a href="#1463">1463</a></td></tr
><tr id="gr_svn99_1464"

><td id="1464"><a href="#1464">1464</a></td></tr
><tr id="gr_svn99_1465"

><td id="1465"><a href="#1465">1465</a></td></tr
><tr id="gr_svn99_1466"

><td id="1466"><a href="#1466">1466</a></td></tr
><tr id="gr_svn99_1467"

><td id="1467"><a href="#1467">1467</a></td></tr
><tr id="gr_svn99_1468"

><td id="1468"><a href="#1468">1468</a></td></tr
><tr id="gr_svn99_1469"

><td id="1469"><a href="#1469">1469</a></td></tr
><tr id="gr_svn99_1470"

><td id="1470"><a href="#1470">1470</a></td></tr
><tr id="gr_svn99_1471"

><td id="1471"><a href="#1471">1471</a></td></tr
><tr id="gr_svn99_1472"

><td id="1472"><a href="#1472">1472</a></td></tr
><tr id="gr_svn99_1473"

><td id="1473"><a href="#1473">1473</a></td></tr
><tr id="gr_svn99_1474"

><td id="1474"><a href="#1474">1474</a></td></tr
><tr id="gr_svn99_1475"

><td id="1475"><a href="#1475">1475</a></td></tr
><tr id="gr_svn99_1476"

><td id="1476"><a href="#1476">1476</a></td></tr
><tr id="gr_svn99_1477"

><td id="1477"><a href="#1477">1477</a></td></tr
><tr id="gr_svn99_1478"

><td id="1478"><a href="#1478">1478</a></td></tr
><tr id="gr_svn99_1479"

><td id="1479"><a href="#1479">1479</a></td></tr
><tr id="gr_svn99_1480"

><td id="1480"><a href="#1480">1480</a></td></tr
><tr id="gr_svn99_1481"

><td id="1481"><a href="#1481">1481</a></td></tr
><tr id="gr_svn99_1482"

><td id="1482"><a href="#1482">1482</a></td></tr
><tr id="gr_svn99_1483"

><td id="1483"><a href="#1483">1483</a></td></tr
><tr id="gr_svn99_1484"

><td id="1484"><a href="#1484">1484</a></td></tr
><tr id="gr_svn99_1485"

><td id="1485"><a href="#1485">1485</a></td></tr
><tr id="gr_svn99_1486"

><td id="1486"><a href="#1486">1486</a></td></tr
><tr id="gr_svn99_1487"

><td id="1487"><a href="#1487">1487</a></td></tr
><tr id="gr_svn99_1488"

><td id="1488"><a href="#1488">1488</a></td></tr
><tr id="gr_svn99_1489"

><td id="1489"><a href="#1489">1489</a></td></tr
><tr id="gr_svn99_1490"

><td id="1490"><a href="#1490">1490</a></td></tr
><tr id="gr_svn99_1491"

><td id="1491"><a href="#1491">1491</a></td></tr
><tr id="gr_svn99_1492"

><td id="1492"><a href="#1492">1492</a></td></tr
><tr id="gr_svn99_1493"

><td id="1493"><a href="#1493">1493</a></td></tr
><tr id="gr_svn99_1494"

><td id="1494"><a href="#1494">1494</a></td></tr
><tr id="gr_svn99_1495"

><td id="1495"><a href="#1495">1495</a></td></tr
><tr id="gr_svn99_1496"

><td id="1496"><a href="#1496">1496</a></td></tr
><tr id="gr_svn99_1497"

><td id="1497"><a href="#1497">1497</a></td></tr
><tr id="gr_svn99_1498"

><td id="1498"><a href="#1498">1498</a></td></tr
><tr id="gr_svn99_1499"

><td id="1499"><a href="#1499">1499</a></td></tr
><tr id="gr_svn99_1500"

><td id="1500"><a href="#1500">1500</a></td></tr
><tr id="gr_svn99_1501"

><td id="1501"><a href="#1501">1501</a></td></tr
><tr id="gr_svn99_1502"

><td id="1502"><a href="#1502">1502</a></td></tr
><tr id="gr_svn99_1503"

><td id="1503"><a href="#1503">1503</a></td></tr
><tr id="gr_svn99_1504"

><td id="1504"><a href="#1504">1504</a></td></tr
><tr id="gr_svn99_1505"

><td id="1505"><a href="#1505">1505</a></td></tr
><tr id="gr_svn99_1506"

><td id="1506"><a href="#1506">1506</a></td></tr
><tr id="gr_svn99_1507"

><td id="1507"><a href="#1507">1507</a></td></tr
><tr id="gr_svn99_1508"

><td id="1508"><a href="#1508">1508</a></td></tr
><tr id="gr_svn99_1509"

><td id="1509"><a href="#1509">1509</a></td></tr
><tr id="gr_svn99_1510"

><td id="1510"><a href="#1510">1510</a></td></tr
><tr id="gr_svn99_1511"

><td id="1511"><a href="#1511">1511</a></td></tr
><tr id="gr_svn99_1512"

><td id="1512"><a href="#1512">1512</a></td></tr
><tr id="gr_svn99_1513"

><td id="1513"><a href="#1513">1513</a></td></tr
><tr id="gr_svn99_1514"

><td id="1514"><a href="#1514">1514</a></td></tr
><tr id="gr_svn99_1515"

><td id="1515"><a href="#1515">1515</a></td></tr
><tr id="gr_svn99_1516"

><td id="1516"><a href="#1516">1516</a></td></tr
><tr id="gr_svn99_1517"

><td id="1517"><a href="#1517">1517</a></td></tr
><tr id="gr_svn99_1518"

><td id="1518"><a href="#1518">1518</a></td></tr
><tr id="gr_svn99_1519"

><td id="1519"><a href="#1519">1519</a></td></tr
><tr id="gr_svn99_1520"

><td id="1520"><a href="#1520">1520</a></td></tr
><tr id="gr_svn99_1521"

><td id="1521"><a href="#1521">1521</a></td></tr
><tr id="gr_svn99_1522"

><td id="1522"><a href="#1522">1522</a></td></tr
><tr id="gr_svn99_1523"

><td id="1523"><a href="#1523">1523</a></td></tr
><tr id="gr_svn99_1524"

><td id="1524"><a href="#1524">1524</a></td></tr
><tr id="gr_svn99_1525"

><td id="1525"><a href="#1525">1525</a></td></tr
><tr id="gr_svn99_1526"

><td id="1526"><a href="#1526">1526</a></td></tr
><tr id="gr_svn99_1527"

><td id="1527"><a href="#1527">1527</a></td></tr
><tr id="gr_svn99_1528"

><td id="1528"><a href="#1528">1528</a></td></tr
><tr id="gr_svn99_1529"

><td id="1529"><a href="#1529">1529</a></td></tr
><tr id="gr_svn99_1530"

><td id="1530"><a href="#1530">1530</a></td></tr
><tr id="gr_svn99_1531"

><td id="1531"><a href="#1531">1531</a></td></tr
><tr id="gr_svn99_1532"

><td id="1532"><a href="#1532">1532</a></td></tr
><tr id="gr_svn99_1533"

><td id="1533"><a href="#1533">1533</a></td></tr
><tr id="gr_svn99_1534"

><td id="1534"><a href="#1534">1534</a></td></tr
><tr id="gr_svn99_1535"

><td id="1535"><a href="#1535">1535</a></td></tr
><tr id="gr_svn99_1536"

><td id="1536"><a href="#1536">1536</a></td></tr
><tr id="gr_svn99_1537"

><td id="1537"><a href="#1537">1537</a></td></tr
><tr id="gr_svn99_1538"

><td id="1538"><a href="#1538">1538</a></td></tr
><tr id="gr_svn99_1539"

><td id="1539"><a href="#1539">1539</a></td></tr
><tr id="gr_svn99_1540"

><td id="1540"><a href="#1540">1540</a></td></tr
><tr id="gr_svn99_1541"

><td id="1541"><a href="#1541">1541</a></td></tr
><tr id="gr_svn99_1542"

><td id="1542"><a href="#1542">1542</a></td></tr
><tr id="gr_svn99_1543"

><td id="1543"><a href="#1543">1543</a></td></tr
><tr id="gr_svn99_1544"

><td id="1544"><a href="#1544">1544</a></td></tr
><tr id="gr_svn99_1545"

><td id="1545"><a href="#1545">1545</a></td></tr
><tr id="gr_svn99_1546"

><td id="1546"><a href="#1546">1546</a></td></tr
><tr id="gr_svn99_1547"

><td id="1547"><a href="#1547">1547</a></td></tr
><tr id="gr_svn99_1548"

><td id="1548"><a href="#1548">1548</a></td></tr
><tr id="gr_svn99_1549"

><td id="1549"><a href="#1549">1549</a></td></tr
><tr id="gr_svn99_1550"

><td id="1550"><a href="#1550">1550</a></td></tr
><tr id="gr_svn99_1551"

><td id="1551"><a href="#1551">1551</a></td></tr
><tr id="gr_svn99_1552"

><td id="1552"><a href="#1552">1552</a></td></tr
><tr id="gr_svn99_1553"

><td id="1553"><a href="#1553">1553</a></td></tr
><tr id="gr_svn99_1554"

><td id="1554"><a href="#1554">1554</a></td></tr
><tr id="gr_svn99_1555"

><td id="1555"><a href="#1555">1555</a></td></tr
><tr id="gr_svn99_1556"

><td id="1556"><a href="#1556">1556</a></td></tr
><tr id="gr_svn99_1557"

><td id="1557"><a href="#1557">1557</a></td></tr
><tr id="gr_svn99_1558"

><td id="1558"><a href="#1558">1558</a></td></tr
><tr id="gr_svn99_1559"

><td id="1559"><a href="#1559">1559</a></td></tr
><tr id="gr_svn99_1560"

><td id="1560"><a href="#1560">1560</a></td></tr
><tr id="gr_svn99_1561"

><td id="1561"><a href="#1561">1561</a></td></tr
><tr id="gr_svn99_1562"

><td id="1562"><a href="#1562">1562</a></td></tr
><tr id="gr_svn99_1563"

><td id="1563"><a href="#1563">1563</a></td></tr
><tr id="gr_svn99_1564"

><td id="1564"><a href="#1564">1564</a></td></tr
><tr id="gr_svn99_1565"

><td id="1565"><a href="#1565">1565</a></td></tr
><tr id="gr_svn99_1566"

><td id="1566"><a href="#1566">1566</a></td></tr
><tr id="gr_svn99_1567"

><td id="1567"><a href="#1567">1567</a></td></tr
><tr id="gr_svn99_1568"

><td id="1568"><a href="#1568">1568</a></td></tr
><tr id="gr_svn99_1569"

><td id="1569"><a href="#1569">1569</a></td></tr
><tr id="gr_svn99_1570"

><td id="1570"><a href="#1570">1570</a></td></tr
><tr id="gr_svn99_1571"

><td id="1571"><a href="#1571">1571</a></td></tr
><tr id="gr_svn99_1572"

><td id="1572"><a href="#1572">1572</a></td></tr
><tr id="gr_svn99_1573"

><td id="1573"><a href="#1573">1573</a></td></tr
><tr id="gr_svn99_1574"

><td id="1574"><a href="#1574">1574</a></td></tr
><tr id="gr_svn99_1575"

><td id="1575"><a href="#1575">1575</a></td></tr
><tr id="gr_svn99_1576"

><td id="1576"><a href="#1576">1576</a></td></tr
><tr id="gr_svn99_1577"

><td id="1577"><a href="#1577">1577</a></td></tr
><tr id="gr_svn99_1578"

><td id="1578"><a href="#1578">1578</a></td></tr
><tr id="gr_svn99_1579"

><td id="1579"><a href="#1579">1579</a></td></tr
><tr id="gr_svn99_1580"

><td id="1580"><a href="#1580">1580</a></td></tr
><tr id="gr_svn99_1581"

><td id="1581"><a href="#1581">1581</a></td></tr
><tr id="gr_svn99_1582"

><td id="1582"><a href="#1582">1582</a></td></tr
><tr id="gr_svn99_1583"

><td id="1583"><a href="#1583">1583</a></td></tr
><tr id="gr_svn99_1584"

><td id="1584"><a href="#1584">1584</a></td></tr
><tr id="gr_svn99_1585"

><td id="1585"><a href="#1585">1585</a></td></tr
><tr id="gr_svn99_1586"

><td id="1586"><a href="#1586">1586</a></td></tr
><tr id="gr_svn99_1587"

><td id="1587"><a href="#1587">1587</a></td></tr
><tr id="gr_svn99_1588"

><td id="1588"><a href="#1588">1588</a></td></tr
><tr id="gr_svn99_1589"

><td id="1589"><a href="#1589">1589</a></td></tr
><tr id="gr_svn99_1590"

><td id="1590"><a href="#1590">1590</a></td></tr
><tr id="gr_svn99_1591"

><td id="1591"><a href="#1591">1591</a></td></tr
><tr id="gr_svn99_1592"

><td id="1592"><a href="#1592">1592</a></td></tr
><tr id="gr_svn99_1593"

><td id="1593"><a href="#1593">1593</a></td></tr
><tr id="gr_svn99_1594"

><td id="1594"><a href="#1594">1594</a></td></tr
><tr id="gr_svn99_1595"

><td id="1595"><a href="#1595">1595</a></td></tr
><tr id="gr_svn99_1596"

><td id="1596"><a href="#1596">1596</a></td></tr
><tr id="gr_svn99_1597"

><td id="1597"><a href="#1597">1597</a></td></tr
><tr id="gr_svn99_1598"

><td id="1598"><a href="#1598">1598</a></td></tr
><tr id="gr_svn99_1599"

><td id="1599"><a href="#1599">1599</a></td></tr
><tr id="gr_svn99_1600"

><td id="1600"><a href="#1600">1600</a></td></tr
><tr id="gr_svn99_1601"

><td id="1601"><a href="#1601">1601</a></td></tr
><tr id="gr_svn99_1602"

><td id="1602"><a href="#1602">1602</a></td></tr
><tr id="gr_svn99_1603"

><td id="1603"><a href="#1603">1603</a></td></tr
><tr id="gr_svn99_1604"

><td id="1604"><a href="#1604">1604</a></td></tr
><tr id="gr_svn99_1605"

><td id="1605"><a href="#1605">1605</a></td></tr
><tr id="gr_svn99_1606"

><td id="1606"><a href="#1606">1606</a></td></tr
><tr id="gr_svn99_1607"

><td id="1607"><a href="#1607">1607</a></td></tr
><tr id="gr_svn99_1608"

><td id="1608"><a href="#1608">1608</a></td></tr
><tr id="gr_svn99_1609"

><td id="1609"><a href="#1609">1609</a></td></tr
><tr id="gr_svn99_1610"

><td id="1610"><a href="#1610">1610</a></td></tr
><tr id="gr_svn99_1611"

><td id="1611"><a href="#1611">1611</a></td></tr
><tr id="gr_svn99_1612"

><td id="1612"><a href="#1612">1612</a></td></tr
><tr id="gr_svn99_1613"

><td id="1613"><a href="#1613">1613</a></td></tr
><tr id="gr_svn99_1614"

><td id="1614"><a href="#1614">1614</a></td></tr
><tr id="gr_svn99_1615"

><td id="1615"><a href="#1615">1615</a></td></tr
><tr id="gr_svn99_1616"

><td id="1616"><a href="#1616">1616</a></td></tr
><tr id="gr_svn99_1617"

><td id="1617"><a href="#1617">1617</a></td></tr
><tr id="gr_svn99_1618"

><td id="1618"><a href="#1618">1618</a></td></tr
><tr id="gr_svn99_1619"

><td id="1619"><a href="#1619">1619</a></td></tr
><tr id="gr_svn99_1620"

><td id="1620"><a href="#1620">1620</a></td></tr
><tr id="gr_svn99_1621"

><td id="1621"><a href="#1621">1621</a></td></tr
><tr id="gr_svn99_1622"

><td id="1622"><a href="#1622">1622</a></td></tr
><tr id="gr_svn99_1623"

><td id="1623"><a href="#1623">1623</a></td></tr
><tr id="gr_svn99_1624"

><td id="1624"><a href="#1624">1624</a></td></tr
><tr id="gr_svn99_1625"

><td id="1625"><a href="#1625">1625</a></td></tr
><tr id="gr_svn99_1626"

><td id="1626"><a href="#1626">1626</a></td></tr
><tr id="gr_svn99_1627"

><td id="1627"><a href="#1627">1627</a></td></tr
><tr id="gr_svn99_1628"

><td id="1628"><a href="#1628">1628</a></td></tr
><tr id="gr_svn99_1629"

><td id="1629"><a href="#1629">1629</a></td></tr
><tr id="gr_svn99_1630"

><td id="1630"><a href="#1630">1630</a></td></tr
><tr id="gr_svn99_1631"

><td id="1631"><a href="#1631">1631</a></td></tr
><tr id="gr_svn99_1632"

><td id="1632"><a href="#1632">1632</a></td></tr
><tr id="gr_svn99_1633"

><td id="1633"><a href="#1633">1633</a></td></tr
><tr id="gr_svn99_1634"

><td id="1634"><a href="#1634">1634</a></td></tr
><tr id="gr_svn99_1635"

><td id="1635"><a href="#1635">1635</a></td></tr
><tr id="gr_svn99_1636"

><td id="1636"><a href="#1636">1636</a></td></tr
><tr id="gr_svn99_1637"

><td id="1637"><a href="#1637">1637</a></td></tr
><tr id="gr_svn99_1638"

><td id="1638"><a href="#1638">1638</a></td></tr
><tr id="gr_svn99_1639"

><td id="1639"><a href="#1639">1639</a></td></tr
><tr id="gr_svn99_1640"

><td id="1640"><a href="#1640">1640</a></td></tr
><tr id="gr_svn99_1641"

><td id="1641"><a href="#1641">1641</a></td></tr
><tr id="gr_svn99_1642"

><td id="1642"><a href="#1642">1642</a></td></tr
><tr id="gr_svn99_1643"

><td id="1643"><a href="#1643">1643</a></td></tr
><tr id="gr_svn99_1644"

><td id="1644"><a href="#1644">1644</a></td></tr
><tr id="gr_svn99_1645"

><td id="1645"><a href="#1645">1645</a></td></tr
><tr id="gr_svn99_1646"

><td id="1646"><a href="#1646">1646</a></td></tr
><tr id="gr_svn99_1647"

><td id="1647"><a href="#1647">1647</a></td></tr
><tr id="gr_svn99_1648"

><td id="1648"><a href="#1648">1648</a></td></tr
><tr id="gr_svn99_1649"

><td id="1649"><a href="#1649">1649</a></td></tr
><tr id="gr_svn99_1650"

><td id="1650"><a href="#1650">1650</a></td></tr
><tr id="gr_svn99_1651"

><td id="1651"><a href="#1651">1651</a></td></tr
><tr id="gr_svn99_1652"

><td id="1652"><a href="#1652">1652</a></td></tr
><tr id="gr_svn99_1653"

><td id="1653"><a href="#1653">1653</a></td></tr
><tr id="gr_svn99_1654"

><td id="1654"><a href="#1654">1654</a></td></tr
><tr id="gr_svn99_1655"

><td id="1655"><a href="#1655">1655</a></td></tr
><tr id="gr_svn99_1656"

><td id="1656"><a href="#1656">1656</a></td></tr
><tr id="gr_svn99_1657"

><td id="1657"><a href="#1657">1657</a></td></tr
><tr id="gr_svn99_1658"

><td id="1658"><a href="#1658">1658</a></td></tr
><tr id="gr_svn99_1659"

><td id="1659"><a href="#1659">1659</a></td></tr
><tr id="gr_svn99_1660"

><td id="1660"><a href="#1660">1660</a></td></tr
><tr id="gr_svn99_1661"

><td id="1661"><a href="#1661">1661</a></td></tr
><tr id="gr_svn99_1662"

><td id="1662"><a href="#1662">1662</a></td></tr
><tr id="gr_svn99_1663"

><td id="1663"><a href="#1663">1663</a></td></tr
><tr id="gr_svn99_1664"

><td id="1664"><a href="#1664">1664</a></td></tr
><tr id="gr_svn99_1665"

><td id="1665"><a href="#1665">1665</a></td></tr
><tr id="gr_svn99_1666"

><td id="1666"><a href="#1666">1666</a></td></tr
><tr id="gr_svn99_1667"

><td id="1667"><a href="#1667">1667</a></td></tr
><tr id="gr_svn99_1668"

><td id="1668"><a href="#1668">1668</a></td></tr
><tr id="gr_svn99_1669"

><td id="1669"><a href="#1669">1669</a></td></tr
><tr id="gr_svn99_1670"

><td id="1670"><a href="#1670">1670</a></td></tr
><tr id="gr_svn99_1671"

><td id="1671"><a href="#1671">1671</a></td></tr
><tr id="gr_svn99_1672"

><td id="1672"><a href="#1672">1672</a></td></tr
><tr id="gr_svn99_1673"

><td id="1673"><a href="#1673">1673</a></td></tr
><tr id="gr_svn99_1674"

><td id="1674"><a href="#1674">1674</a></td></tr
><tr id="gr_svn99_1675"

><td id="1675"><a href="#1675">1675</a></td></tr
><tr id="gr_svn99_1676"

><td id="1676"><a href="#1676">1676</a></td></tr
><tr id="gr_svn99_1677"

><td id="1677"><a href="#1677">1677</a></td></tr
><tr id="gr_svn99_1678"

><td id="1678"><a href="#1678">1678</a></td></tr
><tr id="gr_svn99_1679"

><td id="1679"><a href="#1679">1679</a></td></tr
><tr id="gr_svn99_1680"

><td id="1680"><a href="#1680">1680</a></td></tr
><tr id="gr_svn99_1681"

><td id="1681"><a href="#1681">1681</a></td></tr
><tr id="gr_svn99_1682"

><td id="1682"><a href="#1682">1682</a></td></tr
><tr id="gr_svn99_1683"

><td id="1683"><a href="#1683">1683</a></td></tr
><tr id="gr_svn99_1684"

><td id="1684"><a href="#1684">1684</a></td></tr
><tr id="gr_svn99_1685"

><td id="1685"><a href="#1685">1685</a></td></tr
><tr id="gr_svn99_1686"

><td id="1686"><a href="#1686">1686</a></td></tr
><tr id="gr_svn99_1687"

><td id="1687"><a href="#1687">1687</a></td></tr
><tr id="gr_svn99_1688"

><td id="1688"><a href="#1688">1688</a></td></tr
><tr id="gr_svn99_1689"

><td id="1689"><a href="#1689">1689</a></td></tr
><tr id="gr_svn99_1690"

><td id="1690"><a href="#1690">1690</a></td></tr
><tr id="gr_svn99_1691"

><td id="1691"><a href="#1691">1691</a></td></tr
><tr id="gr_svn99_1692"

><td id="1692"><a href="#1692">1692</a></td></tr
><tr id="gr_svn99_1693"

><td id="1693"><a href="#1693">1693</a></td></tr
><tr id="gr_svn99_1694"

><td id="1694"><a href="#1694">1694</a></td></tr
><tr id="gr_svn99_1695"

><td id="1695"><a href="#1695">1695</a></td></tr
><tr id="gr_svn99_1696"

><td id="1696"><a href="#1696">1696</a></td></tr
><tr id="gr_svn99_1697"

><td id="1697"><a href="#1697">1697</a></td></tr
><tr id="gr_svn99_1698"

><td id="1698"><a href="#1698">1698</a></td></tr
><tr id="gr_svn99_1699"

><td id="1699"><a href="#1699">1699</a></td></tr
><tr id="gr_svn99_1700"

><td id="1700"><a href="#1700">1700</a></td></tr
><tr id="gr_svn99_1701"

><td id="1701"><a href="#1701">1701</a></td></tr
><tr id="gr_svn99_1702"

><td id="1702"><a href="#1702">1702</a></td></tr
><tr id="gr_svn99_1703"

><td id="1703"><a href="#1703">1703</a></td></tr
><tr id="gr_svn99_1704"

><td id="1704"><a href="#1704">1704</a></td></tr
><tr id="gr_svn99_1705"

><td id="1705"><a href="#1705">1705</a></td></tr
><tr id="gr_svn99_1706"

><td id="1706"><a href="#1706">1706</a></td></tr
><tr id="gr_svn99_1707"

><td id="1707"><a href="#1707">1707</a></td></tr
><tr id="gr_svn99_1708"

><td id="1708"><a href="#1708">1708</a></td></tr
><tr id="gr_svn99_1709"

><td id="1709"><a href="#1709">1709</a></td></tr
><tr id="gr_svn99_1710"

><td id="1710"><a href="#1710">1710</a></td></tr
><tr id="gr_svn99_1711"

><td id="1711"><a href="#1711">1711</a></td></tr
><tr id="gr_svn99_1712"

><td id="1712"><a href="#1712">1712</a></td></tr
><tr id="gr_svn99_1713"

><td id="1713"><a href="#1713">1713</a></td></tr
><tr id="gr_svn99_1714"

><td id="1714"><a href="#1714">1714</a></td></tr
><tr id="gr_svn99_1715"

><td id="1715"><a href="#1715">1715</a></td></tr
><tr id="gr_svn99_1716"

><td id="1716"><a href="#1716">1716</a></td></tr
><tr id="gr_svn99_1717"

><td id="1717"><a href="#1717">1717</a></td></tr
><tr id="gr_svn99_1718"

><td id="1718"><a href="#1718">1718</a></td></tr
><tr id="gr_svn99_1719"

><td id="1719"><a href="#1719">1719</a></td></tr
><tr id="gr_svn99_1720"

><td id="1720"><a href="#1720">1720</a></td></tr
><tr id="gr_svn99_1721"

><td id="1721"><a href="#1721">1721</a></td></tr
><tr id="gr_svn99_1722"

><td id="1722"><a href="#1722">1722</a></td></tr
><tr id="gr_svn99_1723"

><td id="1723"><a href="#1723">1723</a></td></tr
><tr id="gr_svn99_1724"

><td id="1724"><a href="#1724">1724</a></td></tr
><tr id="gr_svn99_1725"

><td id="1725"><a href="#1725">1725</a></td></tr
><tr id="gr_svn99_1726"

><td id="1726"><a href="#1726">1726</a></td></tr
><tr id="gr_svn99_1727"

><td id="1727"><a href="#1727">1727</a></td></tr
><tr id="gr_svn99_1728"

><td id="1728"><a href="#1728">1728</a></td></tr
><tr id="gr_svn99_1729"

><td id="1729"><a href="#1729">1729</a></td></tr
><tr id="gr_svn99_1730"

><td id="1730"><a href="#1730">1730</a></td></tr
><tr id="gr_svn99_1731"

><td id="1731"><a href="#1731">1731</a></td></tr
><tr id="gr_svn99_1732"

><td id="1732"><a href="#1732">1732</a></td></tr
><tr id="gr_svn99_1733"

><td id="1733"><a href="#1733">1733</a></td></tr
><tr id="gr_svn99_1734"

><td id="1734"><a href="#1734">1734</a></td></tr
><tr id="gr_svn99_1735"

><td id="1735"><a href="#1735">1735</a></td></tr
><tr id="gr_svn99_1736"

><td id="1736"><a href="#1736">1736</a></td></tr
><tr id="gr_svn99_1737"

><td id="1737"><a href="#1737">1737</a></td></tr
><tr id="gr_svn99_1738"

><td id="1738"><a href="#1738">1738</a></td></tr
><tr id="gr_svn99_1739"

><td id="1739"><a href="#1739">1739</a></td></tr
><tr id="gr_svn99_1740"

><td id="1740"><a href="#1740">1740</a></td></tr
><tr id="gr_svn99_1741"

><td id="1741"><a href="#1741">1741</a></td></tr
><tr id="gr_svn99_1742"

><td id="1742"><a href="#1742">1742</a></td></tr
><tr id="gr_svn99_1743"

><td id="1743"><a href="#1743">1743</a></td></tr
><tr id="gr_svn99_1744"

><td id="1744"><a href="#1744">1744</a></td></tr
><tr id="gr_svn99_1745"

><td id="1745"><a href="#1745">1745</a></td></tr
><tr id="gr_svn99_1746"

><td id="1746"><a href="#1746">1746</a></td></tr
><tr id="gr_svn99_1747"

><td id="1747"><a href="#1747">1747</a></td></tr
><tr id="gr_svn99_1748"

><td id="1748"><a href="#1748">1748</a></td></tr
><tr id="gr_svn99_1749"

><td id="1749"><a href="#1749">1749</a></td></tr
><tr id="gr_svn99_1750"

><td id="1750"><a href="#1750">1750</a></td></tr
><tr id="gr_svn99_1751"

><td id="1751"><a href="#1751">1751</a></td></tr
><tr id="gr_svn99_1752"

><td id="1752"><a href="#1752">1752</a></td></tr
><tr id="gr_svn99_1753"

><td id="1753"><a href="#1753">1753</a></td></tr
><tr id="gr_svn99_1754"

><td id="1754"><a href="#1754">1754</a></td></tr
><tr id="gr_svn99_1755"

><td id="1755"><a href="#1755">1755</a></td></tr
><tr id="gr_svn99_1756"

><td id="1756"><a href="#1756">1756</a></td></tr
><tr id="gr_svn99_1757"

><td id="1757"><a href="#1757">1757</a></td></tr
><tr id="gr_svn99_1758"

><td id="1758"><a href="#1758">1758</a></td></tr
><tr id="gr_svn99_1759"

><td id="1759"><a href="#1759">1759</a></td></tr
><tr id="gr_svn99_1760"

><td id="1760"><a href="#1760">1760</a></td></tr
><tr id="gr_svn99_1761"

><td id="1761"><a href="#1761">1761</a></td></tr
><tr id="gr_svn99_1762"

><td id="1762"><a href="#1762">1762</a></td></tr
><tr id="gr_svn99_1763"

><td id="1763"><a href="#1763">1763</a></td></tr
><tr id="gr_svn99_1764"

><td id="1764"><a href="#1764">1764</a></td></tr
><tr id="gr_svn99_1765"

><td id="1765"><a href="#1765">1765</a></td></tr
><tr id="gr_svn99_1766"

><td id="1766"><a href="#1766">1766</a></td></tr
><tr id="gr_svn99_1767"

><td id="1767"><a href="#1767">1767</a></td></tr
><tr id="gr_svn99_1768"

><td id="1768"><a href="#1768">1768</a></td></tr
><tr id="gr_svn99_1769"

><td id="1769"><a href="#1769">1769</a></td></tr
><tr id="gr_svn99_1770"

><td id="1770"><a href="#1770">1770</a></td></tr
><tr id="gr_svn99_1771"

><td id="1771"><a href="#1771">1771</a></td></tr
><tr id="gr_svn99_1772"

><td id="1772"><a href="#1772">1772</a></td></tr
><tr id="gr_svn99_1773"

><td id="1773"><a href="#1773">1773</a></td></tr
><tr id="gr_svn99_1774"

><td id="1774"><a href="#1774">1774</a></td></tr
><tr id="gr_svn99_1775"

><td id="1775"><a href="#1775">1775</a></td></tr
><tr id="gr_svn99_1776"

><td id="1776"><a href="#1776">1776</a></td></tr
><tr id="gr_svn99_1777"

><td id="1777"><a href="#1777">1777</a></td></tr
><tr id="gr_svn99_1778"

><td id="1778"><a href="#1778">1778</a></td></tr
><tr id="gr_svn99_1779"

><td id="1779"><a href="#1779">1779</a></td></tr
><tr id="gr_svn99_1780"

><td id="1780"><a href="#1780">1780</a></td></tr
><tr id="gr_svn99_1781"

><td id="1781"><a href="#1781">1781</a></td></tr
><tr id="gr_svn99_1782"

><td id="1782"><a href="#1782">1782</a></td></tr
><tr id="gr_svn99_1783"

><td id="1783"><a href="#1783">1783</a></td></tr
><tr id="gr_svn99_1784"

><td id="1784"><a href="#1784">1784</a></td></tr
><tr id="gr_svn99_1785"

><td id="1785"><a href="#1785">1785</a></td></tr
><tr id="gr_svn99_1786"

><td id="1786"><a href="#1786">1786</a></td></tr
><tr id="gr_svn99_1787"

><td id="1787"><a href="#1787">1787</a></td></tr
><tr id="gr_svn99_1788"

><td id="1788"><a href="#1788">1788</a></td></tr
><tr id="gr_svn99_1789"

><td id="1789"><a href="#1789">1789</a></td></tr
><tr id="gr_svn99_1790"

><td id="1790"><a href="#1790">1790</a></td></tr
><tr id="gr_svn99_1791"

><td id="1791"><a href="#1791">1791</a></td></tr
><tr id="gr_svn99_1792"

><td id="1792"><a href="#1792">1792</a></td></tr
><tr id="gr_svn99_1793"

><td id="1793"><a href="#1793">1793</a></td></tr
><tr id="gr_svn99_1794"

><td id="1794"><a href="#1794">1794</a></td></tr
><tr id="gr_svn99_1795"

><td id="1795"><a href="#1795">1795</a></td></tr
><tr id="gr_svn99_1796"

><td id="1796"><a href="#1796">1796</a></td></tr
><tr id="gr_svn99_1797"

><td id="1797"><a href="#1797">1797</a></td></tr
><tr id="gr_svn99_1798"

><td id="1798"><a href="#1798">1798</a></td></tr
><tr id="gr_svn99_1799"

><td id="1799"><a href="#1799">1799</a></td></tr
><tr id="gr_svn99_1800"

><td id="1800"><a href="#1800">1800</a></td></tr
><tr id="gr_svn99_1801"

><td id="1801"><a href="#1801">1801</a></td></tr
><tr id="gr_svn99_1802"

><td id="1802"><a href="#1802">1802</a></td></tr
><tr id="gr_svn99_1803"

><td id="1803"><a href="#1803">1803</a></td></tr
><tr id="gr_svn99_1804"

><td id="1804"><a href="#1804">1804</a></td></tr
><tr id="gr_svn99_1805"

><td id="1805"><a href="#1805">1805</a></td></tr
><tr id="gr_svn99_1806"

><td id="1806"><a href="#1806">1806</a></td></tr
><tr id="gr_svn99_1807"

><td id="1807"><a href="#1807">1807</a></td></tr
><tr id="gr_svn99_1808"

><td id="1808"><a href="#1808">1808</a></td></tr
><tr id="gr_svn99_1809"

><td id="1809"><a href="#1809">1809</a></td></tr
><tr id="gr_svn99_1810"

><td id="1810"><a href="#1810">1810</a></td></tr
><tr id="gr_svn99_1811"

><td id="1811"><a href="#1811">1811</a></td></tr
><tr id="gr_svn99_1812"

><td id="1812"><a href="#1812">1812</a></td></tr
><tr id="gr_svn99_1813"

><td id="1813"><a href="#1813">1813</a></td></tr
><tr id="gr_svn99_1814"

><td id="1814"><a href="#1814">1814</a></td></tr
><tr id="gr_svn99_1815"

><td id="1815"><a href="#1815">1815</a></td></tr
><tr id="gr_svn99_1816"

><td id="1816"><a href="#1816">1816</a></td></tr
><tr id="gr_svn99_1817"

><td id="1817"><a href="#1817">1817</a></td></tr
><tr id="gr_svn99_1818"

><td id="1818"><a href="#1818">1818</a></td></tr
><tr id="gr_svn99_1819"

><td id="1819"><a href="#1819">1819</a></td></tr
><tr id="gr_svn99_1820"

><td id="1820"><a href="#1820">1820</a></td></tr
><tr id="gr_svn99_1821"

><td id="1821"><a href="#1821">1821</a></td></tr
><tr id="gr_svn99_1822"

><td id="1822"><a href="#1822">1822</a></td></tr
><tr id="gr_svn99_1823"

><td id="1823"><a href="#1823">1823</a></td></tr
><tr id="gr_svn99_1824"

><td id="1824"><a href="#1824">1824</a></td></tr
><tr id="gr_svn99_1825"

><td id="1825"><a href="#1825">1825</a></td></tr
><tr id="gr_svn99_1826"

><td id="1826"><a href="#1826">1826</a></td></tr
><tr id="gr_svn99_1827"

><td id="1827"><a href="#1827">1827</a></td></tr
><tr id="gr_svn99_1828"

><td id="1828"><a href="#1828">1828</a></td></tr
><tr id="gr_svn99_1829"

><td id="1829"><a href="#1829">1829</a></td></tr
><tr id="gr_svn99_1830"

><td id="1830"><a href="#1830">1830</a></td></tr
><tr id="gr_svn99_1831"

><td id="1831"><a href="#1831">1831</a></td></tr
><tr id="gr_svn99_1832"

><td id="1832"><a href="#1832">1832</a></td></tr
><tr id="gr_svn99_1833"

><td id="1833"><a href="#1833">1833</a></td></tr
><tr id="gr_svn99_1834"

><td id="1834"><a href="#1834">1834</a></td></tr
><tr id="gr_svn99_1835"

><td id="1835"><a href="#1835">1835</a></td></tr
><tr id="gr_svn99_1836"

><td id="1836"><a href="#1836">1836</a></td></tr
><tr id="gr_svn99_1837"

><td id="1837"><a href="#1837">1837</a></td></tr
><tr id="gr_svn99_1838"

><td id="1838"><a href="#1838">1838</a></td></tr
><tr id="gr_svn99_1839"

><td id="1839"><a href="#1839">1839</a></td></tr
><tr id="gr_svn99_1840"

><td id="1840"><a href="#1840">1840</a></td></tr
><tr id="gr_svn99_1841"

><td id="1841"><a href="#1841">1841</a></td></tr
><tr id="gr_svn99_1842"

><td id="1842"><a href="#1842">1842</a></td></tr
><tr id="gr_svn99_1843"

><td id="1843"><a href="#1843">1843</a></td></tr
><tr id="gr_svn99_1844"

><td id="1844"><a href="#1844">1844</a></td></tr
><tr id="gr_svn99_1845"

><td id="1845"><a href="#1845">1845</a></td></tr
><tr id="gr_svn99_1846"

><td id="1846"><a href="#1846">1846</a></td></tr
><tr id="gr_svn99_1847"

><td id="1847"><a href="#1847">1847</a></td></tr
><tr id="gr_svn99_1848"

><td id="1848"><a href="#1848">1848</a></td></tr
><tr id="gr_svn99_1849"

><td id="1849"><a href="#1849">1849</a></td></tr
><tr id="gr_svn99_1850"

><td id="1850"><a href="#1850">1850</a></td></tr
><tr id="gr_svn99_1851"

><td id="1851"><a href="#1851">1851</a></td></tr
><tr id="gr_svn99_1852"

><td id="1852"><a href="#1852">1852</a></td></tr
><tr id="gr_svn99_1853"

><td id="1853"><a href="#1853">1853</a></td></tr
><tr id="gr_svn99_1854"

><td id="1854"><a href="#1854">1854</a></td></tr
><tr id="gr_svn99_1855"

><td id="1855"><a href="#1855">1855</a></td></tr
><tr id="gr_svn99_1856"

><td id="1856"><a href="#1856">1856</a></td></tr
><tr id="gr_svn99_1857"

><td id="1857"><a href="#1857">1857</a></td></tr
><tr id="gr_svn99_1858"

><td id="1858"><a href="#1858">1858</a></td></tr
><tr id="gr_svn99_1859"

><td id="1859"><a href="#1859">1859</a></td></tr
><tr id="gr_svn99_1860"

><td id="1860"><a href="#1860">1860</a></td></tr
><tr id="gr_svn99_1861"

><td id="1861"><a href="#1861">1861</a></td></tr
><tr id="gr_svn99_1862"

><td id="1862"><a href="#1862">1862</a></td></tr
><tr id="gr_svn99_1863"

><td id="1863"><a href="#1863">1863</a></td></tr
><tr id="gr_svn99_1864"

><td id="1864"><a href="#1864">1864</a></td></tr
><tr id="gr_svn99_1865"

><td id="1865"><a href="#1865">1865</a></td></tr
><tr id="gr_svn99_1866"

><td id="1866"><a href="#1866">1866</a></td></tr
><tr id="gr_svn99_1867"

><td id="1867"><a href="#1867">1867</a></td></tr
><tr id="gr_svn99_1868"

><td id="1868"><a href="#1868">1868</a></td></tr
><tr id="gr_svn99_1869"

><td id="1869"><a href="#1869">1869</a></td></tr
><tr id="gr_svn99_1870"

><td id="1870"><a href="#1870">1870</a></td></tr
><tr id="gr_svn99_1871"

><td id="1871"><a href="#1871">1871</a></td></tr
><tr id="gr_svn99_1872"

><td id="1872"><a href="#1872">1872</a></td></tr
><tr id="gr_svn99_1873"

><td id="1873"><a href="#1873">1873</a></td></tr
><tr id="gr_svn99_1874"

><td id="1874"><a href="#1874">1874</a></td></tr
><tr id="gr_svn99_1875"

><td id="1875"><a href="#1875">1875</a></td></tr
><tr id="gr_svn99_1876"

><td id="1876"><a href="#1876">1876</a></td></tr
><tr id="gr_svn99_1877"

><td id="1877"><a href="#1877">1877</a></td></tr
><tr id="gr_svn99_1878"

><td id="1878"><a href="#1878">1878</a></td></tr
><tr id="gr_svn99_1879"

><td id="1879"><a href="#1879">1879</a></td></tr
><tr id="gr_svn99_1880"

><td id="1880"><a href="#1880">1880</a></td></tr
><tr id="gr_svn99_1881"

><td id="1881"><a href="#1881">1881</a></td></tr
><tr id="gr_svn99_1882"

><td id="1882"><a href="#1882">1882</a></td></tr
><tr id="gr_svn99_1883"

><td id="1883"><a href="#1883">1883</a></td></tr
><tr id="gr_svn99_1884"

><td id="1884"><a href="#1884">1884</a></td></tr
><tr id="gr_svn99_1885"

><td id="1885"><a href="#1885">1885</a></td></tr
><tr id="gr_svn99_1886"

><td id="1886"><a href="#1886">1886</a></td></tr
><tr id="gr_svn99_1887"

><td id="1887"><a href="#1887">1887</a></td></tr
><tr id="gr_svn99_1888"

><td id="1888"><a href="#1888">1888</a></td></tr
><tr id="gr_svn99_1889"

><td id="1889"><a href="#1889">1889</a></td></tr
><tr id="gr_svn99_1890"

><td id="1890"><a href="#1890">1890</a></td></tr
><tr id="gr_svn99_1891"

><td id="1891"><a href="#1891">1891</a></td></tr
><tr id="gr_svn99_1892"

><td id="1892"><a href="#1892">1892</a></td></tr
><tr id="gr_svn99_1893"

><td id="1893"><a href="#1893">1893</a></td></tr
><tr id="gr_svn99_1894"

><td id="1894"><a href="#1894">1894</a></td></tr
><tr id="gr_svn99_1895"

><td id="1895"><a href="#1895">1895</a></td></tr
><tr id="gr_svn99_1896"

><td id="1896"><a href="#1896">1896</a></td></tr
><tr id="gr_svn99_1897"

><td id="1897"><a href="#1897">1897</a></td></tr
><tr id="gr_svn99_1898"

><td id="1898"><a href="#1898">1898</a></td></tr
><tr id="gr_svn99_1899"

><td id="1899"><a href="#1899">1899</a></td></tr
><tr id="gr_svn99_1900"

><td id="1900"><a href="#1900">1900</a></td></tr
><tr id="gr_svn99_1901"

><td id="1901"><a href="#1901">1901</a></td></tr
><tr id="gr_svn99_1902"

><td id="1902"><a href="#1902">1902</a></td></tr
><tr id="gr_svn99_1903"

><td id="1903"><a href="#1903">1903</a></td></tr
><tr id="gr_svn99_1904"

><td id="1904"><a href="#1904">1904</a></td></tr
><tr id="gr_svn99_1905"

><td id="1905"><a href="#1905">1905</a></td></tr
><tr id="gr_svn99_1906"

><td id="1906"><a href="#1906">1906</a></td></tr
><tr id="gr_svn99_1907"

><td id="1907"><a href="#1907">1907</a></td></tr
><tr id="gr_svn99_1908"

><td id="1908"><a href="#1908">1908</a></td></tr
><tr id="gr_svn99_1909"

><td id="1909"><a href="#1909">1909</a></td></tr
><tr id="gr_svn99_1910"

><td id="1910"><a href="#1910">1910</a></td></tr
><tr id="gr_svn99_1911"

><td id="1911"><a href="#1911">1911</a></td></tr
><tr id="gr_svn99_1912"

><td id="1912"><a href="#1912">1912</a></td></tr
><tr id="gr_svn99_1913"

><td id="1913"><a href="#1913">1913</a></td></tr
><tr id="gr_svn99_1914"

><td id="1914"><a href="#1914">1914</a></td></tr
><tr id="gr_svn99_1915"

><td id="1915"><a href="#1915">1915</a></td></tr
><tr id="gr_svn99_1916"

><td id="1916"><a href="#1916">1916</a></td></tr
><tr id="gr_svn99_1917"

><td id="1917"><a href="#1917">1917</a></td></tr
><tr id="gr_svn99_1918"

><td id="1918"><a href="#1918">1918</a></td></tr
><tr id="gr_svn99_1919"

><td id="1919"><a href="#1919">1919</a></td></tr
><tr id="gr_svn99_1920"

><td id="1920"><a href="#1920">1920</a></td></tr
><tr id="gr_svn99_1921"

><td id="1921"><a href="#1921">1921</a></td></tr
><tr id="gr_svn99_1922"

><td id="1922"><a href="#1922">1922</a></td></tr
><tr id="gr_svn99_1923"

><td id="1923"><a href="#1923">1923</a></td></tr
><tr id="gr_svn99_1924"

><td id="1924"><a href="#1924">1924</a></td></tr
><tr id="gr_svn99_1925"

><td id="1925"><a href="#1925">1925</a></td></tr
><tr id="gr_svn99_1926"

><td id="1926"><a href="#1926">1926</a></td></tr
><tr id="gr_svn99_1927"

><td id="1927"><a href="#1927">1927</a></td></tr
><tr id="gr_svn99_1928"

><td id="1928"><a href="#1928">1928</a></td></tr
><tr id="gr_svn99_1929"

><td id="1929"><a href="#1929">1929</a></td></tr
><tr id="gr_svn99_1930"

><td id="1930"><a href="#1930">1930</a></td></tr
><tr id="gr_svn99_1931"

><td id="1931"><a href="#1931">1931</a></td></tr
><tr id="gr_svn99_1932"

><td id="1932"><a href="#1932">1932</a></td></tr
><tr id="gr_svn99_1933"

><td id="1933"><a href="#1933">1933</a></td></tr
><tr id="gr_svn99_1934"

><td id="1934"><a href="#1934">1934</a></td></tr
><tr id="gr_svn99_1935"

><td id="1935"><a href="#1935">1935</a></td></tr
><tr id="gr_svn99_1936"

><td id="1936"><a href="#1936">1936</a></td></tr
><tr id="gr_svn99_1937"

><td id="1937"><a href="#1937">1937</a></td></tr
><tr id="gr_svn99_1938"

><td id="1938"><a href="#1938">1938</a></td></tr
><tr id="gr_svn99_1939"

><td id="1939"><a href="#1939">1939</a></td></tr
><tr id="gr_svn99_1940"

><td id="1940"><a href="#1940">1940</a></td></tr
><tr id="gr_svn99_1941"

><td id="1941"><a href="#1941">1941</a></td></tr
><tr id="gr_svn99_1942"

><td id="1942"><a href="#1942">1942</a></td></tr
><tr id="gr_svn99_1943"

><td id="1943"><a href="#1943">1943</a></td></tr
><tr id="gr_svn99_1944"

><td id="1944"><a href="#1944">1944</a></td></tr
><tr id="gr_svn99_1945"

><td id="1945"><a href="#1945">1945</a></td></tr
><tr id="gr_svn99_1946"

><td id="1946"><a href="#1946">1946</a></td></tr
><tr id="gr_svn99_1947"

><td id="1947"><a href="#1947">1947</a></td></tr
><tr id="gr_svn99_1948"

><td id="1948"><a href="#1948">1948</a></td></tr
><tr id="gr_svn99_1949"

><td id="1949"><a href="#1949">1949</a></td></tr
><tr id="gr_svn99_1950"

><td id="1950"><a href="#1950">1950</a></td></tr
><tr id="gr_svn99_1951"

><td id="1951"><a href="#1951">1951</a></td></tr
><tr id="gr_svn99_1952"

><td id="1952"><a href="#1952">1952</a></td></tr
><tr id="gr_svn99_1953"

><td id="1953"><a href="#1953">1953</a></td></tr
><tr id="gr_svn99_1954"

><td id="1954"><a href="#1954">1954</a></td></tr
><tr id="gr_svn99_1955"

><td id="1955"><a href="#1955">1955</a></td></tr
><tr id="gr_svn99_1956"

><td id="1956"><a href="#1956">1956</a></td></tr
><tr id="gr_svn99_1957"

><td id="1957"><a href="#1957">1957</a></td></tr
><tr id="gr_svn99_1958"

><td id="1958"><a href="#1958">1958</a></td></tr
><tr id="gr_svn99_1959"

><td id="1959"><a href="#1959">1959</a></td></tr
><tr id="gr_svn99_1960"

><td id="1960"><a href="#1960">1960</a></td></tr
><tr id="gr_svn99_1961"

><td id="1961"><a href="#1961">1961</a></td></tr
><tr id="gr_svn99_1962"

><td id="1962"><a href="#1962">1962</a></td></tr
><tr id="gr_svn99_1963"

><td id="1963"><a href="#1963">1963</a></td></tr
><tr id="gr_svn99_1964"

><td id="1964"><a href="#1964">1964</a></td></tr
><tr id="gr_svn99_1965"

><td id="1965"><a href="#1965">1965</a></td></tr
><tr id="gr_svn99_1966"

><td id="1966"><a href="#1966">1966</a></td></tr
><tr id="gr_svn99_1967"

><td id="1967"><a href="#1967">1967</a></td></tr
><tr id="gr_svn99_1968"

><td id="1968"><a href="#1968">1968</a></td></tr
><tr id="gr_svn99_1969"

><td id="1969"><a href="#1969">1969</a></td></tr
><tr id="gr_svn99_1970"

><td id="1970"><a href="#1970">1970</a></td></tr
><tr id="gr_svn99_1971"

><td id="1971"><a href="#1971">1971</a></td></tr
><tr id="gr_svn99_1972"

><td id="1972"><a href="#1972">1972</a></td></tr
><tr id="gr_svn99_1973"

><td id="1973"><a href="#1973">1973</a></td></tr
><tr id="gr_svn99_1974"

><td id="1974"><a href="#1974">1974</a></td></tr
><tr id="gr_svn99_1975"

><td id="1975"><a href="#1975">1975</a></td></tr
><tr id="gr_svn99_1976"

><td id="1976"><a href="#1976">1976</a></td></tr
><tr id="gr_svn99_1977"

><td id="1977"><a href="#1977">1977</a></td></tr
><tr id="gr_svn99_1978"

><td id="1978"><a href="#1978">1978</a></td></tr
><tr id="gr_svn99_1979"

><td id="1979"><a href="#1979">1979</a></td></tr
><tr id="gr_svn99_1980"

><td id="1980"><a href="#1980">1980</a></td></tr
><tr id="gr_svn99_1981"

><td id="1981"><a href="#1981">1981</a></td></tr
><tr id="gr_svn99_1982"

><td id="1982"><a href="#1982">1982</a></td></tr
><tr id="gr_svn99_1983"

><td id="1983"><a href="#1983">1983</a></td></tr
><tr id="gr_svn99_1984"

><td id="1984"><a href="#1984">1984</a></td></tr
><tr id="gr_svn99_1985"

><td id="1985"><a href="#1985">1985</a></td></tr
><tr id="gr_svn99_1986"

><td id="1986"><a href="#1986">1986</a></td></tr
><tr id="gr_svn99_1987"

><td id="1987"><a href="#1987">1987</a></td></tr
><tr id="gr_svn99_1988"

><td id="1988"><a href="#1988">1988</a></td></tr
><tr id="gr_svn99_1989"

><td id="1989"><a href="#1989">1989</a></td></tr
><tr id="gr_svn99_1990"

><td id="1990"><a href="#1990">1990</a></td></tr
><tr id="gr_svn99_1991"

><td id="1991"><a href="#1991">1991</a></td></tr
><tr id="gr_svn99_1992"

><td id="1992"><a href="#1992">1992</a></td></tr
><tr id="gr_svn99_1993"

><td id="1993"><a href="#1993">1993</a></td></tr
><tr id="gr_svn99_1994"

><td id="1994"><a href="#1994">1994</a></td></tr
><tr id="gr_svn99_1995"

><td id="1995"><a href="#1995">1995</a></td></tr
><tr id="gr_svn99_1996"

><td id="1996"><a href="#1996">1996</a></td></tr
><tr id="gr_svn99_1997"

><td id="1997"><a href="#1997">1997</a></td></tr
><tr id="gr_svn99_1998"

><td id="1998"><a href="#1998">1998</a></td></tr
><tr id="gr_svn99_1999"

><td id="1999"><a href="#1999">1999</a></td></tr
><tr id="gr_svn99_2000"

><td id="2000"><a href="#2000">2000</a></td></tr
><tr id="gr_svn99_2001"

><td id="2001"><a href="#2001">2001</a></td></tr
><tr id="gr_svn99_2002"

><td id="2002"><a href="#2002">2002</a></td></tr
><tr id="gr_svn99_2003"

><td id="2003"><a href="#2003">2003</a></td></tr
><tr id="gr_svn99_2004"

><td id="2004"><a href="#2004">2004</a></td></tr
><tr id="gr_svn99_2005"

><td id="2005"><a href="#2005">2005</a></td></tr
><tr id="gr_svn99_2006"

><td id="2006"><a href="#2006">2006</a></td></tr
><tr id="gr_svn99_2007"

><td id="2007"><a href="#2007">2007</a></td></tr
><tr id="gr_svn99_2008"

><td id="2008"><a href="#2008">2008</a></td></tr
><tr id="gr_svn99_2009"

><td id="2009"><a href="#2009">2009</a></td></tr
><tr id="gr_svn99_2010"

><td id="2010"><a href="#2010">2010</a></td></tr
><tr id="gr_svn99_2011"

><td id="2011"><a href="#2011">2011</a></td></tr
><tr id="gr_svn99_2012"

><td id="2012"><a href="#2012">2012</a></td></tr
><tr id="gr_svn99_2013"

><td id="2013"><a href="#2013">2013</a></td></tr
><tr id="gr_svn99_2014"

><td id="2014"><a href="#2014">2014</a></td></tr
><tr id="gr_svn99_2015"

><td id="2015"><a href="#2015">2015</a></td></tr
><tr id="gr_svn99_2016"

><td id="2016"><a href="#2016">2016</a></td></tr
><tr id="gr_svn99_2017"

><td id="2017"><a href="#2017">2017</a></td></tr
><tr id="gr_svn99_2018"

><td id="2018"><a href="#2018">2018</a></td></tr
><tr id="gr_svn99_2019"

><td id="2019"><a href="#2019">2019</a></td></tr
><tr id="gr_svn99_2020"

><td id="2020"><a href="#2020">2020</a></td></tr
><tr id="gr_svn99_2021"

><td id="2021"><a href="#2021">2021</a></td></tr
><tr id="gr_svn99_2022"

><td id="2022"><a href="#2022">2022</a></td></tr
><tr id="gr_svn99_2023"

><td id="2023"><a href="#2023">2023</a></td></tr
><tr id="gr_svn99_2024"

><td id="2024"><a href="#2024">2024</a></td></tr
><tr id="gr_svn99_2025"

><td id="2025"><a href="#2025">2025</a></td></tr
><tr id="gr_svn99_2026"

><td id="2026"><a href="#2026">2026</a></td></tr
><tr id="gr_svn99_2027"

><td id="2027"><a href="#2027">2027</a></td></tr
><tr id="gr_svn99_2028"

><td id="2028"><a href="#2028">2028</a></td></tr
><tr id="gr_svn99_2029"

><td id="2029"><a href="#2029">2029</a></td></tr
><tr id="gr_svn99_2030"

><td id="2030"><a href="#2030">2030</a></td></tr
><tr id="gr_svn99_2031"

><td id="2031"><a href="#2031">2031</a></td></tr
><tr id="gr_svn99_2032"

><td id="2032"><a href="#2032">2032</a></td></tr
><tr id="gr_svn99_2033"

><td id="2033"><a href="#2033">2033</a></td></tr
><tr id="gr_svn99_2034"

><td id="2034"><a href="#2034">2034</a></td></tr
><tr id="gr_svn99_2035"

><td id="2035"><a href="#2035">2035</a></td></tr
><tr id="gr_svn99_2036"

><td id="2036"><a href="#2036">2036</a></td></tr
><tr id="gr_svn99_2037"

><td id="2037"><a href="#2037">2037</a></td></tr
><tr id="gr_svn99_2038"

><td id="2038"><a href="#2038">2038</a></td></tr
><tr id="gr_svn99_2039"

><td id="2039"><a href="#2039">2039</a></td></tr
><tr id="gr_svn99_2040"

><td id="2040"><a href="#2040">2040</a></td></tr
><tr id="gr_svn99_2041"

><td id="2041"><a href="#2041">2041</a></td></tr
><tr id="gr_svn99_2042"

><td id="2042"><a href="#2042">2042</a></td></tr
><tr id="gr_svn99_2043"

><td id="2043"><a href="#2043">2043</a></td></tr
><tr id="gr_svn99_2044"

><td id="2044"><a href="#2044">2044</a></td></tr
><tr id="gr_svn99_2045"

><td id="2045"><a href="#2045">2045</a></td></tr
><tr id="gr_svn99_2046"

><td id="2046"><a href="#2046">2046</a></td></tr
><tr id="gr_svn99_2047"

><td id="2047"><a href="#2047">2047</a></td></tr
><tr id="gr_svn99_2048"

><td id="2048"><a href="#2048">2048</a></td></tr
><tr id="gr_svn99_2049"

><td id="2049"><a href="#2049">2049</a></td></tr
><tr id="gr_svn99_2050"

><td id="2050"><a href="#2050">2050</a></td></tr
><tr id="gr_svn99_2051"

><td id="2051"><a href="#2051">2051</a></td></tr
><tr id="gr_svn99_2052"

><td id="2052"><a href="#2052">2052</a></td></tr
><tr id="gr_svn99_2053"

><td id="2053"><a href="#2053">2053</a></td></tr
><tr id="gr_svn99_2054"

><td id="2054"><a href="#2054">2054</a></td></tr
><tr id="gr_svn99_2055"

><td id="2055"><a href="#2055">2055</a></td></tr
><tr id="gr_svn99_2056"

><td id="2056"><a href="#2056">2056</a></td></tr
><tr id="gr_svn99_2057"

><td id="2057"><a href="#2057">2057</a></td></tr
><tr id="gr_svn99_2058"

><td id="2058"><a href="#2058">2058</a></td></tr
><tr id="gr_svn99_2059"

><td id="2059"><a href="#2059">2059</a></td></tr
><tr id="gr_svn99_2060"

><td id="2060"><a href="#2060">2060</a></td></tr
><tr id="gr_svn99_2061"

><td id="2061"><a href="#2061">2061</a></td></tr
><tr id="gr_svn99_2062"

><td id="2062"><a href="#2062">2062</a></td></tr
><tr id="gr_svn99_2063"

><td id="2063"><a href="#2063">2063</a></td></tr
><tr id="gr_svn99_2064"

><td id="2064"><a href="#2064">2064</a></td></tr
><tr id="gr_svn99_2065"

><td id="2065"><a href="#2065">2065</a></td></tr
><tr id="gr_svn99_2066"

><td id="2066"><a href="#2066">2066</a></td></tr
><tr id="gr_svn99_2067"

><td id="2067"><a href="#2067">2067</a></td></tr
><tr id="gr_svn99_2068"

><td id="2068"><a href="#2068">2068</a></td></tr
><tr id="gr_svn99_2069"

><td id="2069"><a href="#2069">2069</a></td></tr
><tr id="gr_svn99_2070"

><td id="2070"><a href="#2070">2070</a></td></tr
><tr id="gr_svn99_2071"

><td id="2071"><a href="#2071">2071</a></td></tr
><tr id="gr_svn99_2072"

><td id="2072"><a href="#2072">2072</a></td></tr
><tr id="gr_svn99_2073"

><td id="2073"><a href="#2073">2073</a></td></tr
><tr id="gr_svn99_2074"

><td id="2074"><a href="#2074">2074</a></td></tr
><tr id="gr_svn99_2075"

><td id="2075"><a href="#2075">2075</a></td></tr
><tr id="gr_svn99_2076"

><td id="2076"><a href="#2076">2076</a></td></tr
><tr id="gr_svn99_2077"

><td id="2077"><a href="#2077">2077</a></td></tr
><tr id="gr_svn99_2078"

><td id="2078"><a href="#2078">2078</a></td></tr
><tr id="gr_svn99_2079"

><td id="2079"><a href="#2079">2079</a></td></tr
><tr id="gr_svn99_2080"

><td id="2080"><a href="#2080">2080</a></td></tr
><tr id="gr_svn99_2081"

><td id="2081"><a href="#2081">2081</a></td></tr
><tr id="gr_svn99_2082"

><td id="2082"><a href="#2082">2082</a></td></tr
><tr id="gr_svn99_2083"

><td id="2083"><a href="#2083">2083</a></td></tr
><tr id="gr_svn99_2084"

><td id="2084"><a href="#2084">2084</a></td></tr
><tr id="gr_svn99_2085"

><td id="2085"><a href="#2085">2085</a></td></tr
><tr id="gr_svn99_2086"

><td id="2086"><a href="#2086">2086</a></td></tr
><tr id="gr_svn99_2087"

><td id="2087"><a href="#2087">2087</a></td></tr
><tr id="gr_svn99_2088"

><td id="2088"><a href="#2088">2088</a></td></tr
><tr id="gr_svn99_2089"

><td id="2089"><a href="#2089">2089</a></td></tr
><tr id="gr_svn99_2090"

><td id="2090"><a href="#2090">2090</a></td></tr
><tr id="gr_svn99_2091"

><td id="2091"><a href="#2091">2091</a></td></tr
><tr id="gr_svn99_2092"

><td id="2092"><a href="#2092">2092</a></td></tr
><tr id="gr_svn99_2093"

><td id="2093"><a href="#2093">2093</a></td></tr
><tr id="gr_svn99_2094"

><td id="2094"><a href="#2094">2094</a></td></tr
><tr id="gr_svn99_2095"

><td id="2095"><a href="#2095">2095</a></td></tr
><tr id="gr_svn99_2096"

><td id="2096"><a href="#2096">2096</a></td></tr
><tr id="gr_svn99_2097"

><td id="2097"><a href="#2097">2097</a></td></tr
><tr id="gr_svn99_2098"

><td id="2098"><a href="#2098">2098</a></td></tr
><tr id="gr_svn99_2099"

><td id="2099"><a href="#2099">2099</a></td></tr
><tr id="gr_svn99_2100"

><td id="2100"><a href="#2100">2100</a></td></tr
><tr id="gr_svn99_2101"

><td id="2101"><a href="#2101">2101</a></td></tr
><tr id="gr_svn99_2102"

><td id="2102"><a href="#2102">2102</a></td></tr
><tr id="gr_svn99_2103"

><td id="2103"><a href="#2103">2103</a></td></tr
><tr id="gr_svn99_2104"

><td id="2104"><a href="#2104">2104</a></td></tr
><tr id="gr_svn99_2105"

><td id="2105"><a href="#2105">2105</a></td></tr
><tr id="gr_svn99_2106"

><td id="2106"><a href="#2106">2106</a></td></tr
><tr id="gr_svn99_2107"

><td id="2107"><a href="#2107">2107</a></td></tr
><tr id="gr_svn99_2108"

><td id="2108"><a href="#2108">2108</a></td></tr
><tr id="gr_svn99_2109"

><td id="2109"><a href="#2109">2109</a></td></tr
><tr id="gr_svn99_2110"

><td id="2110"><a href="#2110">2110</a></td></tr
><tr id="gr_svn99_2111"

><td id="2111"><a href="#2111">2111</a></td></tr
><tr id="gr_svn99_2112"

><td id="2112"><a href="#2112">2112</a></td></tr
><tr id="gr_svn99_2113"

><td id="2113"><a href="#2113">2113</a></td></tr
><tr id="gr_svn99_2114"

><td id="2114"><a href="#2114">2114</a></td></tr
><tr id="gr_svn99_2115"

><td id="2115"><a href="#2115">2115</a></td></tr
><tr id="gr_svn99_2116"

><td id="2116"><a href="#2116">2116</a></td></tr
><tr id="gr_svn99_2117"

><td id="2117"><a href="#2117">2117</a></td></tr
><tr id="gr_svn99_2118"

><td id="2118"><a href="#2118">2118</a></td></tr
><tr id="gr_svn99_2119"

><td id="2119"><a href="#2119">2119</a></td></tr
><tr id="gr_svn99_2120"

><td id="2120"><a href="#2120">2120</a></td></tr
><tr id="gr_svn99_2121"

><td id="2121"><a href="#2121">2121</a></td></tr
><tr id="gr_svn99_2122"

><td id="2122"><a href="#2122">2122</a></td></tr
><tr id="gr_svn99_2123"

><td id="2123"><a href="#2123">2123</a></td></tr
><tr id="gr_svn99_2124"

><td id="2124"><a href="#2124">2124</a></td></tr
><tr id="gr_svn99_2125"

><td id="2125"><a href="#2125">2125</a></td></tr
><tr id="gr_svn99_2126"

><td id="2126"><a href="#2126">2126</a></td></tr
><tr id="gr_svn99_2127"

><td id="2127"><a href="#2127">2127</a></td></tr
><tr id="gr_svn99_2128"

><td id="2128"><a href="#2128">2128</a></td></tr
><tr id="gr_svn99_2129"

><td id="2129"><a href="#2129">2129</a></td></tr
><tr id="gr_svn99_2130"

><td id="2130"><a href="#2130">2130</a></td></tr
><tr id="gr_svn99_2131"

><td id="2131"><a href="#2131">2131</a></td></tr
><tr id="gr_svn99_2132"

><td id="2132"><a href="#2132">2132</a></td></tr
><tr id="gr_svn99_2133"

><td id="2133"><a href="#2133">2133</a></td></tr
><tr id="gr_svn99_2134"

><td id="2134"><a href="#2134">2134</a></td></tr
><tr id="gr_svn99_2135"

><td id="2135"><a href="#2135">2135</a></td></tr
><tr id="gr_svn99_2136"

><td id="2136"><a href="#2136">2136</a></td></tr
><tr id="gr_svn99_2137"

><td id="2137"><a href="#2137">2137</a></td></tr
><tr id="gr_svn99_2138"

><td id="2138"><a href="#2138">2138</a></td></tr
><tr id="gr_svn99_2139"

><td id="2139"><a href="#2139">2139</a></td></tr
><tr id="gr_svn99_2140"

><td id="2140"><a href="#2140">2140</a></td></tr
><tr id="gr_svn99_2141"

><td id="2141"><a href="#2141">2141</a></td></tr
><tr id="gr_svn99_2142"

><td id="2142"><a href="#2142">2142</a></td></tr
><tr id="gr_svn99_2143"

><td id="2143"><a href="#2143">2143</a></td></tr
><tr id="gr_svn99_2144"

><td id="2144"><a href="#2144">2144</a></td></tr
><tr id="gr_svn99_2145"

><td id="2145"><a href="#2145">2145</a></td></tr
><tr id="gr_svn99_2146"

><td id="2146"><a href="#2146">2146</a></td></tr
><tr id="gr_svn99_2147"

><td id="2147"><a href="#2147">2147</a></td></tr
><tr id="gr_svn99_2148"

><td id="2148"><a href="#2148">2148</a></td></tr
><tr id="gr_svn99_2149"

><td id="2149"><a href="#2149">2149</a></td></tr
><tr id="gr_svn99_2150"

><td id="2150"><a href="#2150">2150</a></td></tr
><tr id="gr_svn99_2151"

><td id="2151"><a href="#2151">2151</a></td></tr
><tr id="gr_svn99_2152"

><td id="2152"><a href="#2152">2152</a></td></tr
><tr id="gr_svn99_2153"

><td id="2153"><a href="#2153">2153</a></td></tr
><tr id="gr_svn99_2154"

><td id="2154"><a href="#2154">2154</a></td></tr
><tr id="gr_svn99_2155"

><td id="2155"><a href="#2155">2155</a></td></tr
><tr id="gr_svn99_2156"

><td id="2156"><a href="#2156">2156</a></td></tr
><tr id="gr_svn99_2157"

><td id="2157"><a href="#2157">2157</a></td></tr
><tr id="gr_svn99_2158"

><td id="2158"><a href="#2158">2158</a></td></tr
><tr id="gr_svn99_2159"

><td id="2159"><a href="#2159">2159</a></td></tr
><tr id="gr_svn99_2160"

><td id="2160"><a href="#2160">2160</a></td></tr
><tr id="gr_svn99_2161"

><td id="2161"><a href="#2161">2161</a></td></tr
><tr id="gr_svn99_2162"

><td id="2162"><a href="#2162">2162</a></td></tr
><tr id="gr_svn99_2163"

><td id="2163"><a href="#2163">2163</a></td></tr
><tr id="gr_svn99_2164"

><td id="2164"><a href="#2164">2164</a></td></tr
><tr id="gr_svn99_2165"

><td id="2165"><a href="#2165">2165</a></td></tr
><tr id="gr_svn99_2166"

><td id="2166"><a href="#2166">2166</a></td></tr
><tr id="gr_svn99_2167"

><td id="2167"><a href="#2167">2167</a></td></tr
><tr id="gr_svn99_2168"

><td id="2168"><a href="#2168">2168</a></td></tr
><tr id="gr_svn99_2169"

><td id="2169"><a href="#2169">2169</a></td></tr
><tr id="gr_svn99_2170"

><td id="2170"><a href="#2170">2170</a></td></tr
><tr id="gr_svn99_2171"

><td id="2171"><a href="#2171">2171</a></td></tr
><tr id="gr_svn99_2172"

><td id="2172"><a href="#2172">2172</a></td></tr
><tr id="gr_svn99_2173"

><td id="2173"><a href="#2173">2173</a></td></tr
><tr id="gr_svn99_2174"

><td id="2174"><a href="#2174">2174</a></td></tr
><tr id="gr_svn99_2175"

><td id="2175"><a href="#2175">2175</a></td></tr
><tr id="gr_svn99_2176"

><td id="2176"><a href="#2176">2176</a></td></tr
><tr id="gr_svn99_2177"

><td id="2177"><a href="#2177">2177</a></td></tr
><tr id="gr_svn99_2178"

><td id="2178"><a href="#2178">2178</a></td></tr
><tr id="gr_svn99_2179"

><td id="2179"><a href="#2179">2179</a></td></tr
><tr id="gr_svn99_2180"

><td id="2180"><a href="#2180">2180</a></td></tr
><tr id="gr_svn99_2181"

><td id="2181"><a href="#2181">2181</a></td></tr
><tr id="gr_svn99_2182"

><td id="2182"><a href="#2182">2182</a></td></tr
><tr id="gr_svn99_2183"

><td id="2183"><a href="#2183">2183</a></td></tr
><tr id="gr_svn99_2184"

><td id="2184"><a href="#2184">2184</a></td></tr
><tr id="gr_svn99_2185"

><td id="2185"><a href="#2185">2185</a></td></tr
><tr id="gr_svn99_2186"

><td id="2186"><a href="#2186">2186</a></td></tr
><tr id="gr_svn99_2187"

><td id="2187"><a href="#2187">2187</a></td></tr
><tr id="gr_svn99_2188"

><td id="2188"><a href="#2188">2188</a></td></tr
><tr id="gr_svn99_2189"

><td id="2189"><a href="#2189">2189</a></td></tr
><tr id="gr_svn99_2190"

><td id="2190"><a href="#2190">2190</a></td></tr
><tr id="gr_svn99_2191"

><td id="2191"><a href="#2191">2191</a></td></tr
><tr id="gr_svn99_2192"

><td id="2192"><a href="#2192">2192</a></td></tr
><tr id="gr_svn99_2193"

><td id="2193"><a href="#2193">2193</a></td></tr
><tr id="gr_svn99_2194"

><td id="2194"><a href="#2194">2194</a></td></tr
><tr id="gr_svn99_2195"

><td id="2195"><a href="#2195">2195</a></td></tr
><tr id="gr_svn99_2196"

><td id="2196"><a href="#2196">2196</a></td></tr
><tr id="gr_svn99_2197"

><td id="2197"><a href="#2197">2197</a></td></tr
><tr id="gr_svn99_2198"

><td id="2198"><a href="#2198">2198</a></td></tr
><tr id="gr_svn99_2199"

><td id="2199"><a href="#2199">2199</a></td></tr
><tr id="gr_svn99_2200"

><td id="2200"><a href="#2200">2200</a></td></tr
><tr id="gr_svn99_2201"

><td id="2201"><a href="#2201">2201</a></td></tr
><tr id="gr_svn99_2202"

><td id="2202"><a href="#2202">2202</a></td></tr
><tr id="gr_svn99_2203"

><td id="2203"><a href="#2203">2203</a></td></tr
><tr id="gr_svn99_2204"

><td id="2204"><a href="#2204">2204</a></td></tr
><tr id="gr_svn99_2205"

><td id="2205"><a href="#2205">2205</a></td></tr
><tr id="gr_svn99_2206"

><td id="2206"><a href="#2206">2206</a></td></tr
><tr id="gr_svn99_2207"

><td id="2207"><a href="#2207">2207</a></td></tr
><tr id="gr_svn99_2208"

><td id="2208"><a href="#2208">2208</a></td></tr
><tr id="gr_svn99_2209"

><td id="2209"><a href="#2209">2209</a></td></tr
><tr id="gr_svn99_2210"

><td id="2210"><a href="#2210">2210</a></td></tr
><tr id="gr_svn99_2211"

><td id="2211"><a href="#2211">2211</a></td></tr
><tr id="gr_svn99_2212"

><td id="2212"><a href="#2212">2212</a></td></tr
><tr id="gr_svn99_2213"

><td id="2213"><a href="#2213">2213</a></td></tr
><tr id="gr_svn99_2214"

><td id="2214"><a href="#2214">2214</a></td></tr
><tr id="gr_svn99_2215"

><td id="2215"><a href="#2215">2215</a></td></tr
><tr id="gr_svn99_2216"

><td id="2216"><a href="#2216">2216</a></td></tr
><tr id="gr_svn99_2217"

><td id="2217"><a href="#2217">2217</a></td></tr
><tr id="gr_svn99_2218"

><td id="2218"><a href="#2218">2218</a></td></tr
><tr id="gr_svn99_2219"

><td id="2219"><a href="#2219">2219</a></td></tr
><tr id="gr_svn99_2220"

><td id="2220"><a href="#2220">2220</a></td></tr
><tr id="gr_svn99_2221"

><td id="2221"><a href="#2221">2221</a></td></tr
><tr id="gr_svn99_2222"

><td id="2222"><a href="#2222">2222</a></td></tr
><tr id="gr_svn99_2223"

><td id="2223"><a href="#2223">2223</a></td></tr
><tr id="gr_svn99_2224"

><td id="2224"><a href="#2224">2224</a></td></tr
><tr id="gr_svn99_2225"

><td id="2225"><a href="#2225">2225</a></td></tr
><tr id="gr_svn99_2226"

><td id="2226"><a href="#2226">2226</a></td></tr
><tr id="gr_svn99_2227"

><td id="2227"><a href="#2227">2227</a></td></tr
><tr id="gr_svn99_2228"

><td id="2228"><a href="#2228">2228</a></td></tr
><tr id="gr_svn99_2229"

><td id="2229"><a href="#2229">2229</a></td></tr
><tr id="gr_svn99_2230"

><td id="2230"><a href="#2230">2230</a></td></tr
><tr id="gr_svn99_2231"

><td id="2231"><a href="#2231">2231</a></td></tr
><tr id="gr_svn99_2232"

><td id="2232"><a href="#2232">2232</a></td></tr
><tr id="gr_svn99_2233"

><td id="2233"><a href="#2233">2233</a></td></tr
><tr id="gr_svn99_2234"

><td id="2234"><a href="#2234">2234</a></td></tr
><tr id="gr_svn99_2235"

><td id="2235"><a href="#2235">2235</a></td></tr
><tr id="gr_svn99_2236"

><td id="2236"><a href="#2236">2236</a></td></tr
><tr id="gr_svn99_2237"

><td id="2237"><a href="#2237">2237</a></td></tr
><tr id="gr_svn99_2238"

><td id="2238"><a href="#2238">2238</a></td></tr
><tr id="gr_svn99_2239"

><td id="2239"><a href="#2239">2239</a></td></tr
><tr id="gr_svn99_2240"

><td id="2240"><a href="#2240">2240</a></td></tr
><tr id="gr_svn99_2241"

><td id="2241"><a href="#2241">2241</a></td></tr
><tr id="gr_svn99_2242"

><td id="2242"><a href="#2242">2242</a></td></tr
><tr id="gr_svn99_2243"

><td id="2243"><a href="#2243">2243</a></td></tr
><tr id="gr_svn99_2244"

><td id="2244"><a href="#2244">2244</a></td></tr
><tr id="gr_svn99_2245"

><td id="2245"><a href="#2245">2245</a></td></tr
><tr id="gr_svn99_2246"

><td id="2246"><a href="#2246">2246</a></td></tr
><tr id="gr_svn99_2247"

><td id="2247"><a href="#2247">2247</a></td></tr
><tr id="gr_svn99_2248"

><td id="2248"><a href="#2248">2248</a></td></tr
><tr id="gr_svn99_2249"

><td id="2249"><a href="#2249">2249</a></td></tr
><tr id="gr_svn99_2250"

><td id="2250"><a href="#2250">2250</a></td></tr
><tr id="gr_svn99_2251"

><td id="2251"><a href="#2251">2251</a></td></tr
><tr id="gr_svn99_2252"

><td id="2252"><a href="#2252">2252</a></td></tr
><tr id="gr_svn99_2253"

><td id="2253"><a href="#2253">2253</a></td></tr
><tr id="gr_svn99_2254"

><td id="2254"><a href="#2254">2254</a></td></tr
><tr id="gr_svn99_2255"

><td id="2255"><a href="#2255">2255</a></td></tr
><tr id="gr_svn99_2256"

><td id="2256"><a href="#2256">2256</a></td></tr
><tr id="gr_svn99_2257"

><td id="2257"><a href="#2257">2257</a></td></tr
><tr id="gr_svn99_2258"

><td id="2258"><a href="#2258">2258</a></td></tr
><tr id="gr_svn99_2259"

><td id="2259"><a href="#2259">2259</a></td></tr
><tr id="gr_svn99_2260"

><td id="2260"><a href="#2260">2260</a></td></tr
><tr id="gr_svn99_2261"

><td id="2261"><a href="#2261">2261</a></td></tr
><tr id="gr_svn99_2262"

><td id="2262"><a href="#2262">2262</a></td></tr
><tr id="gr_svn99_2263"

><td id="2263"><a href="#2263">2263</a></td></tr
><tr id="gr_svn99_2264"

><td id="2264"><a href="#2264">2264</a></td></tr
><tr id="gr_svn99_2265"

><td id="2265"><a href="#2265">2265</a></td></tr
><tr id="gr_svn99_2266"

><td id="2266"><a href="#2266">2266</a></td></tr
><tr id="gr_svn99_2267"

><td id="2267"><a href="#2267">2267</a></td></tr
><tr id="gr_svn99_2268"

><td id="2268"><a href="#2268">2268</a></td></tr
><tr id="gr_svn99_2269"

><td id="2269"><a href="#2269">2269</a></td></tr
><tr id="gr_svn99_2270"

><td id="2270"><a href="#2270">2270</a></td></tr
><tr id="gr_svn99_2271"

><td id="2271"><a href="#2271">2271</a></td></tr
><tr id="gr_svn99_2272"

><td id="2272"><a href="#2272">2272</a></td></tr
><tr id="gr_svn99_2273"

><td id="2273"><a href="#2273">2273</a></td></tr
><tr id="gr_svn99_2274"

><td id="2274"><a href="#2274">2274</a></td></tr
><tr id="gr_svn99_2275"

><td id="2275"><a href="#2275">2275</a></td></tr
><tr id="gr_svn99_2276"

><td id="2276"><a href="#2276">2276</a></td></tr
><tr id="gr_svn99_2277"

><td id="2277"><a href="#2277">2277</a></td></tr
><tr id="gr_svn99_2278"

><td id="2278"><a href="#2278">2278</a></td></tr
><tr id="gr_svn99_2279"

><td id="2279"><a href="#2279">2279</a></td></tr
><tr id="gr_svn99_2280"

><td id="2280"><a href="#2280">2280</a></td></tr
><tr id="gr_svn99_2281"

><td id="2281"><a href="#2281">2281</a></td></tr
><tr id="gr_svn99_2282"

><td id="2282"><a href="#2282">2282</a></td></tr
><tr id="gr_svn99_2283"

><td id="2283"><a href="#2283">2283</a></td></tr
><tr id="gr_svn99_2284"

><td id="2284"><a href="#2284">2284</a></td></tr
><tr id="gr_svn99_2285"

><td id="2285"><a href="#2285">2285</a></td></tr
><tr id="gr_svn99_2286"

><td id="2286"><a href="#2286">2286</a></td></tr
><tr id="gr_svn99_2287"

><td id="2287"><a href="#2287">2287</a></td></tr
><tr id="gr_svn99_2288"

><td id="2288"><a href="#2288">2288</a></td></tr
><tr id="gr_svn99_2289"

><td id="2289"><a href="#2289">2289</a></td></tr
><tr id="gr_svn99_2290"

><td id="2290"><a href="#2290">2290</a></td></tr
><tr id="gr_svn99_2291"

><td id="2291"><a href="#2291">2291</a></td></tr
><tr id="gr_svn99_2292"

><td id="2292"><a href="#2292">2292</a></td></tr
><tr id="gr_svn99_2293"

><td id="2293"><a href="#2293">2293</a></td></tr
><tr id="gr_svn99_2294"

><td id="2294"><a href="#2294">2294</a></td></tr
><tr id="gr_svn99_2295"

><td id="2295"><a href="#2295">2295</a></td></tr
><tr id="gr_svn99_2296"

><td id="2296"><a href="#2296">2296</a></td></tr
><tr id="gr_svn99_2297"

><td id="2297"><a href="#2297">2297</a></td></tr
><tr id="gr_svn99_2298"

><td id="2298"><a href="#2298">2298</a></td></tr
><tr id="gr_svn99_2299"

><td id="2299"><a href="#2299">2299</a></td></tr
><tr id="gr_svn99_2300"

><td id="2300"><a href="#2300">2300</a></td></tr
><tr id="gr_svn99_2301"

><td id="2301"><a href="#2301">2301</a></td></tr
><tr id="gr_svn99_2302"

><td id="2302"><a href="#2302">2302</a></td></tr
><tr id="gr_svn99_2303"

><td id="2303"><a href="#2303">2303</a></td></tr
><tr id="gr_svn99_2304"

><td id="2304"><a href="#2304">2304</a></td></tr
><tr id="gr_svn99_2305"

><td id="2305"><a href="#2305">2305</a></td></tr
><tr id="gr_svn99_2306"

><td id="2306"><a href="#2306">2306</a></td></tr
><tr id="gr_svn99_2307"

><td id="2307"><a href="#2307">2307</a></td></tr
><tr id="gr_svn99_2308"

><td id="2308"><a href="#2308">2308</a></td></tr
><tr id="gr_svn99_2309"

><td id="2309"><a href="#2309">2309</a></td></tr
><tr id="gr_svn99_2310"

><td id="2310"><a href="#2310">2310</a></td></tr
><tr id="gr_svn99_2311"

><td id="2311"><a href="#2311">2311</a></td></tr
><tr id="gr_svn99_2312"

><td id="2312"><a href="#2312">2312</a></td></tr
><tr id="gr_svn99_2313"

><td id="2313"><a href="#2313">2313</a></td></tr
><tr id="gr_svn99_2314"

><td id="2314"><a href="#2314">2314</a></td></tr
><tr id="gr_svn99_2315"

><td id="2315"><a href="#2315">2315</a></td></tr
><tr id="gr_svn99_2316"

><td id="2316"><a href="#2316">2316</a></td></tr
><tr id="gr_svn99_2317"

><td id="2317"><a href="#2317">2317</a></td></tr
><tr id="gr_svn99_2318"

><td id="2318"><a href="#2318">2318</a></td></tr
><tr id="gr_svn99_2319"

><td id="2319"><a href="#2319">2319</a></td></tr
><tr id="gr_svn99_2320"

><td id="2320"><a href="#2320">2320</a></td></tr
><tr id="gr_svn99_2321"

><td id="2321"><a href="#2321">2321</a></td></tr
><tr id="gr_svn99_2322"

><td id="2322"><a href="#2322">2322</a></td></tr
><tr id="gr_svn99_2323"

><td id="2323"><a href="#2323">2323</a></td></tr
><tr id="gr_svn99_2324"

><td id="2324"><a href="#2324">2324</a></td></tr
><tr id="gr_svn99_2325"

><td id="2325"><a href="#2325">2325</a></td></tr
><tr id="gr_svn99_2326"

><td id="2326"><a href="#2326">2326</a></td></tr
><tr id="gr_svn99_2327"

><td id="2327"><a href="#2327">2327</a></td></tr
><tr id="gr_svn99_2328"

><td id="2328"><a href="#2328">2328</a></td></tr
><tr id="gr_svn99_2329"

><td id="2329"><a href="#2329">2329</a></td></tr
><tr id="gr_svn99_2330"

><td id="2330"><a href="#2330">2330</a></td></tr
><tr id="gr_svn99_2331"

><td id="2331"><a href="#2331">2331</a></td></tr
><tr id="gr_svn99_2332"

><td id="2332"><a href="#2332">2332</a></td></tr
><tr id="gr_svn99_2333"

><td id="2333"><a href="#2333">2333</a></td></tr
><tr id="gr_svn99_2334"

><td id="2334"><a href="#2334">2334</a></td></tr
><tr id="gr_svn99_2335"

><td id="2335"><a href="#2335">2335</a></td></tr
><tr id="gr_svn99_2336"

><td id="2336"><a href="#2336">2336</a></td></tr
><tr id="gr_svn99_2337"

><td id="2337"><a href="#2337">2337</a></td></tr
><tr id="gr_svn99_2338"

><td id="2338"><a href="#2338">2338</a></td></tr
><tr id="gr_svn99_2339"

><td id="2339"><a href="#2339">2339</a></td></tr
><tr id="gr_svn99_2340"

><td id="2340"><a href="#2340">2340</a></td></tr
><tr id="gr_svn99_2341"

><td id="2341"><a href="#2341">2341</a></td></tr
><tr id="gr_svn99_2342"

><td id="2342"><a href="#2342">2342</a></td></tr
><tr id="gr_svn99_2343"

><td id="2343"><a href="#2343">2343</a></td></tr
><tr id="gr_svn99_2344"

><td id="2344"><a href="#2344">2344</a></td></tr
><tr id="gr_svn99_2345"

><td id="2345"><a href="#2345">2345</a></td></tr
><tr id="gr_svn99_2346"

><td id="2346"><a href="#2346">2346</a></td></tr
><tr id="gr_svn99_2347"

><td id="2347"><a href="#2347">2347</a></td></tr
><tr id="gr_svn99_2348"

><td id="2348"><a href="#2348">2348</a></td></tr
><tr id="gr_svn99_2349"

><td id="2349"><a href="#2349">2349</a></td></tr
><tr id="gr_svn99_2350"

><td id="2350"><a href="#2350">2350</a></td></tr
><tr id="gr_svn99_2351"

><td id="2351"><a href="#2351">2351</a></td></tr
><tr id="gr_svn99_2352"

><td id="2352"><a href="#2352">2352</a></td></tr
><tr id="gr_svn99_2353"

><td id="2353"><a href="#2353">2353</a></td></tr
><tr id="gr_svn99_2354"

><td id="2354"><a href="#2354">2354</a></td></tr
><tr id="gr_svn99_2355"

><td id="2355"><a href="#2355">2355</a></td></tr
><tr id="gr_svn99_2356"

><td id="2356"><a href="#2356">2356</a></td></tr
><tr id="gr_svn99_2357"

><td id="2357"><a href="#2357">2357</a></td></tr
><tr id="gr_svn99_2358"

><td id="2358"><a href="#2358">2358</a></td></tr
><tr id="gr_svn99_2359"

><td id="2359"><a href="#2359">2359</a></td></tr
><tr id="gr_svn99_2360"

><td id="2360"><a href="#2360">2360</a></td></tr
><tr id="gr_svn99_2361"

><td id="2361"><a href="#2361">2361</a></td></tr
><tr id="gr_svn99_2362"

><td id="2362"><a href="#2362">2362</a></td></tr
><tr id="gr_svn99_2363"

><td id="2363"><a href="#2363">2363</a></td></tr
><tr id="gr_svn99_2364"

><td id="2364"><a href="#2364">2364</a></td></tr
><tr id="gr_svn99_2365"

><td id="2365"><a href="#2365">2365</a></td></tr
><tr id="gr_svn99_2366"

><td id="2366"><a href="#2366">2366</a></td></tr
><tr id="gr_svn99_2367"

><td id="2367"><a href="#2367">2367</a></td></tr
><tr id="gr_svn99_2368"

><td id="2368"><a href="#2368">2368</a></td></tr
><tr id="gr_svn99_2369"

><td id="2369"><a href="#2369">2369</a></td></tr
><tr id="gr_svn99_2370"

><td id="2370"><a href="#2370">2370</a></td></tr
><tr id="gr_svn99_2371"

><td id="2371"><a href="#2371">2371</a></td></tr
><tr id="gr_svn99_2372"

><td id="2372"><a href="#2372">2372</a></td></tr
><tr id="gr_svn99_2373"

><td id="2373"><a href="#2373">2373</a></td></tr
><tr id="gr_svn99_2374"

><td id="2374"><a href="#2374">2374</a></td></tr
><tr id="gr_svn99_2375"

><td id="2375"><a href="#2375">2375</a></td></tr
><tr id="gr_svn99_2376"

><td id="2376"><a href="#2376">2376</a></td></tr
><tr id="gr_svn99_2377"

><td id="2377"><a href="#2377">2377</a></td></tr
><tr id="gr_svn99_2378"

><td id="2378"><a href="#2378">2378</a></td></tr
><tr id="gr_svn99_2379"

><td id="2379"><a href="#2379">2379</a></td></tr
><tr id="gr_svn99_2380"

><td id="2380"><a href="#2380">2380</a></td></tr
><tr id="gr_svn99_2381"

><td id="2381"><a href="#2381">2381</a></td></tr
><tr id="gr_svn99_2382"

><td id="2382"><a href="#2382">2382</a></td></tr
><tr id="gr_svn99_2383"

><td id="2383"><a href="#2383">2383</a></td></tr
><tr id="gr_svn99_2384"

><td id="2384"><a href="#2384">2384</a></td></tr
><tr id="gr_svn99_2385"

><td id="2385"><a href="#2385">2385</a></td></tr
><tr id="gr_svn99_2386"

><td id="2386"><a href="#2386">2386</a></td></tr
><tr id="gr_svn99_2387"

><td id="2387"><a href="#2387">2387</a></td></tr
><tr id="gr_svn99_2388"

><td id="2388"><a href="#2388">2388</a></td></tr
><tr id="gr_svn99_2389"

><td id="2389"><a href="#2389">2389</a></td></tr
><tr id="gr_svn99_2390"

><td id="2390"><a href="#2390">2390</a></td></tr
><tr id="gr_svn99_2391"

><td id="2391"><a href="#2391">2391</a></td></tr
><tr id="gr_svn99_2392"

><td id="2392"><a href="#2392">2392</a></td></tr
><tr id="gr_svn99_2393"

><td id="2393"><a href="#2393">2393</a></td></tr
><tr id="gr_svn99_2394"

><td id="2394"><a href="#2394">2394</a></td></tr
><tr id="gr_svn99_2395"

><td id="2395"><a href="#2395">2395</a></td></tr
><tr id="gr_svn99_2396"

><td id="2396"><a href="#2396">2396</a></td></tr
><tr id="gr_svn99_2397"

><td id="2397"><a href="#2397">2397</a></td></tr
><tr id="gr_svn99_2398"

><td id="2398"><a href="#2398">2398</a></td></tr
><tr id="gr_svn99_2399"

><td id="2399"><a href="#2399">2399</a></td></tr
><tr id="gr_svn99_2400"

><td id="2400"><a href="#2400">2400</a></td></tr
><tr id="gr_svn99_2401"

><td id="2401"><a href="#2401">2401</a></td></tr
><tr id="gr_svn99_2402"

><td id="2402"><a href="#2402">2402</a></td></tr
><tr id="gr_svn99_2403"

><td id="2403"><a href="#2403">2403</a></td></tr
><tr id="gr_svn99_2404"

><td id="2404"><a href="#2404">2404</a></td></tr
><tr id="gr_svn99_2405"

><td id="2405"><a href="#2405">2405</a></td></tr
><tr id="gr_svn99_2406"

><td id="2406"><a href="#2406">2406</a></td></tr
><tr id="gr_svn99_2407"

><td id="2407"><a href="#2407">2407</a></td></tr
><tr id="gr_svn99_2408"

><td id="2408"><a href="#2408">2408</a></td></tr
><tr id="gr_svn99_2409"

><td id="2409"><a href="#2409">2409</a></td></tr
><tr id="gr_svn99_2410"

><td id="2410"><a href="#2410">2410</a></td></tr
><tr id="gr_svn99_2411"

><td id="2411"><a href="#2411">2411</a></td></tr
><tr id="gr_svn99_2412"

><td id="2412"><a href="#2412">2412</a></td></tr
><tr id="gr_svn99_2413"

><td id="2413"><a href="#2413">2413</a></td></tr
><tr id="gr_svn99_2414"

><td id="2414"><a href="#2414">2414</a></td></tr
><tr id="gr_svn99_2415"

><td id="2415"><a href="#2415">2415</a></td></tr
><tr id="gr_svn99_2416"

><td id="2416"><a href="#2416">2416</a></td></tr
><tr id="gr_svn99_2417"

><td id="2417"><a href="#2417">2417</a></td></tr
><tr id="gr_svn99_2418"

><td id="2418"><a href="#2418">2418</a></td></tr
><tr id="gr_svn99_2419"

><td id="2419"><a href="#2419">2419</a></td></tr
><tr id="gr_svn99_2420"

><td id="2420"><a href="#2420">2420</a></td></tr
><tr id="gr_svn99_2421"

><td id="2421"><a href="#2421">2421</a></td></tr
><tr id="gr_svn99_2422"

><td id="2422"><a href="#2422">2422</a></td></tr
><tr id="gr_svn99_2423"

><td id="2423"><a href="#2423">2423</a></td></tr
><tr id="gr_svn99_2424"

><td id="2424"><a href="#2424">2424</a></td></tr
><tr id="gr_svn99_2425"

><td id="2425"><a href="#2425">2425</a></td></tr
><tr id="gr_svn99_2426"

><td id="2426"><a href="#2426">2426</a></td></tr
><tr id="gr_svn99_2427"

><td id="2427"><a href="#2427">2427</a></td></tr
><tr id="gr_svn99_2428"

><td id="2428"><a href="#2428">2428</a></td></tr
><tr id="gr_svn99_2429"

><td id="2429"><a href="#2429">2429</a></td></tr
><tr id="gr_svn99_2430"

><td id="2430"><a href="#2430">2430</a></td></tr
><tr id="gr_svn99_2431"

><td id="2431"><a href="#2431">2431</a></td></tr
><tr id="gr_svn99_2432"

><td id="2432"><a href="#2432">2432</a></td></tr
><tr id="gr_svn99_2433"

><td id="2433"><a href="#2433">2433</a></td></tr
><tr id="gr_svn99_2434"

><td id="2434"><a href="#2434">2434</a></td></tr
><tr id="gr_svn99_2435"

><td id="2435"><a href="#2435">2435</a></td></tr
><tr id="gr_svn99_2436"

><td id="2436"><a href="#2436">2436</a></td></tr
><tr id="gr_svn99_2437"

><td id="2437"><a href="#2437">2437</a></td></tr
><tr id="gr_svn99_2438"

><td id="2438"><a href="#2438">2438</a></td></tr
><tr id="gr_svn99_2439"

><td id="2439"><a href="#2439">2439</a></td></tr
><tr id="gr_svn99_2440"

><td id="2440"><a href="#2440">2440</a></td></tr
><tr id="gr_svn99_2441"

><td id="2441"><a href="#2441">2441</a></td></tr
><tr id="gr_svn99_2442"

><td id="2442"><a href="#2442">2442</a></td></tr
><tr id="gr_svn99_2443"

><td id="2443"><a href="#2443">2443</a></td></tr
><tr id="gr_svn99_2444"

><td id="2444"><a href="#2444">2444</a></td></tr
><tr id="gr_svn99_2445"

><td id="2445"><a href="#2445">2445</a></td></tr
><tr id="gr_svn99_2446"

><td id="2446"><a href="#2446">2446</a></td></tr
><tr id="gr_svn99_2447"

><td id="2447"><a href="#2447">2447</a></td></tr
><tr id="gr_svn99_2448"

><td id="2448"><a href="#2448">2448</a></td></tr
><tr id="gr_svn99_2449"

><td id="2449"><a href="#2449">2449</a></td></tr
><tr id="gr_svn99_2450"

><td id="2450"><a href="#2450">2450</a></td></tr
><tr id="gr_svn99_2451"

><td id="2451"><a href="#2451">2451</a></td></tr
><tr id="gr_svn99_2452"

><td id="2452"><a href="#2452">2452</a></td></tr
><tr id="gr_svn99_2453"

><td id="2453"><a href="#2453">2453</a></td></tr
><tr id="gr_svn99_2454"

><td id="2454"><a href="#2454">2454</a></td></tr
><tr id="gr_svn99_2455"

><td id="2455"><a href="#2455">2455</a></td></tr
><tr id="gr_svn99_2456"

><td id="2456"><a href="#2456">2456</a></td></tr
><tr id="gr_svn99_2457"

><td id="2457"><a href="#2457">2457</a></td></tr
><tr id="gr_svn99_2458"

><td id="2458"><a href="#2458">2458</a></td></tr
><tr id="gr_svn99_2459"

><td id="2459"><a href="#2459">2459</a></td></tr
><tr id="gr_svn99_2460"

><td id="2460"><a href="#2460">2460</a></td></tr
><tr id="gr_svn99_2461"

><td id="2461"><a href="#2461">2461</a></td></tr
><tr id="gr_svn99_2462"

><td id="2462"><a href="#2462">2462</a></td></tr
><tr id="gr_svn99_2463"

><td id="2463"><a href="#2463">2463</a></td></tr
><tr id="gr_svn99_2464"

><td id="2464"><a href="#2464">2464</a></td></tr
><tr id="gr_svn99_2465"

><td id="2465"><a href="#2465">2465</a></td></tr
><tr id="gr_svn99_2466"

><td id="2466"><a href="#2466">2466</a></td></tr
><tr id="gr_svn99_2467"

><td id="2467"><a href="#2467">2467</a></td></tr
><tr id="gr_svn99_2468"

><td id="2468"><a href="#2468">2468</a></td></tr
><tr id="gr_svn99_2469"

><td id="2469"><a href="#2469">2469</a></td></tr
><tr id="gr_svn99_2470"

><td id="2470"><a href="#2470">2470</a></td></tr
><tr id="gr_svn99_2471"

><td id="2471"><a href="#2471">2471</a></td></tr
><tr id="gr_svn99_2472"

><td id="2472"><a href="#2472">2472</a></td></tr
><tr id="gr_svn99_2473"

><td id="2473"><a href="#2473">2473</a></td></tr
><tr id="gr_svn99_2474"

><td id="2474"><a href="#2474">2474</a></td></tr
><tr id="gr_svn99_2475"

><td id="2475"><a href="#2475">2475</a></td></tr
><tr id="gr_svn99_2476"

><td id="2476"><a href="#2476">2476</a></td></tr
><tr id="gr_svn99_2477"

><td id="2477"><a href="#2477">2477</a></td></tr
><tr id="gr_svn99_2478"

><td id="2478"><a href="#2478">2478</a></td></tr
><tr id="gr_svn99_2479"

><td id="2479"><a href="#2479">2479</a></td></tr
><tr id="gr_svn99_2480"

><td id="2480"><a href="#2480">2480</a></td></tr
><tr id="gr_svn99_2481"

><td id="2481"><a href="#2481">2481</a></td></tr
><tr id="gr_svn99_2482"

><td id="2482"><a href="#2482">2482</a></td></tr
><tr id="gr_svn99_2483"

><td id="2483"><a href="#2483">2483</a></td></tr
><tr id="gr_svn99_2484"

><td id="2484"><a href="#2484">2484</a></td></tr
><tr id="gr_svn99_2485"

><td id="2485"><a href="#2485">2485</a></td></tr
><tr id="gr_svn99_2486"

><td id="2486"><a href="#2486">2486</a></td></tr
><tr id="gr_svn99_2487"

><td id="2487"><a href="#2487">2487</a></td></tr
><tr id="gr_svn99_2488"

><td id="2488"><a href="#2488">2488</a></td></tr
><tr id="gr_svn99_2489"

><td id="2489"><a href="#2489">2489</a></td></tr
><tr id="gr_svn99_2490"

><td id="2490"><a href="#2490">2490</a></td></tr
><tr id="gr_svn99_2491"

><td id="2491"><a href="#2491">2491</a></td></tr
><tr id="gr_svn99_2492"

><td id="2492"><a href="#2492">2492</a></td></tr
><tr id="gr_svn99_2493"

><td id="2493"><a href="#2493">2493</a></td></tr
><tr id="gr_svn99_2494"

><td id="2494"><a href="#2494">2494</a></td></tr
><tr id="gr_svn99_2495"

><td id="2495"><a href="#2495">2495</a></td></tr
><tr id="gr_svn99_2496"

><td id="2496"><a href="#2496">2496</a></td></tr
><tr id="gr_svn99_2497"

><td id="2497"><a href="#2497">2497</a></td></tr
><tr id="gr_svn99_2498"

><td id="2498"><a href="#2498">2498</a></td></tr
><tr id="gr_svn99_2499"

><td id="2499"><a href="#2499">2499</a></td></tr
><tr id="gr_svn99_2500"

><td id="2500"><a href="#2500">2500</a></td></tr
><tr id="gr_svn99_2501"

><td id="2501"><a href="#2501">2501</a></td></tr
><tr id="gr_svn99_2502"

><td id="2502"><a href="#2502">2502</a></td></tr
><tr id="gr_svn99_2503"

><td id="2503"><a href="#2503">2503</a></td></tr
><tr id="gr_svn99_2504"

><td id="2504"><a href="#2504">2504</a></td></tr
><tr id="gr_svn99_2505"

><td id="2505"><a href="#2505">2505</a></td></tr
><tr id="gr_svn99_2506"

><td id="2506"><a href="#2506">2506</a></td></tr
><tr id="gr_svn99_2507"

><td id="2507"><a href="#2507">2507</a></td></tr
><tr id="gr_svn99_2508"

><td id="2508"><a href="#2508">2508</a></td></tr
><tr id="gr_svn99_2509"

><td id="2509"><a href="#2509">2509</a></td></tr
><tr id="gr_svn99_2510"

><td id="2510"><a href="#2510">2510</a></td></tr
><tr id="gr_svn99_2511"

><td id="2511"><a href="#2511">2511</a></td></tr
><tr id="gr_svn99_2512"

><td id="2512"><a href="#2512">2512</a></td></tr
><tr id="gr_svn99_2513"

><td id="2513"><a href="#2513">2513</a></td></tr
><tr id="gr_svn99_2514"

><td id="2514"><a href="#2514">2514</a></td></tr
><tr id="gr_svn99_2515"

><td id="2515"><a href="#2515">2515</a></td></tr
><tr id="gr_svn99_2516"

><td id="2516"><a href="#2516">2516</a></td></tr
><tr id="gr_svn99_2517"

><td id="2517"><a href="#2517">2517</a></td></tr
><tr id="gr_svn99_2518"

><td id="2518"><a href="#2518">2518</a></td></tr
><tr id="gr_svn99_2519"

><td id="2519"><a href="#2519">2519</a></td></tr
><tr id="gr_svn99_2520"

><td id="2520"><a href="#2520">2520</a></td></tr
><tr id="gr_svn99_2521"

><td id="2521"><a href="#2521">2521</a></td></tr
><tr id="gr_svn99_2522"

><td id="2522"><a href="#2522">2522</a></td></tr
><tr id="gr_svn99_2523"

><td id="2523"><a href="#2523">2523</a></td></tr
><tr id="gr_svn99_2524"

><td id="2524"><a href="#2524">2524</a></td></tr
><tr id="gr_svn99_2525"

><td id="2525"><a href="#2525">2525</a></td></tr
><tr id="gr_svn99_2526"

><td id="2526"><a href="#2526">2526</a></td></tr
><tr id="gr_svn99_2527"

><td id="2527"><a href="#2527">2527</a></td></tr
><tr id="gr_svn99_2528"

><td id="2528"><a href="#2528">2528</a></td></tr
><tr id="gr_svn99_2529"

><td id="2529"><a href="#2529">2529</a></td></tr
><tr id="gr_svn99_2530"

><td id="2530"><a href="#2530">2530</a></td></tr
><tr id="gr_svn99_2531"

><td id="2531"><a href="#2531">2531</a></td></tr
><tr id="gr_svn99_2532"

><td id="2532"><a href="#2532">2532</a></td></tr
><tr id="gr_svn99_2533"

><td id="2533"><a href="#2533">2533</a></td></tr
><tr id="gr_svn99_2534"

><td id="2534"><a href="#2534">2534</a></td></tr
><tr id="gr_svn99_2535"

><td id="2535"><a href="#2535">2535</a></td></tr
><tr id="gr_svn99_2536"

><td id="2536"><a href="#2536">2536</a></td></tr
><tr id="gr_svn99_2537"

><td id="2537"><a href="#2537">2537</a></td></tr
><tr id="gr_svn99_2538"

><td id="2538"><a href="#2538">2538</a></td></tr
><tr id="gr_svn99_2539"

><td id="2539"><a href="#2539">2539</a></td></tr
><tr id="gr_svn99_2540"

><td id="2540"><a href="#2540">2540</a></td></tr
><tr id="gr_svn99_2541"

><td id="2541"><a href="#2541">2541</a></td></tr
><tr id="gr_svn99_2542"

><td id="2542"><a href="#2542">2542</a></td></tr
><tr id="gr_svn99_2543"

><td id="2543"><a href="#2543">2543</a></td></tr
><tr id="gr_svn99_2544"

><td id="2544"><a href="#2544">2544</a></td></tr
><tr id="gr_svn99_2545"

><td id="2545"><a href="#2545">2545</a></td></tr
><tr id="gr_svn99_2546"

><td id="2546"><a href="#2546">2546</a></td></tr
><tr id="gr_svn99_2547"

><td id="2547"><a href="#2547">2547</a></td></tr
><tr id="gr_svn99_2548"

><td id="2548"><a href="#2548">2548</a></td></tr
><tr id="gr_svn99_2549"

><td id="2549"><a href="#2549">2549</a></td></tr
><tr id="gr_svn99_2550"

><td id="2550"><a href="#2550">2550</a></td></tr
><tr id="gr_svn99_2551"

><td id="2551"><a href="#2551">2551</a></td></tr
><tr id="gr_svn99_2552"

><td id="2552"><a href="#2552">2552</a></td></tr
><tr id="gr_svn99_2553"

><td id="2553"><a href="#2553">2553</a></td></tr
><tr id="gr_svn99_2554"

><td id="2554"><a href="#2554">2554</a></td></tr
><tr id="gr_svn99_2555"

><td id="2555"><a href="#2555">2555</a></td></tr
><tr id="gr_svn99_2556"

><td id="2556"><a href="#2556">2556</a></td></tr
><tr id="gr_svn99_2557"

><td id="2557"><a href="#2557">2557</a></td></tr
><tr id="gr_svn99_2558"

><td id="2558"><a href="#2558">2558</a></td></tr
><tr id="gr_svn99_2559"

><td id="2559"><a href="#2559">2559</a></td></tr
><tr id="gr_svn99_2560"

><td id="2560"><a href="#2560">2560</a></td></tr
><tr id="gr_svn99_2561"

><td id="2561"><a href="#2561">2561</a></td></tr
><tr id="gr_svn99_2562"

><td id="2562"><a href="#2562">2562</a></td></tr
><tr id="gr_svn99_2563"

><td id="2563"><a href="#2563">2563</a></td></tr
><tr id="gr_svn99_2564"

><td id="2564"><a href="#2564">2564</a></td></tr
><tr id="gr_svn99_2565"

><td id="2565"><a href="#2565">2565</a></td></tr
><tr id="gr_svn99_2566"

><td id="2566"><a href="#2566">2566</a></td></tr
><tr id="gr_svn99_2567"

><td id="2567"><a href="#2567">2567</a></td></tr
><tr id="gr_svn99_2568"

><td id="2568"><a href="#2568">2568</a></td></tr
><tr id="gr_svn99_2569"

><td id="2569"><a href="#2569">2569</a></td></tr
><tr id="gr_svn99_2570"

><td id="2570"><a href="#2570">2570</a></td></tr
><tr id="gr_svn99_2571"

><td id="2571"><a href="#2571">2571</a></td></tr
><tr id="gr_svn99_2572"

><td id="2572"><a href="#2572">2572</a></td></tr
><tr id="gr_svn99_2573"

><td id="2573"><a href="#2573">2573</a></td></tr
><tr id="gr_svn99_2574"

><td id="2574"><a href="#2574">2574</a></td></tr
><tr id="gr_svn99_2575"

><td id="2575"><a href="#2575">2575</a></td></tr
><tr id="gr_svn99_2576"

><td id="2576"><a href="#2576">2576</a></td></tr
><tr id="gr_svn99_2577"

><td id="2577"><a href="#2577">2577</a></td></tr
><tr id="gr_svn99_2578"

><td id="2578"><a href="#2578">2578</a></td></tr
><tr id="gr_svn99_2579"

><td id="2579"><a href="#2579">2579</a></td></tr
><tr id="gr_svn99_2580"

><td id="2580"><a href="#2580">2580</a></td></tr
><tr id="gr_svn99_2581"

><td id="2581"><a href="#2581">2581</a></td></tr
><tr id="gr_svn99_2582"

><td id="2582"><a href="#2582">2582</a></td></tr
><tr id="gr_svn99_2583"

><td id="2583"><a href="#2583">2583</a></td></tr
><tr id="gr_svn99_2584"

><td id="2584"><a href="#2584">2584</a></td></tr
><tr id="gr_svn99_2585"

><td id="2585"><a href="#2585">2585</a></td></tr
><tr id="gr_svn99_2586"

><td id="2586"><a href="#2586">2586</a></td></tr
><tr id="gr_svn99_2587"

><td id="2587"><a href="#2587">2587</a></td></tr
><tr id="gr_svn99_2588"

><td id="2588"><a href="#2588">2588</a></td></tr
><tr id="gr_svn99_2589"

><td id="2589"><a href="#2589">2589</a></td></tr
><tr id="gr_svn99_2590"

><td id="2590"><a href="#2590">2590</a></td></tr
><tr id="gr_svn99_2591"

><td id="2591"><a href="#2591">2591</a></td></tr
><tr id="gr_svn99_2592"

><td id="2592"><a href="#2592">2592</a></td></tr
><tr id="gr_svn99_2593"

><td id="2593"><a href="#2593">2593</a></td></tr
><tr id="gr_svn99_2594"

><td id="2594"><a href="#2594">2594</a></td></tr
><tr id="gr_svn99_2595"

><td id="2595"><a href="#2595">2595</a></td></tr
><tr id="gr_svn99_2596"

><td id="2596"><a href="#2596">2596</a></td></tr
><tr id="gr_svn99_2597"

><td id="2597"><a href="#2597">2597</a></td></tr
><tr id="gr_svn99_2598"

><td id="2598"><a href="#2598">2598</a></td></tr
><tr id="gr_svn99_2599"

><td id="2599"><a href="#2599">2599</a></td></tr
><tr id="gr_svn99_2600"

><td id="2600"><a href="#2600">2600</a></td></tr
><tr id="gr_svn99_2601"

><td id="2601"><a href="#2601">2601</a></td></tr
><tr id="gr_svn99_2602"

><td id="2602"><a href="#2602">2602</a></td></tr
><tr id="gr_svn99_2603"

><td id="2603"><a href="#2603">2603</a></td></tr
><tr id="gr_svn99_2604"

><td id="2604"><a href="#2604">2604</a></td></tr
><tr id="gr_svn99_2605"

><td id="2605"><a href="#2605">2605</a></td></tr
><tr id="gr_svn99_2606"

><td id="2606"><a href="#2606">2606</a></td></tr
><tr id="gr_svn99_2607"

><td id="2607"><a href="#2607">2607</a></td></tr
><tr id="gr_svn99_2608"

><td id="2608"><a href="#2608">2608</a></td></tr
><tr id="gr_svn99_2609"

><td id="2609"><a href="#2609">2609</a></td></tr
><tr id="gr_svn99_2610"

><td id="2610"><a href="#2610">2610</a></td></tr
><tr id="gr_svn99_2611"

><td id="2611"><a href="#2611">2611</a></td></tr
><tr id="gr_svn99_2612"

><td id="2612"><a href="#2612">2612</a></td></tr
><tr id="gr_svn99_2613"

><td id="2613"><a href="#2613">2613</a></td></tr
><tr id="gr_svn99_2614"

><td id="2614"><a href="#2614">2614</a></td></tr
><tr id="gr_svn99_2615"

><td id="2615"><a href="#2615">2615</a></td></tr
><tr id="gr_svn99_2616"

><td id="2616"><a href="#2616">2616</a></td></tr
><tr id="gr_svn99_2617"

><td id="2617"><a href="#2617">2617</a></td></tr
><tr id="gr_svn99_2618"

><td id="2618"><a href="#2618">2618</a></td></tr
><tr id="gr_svn99_2619"

><td id="2619"><a href="#2619">2619</a></td></tr
><tr id="gr_svn99_2620"

><td id="2620"><a href="#2620">2620</a></td></tr
><tr id="gr_svn99_2621"

><td id="2621"><a href="#2621">2621</a></td></tr
><tr id="gr_svn99_2622"

><td id="2622"><a href="#2622">2622</a></td></tr
><tr id="gr_svn99_2623"

><td id="2623"><a href="#2623">2623</a></td></tr
><tr id="gr_svn99_2624"

><td id="2624"><a href="#2624">2624</a></td></tr
><tr id="gr_svn99_2625"

><td id="2625"><a href="#2625">2625</a></td></tr
><tr id="gr_svn99_2626"

><td id="2626"><a href="#2626">2626</a></td></tr
><tr id="gr_svn99_2627"

><td id="2627"><a href="#2627">2627</a></td></tr
><tr id="gr_svn99_2628"

><td id="2628"><a href="#2628">2628</a></td></tr
><tr id="gr_svn99_2629"

><td id="2629"><a href="#2629">2629</a></td></tr
><tr id="gr_svn99_2630"

><td id="2630"><a href="#2630">2630</a></td></tr
><tr id="gr_svn99_2631"

><td id="2631"><a href="#2631">2631</a></td></tr
><tr id="gr_svn99_2632"

><td id="2632"><a href="#2632">2632</a></td></tr
><tr id="gr_svn99_2633"

><td id="2633"><a href="#2633">2633</a></td></tr
><tr id="gr_svn99_2634"

><td id="2634"><a href="#2634">2634</a></td></tr
><tr id="gr_svn99_2635"

><td id="2635"><a href="#2635">2635</a></td></tr
><tr id="gr_svn99_2636"

><td id="2636"><a href="#2636">2636</a></td></tr
><tr id="gr_svn99_2637"

><td id="2637"><a href="#2637">2637</a></td></tr
><tr id="gr_svn99_2638"

><td id="2638"><a href="#2638">2638</a></td></tr
><tr id="gr_svn99_2639"

><td id="2639"><a href="#2639">2639</a></td></tr
><tr id="gr_svn99_2640"

><td id="2640"><a href="#2640">2640</a></td></tr
><tr id="gr_svn99_2641"

><td id="2641"><a href="#2641">2641</a></td></tr
><tr id="gr_svn99_2642"

><td id="2642"><a href="#2642">2642</a></td></tr
><tr id="gr_svn99_2643"

><td id="2643"><a href="#2643">2643</a></td></tr
><tr id="gr_svn99_2644"

><td id="2644"><a href="#2644">2644</a></td></tr
><tr id="gr_svn99_2645"

><td id="2645"><a href="#2645">2645</a></td></tr
><tr id="gr_svn99_2646"

><td id="2646"><a href="#2646">2646</a></td></tr
><tr id="gr_svn99_2647"

><td id="2647"><a href="#2647">2647</a></td></tr
><tr id="gr_svn99_2648"

><td id="2648"><a href="#2648">2648</a></td></tr
><tr id="gr_svn99_2649"

><td id="2649"><a href="#2649">2649</a></td></tr
><tr id="gr_svn99_2650"

><td id="2650"><a href="#2650">2650</a></td></tr
><tr id="gr_svn99_2651"

><td id="2651"><a href="#2651">2651</a></td></tr
><tr id="gr_svn99_2652"

><td id="2652"><a href="#2652">2652</a></td></tr
><tr id="gr_svn99_2653"

><td id="2653"><a href="#2653">2653</a></td></tr
><tr id="gr_svn99_2654"

><td id="2654"><a href="#2654">2654</a></td></tr
><tr id="gr_svn99_2655"

><td id="2655"><a href="#2655">2655</a></td></tr
><tr id="gr_svn99_2656"

><td id="2656"><a href="#2656">2656</a></td></tr
><tr id="gr_svn99_2657"

><td id="2657"><a href="#2657">2657</a></td></tr
><tr id="gr_svn99_2658"

><td id="2658"><a href="#2658">2658</a></td></tr
><tr id="gr_svn99_2659"

><td id="2659"><a href="#2659">2659</a></td></tr
><tr id="gr_svn99_2660"

><td id="2660"><a href="#2660">2660</a></td></tr
><tr id="gr_svn99_2661"

><td id="2661"><a href="#2661">2661</a></td></tr
><tr id="gr_svn99_2662"

><td id="2662"><a href="#2662">2662</a></td></tr
><tr id="gr_svn99_2663"

><td id="2663"><a href="#2663">2663</a></td></tr
><tr id="gr_svn99_2664"

><td id="2664"><a href="#2664">2664</a></td></tr
><tr id="gr_svn99_2665"

><td id="2665"><a href="#2665">2665</a></td></tr
><tr id="gr_svn99_2666"

><td id="2666"><a href="#2666">2666</a></td></tr
><tr id="gr_svn99_2667"

><td id="2667"><a href="#2667">2667</a></td></tr
><tr id="gr_svn99_2668"

><td id="2668"><a href="#2668">2668</a></td></tr
><tr id="gr_svn99_2669"

><td id="2669"><a href="#2669">2669</a></td></tr
><tr id="gr_svn99_2670"

><td id="2670"><a href="#2670">2670</a></td></tr
><tr id="gr_svn99_2671"

><td id="2671"><a href="#2671">2671</a></td></tr
><tr id="gr_svn99_2672"

><td id="2672"><a href="#2672">2672</a></td></tr
><tr id="gr_svn99_2673"

><td id="2673"><a href="#2673">2673</a></td></tr
><tr id="gr_svn99_2674"

><td id="2674"><a href="#2674">2674</a></td></tr
><tr id="gr_svn99_2675"

><td id="2675"><a href="#2675">2675</a></td></tr
><tr id="gr_svn99_2676"

><td id="2676"><a href="#2676">2676</a></td></tr
><tr id="gr_svn99_2677"

><td id="2677"><a href="#2677">2677</a></td></tr
><tr id="gr_svn99_2678"

><td id="2678"><a href="#2678">2678</a></td></tr
><tr id="gr_svn99_2679"

><td id="2679"><a href="#2679">2679</a></td></tr
><tr id="gr_svn99_2680"

><td id="2680"><a href="#2680">2680</a></td></tr
><tr id="gr_svn99_2681"

><td id="2681"><a href="#2681">2681</a></td></tr
><tr id="gr_svn99_2682"

><td id="2682"><a href="#2682">2682</a></td></tr
><tr id="gr_svn99_2683"

><td id="2683"><a href="#2683">2683</a></td></tr
><tr id="gr_svn99_2684"

><td id="2684"><a href="#2684">2684</a></td></tr
><tr id="gr_svn99_2685"

><td id="2685"><a href="#2685">2685</a></td></tr
><tr id="gr_svn99_2686"

><td id="2686"><a href="#2686">2686</a></td></tr
><tr id="gr_svn99_2687"

><td id="2687"><a href="#2687">2687</a></td></tr
><tr id="gr_svn99_2688"

><td id="2688"><a href="#2688">2688</a></td></tr
><tr id="gr_svn99_2689"

><td id="2689"><a href="#2689">2689</a></td></tr
><tr id="gr_svn99_2690"

><td id="2690"><a href="#2690">2690</a></td></tr
><tr id="gr_svn99_2691"

><td id="2691"><a href="#2691">2691</a></td></tr
><tr id="gr_svn99_2692"

><td id="2692"><a href="#2692">2692</a></td></tr
><tr id="gr_svn99_2693"

><td id="2693"><a href="#2693">2693</a></td></tr
><tr id="gr_svn99_2694"

><td id="2694"><a href="#2694">2694</a></td></tr
><tr id="gr_svn99_2695"

><td id="2695"><a href="#2695">2695</a></td></tr
><tr id="gr_svn99_2696"

><td id="2696"><a href="#2696">2696</a></td></tr
><tr id="gr_svn99_2697"

><td id="2697"><a href="#2697">2697</a></td></tr
><tr id="gr_svn99_2698"

><td id="2698"><a href="#2698">2698</a></td></tr
><tr id="gr_svn99_2699"

><td id="2699"><a href="#2699">2699</a></td></tr
><tr id="gr_svn99_2700"

><td id="2700"><a href="#2700">2700</a></td></tr
><tr id="gr_svn99_2701"

><td id="2701"><a href="#2701">2701</a></td></tr
><tr id="gr_svn99_2702"

><td id="2702"><a href="#2702">2702</a></td></tr
><tr id="gr_svn99_2703"

><td id="2703"><a href="#2703">2703</a></td></tr
><tr id="gr_svn99_2704"

><td id="2704"><a href="#2704">2704</a></td></tr
><tr id="gr_svn99_2705"

><td id="2705"><a href="#2705">2705</a></td></tr
><tr id="gr_svn99_2706"

><td id="2706"><a href="#2706">2706</a></td></tr
><tr id="gr_svn99_2707"

><td id="2707"><a href="#2707">2707</a></td></tr
><tr id="gr_svn99_2708"

><td id="2708"><a href="#2708">2708</a></td></tr
><tr id="gr_svn99_2709"

><td id="2709"><a href="#2709">2709</a></td></tr
><tr id="gr_svn99_2710"

><td id="2710"><a href="#2710">2710</a></td></tr
><tr id="gr_svn99_2711"

><td id="2711"><a href="#2711">2711</a></td></tr
><tr id="gr_svn99_2712"

><td id="2712"><a href="#2712">2712</a></td></tr
><tr id="gr_svn99_2713"

><td id="2713"><a href="#2713">2713</a></td></tr
><tr id="gr_svn99_2714"

><td id="2714"><a href="#2714">2714</a></td></tr
><tr id="gr_svn99_2715"

><td id="2715"><a href="#2715">2715</a></td></tr
><tr id="gr_svn99_2716"

><td id="2716"><a href="#2716">2716</a></td></tr
><tr id="gr_svn99_2717"

><td id="2717"><a href="#2717">2717</a></td></tr
><tr id="gr_svn99_2718"

><td id="2718"><a href="#2718">2718</a></td></tr
><tr id="gr_svn99_2719"

><td id="2719"><a href="#2719">2719</a></td></tr
><tr id="gr_svn99_2720"

><td id="2720"><a href="#2720">2720</a></td></tr
><tr id="gr_svn99_2721"

><td id="2721"><a href="#2721">2721</a></td></tr
><tr id="gr_svn99_2722"

><td id="2722"><a href="#2722">2722</a></td></tr
><tr id="gr_svn99_2723"

><td id="2723"><a href="#2723">2723</a></td></tr
><tr id="gr_svn99_2724"

><td id="2724"><a href="#2724">2724</a></td></tr
><tr id="gr_svn99_2725"

><td id="2725"><a href="#2725">2725</a></td></tr
><tr id="gr_svn99_2726"

><td id="2726"><a href="#2726">2726</a></td></tr
><tr id="gr_svn99_2727"

><td id="2727"><a href="#2727">2727</a></td></tr
><tr id="gr_svn99_2728"

><td id="2728"><a href="#2728">2728</a></td></tr
><tr id="gr_svn99_2729"

><td id="2729"><a href="#2729">2729</a></td></tr
><tr id="gr_svn99_2730"

><td id="2730"><a href="#2730">2730</a></td></tr
><tr id="gr_svn99_2731"

><td id="2731"><a href="#2731">2731</a></td></tr
><tr id="gr_svn99_2732"

><td id="2732"><a href="#2732">2732</a></td></tr
><tr id="gr_svn99_2733"

><td id="2733"><a href="#2733">2733</a></td></tr
><tr id="gr_svn99_2734"

><td id="2734"><a href="#2734">2734</a></td></tr
><tr id="gr_svn99_2735"

><td id="2735"><a href="#2735">2735</a></td></tr
><tr id="gr_svn99_2736"

><td id="2736"><a href="#2736">2736</a></td></tr
><tr id="gr_svn99_2737"

><td id="2737"><a href="#2737">2737</a></td></tr
><tr id="gr_svn99_2738"

><td id="2738"><a href="#2738">2738</a></td></tr
><tr id="gr_svn99_2739"

><td id="2739"><a href="#2739">2739</a></td></tr
><tr id="gr_svn99_2740"

><td id="2740"><a href="#2740">2740</a></td></tr
><tr id="gr_svn99_2741"

><td id="2741"><a href="#2741">2741</a></td></tr
><tr id="gr_svn99_2742"

><td id="2742"><a href="#2742">2742</a></td></tr
><tr id="gr_svn99_2743"

><td id="2743"><a href="#2743">2743</a></td></tr
><tr id="gr_svn99_2744"

><td id="2744"><a href="#2744">2744</a></td></tr
><tr id="gr_svn99_2745"

><td id="2745"><a href="#2745">2745</a></td></tr
><tr id="gr_svn99_2746"

><td id="2746"><a href="#2746">2746</a></td></tr
><tr id="gr_svn99_2747"

><td id="2747"><a href="#2747">2747</a></td></tr
><tr id="gr_svn99_2748"

><td id="2748"><a href="#2748">2748</a></td></tr
><tr id="gr_svn99_2749"

><td id="2749"><a href="#2749">2749</a></td></tr
><tr id="gr_svn99_2750"

><td id="2750"><a href="#2750">2750</a></td></tr
><tr id="gr_svn99_2751"

><td id="2751"><a href="#2751">2751</a></td></tr
><tr id="gr_svn99_2752"

><td id="2752"><a href="#2752">2752</a></td></tr
><tr id="gr_svn99_2753"

><td id="2753"><a href="#2753">2753</a></td></tr
><tr id="gr_svn99_2754"

><td id="2754"><a href="#2754">2754</a></td></tr
><tr id="gr_svn99_2755"

><td id="2755"><a href="#2755">2755</a></td></tr
><tr id="gr_svn99_2756"

><td id="2756"><a href="#2756">2756</a></td></tr
><tr id="gr_svn99_2757"

><td id="2757"><a href="#2757">2757</a></td></tr
><tr id="gr_svn99_2758"

><td id="2758"><a href="#2758">2758</a></td></tr
><tr id="gr_svn99_2759"

><td id="2759"><a href="#2759">2759</a></td></tr
><tr id="gr_svn99_2760"

><td id="2760"><a href="#2760">2760</a></td></tr
><tr id="gr_svn99_2761"

><td id="2761"><a href="#2761">2761</a></td></tr
><tr id="gr_svn99_2762"

><td id="2762"><a href="#2762">2762</a></td></tr
><tr id="gr_svn99_2763"

><td id="2763"><a href="#2763">2763</a></td></tr
><tr id="gr_svn99_2764"

><td id="2764"><a href="#2764">2764</a></td></tr
><tr id="gr_svn99_2765"

><td id="2765"><a href="#2765">2765</a></td></tr
><tr id="gr_svn99_2766"

><td id="2766"><a href="#2766">2766</a></td></tr
><tr id="gr_svn99_2767"

><td id="2767"><a href="#2767">2767</a></td></tr
><tr id="gr_svn99_2768"

><td id="2768"><a href="#2768">2768</a></td></tr
><tr id="gr_svn99_2769"

><td id="2769"><a href="#2769">2769</a></td></tr
><tr id="gr_svn99_2770"

><td id="2770"><a href="#2770">2770</a></td></tr
><tr id="gr_svn99_2771"

><td id="2771"><a href="#2771">2771</a></td></tr
><tr id="gr_svn99_2772"

><td id="2772"><a href="#2772">2772</a></td></tr
><tr id="gr_svn99_2773"

><td id="2773"><a href="#2773">2773</a></td></tr
><tr id="gr_svn99_2774"

><td id="2774"><a href="#2774">2774</a></td></tr
><tr id="gr_svn99_2775"

><td id="2775"><a href="#2775">2775</a></td></tr
><tr id="gr_svn99_2776"

><td id="2776"><a href="#2776">2776</a></td></tr
><tr id="gr_svn99_2777"

><td id="2777"><a href="#2777">2777</a></td></tr
><tr id="gr_svn99_2778"

><td id="2778"><a href="#2778">2778</a></td></tr
><tr id="gr_svn99_2779"

><td id="2779"><a href="#2779">2779</a></td></tr
><tr id="gr_svn99_2780"

><td id="2780"><a href="#2780">2780</a></td></tr
><tr id="gr_svn99_2781"

><td id="2781"><a href="#2781">2781</a></td></tr
><tr id="gr_svn99_2782"

><td id="2782"><a href="#2782">2782</a></td></tr
><tr id="gr_svn99_2783"

><td id="2783"><a href="#2783">2783</a></td></tr
><tr id="gr_svn99_2784"

><td id="2784"><a href="#2784">2784</a></td></tr
><tr id="gr_svn99_2785"

><td id="2785"><a href="#2785">2785</a></td></tr
><tr id="gr_svn99_2786"

><td id="2786"><a href="#2786">2786</a></td></tr
><tr id="gr_svn99_2787"

><td id="2787"><a href="#2787">2787</a></td></tr
><tr id="gr_svn99_2788"

><td id="2788"><a href="#2788">2788</a></td></tr
><tr id="gr_svn99_2789"

><td id="2789"><a href="#2789">2789</a></td></tr
><tr id="gr_svn99_2790"

><td id="2790"><a href="#2790">2790</a></td></tr
><tr id="gr_svn99_2791"

><td id="2791"><a href="#2791">2791</a></td></tr
><tr id="gr_svn99_2792"

><td id="2792"><a href="#2792">2792</a></td></tr
><tr id="gr_svn99_2793"

><td id="2793"><a href="#2793">2793</a></td></tr
><tr id="gr_svn99_2794"

><td id="2794"><a href="#2794">2794</a></td></tr
><tr id="gr_svn99_2795"

><td id="2795"><a href="#2795">2795</a></td></tr
><tr id="gr_svn99_2796"

><td id="2796"><a href="#2796">2796</a></td></tr
><tr id="gr_svn99_2797"

><td id="2797"><a href="#2797">2797</a></td></tr
><tr id="gr_svn99_2798"

><td id="2798"><a href="#2798">2798</a></td></tr
><tr id="gr_svn99_2799"

><td id="2799"><a href="#2799">2799</a></td></tr
><tr id="gr_svn99_2800"

><td id="2800"><a href="#2800">2800</a></td></tr
><tr id="gr_svn99_2801"

><td id="2801"><a href="#2801">2801</a></td></tr
><tr id="gr_svn99_2802"

><td id="2802"><a href="#2802">2802</a></td></tr
><tr id="gr_svn99_2803"

><td id="2803"><a href="#2803">2803</a></td></tr
><tr id="gr_svn99_2804"

><td id="2804"><a href="#2804">2804</a></td></tr
><tr id="gr_svn99_2805"

><td id="2805"><a href="#2805">2805</a></td></tr
><tr id="gr_svn99_2806"

><td id="2806"><a href="#2806">2806</a></td></tr
><tr id="gr_svn99_2807"

><td id="2807"><a href="#2807">2807</a></td></tr
><tr id="gr_svn99_2808"

><td id="2808"><a href="#2808">2808</a></td></tr
><tr id="gr_svn99_2809"

><td id="2809"><a href="#2809">2809</a></td></tr
><tr id="gr_svn99_2810"

><td id="2810"><a href="#2810">2810</a></td></tr
><tr id="gr_svn99_2811"

><td id="2811"><a href="#2811">2811</a></td></tr
><tr id="gr_svn99_2812"

><td id="2812"><a href="#2812">2812</a></td></tr
><tr id="gr_svn99_2813"

><td id="2813"><a href="#2813">2813</a></td></tr
><tr id="gr_svn99_2814"

><td id="2814"><a href="#2814">2814</a></td></tr
><tr id="gr_svn99_2815"

><td id="2815"><a href="#2815">2815</a></td></tr
><tr id="gr_svn99_2816"

><td id="2816"><a href="#2816">2816</a></td></tr
><tr id="gr_svn99_2817"

><td id="2817"><a href="#2817">2817</a></td></tr
><tr id="gr_svn99_2818"

><td id="2818"><a href="#2818">2818</a></td></tr
><tr id="gr_svn99_2819"

><td id="2819"><a href="#2819">2819</a></td></tr
><tr id="gr_svn99_2820"

><td id="2820"><a href="#2820">2820</a></td></tr
><tr id="gr_svn99_2821"

><td id="2821"><a href="#2821">2821</a></td></tr
><tr id="gr_svn99_2822"

><td id="2822"><a href="#2822">2822</a></td></tr
><tr id="gr_svn99_2823"

><td id="2823"><a href="#2823">2823</a></td></tr
><tr id="gr_svn99_2824"

><td id="2824"><a href="#2824">2824</a></td></tr
><tr id="gr_svn99_2825"

><td id="2825"><a href="#2825">2825</a></td></tr
><tr id="gr_svn99_2826"

><td id="2826"><a href="#2826">2826</a></td></tr
><tr id="gr_svn99_2827"

><td id="2827"><a href="#2827">2827</a></td></tr
><tr id="gr_svn99_2828"

><td id="2828"><a href="#2828">2828</a></td></tr
><tr id="gr_svn99_2829"

><td id="2829"><a href="#2829">2829</a></td></tr
><tr id="gr_svn99_2830"

><td id="2830"><a href="#2830">2830</a></td></tr
><tr id="gr_svn99_2831"

><td id="2831"><a href="#2831">2831</a></td></tr
><tr id="gr_svn99_2832"

><td id="2832"><a href="#2832">2832</a></td></tr
><tr id="gr_svn99_2833"

><td id="2833"><a href="#2833">2833</a></td></tr
><tr id="gr_svn99_2834"

><td id="2834"><a href="#2834">2834</a></td></tr
><tr id="gr_svn99_2835"

><td id="2835"><a href="#2835">2835</a></td></tr
><tr id="gr_svn99_2836"

><td id="2836"><a href="#2836">2836</a></td></tr
><tr id="gr_svn99_2837"

><td id="2837"><a href="#2837">2837</a></td></tr
><tr id="gr_svn99_2838"

><td id="2838"><a href="#2838">2838</a></td></tr
><tr id="gr_svn99_2839"

><td id="2839"><a href="#2839">2839</a></td></tr
><tr id="gr_svn99_2840"

><td id="2840"><a href="#2840">2840</a></td></tr
><tr id="gr_svn99_2841"

><td id="2841"><a href="#2841">2841</a></td></tr
><tr id="gr_svn99_2842"

><td id="2842"><a href="#2842">2842</a></td></tr
><tr id="gr_svn99_2843"

><td id="2843"><a href="#2843">2843</a></td></tr
><tr id="gr_svn99_2844"

><td id="2844"><a href="#2844">2844</a></td></tr
><tr id="gr_svn99_2845"

><td id="2845"><a href="#2845">2845</a></td></tr
><tr id="gr_svn99_2846"

><td id="2846"><a href="#2846">2846</a></td></tr
><tr id="gr_svn99_2847"

><td id="2847"><a href="#2847">2847</a></td></tr
><tr id="gr_svn99_2848"

><td id="2848"><a href="#2848">2848</a></td></tr
><tr id="gr_svn99_2849"

><td id="2849"><a href="#2849">2849</a></td></tr
><tr id="gr_svn99_2850"

><td id="2850"><a href="#2850">2850</a></td></tr
><tr id="gr_svn99_2851"

><td id="2851"><a href="#2851">2851</a></td></tr
><tr id="gr_svn99_2852"

><td id="2852"><a href="#2852">2852</a></td></tr
><tr id="gr_svn99_2853"

><td id="2853"><a href="#2853">2853</a></td></tr
><tr id="gr_svn99_2854"

><td id="2854"><a href="#2854">2854</a></td></tr
><tr id="gr_svn99_2855"

><td id="2855"><a href="#2855">2855</a></td></tr
><tr id="gr_svn99_2856"

><td id="2856"><a href="#2856">2856</a></td></tr
><tr id="gr_svn99_2857"

><td id="2857"><a href="#2857">2857</a></td></tr
><tr id="gr_svn99_2858"

><td id="2858"><a href="#2858">2858</a></td></tr
><tr id="gr_svn99_2859"

><td id="2859"><a href="#2859">2859</a></td></tr
><tr id="gr_svn99_2860"

><td id="2860"><a href="#2860">2860</a></td></tr
><tr id="gr_svn99_2861"

><td id="2861"><a href="#2861">2861</a></td></tr
><tr id="gr_svn99_2862"

><td id="2862"><a href="#2862">2862</a></td></tr
><tr id="gr_svn99_2863"

><td id="2863"><a href="#2863">2863</a></td></tr
><tr id="gr_svn99_2864"

><td id="2864"><a href="#2864">2864</a></td></tr
><tr id="gr_svn99_2865"

><td id="2865"><a href="#2865">2865</a></td></tr
><tr id="gr_svn99_2866"

><td id="2866"><a href="#2866">2866</a></td></tr
><tr id="gr_svn99_2867"

><td id="2867"><a href="#2867">2867</a></td></tr
><tr id="gr_svn99_2868"

><td id="2868"><a href="#2868">2868</a></td></tr
><tr id="gr_svn99_2869"

><td id="2869"><a href="#2869">2869</a></td></tr
><tr id="gr_svn99_2870"

><td id="2870"><a href="#2870">2870</a></td></tr
><tr id="gr_svn99_2871"

><td id="2871"><a href="#2871">2871</a></td></tr
><tr id="gr_svn99_2872"

><td id="2872"><a href="#2872">2872</a></td></tr
><tr id="gr_svn99_2873"

><td id="2873"><a href="#2873">2873</a></td></tr
><tr id="gr_svn99_2874"

><td id="2874"><a href="#2874">2874</a></td></tr
><tr id="gr_svn99_2875"

><td id="2875"><a href="#2875">2875</a></td></tr
><tr id="gr_svn99_2876"

><td id="2876"><a href="#2876">2876</a></td></tr
><tr id="gr_svn99_2877"

><td id="2877"><a href="#2877">2877</a></td></tr
><tr id="gr_svn99_2878"

><td id="2878"><a href="#2878">2878</a></td></tr
><tr id="gr_svn99_2879"

><td id="2879"><a href="#2879">2879</a></td></tr
><tr id="gr_svn99_2880"

><td id="2880"><a href="#2880">2880</a></td></tr
><tr id="gr_svn99_2881"

><td id="2881"><a href="#2881">2881</a></td></tr
><tr id="gr_svn99_2882"

><td id="2882"><a href="#2882">2882</a></td></tr
><tr id="gr_svn99_2883"

><td id="2883"><a href="#2883">2883</a></td></tr
><tr id="gr_svn99_2884"

><td id="2884"><a href="#2884">2884</a></td></tr
><tr id="gr_svn99_2885"

><td id="2885"><a href="#2885">2885</a></td></tr
><tr id="gr_svn99_2886"

><td id="2886"><a href="#2886">2886</a></td></tr
><tr id="gr_svn99_2887"

><td id="2887"><a href="#2887">2887</a></td></tr
><tr id="gr_svn99_2888"

><td id="2888"><a href="#2888">2888</a></td></tr
><tr id="gr_svn99_2889"

><td id="2889"><a href="#2889">2889</a></td></tr
><tr id="gr_svn99_2890"

><td id="2890"><a href="#2890">2890</a></td></tr
><tr id="gr_svn99_2891"

><td id="2891"><a href="#2891">2891</a></td></tr
><tr id="gr_svn99_2892"

><td id="2892"><a href="#2892">2892</a></td></tr
><tr id="gr_svn99_2893"

><td id="2893"><a href="#2893">2893</a></td></tr
><tr id="gr_svn99_2894"

><td id="2894"><a href="#2894">2894</a></td></tr
><tr id="gr_svn99_2895"

><td id="2895"><a href="#2895">2895</a></td></tr
><tr id="gr_svn99_2896"

><td id="2896"><a href="#2896">2896</a></td></tr
><tr id="gr_svn99_2897"

><td id="2897"><a href="#2897">2897</a></td></tr
><tr id="gr_svn99_2898"

><td id="2898"><a href="#2898">2898</a></td></tr
><tr id="gr_svn99_2899"

><td id="2899"><a href="#2899">2899</a></td></tr
><tr id="gr_svn99_2900"

><td id="2900"><a href="#2900">2900</a></td></tr
><tr id="gr_svn99_2901"

><td id="2901"><a href="#2901">2901</a></td></tr
><tr id="gr_svn99_2902"

><td id="2902"><a href="#2902">2902</a></td></tr
><tr id="gr_svn99_2903"

><td id="2903"><a href="#2903">2903</a></td></tr
><tr id="gr_svn99_2904"

><td id="2904"><a href="#2904">2904</a></td></tr
><tr id="gr_svn99_2905"

><td id="2905"><a href="#2905">2905</a></td></tr
><tr id="gr_svn99_2906"

><td id="2906"><a href="#2906">2906</a></td></tr
><tr id="gr_svn99_2907"

><td id="2907"><a href="#2907">2907</a></td></tr
><tr id="gr_svn99_2908"

><td id="2908"><a href="#2908">2908</a></td></tr
><tr id="gr_svn99_2909"

><td id="2909"><a href="#2909">2909</a></td></tr
><tr id="gr_svn99_2910"

><td id="2910"><a href="#2910">2910</a></td></tr
><tr id="gr_svn99_2911"

><td id="2911"><a href="#2911">2911</a></td></tr
><tr id="gr_svn99_2912"

><td id="2912"><a href="#2912">2912</a></td></tr
><tr id="gr_svn99_2913"

><td id="2913"><a href="#2913">2913</a></td></tr
><tr id="gr_svn99_2914"

><td id="2914"><a href="#2914">2914</a></td></tr
><tr id="gr_svn99_2915"

><td id="2915"><a href="#2915">2915</a></td></tr
><tr id="gr_svn99_2916"

><td id="2916"><a href="#2916">2916</a></td></tr
><tr id="gr_svn99_2917"

><td id="2917"><a href="#2917">2917</a></td></tr
><tr id="gr_svn99_2918"

><td id="2918"><a href="#2918">2918</a></td></tr
><tr id="gr_svn99_2919"

><td id="2919"><a href="#2919">2919</a></td></tr
><tr id="gr_svn99_2920"

><td id="2920"><a href="#2920">2920</a></td></tr
><tr id="gr_svn99_2921"

><td id="2921"><a href="#2921">2921</a></td></tr
><tr id="gr_svn99_2922"

><td id="2922"><a href="#2922">2922</a></td></tr
><tr id="gr_svn99_2923"

><td id="2923"><a href="#2923">2923</a></td></tr
><tr id="gr_svn99_2924"

><td id="2924"><a href="#2924">2924</a></td></tr
><tr id="gr_svn99_2925"

><td id="2925"><a href="#2925">2925</a></td></tr
><tr id="gr_svn99_2926"

><td id="2926"><a href="#2926">2926</a></td></tr
><tr id="gr_svn99_2927"

><td id="2927"><a href="#2927">2927</a></td></tr
><tr id="gr_svn99_2928"

><td id="2928"><a href="#2928">2928</a></td></tr
><tr id="gr_svn99_2929"

><td id="2929"><a href="#2929">2929</a></td></tr
><tr id="gr_svn99_2930"

><td id="2930"><a href="#2930">2930</a></td></tr
><tr id="gr_svn99_2931"

><td id="2931"><a href="#2931">2931</a></td></tr
><tr id="gr_svn99_2932"

><td id="2932"><a href="#2932">2932</a></td></tr
><tr id="gr_svn99_2933"

><td id="2933"><a href="#2933">2933</a></td></tr
><tr id="gr_svn99_2934"

><td id="2934"><a href="#2934">2934</a></td></tr
><tr id="gr_svn99_2935"

><td id="2935"><a href="#2935">2935</a></td></tr
><tr id="gr_svn99_2936"

><td id="2936"><a href="#2936">2936</a></td></tr
><tr id="gr_svn99_2937"

><td id="2937"><a href="#2937">2937</a></td></tr
><tr id="gr_svn99_2938"

><td id="2938"><a href="#2938">2938</a></td></tr
><tr id="gr_svn99_2939"

><td id="2939"><a href="#2939">2939</a></td></tr
><tr id="gr_svn99_2940"

><td id="2940"><a href="#2940">2940</a></td></tr
><tr id="gr_svn99_2941"

><td id="2941"><a href="#2941">2941</a></td></tr
><tr id="gr_svn99_2942"

><td id="2942"><a href="#2942">2942</a></td></tr
><tr id="gr_svn99_2943"

><td id="2943"><a href="#2943">2943</a></td></tr
><tr id="gr_svn99_2944"

><td id="2944"><a href="#2944">2944</a></td></tr
><tr id="gr_svn99_2945"

><td id="2945"><a href="#2945">2945</a></td></tr
><tr id="gr_svn99_2946"

><td id="2946"><a href="#2946">2946</a></td></tr
><tr id="gr_svn99_2947"

><td id="2947"><a href="#2947">2947</a></td></tr
><tr id="gr_svn99_2948"

><td id="2948"><a href="#2948">2948</a></td></tr
><tr id="gr_svn99_2949"

><td id="2949"><a href="#2949">2949</a></td></tr
><tr id="gr_svn99_2950"

><td id="2950"><a href="#2950">2950</a></td></tr
><tr id="gr_svn99_2951"

><td id="2951"><a href="#2951">2951</a></td></tr
><tr id="gr_svn99_2952"

><td id="2952"><a href="#2952">2952</a></td></tr
><tr id="gr_svn99_2953"

><td id="2953"><a href="#2953">2953</a></td></tr
><tr id="gr_svn99_2954"

><td id="2954"><a href="#2954">2954</a></td></tr
><tr id="gr_svn99_2955"

><td id="2955"><a href="#2955">2955</a></td></tr
><tr id="gr_svn99_2956"

><td id="2956"><a href="#2956">2956</a></td></tr
><tr id="gr_svn99_2957"

><td id="2957"><a href="#2957">2957</a></td></tr
><tr id="gr_svn99_2958"

><td id="2958"><a href="#2958">2958</a></td></tr
><tr id="gr_svn99_2959"

><td id="2959"><a href="#2959">2959</a></td></tr
><tr id="gr_svn99_2960"

><td id="2960"><a href="#2960">2960</a></td></tr
><tr id="gr_svn99_2961"

><td id="2961"><a href="#2961">2961</a></td></tr
><tr id="gr_svn99_2962"

><td id="2962"><a href="#2962">2962</a></td></tr
><tr id="gr_svn99_2963"

><td id="2963"><a href="#2963">2963</a></td></tr
><tr id="gr_svn99_2964"

><td id="2964"><a href="#2964">2964</a></td></tr
><tr id="gr_svn99_2965"

><td id="2965"><a href="#2965">2965</a></td></tr
><tr id="gr_svn99_2966"

><td id="2966"><a href="#2966">2966</a></td></tr
><tr id="gr_svn99_2967"

><td id="2967"><a href="#2967">2967</a></td></tr
><tr id="gr_svn99_2968"

><td id="2968"><a href="#2968">2968</a></td></tr
><tr id="gr_svn99_2969"

><td id="2969"><a href="#2969">2969</a></td></tr
><tr id="gr_svn99_2970"

><td id="2970"><a href="#2970">2970</a></td></tr
><tr id="gr_svn99_2971"

><td id="2971"><a href="#2971">2971</a></td></tr
><tr id="gr_svn99_2972"

><td id="2972"><a href="#2972">2972</a></td></tr
><tr id="gr_svn99_2973"

><td id="2973"><a href="#2973">2973</a></td></tr
><tr id="gr_svn99_2974"

><td id="2974"><a href="#2974">2974</a></td></tr
><tr id="gr_svn99_2975"

><td id="2975"><a href="#2975">2975</a></td></tr
><tr id="gr_svn99_2976"

><td id="2976"><a href="#2976">2976</a></td></tr
><tr id="gr_svn99_2977"

><td id="2977"><a href="#2977">2977</a></td></tr
><tr id="gr_svn99_2978"

><td id="2978"><a href="#2978">2978</a></td></tr
><tr id="gr_svn99_2979"

><td id="2979"><a href="#2979">2979</a></td></tr
><tr id="gr_svn99_2980"

><td id="2980"><a href="#2980">2980</a></td></tr
><tr id="gr_svn99_2981"

><td id="2981"><a href="#2981">2981</a></td></tr
><tr id="gr_svn99_2982"

><td id="2982"><a href="#2982">2982</a></td></tr
><tr id="gr_svn99_2983"

><td id="2983"><a href="#2983">2983</a></td></tr
><tr id="gr_svn99_2984"

><td id="2984"><a href="#2984">2984</a></td></tr
><tr id="gr_svn99_2985"

><td id="2985"><a href="#2985">2985</a></td></tr
><tr id="gr_svn99_2986"

><td id="2986"><a href="#2986">2986</a></td></tr
><tr id="gr_svn99_2987"

><td id="2987"><a href="#2987">2987</a></td></tr
><tr id="gr_svn99_2988"

><td id="2988"><a href="#2988">2988</a></td></tr
><tr id="gr_svn99_2989"

><td id="2989"><a href="#2989">2989</a></td></tr
><tr id="gr_svn99_2990"

><td id="2990"><a href="#2990">2990</a></td></tr
><tr id="gr_svn99_2991"

><td id="2991"><a href="#2991">2991</a></td></tr
><tr id="gr_svn99_2992"

><td id="2992"><a href="#2992">2992</a></td></tr
><tr id="gr_svn99_2993"

><td id="2993"><a href="#2993">2993</a></td></tr
><tr id="gr_svn99_2994"

><td id="2994"><a href="#2994">2994</a></td></tr
><tr id="gr_svn99_2995"

><td id="2995"><a href="#2995">2995</a></td></tr
><tr id="gr_svn99_2996"

><td id="2996"><a href="#2996">2996</a></td></tr
><tr id="gr_svn99_2997"

><td id="2997"><a href="#2997">2997</a></td></tr
><tr id="gr_svn99_2998"

><td id="2998"><a href="#2998">2998</a></td></tr
><tr id="gr_svn99_2999"

><td id="2999"><a href="#2999">2999</a></td></tr
><tr id="gr_svn99_3000"

><td id="3000"><a href="#3000">3000</a></td></tr
><tr id="gr_svn99_3001"

><td id="3001"><a href="#3001">3001</a></td></tr
><tr id="gr_svn99_3002"

><td id="3002"><a href="#3002">3002</a></td></tr
><tr id="gr_svn99_3003"

><td id="3003"><a href="#3003">3003</a></td></tr
><tr id="gr_svn99_3004"

><td id="3004"><a href="#3004">3004</a></td></tr
><tr id="gr_svn99_3005"

><td id="3005"><a href="#3005">3005</a></td></tr
><tr id="gr_svn99_3006"

><td id="3006"><a href="#3006">3006</a></td></tr
><tr id="gr_svn99_3007"

><td id="3007"><a href="#3007">3007</a></td></tr
><tr id="gr_svn99_3008"

><td id="3008"><a href="#3008">3008</a></td></tr
><tr id="gr_svn99_3009"

><td id="3009"><a href="#3009">3009</a></td></tr
><tr id="gr_svn99_3010"

><td id="3010"><a href="#3010">3010</a></td></tr
><tr id="gr_svn99_3011"

><td id="3011"><a href="#3011">3011</a></td></tr
><tr id="gr_svn99_3012"

><td id="3012"><a href="#3012">3012</a></td></tr
><tr id="gr_svn99_3013"

><td id="3013"><a href="#3013">3013</a></td></tr
><tr id="gr_svn99_3014"

><td id="3014"><a href="#3014">3014</a></td></tr
><tr id="gr_svn99_3015"

><td id="3015"><a href="#3015">3015</a></td></tr
><tr id="gr_svn99_3016"

><td id="3016"><a href="#3016">3016</a></td></tr
><tr id="gr_svn99_3017"

><td id="3017"><a href="#3017">3017</a></td></tr
><tr id="gr_svn99_3018"

><td id="3018"><a href="#3018">3018</a></td></tr
><tr id="gr_svn99_3019"

><td id="3019"><a href="#3019">3019</a></td></tr
><tr id="gr_svn99_3020"

><td id="3020"><a href="#3020">3020</a></td></tr
><tr id="gr_svn99_3021"

><td id="3021"><a href="#3021">3021</a></td></tr
><tr id="gr_svn99_3022"

><td id="3022"><a href="#3022">3022</a></td></tr
><tr id="gr_svn99_3023"

><td id="3023"><a href="#3023">3023</a></td></tr
><tr id="gr_svn99_3024"

><td id="3024"><a href="#3024">3024</a></td></tr
><tr id="gr_svn99_3025"

><td id="3025"><a href="#3025">3025</a></td></tr
><tr id="gr_svn99_3026"

><td id="3026"><a href="#3026">3026</a></td></tr
><tr id="gr_svn99_3027"

><td id="3027"><a href="#3027">3027</a></td></tr
><tr id="gr_svn99_3028"

><td id="3028"><a href="#3028">3028</a></td></tr
><tr id="gr_svn99_3029"

><td id="3029"><a href="#3029">3029</a></td></tr
><tr id="gr_svn99_3030"

><td id="3030"><a href="#3030">3030</a></td></tr
><tr id="gr_svn99_3031"

><td id="3031"><a href="#3031">3031</a></td></tr
><tr id="gr_svn99_3032"

><td id="3032"><a href="#3032">3032</a></td></tr
><tr id="gr_svn99_3033"

><td id="3033"><a href="#3033">3033</a></td></tr
><tr id="gr_svn99_3034"

><td id="3034"><a href="#3034">3034</a></td></tr
><tr id="gr_svn99_3035"

><td id="3035"><a href="#3035">3035</a></td></tr
><tr id="gr_svn99_3036"

><td id="3036"><a href="#3036">3036</a></td></tr
><tr id="gr_svn99_3037"

><td id="3037"><a href="#3037">3037</a></td></tr
><tr id="gr_svn99_3038"

><td id="3038"><a href="#3038">3038</a></td></tr
><tr id="gr_svn99_3039"

><td id="3039"><a href="#3039">3039</a></td></tr
><tr id="gr_svn99_3040"

><td id="3040"><a href="#3040">3040</a></td></tr
><tr id="gr_svn99_3041"

><td id="3041"><a href="#3041">3041</a></td></tr
><tr id="gr_svn99_3042"

><td id="3042"><a href="#3042">3042</a></td></tr
><tr id="gr_svn99_3043"

><td id="3043"><a href="#3043">3043</a></td></tr
><tr id="gr_svn99_3044"

><td id="3044"><a href="#3044">3044</a></td></tr
><tr id="gr_svn99_3045"

><td id="3045"><a href="#3045">3045</a></td></tr
><tr id="gr_svn99_3046"

><td id="3046"><a href="#3046">3046</a></td></tr
><tr id="gr_svn99_3047"

><td id="3047"><a href="#3047">3047</a></td></tr
><tr id="gr_svn99_3048"

><td id="3048"><a href="#3048">3048</a></td></tr
><tr id="gr_svn99_3049"

><td id="3049"><a href="#3049">3049</a></td></tr
><tr id="gr_svn99_3050"

><td id="3050"><a href="#3050">3050</a></td></tr
><tr id="gr_svn99_3051"

><td id="3051"><a href="#3051">3051</a></td></tr
><tr id="gr_svn99_3052"

><td id="3052"><a href="#3052">3052</a></td></tr
><tr id="gr_svn99_3053"

><td id="3053"><a href="#3053">3053</a></td></tr
><tr id="gr_svn99_3054"

><td id="3054"><a href="#3054">3054</a></td></tr
><tr id="gr_svn99_3055"

><td id="3055"><a href="#3055">3055</a></td></tr
><tr id="gr_svn99_3056"

><td id="3056"><a href="#3056">3056</a></td></tr
><tr id="gr_svn99_3057"

><td id="3057"><a href="#3057">3057</a></td></tr
><tr id="gr_svn99_3058"

><td id="3058"><a href="#3058">3058</a></td></tr
><tr id="gr_svn99_3059"

><td id="3059"><a href="#3059">3059</a></td></tr
><tr id="gr_svn99_3060"

><td id="3060"><a href="#3060">3060</a></td></tr
><tr id="gr_svn99_3061"

><td id="3061"><a href="#3061">3061</a></td></tr
><tr id="gr_svn99_3062"

><td id="3062"><a href="#3062">3062</a></td></tr
><tr id="gr_svn99_3063"

><td id="3063"><a href="#3063">3063</a></td></tr
><tr id="gr_svn99_3064"

><td id="3064"><a href="#3064">3064</a></td></tr
><tr id="gr_svn99_3065"

><td id="3065"><a href="#3065">3065</a></td></tr
><tr id="gr_svn99_3066"

><td id="3066"><a href="#3066">3066</a></td></tr
><tr id="gr_svn99_3067"

><td id="3067"><a href="#3067">3067</a></td></tr
><tr id="gr_svn99_3068"

><td id="3068"><a href="#3068">3068</a></td></tr
><tr id="gr_svn99_3069"

><td id="3069"><a href="#3069">3069</a></td></tr
><tr id="gr_svn99_3070"

><td id="3070"><a href="#3070">3070</a></td></tr
><tr id="gr_svn99_3071"

><td id="3071"><a href="#3071">3071</a></td></tr
><tr id="gr_svn99_3072"

><td id="3072"><a href="#3072">3072</a></td></tr
><tr id="gr_svn99_3073"

><td id="3073"><a href="#3073">3073</a></td></tr
><tr id="gr_svn99_3074"

><td id="3074"><a href="#3074">3074</a></td></tr
><tr id="gr_svn99_3075"

><td id="3075"><a href="#3075">3075</a></td></tr
><tr id="gr_svn99_3076"

><td id="3076"><a href="#3076">3076</a></td></tr
><tr id="gr_svn99_3077"

><td id="3077"><a href="#3077">3077</a></td></tr
><tr id="gr_svn99_3078"

><td id="3078"><a href="#3078">3078</a></td></tr
><tr id="gr_svn99_3079"

><td id="3079"><a href="#3079">3079</a></td></tr
><tr id="gr_svn99_3080"

><td id="3080"><a href="#3080">3080</a></td></tr
><tr id="gr_svn99_3081"

><td id="3081"><a href="#3081">3081</a></td></tr
><tr id="gr_svn99_3082"

><td id="3082"><a href="#3082">3082</a></td></tr
><tr id="gr_svn99_3083"

><td id="3083"><a href="#3083">3083</a></td></tr
><tr id="gr_svn99_3084"

><td id="3084"><a href="#3084">3084</a></td></tr
><tr id="gr_svn99_3085"

><td id="3085"><a href="#3085">3085</a></td></tr
><tr id="gr_svn99_3086"

><td id="3086"><a href="#3086">3086</a></td></tr
><tr id="gr_svn99_3087"

><td id="3087"><a href="#3087">3087</a></td></tr
><tr id="gr_svn99_3088"

><td id="3088"><a href="#3088">3088</a></td></tr
><tr id="gr_svn99_3089"

><td id="3089"><a href="#3089">3089</a></td></tr
><tr id="gr_svn99_3090"

><td id="3090"><a href="#3090">3090</a></td></tr
><tr id="gr_svn99_3091"

><td id="3091"><a href="#3091">3091</a></td></tr
><tr id="gr_svn99_3092"

><td id="3092"><a href="#3092">3092</a></td></tr
><tr id="gr_svn99_3093"

><td id="3093"><a href="#3093">3093</a></td></tr
><tr id="gr_svn99_3094"

><td id="3094"><a href="#3094">3094</a></td></tr
><tr id="gr_svn99_3095"

><td id="3095"><a href="#3095">3095</a></td></tr
><tr id="gr_svn99_3096"

><td id="3096"><a href="#3096">3096</a></td></tr
><tr id="gr_svn99_3097"

><td id="3097"><a href="#3097">3097</a></td></tr
><tr id="gr_svn99_3098"

><td id="3098"><a href="#3098">3098</a></td></tr
><tr id="gr_svn99_3099"

><td id="3099"><a href="#3099">3099</a></td></tr
><tr id="gr_svn99_3100"

><td id="3100"><a href="#3100">3100</a></td></tr
><tr id="gr_svn99_3101"

><td id="3101"><a href="#3101">3101</a></td></tr
><tr id="gr_svn99_3102"

><td id="3102"><a href="#3102">3102</a></td></tr
><tr id="gr_svn99_3103"

><td id="3103"><a href="#3103">3103</a></td></tr
><tr id="gr_svn99_3104"

><td id="3104"><a href="#3104">3104</a></td></tr
><tr id="gr_svn99_3105"

><td id="3105"><a href="#3105">3105</a></td></tr
><tr id="gr_svn99_3106"

><td id="3106"><a href="#3106">3106</a></td></tr
><tr id="gr_svn99_3107"

><td id="3107"><a href="#3107">3107</a></td></tr
><tr id="gr_svn99_3108"

><td id="3108"><a href="#3108">3108</a></td></tr
><tr id="gr_svn99_3109"

><td id="3109"><a href="#3109">3109</a></td></tr
><tr id="gr_svn99_3110"

><td id="3110"><a href="#3110">3110</a></td></tr
><tr id="gr_svn99_3111"

><td id="3111"><a href="#3111">3111</a></td></tr
><tr id="gr_svn99_3112"

><td id="3112"><a href="#3112">3112</a></td></tr
><tr id="gr_svn99_3113"

><td id="3113"><a href="#3113">3113</a></td></tr
><tr id="gr_svn99_3114"

><td id="3114"><a href="#3114">3114</a></td></tr
><tr id="gr_svn99_3115"

><td id="3115"><a href="#3115">3115</a></td></tr
><tr id="gr_svn99_3116"

><td id="3116"><a href="#3116">3116</a></td></tr
><tr id="gr_svn99_3117"

><td id="3117"><a href="#3117">3117</a></td></tr
><tr id="gr_svn99_3118"

><td id="3118"><a href="#3118">3118</a></td></tr
><tr id="gr_svn99_3119"

><td id="3119"><a href="#3119">3119</a></td></tr
><tr id="gr_svn99_3120"

><td id="3120"><a href="#3120">3120</a></td></tr
><tr id="gr_svn99_3121"

><td id="3121"><a href="#3121">3121</a></td></tr
><tr id="gr_svn99_3122"

><td id="3122"><a href="#3122">3122</a></td></tr
><tr id="gr_svn99_3123"

><td id="3123"><a href="#3123">3123</a></td></tr
><tr id="gr_svn99_3124"

><td id="3124"><a href="#3124">3124</a></td></tr
><tr id="gr_svn99_3125"

><td id="3125"><a href="#3125">3125</a></td></tr
><tr id="gr_svn99_3126"

><td id="3126"><a href="#3126">3126</a></td></tr
><tr id="gr_svn99_3127"

><td id="3127"><a href="#3127">3127</a></td></tr
><tr id="gr_svn99_3128"

><td id="3128"><a href="#3128">3128</a></td></tr
><tr id="gr_svn99_3129"

><td id="3129"><a href="#3129">3129</a></td></tr
><tr id="gr_svn99_3130"

><td id="3130"><a href="#3130">3130</a></td></tr
><tr id="gr_svn99_3131"

><td id="3131"><a href="#3131">3131</a></td></tr
><tr id="gr_svn99_3132"

><td id="3132"><a href="#3132">3132</a></td></tr
><tr id="gr_svn99_3133"

><td id="3133"><a href="#3133">3133</a></td></tr
><tr id="gr_svn99_3134"

><td id="3134"><a href="#3134">3134</a></td></tr
><tr id="gr_svn99_3135"

><td id="3135"><a href="#3135">3135</a></td></tr
><tr id="gr_svn99_3136"

><td id="3136"><a href="#3136">3136</a></td></tr
><tr id="gr_svn99_3137"

><td id="3137"><a href="#3137">3137</a></td></tr
><tr id="gr_svn99_3138"

><td id="3138"><a href="#3138">3138</a></td></tr
><tr id="gr_svn99_3139"

><td id="3139"><a href="#3139">3139</a></td></tr
><tr id="gr_svn99_3140"

><td id="3140"><a href="#3140">3140</a></td></tr
><tr id="gr_svn99_3141"

><td id="3141"><a href="#3141">3141</a></td></tr
><tr id="gr_svn99_3142"

><td id="3142"><a href="#3142">3142</a></td></tr
><tr id="gr_svn99_3143"

><td id="3143"><a href="#3143">3143</a></td></tr
><tr id="gr_svn99_3144"

><td id="3144"><a href="#3144">3144</a></td></tr
><tr id="gr_svn99_3145"

><td id="3145"><a href="#3145">3145</a></td></tr
><tr id="gr_svn99_3146"

><td id="3146"><a href="#3146">3146</a></td></tr
><tr id="gr_svn99_3147"

><td id="3147"><a href="#3147">3147</a></td></tr
><tr id="gr_svn99_3148"

><td id="3148"><a href="#3148">3148</a></td></tr
><tr id="gr_svn99_3149"

><td id="3149"><a href="#3149">3149</a></td></tr
><tr id="gr_svn99_3150"

><td id="3150"><a href="#3150">3150</a></td></tr
><tr id="gr_svn99_3151"

><td id="3151"><a href="#3151">3151</a></td></tr
><tr id="gr_svn99_3152"

><td id="3152"><a href="#3152">3152</a></td></tr
><tr id="gr_svn99_3153"

><td id="3153"><a href="#3153">3153</a></td></tr
><tr id="gr_svn99_3154"

><td id="3154"><a href="#3154">3154</a></td></tr
><tr id="gr_svn99_3155"

><td id="3155"><a href="#3155">3155</a></td></tr
><tr id="gr_svn99_3156"

><td id="3156"><a href="#3156">3156</a></td></tr
><tr id="gr_svn99_3157"

><td id="3157"><a href="#3157">3157</a></td></tr
><tr id="gr_svn99_3158"

><td id="3158"><a href="#3158">3158</a></td></tr
><tr id="gr_svn99_3159"

><td id="3159"><a href="#3159">3159</a></td></tr
><tr id="gr_svn99_3160"

><td id="3160"><a href="#3160">3160</a></td></tr
><tr id="gr_svn99_3161"

><td id="3161"><a href="#3161">3161</a></td></tr
><tr id="gr_svn99_3162"

><td id="3162"><a href="#3162">3162</a></td></tr
><tr id="gr_svn99_3163"

><td id="3163"><a href="#3163">3163</a></td></tr
><tr id="gr_svn99_3164"

><td id="3164"><a href="#3164">3164</a></td></tr
><tr id="gr_svn99_3165"

><td id="3165"><a href="#3165">3165</a></td></tr
><tr id="gr_svn99_3166"

><td id="3166"><a href="#3166">3166</a></td></tr
><tr id="gr_svn99_3167"

><td id="3167"><a href="#3167">3167</a></td></tr
><tr id="gr_svn99_3168"

><td id="3168"><a href="#3168">3168</a></td></tr
><tr id="gr_svn99_3169"

><td id="3169"><a href="#3169">3169</a></td></tr
><tr id="gr_svn99_3170"

><td id="3170"><a href="#3170">3170</a></td></tr
><tr id="gr_svn99_3171"

><td id="3171"><a href="#3171">3171</a></td></tr
><tr id="gr_svn99_3172"

><td id="3172"><a href="#3172">3172</a></td></tr
><tr id="gr_svn99_3173"

><td id="3173"><a href="#3173">3173</a></td></tr
><tr id="gr_svn99_3174"

><td id="3174"><a href="#3174">3174</a></td></tr
><tr id="gr_svn99_3175"

><td id="3175"><a href="#3175">3175</a></td></tr
><tr id="gr_svn99_3176"

><td id="3176"><a href="#3176">3176</a></td></tr
><tr id="gr_svn99_3177"

><td id="3177"><a href="#3177">3177</a></td></tr
><tr id="gr_svn99_3178"

><td id="3178"><a href="#3178">3178</a></td></tr
><tr id="gr_svn99_3179"

><td id="3179"><a href="#3179">3179</a></td></tr
><tr id="gr_svn99_3180"

><td id="3180"><a href="#3180">3180</a></td></tr
><tr id="gr_svn99_3181"

><td id="3181"><a href="#3181">3181</a></td></tr
><tr id="gr_svn99_3182"

><td id="3182"><a href="#3182">3182</a></td></tr
><tr id="gr_svn99_3183"

><td id="3183"><a href="#3183">3183</a></td></tr
><tr id="gr_svn99_3184"

><td id="3184"><a href="#3184">3184</a></td></tr
><tr id="gr_svn99_3185"

><td id="3185"><a href="#3185">3185</a></td></tr
><tr id="gr_svn99_3186"

><td id="3186"><a href="#3186">3186</a></td></tr
><tr id="gr_svn99_3187"

><td id="3187"><a href="#3187">3187</a></td></tr
><tr id="gr_svn99_3188"

><td id="3188"><a href="#3188">3188</a></td></tr
><tr id="gr_svn99_3189"

><td id="3189"><a href="#3189">3189</a></td></tr
><tr id="gr_svn99_3190"

><td id="3190"><a href="#3190">3190</a></td></tr
><tr id="gr_svn99_3191"

><td id="3191"><a href="#3191">3191</a></td></tr
><tr id="gr_svn99_3192"

><td id="3192"><a href="#3192">3192</a></td></tr
><tr id="gr_svn99_3193"

><td id="3193"><a href="#3193">3193</a></td></tr
><tr id="gr_svn99_3194"

><td id="3194"><a href="#3194">3194</a></td></tr
><tr id="gr_svn99_3195"

><td id="3195"><a href="#3195">3195</a></td></tr
><tr id="gr_svn99_3196"

><td id="3196"><a href="#3196">3196</a></td></tr
><tr id="gr_svn99_3197"

><td id="3197"><a href="#3197">3197</a></td></tr
><tr id="gr_svn99_3198"

><td id="3198"><a href="#3198">3198</a></td></tr
><tr id="gr_svn99_3199"

><td id="3199"><a href="#3199">3199</a></td></tr
><tr id="gr_svn99_3200"

><td id="3200"><a href="#3200">3200</a></td></tr
><tr id="gr_svn99_3201"

><td id="3201"><a href="#3201">3201</a></td></tr
><tr id="gr_svn99_3202"

><td id="3202"><a href="#3202">3202</a></td></tr
><tr id="gr_svn99_3203"

><td id="3203"><a href="#3203">3203</a></td></tr
><tr id="gr_svn99_3204"

><td id="3204"><a href="#3204">3204</a></td></tr
><tr id="gr_svn99_3205"

><td id="3205"><a href="#3205">3205</a></td></tr
><tr id="gr_svn99_3206"

><td id="3206"><a href="#3206">3206</a></td></tr
><tr id="gr_svn99_3207"

><td id="3207"><a href="#3207">3207</a></td></tr
><tr id="gr_svn99_3208"

><td id="3208"><a href="#3208">3208</a></td></tr
><tr id="gr_svn99_3209"

><td id="3209"><a href="#3209">3209</a></td></tr
><tr id="gr_svn99_3210"

><td id="3210"><a href="#3210">3210</a></td></tr
><tr id="gr_svn99_3211"

><td id="3211"><a href="#3211">3211</a></td></tr
><tr id="gr_svn99_3212"

><td id="3212"><a href="#3212">3212</a></td></tr
><tr id="gr_svn99_3213"

><td id="3213"><a href="#3213">3213</a></td></tr
><tr id="gr_svn99_3214"

><td id="3214"><a href="#3214">3214</a></td></tr
><tr id="gr_svn99_3215"

><td id="3215"><a href="#3215">3215</a></td></tr
><tr id="gr_svn99_3216"

><td id="3216"><a href="#3216">3216</a></td></tr
><tr id="gr_svn99_3217"

><td id="3217"><a href="#3217">3217</a></td></tr
><tr id="gr_svn99_3218"

><td id="3218"><a href="#3218">3218</a></td></tr
><tr id="gr_svn99_3219"

><td id="3219"><a href="#3219">3219</a></td></tr
><tr id="gr_svn99_3220"

><td id="3220"><a href="#3220">3220</a></td></tr
><tr id="gr_svn99_3221"

><td id="3221"><a href="#3221">3221</a></td></tr
><tr id="gr_svn99_3222"

><td id="3222"><a href="#3222">3222</a></td></tr
><tr id="gr_svn99_3223"

><td id="3223"><a href="#3223">3223</a></td></tr
><tr id="gr_svn99_3224"

><td id="3224"><a href="#3224">3224</a></td></tr
><tr id="gr_svn99_3225"

><td id="3225"><a href="#3225">3225</a></td></tr
><tr id="gr_svn99_3226"

><td id="3226"><a href="#3226">3226</a></td></tr
><tr id="gr_svn99_3227"

><td id="3227"><a href="#3227">3227</a></td></tr
><tr id="gr_svn99_3228"

><td id="3228"><a href="#3228">3228</a></td></tr
><tr id="gr_svn99_3229"

><td id="3229"><a href="#3229">3229</a></td></tr
><tr id="gr_svn99_3230"

><td id="3230"><a href="#3230">3230</a></td></tr
><tr id="gr_svn99_3231"

><td id="3231"><a href="#3231">3231</a></td></tr
><tr id="gr_svn99_3232"

><td id="3232"><a href="#3232">3232</a></td></tr
><tr id="gr_svn99_3233"

><td id="3233"><a href="#3233">3233</a></td></tr
><tr id="gr_svn99_3234"

><td id="3234"><a href="#3234">3234</a></td></tr
><tr id="gr_svn99_3235"

><td id="3235"><a href="#3235">3235</a></td></tr
><tr id="gr_svn99_3236"

><td id="3236"><a href="#3236">3236</a></td></tr
><tr id="gr_svn99_3237"

><td id="3237"><a href="#3237">3237</a></td></tr
><tr id="gr_svn99_3238"

><td id="3238"><a href="#3238">3238</a></td></tr
><tr id="gr_svn99_3239"

><td id="3239"><a href="#3239">3239</a></td></tr
><tr id="gr_svn99_3240"

><td id="3240"><a href="#3240">3240</a></td></tr
><tr id="gr_svn99_3241"

><td id="3241"><a href="#3241">3241</a></td></tr
><tr id="gr_svn99_3242"

><td id="3242"><a href="#3242">3242</a></td></tr
><tr id="gr_svn99_3243"

><td id="3243"><a href="#3243">3243</a></td></tr
><tr id="gr_svn99_3244"

><td id="3244"><a href="#3244">3244</a></td></tr
><tr id="gr_svn99_3245"

><td id="3245"><a href="#3245">3245</a></td></tr
><tr id="gr_svn99_3246"

><td id="3246"><a href="#3246">3246</a></td></tr
><tr id="gr_svn99_3247"

><td id="3247"><a href="#3247">3247</a></td></tr
><tr id="gr_svn99_3248"

><td id="3248"><a href="#3248">3248</a></td></tr
><tr id="gr_svn99_3249"

><td id="3249"><a href="#3249">3249</a></td></tr
><tr id="gr_svn99_3250"

><td id="3250"><a href="#3250">3250</a></td></tr
><tr id="gr_svn99_3251"

><td id="3251"><a href="#3251">3251</a></td></tr
><tr id="gr_svn99_3252"

><td id="3252"><a href="#3252">3252</a></td></tr
><tr id="gr_svn99_3253"

><td id="3253"><a href="#3253">3253</a></td></tr
><tr id="gr_svn99_3254"

><td id="3254"><a href="#3254">3254</a></td></tr
><tr id="gr_svn99_3255"

><td id="3255"><a href="#3255">3255</a></td></tr
><tr id="gr_svn99_3256"

><td id="3256"><a href="#3256">3256</a></td></tr
><tr id="gr_svn99_3257"

><td id="3257"><a href="#3257">3257</a></td></tr
><tr id="gr_svn99_3258"

><td id="3258"><a href="#3258">3258</a></td></tr
><tr id="gr_svn99_3259"

><td id="3259"><a href="#3259">3259</a></td></tr
><tr id="gr_svn99_3260"

><td id="3260"><a href="#3260">3260</a></td></tr
><tr id="gr_svn99_3261"

><td id="3261"><a href="#3261">3261</a></td></tr
><tr id="gr_svn99_3262"

><td id="3262"><a href="#3262">3262</a></td></tr
><tr id="gr_svn99_3263"

><td id="3263"><a href="#3263">3263</a></td></tr
><tr id="gr_svn99_3264"

><td id="3264"><a href="#3264">3264</a></td></tr
><tr id="gr_svn99_3265"

><td id="3265"><a href="#3265">3265</a></td></tr
><tr id="gr_svn99_3266"

><td id="3266"><a href="#3266">3266</a></td></tr
><tr id="gr_svn99_3267"

><td id="3267"><a href="#3267">3267</a></td></tr
><tr id="gr_svn99_3268"

><td id="3268"><a href="#3268">3268</a></td></tr
><tr id="gr_svn99_3269"

><td id="3269"><a href="#3269">3269</a></td></tr
><tr id="gr_svn99_3270"

><td id="3270"><a href="#3270">3270</a></td></tr
><tr id="gr_svn99_3271"

><td id="3271"><a href="#3271">3271</a></td></tr
><tr id="gr_svn99_3272"

><td id="3272"><a href="#3272">3272</a></td></tr
><tr id="gr_svn99_3273"

><td id="3273"><a href="#3273">3273</a></td></tr
><tr id="gr_svn99_3274"

><td id="3274"><a href="#3274">3274</a></td></tr
><tr id="gr_svn99_3275"

><td id="3275"><a href="#3275">3275</a></td></tr
><tr id="gr_svn99_3276"

><td id="3276"><a href="#3276">3276</a></td></tr
><tr id="gr_svn99_3277"

><td id="3277"><a href="#3277">3277</a></td></tr
><tr id="gr_svn99_3278"

><td id="3278"><a href="#3278">3278</a></td></tr
><tr id="gr_svn99_3279"

><td id="3279"><a href="#3279">3279</a></td></tr
><tr id="gr_svn99_3280"

><td id="3280"><a href="#3280">3280</a></td></tr
><tr id="gr_svn99_3281"

><td id="3281"><a href="#3281">3281</a></td></tr
><tr id="gr_svn99_3282"

><td id="3282"><a href="#3282">3282</a></td></tr
><tr id="gr_svn99_3283"

><td id="3283"><a href="#3283">3283</a></td></tr
><tr id="gr_svn99_3284"

><td id="3284"><a href="#3284">3284</a></td></tr
><tr id="gr_svn99_3285"

><td id="3285"><a href="#3285">3285</a></td></tr
><tr id="gr_svn99_3286"

><td id="3286"><a href="#3286">3286</a></td></tr
><tr id="gr_svn99_3287"

><td id="3287"><a href="#3287">3287</a></td></tr
><tr id="gr_svn99_3288"

><td id="3288"><a href="#3288">3288</a></td></tr
><tr id="gr_svn99_3289"

><td id="3289"><a href="#3289">3289</a></td></tr
><tr id="gr_svn99_3290"

><td id="3290"><a href="#3290">3290</a></td></tr
><tr id="gr_svn99_3291"

><td id="3291"><a href="#3291">3291</a></td></tr
><tr id="gr_svn99_3292"

><td id="3292"><a href="#3292">3292</a></td></tr
><tr id="gr_svn99_3293"

><td id="3293"><a href="#3293">3293</a></td></tr
><tr id="gr_svn99_3294"

><td id="3294"><a href="#3294">3294</a></td></tr
><tr id="gr_svn99_3295"

><td id="3295"><a href="#3295">3295</a></td></tr
><tr id="gr_svn99_3296"

><td id="3296"><a href="#3296">3296</a></td></tr
><tr id="gr_svn99_3297"

><td id="3297"><a href="#3297">3297</a></td></tr
><tr id="gr_svn99_3298"

><td id="3298"><a href="#3298">3298</a></td></tr
><tr id="gr_svn99_3299"

><td id="3299"><a href="#3299">3299</a></td></tr
><tr id="gr_svn99_3300"

><td id="3300"><a href="#3300">3300</a></td></tr
><tr id="gr_svn99_3301"

><td id="3301"><a href="#3301">3301</a></td></tr
><tr id="gr_svn99_3302"

><td id="3302"><a href="#3302">3302</a></td></tr
><tr id="gr_svn99_3303"

><td id="3303"><a href="#3303">3303</a></td></tr
><tr id="gr_svn99_3304"

><td id="3304"><a href="#3304">3304</a></td></tr
><tr id="gr_svn99_3305"

><td id="3305"><a href="#3305">3305</a></td></tr
><tr id="gr_svn99_3306"

><td id="3306"><a href="#3306">3306</a></td></tr
><tr id="gr_svn99_3307"

><td id="3307"><a href="#3307">3307</a></td></tr
><tr id="gr_svn99_3308"

><td id="3308"><a href="#3308">3308</a></td></tr
><tr id="gr_svn99_3309"

><td id="3309"><a href="#3309">3309</a></td></tr
><tr id="gr_svn99_3310"

><td id="3310"><a href="#3310">3310</a></td></tr
><tr id="gr_svn99_3311"

><td id="3311"><a href="#3311">3311</a></td></tr
><tr id="gr_svn99_3312"

><td id="3312"><a href="#3312">3312</a></td></tr
><tr id="gr_svn99_3313"

><td id="3313"><a href="#3313">3313</a></td></tr
><tr id="gr_svn99_3314"

><td id="3314"><a href="#3314">3314</a></td></tr
><tr id="gr_svn99_3315"

><td id="3315"><a href="#3315">3315</a></td></tr
><tr id="gr_svn99_3316"

><td id="3316"><a href="#3316">3316</a></td></tr
><tr id="gr_svn99_3317"

><td id="3317"><a href="#3317">3317</a></td></tr
><tr id="gr_svn99_3318"

><td id="3318"><a href="#3318">3318</a></td></tr
><tr id="gr_svn99_3319"

><td id="3319"><a href="#3319">3319</a></td></tr
><tr id="gr_svn99_3320"

><td id="3320"><a href="#3320">3320</a></td></tr
><tr id="gr_svn99_3321"

><td id="3321"><a href="#3321">3321</a></td></tr
><tr id="gr_svn99_3322"

><td id="3322"><a href="#3322">3322</a></td></tr
><tr id="gr_svn99_3323"

><td id="3323"><a href="#3323">3323</a></td></tr
><tr id="gr_svn99_3324"

><td id="3324"><a href="#3324">3324</a></td></tr
><tr id="gr_svn99_3325"

><td id="3325"><a href="#3325">3325</a></td></tr
><tr id="gr_svn99_3326"

><td id="3326"><a href="#3326">3326</a></td></tr
><tr id="gr_svn99_3327"

><td id="3327"><a href="#3327">3327</a></td></tr
><tr id="gr_svn99_3328"

><td id="3328"><a href="#3328">3328</a></td></tr
><tr id="gr_svn99_3329"

><td id="3329"><a href="#3329">3329</a></td></tr
><tr id="gr_svn99_3330"

><td id="3330"><a href="#3330">3330</a></td></tr
><tr id="gr_svn99_3331"

><td id="3331"><a href="#3331">3331</a></td></tr
><tr id="gr_svn99_3332"

><td id="3332"><a href="#3332">3332</a></td></tr
><tr id="gr_svn99_3333"

><td id="3333"><a href="#3333">3333</a></td></tr
><tr id="gr_svn99_3334"

><td id="3334"><a href="#3334">3334</a></td></tr
><tr id="gr_svn99_3335"

><td id="3335"><a href="#3335">3335</a></td></tr
><tr id="gr_svn99_3336"

><td id="3336"><a href="#3336">3336</a></td></tr
><tr id="gr_svn99_3337"

><td id="3337"><a href="#3337">3337</a></td></tr
><tr id="gr_svn99_3338"

><td id="3338"><a href="#3338">3338</a></td></tr
><tr id="gr_svn99_3339"

><td id="3339"><a href="#3339">3339</a></td></tr
><tr id="gr_svn99_3340"

><td id="3340"><a href="#3340">3340</a></td></tr
><tr id="gr_svn99_3341"

><td id="3341"><a href="#3341">3341</a></td></tr
><tr id="gr_svn99_3342"

><td id="3342"><a href="#3342">3342</a></td></tr
><tr id="gr_svn99_3343"

><td id="3343"><a href="#3343">3343</a></td></tr
><tr id="gr_svn99_3344"

><td id="3344"><a href="#3344">3344</a></td></tr
><tr id="gr_svn99_3345"

><td id="3345"><a href="#3345">3345</a></td></tr
><tr id="gr_svn99_3346"

><td id="3346"><a href="#3346">3346</a></td></tr
><tr id="gr_svn99_3347"

><td id="3347"><a href="#3347">3347</a></td></tr
><tr id="gr_svn99_3348"

><td id="3348"><a href="#3348">3348</a></td></tr
><tr id="gr_svn99_3349"

><td id="3349"><a href="#3349">3349</a></td></tr
><tr id="gr_svn99_3350"

><td id="3350"><a href="#3350">3350</a></td></tr
><tr id="gr_svn99_3351"

><td id="3351"><a href="#3351">3351</a></td></tr
><tr id="gr_svn99_3352"

><td id="3352"><a href="#3352">3352</a></td></tr
><tr id="gr_svn99_3353"

><td id="3353"><a href="#3353">3353</a></td></tr
><tr id="gr_svn99_3354"

><td id="3354"><a href="#3354">3354</a></td></tr
><tr id="gr_svn99_3355"

><td id="3355"><a href="#3355">3355</a></td></tr
><tr id="gr_svn99_3356"

><td id="3356"><a href="#3356">3356</a></td></tr
><tr id="gr_svn99_3357"

><td id="3357"><a href="#3357">3357</a></td></tr
><tr id="gr_svn99_3358"

><td id="3358"><a href="#3358">3358</a></td></tr
><tr id="gr_svn99_3359"

><td id="3359"><a href="#3359">3359</a></td></tr
><tr id="gr_svn99_3360"

><td id="3360"><a href="#3360">3360</a></td></tr
><tr id="gr_svn99_3361"

><td id="3361"><a href="#3361">3361</a></td></tr
><tr id="gr_svn99_3362"

><td id="3362"><a href="#3362">3362</a></td></tr
><tr id="gr_svn99_3363"

><td id="3363"><a href="#3363">3363</a></td></tr
><tr id="gr_svn99_3364"

><td id="3364"><a href="#3364">3364</a></td></tr
><tr id="gr_svn99_3365"

><td id="3365"><a href="#3365">3365</a></td></tr
><tr id="gr_svn99_3366"

><td id="3366"><a href="#3366">3366</a></td></tr
><tr id="gr_svn99_3367"

><td id="3367"><a href="#3367">3367</a></td></tr
><tr id="gr_svn99_3368"

><td id="3368"><a href="#3368">3368</a></td></tr
><tr id="gr_svn99_3369"

><td id="3369"><a href="#3369">3369</a></td></tr
><tr id="gr_svn99_3370"

><td id="3370"><a href="#3370">3370</a></td></tr
><tr id="gr_svn99_3371"

><td id="3371"><a href="#3371">3371</a></td></tr
><tr id="gr_svn99_3372"

><td id="3372"><a href="#3372">3372</a></td></tr
><tr id="gr_svn99_3373"

><td id="3373"><a href="#3373">3373</a></td></tr
><tr id="gr_svn99_3374"

><td id="3374"><a href="#3374">3374</a></td></tr
><tr id="gr_svn99_3375"

><td id="3375"><a href="#3375">3375</a></td></tr
><tr id="gr_svn99_3376"

><td id="3376"><a href="#3376">3376</a></td></tr
><tr id="gr_svn99_3377"

><td id="3377"><a href="#3377">3377</a></td></tr
><tr id="gr_svn99_3378"

><td id="3378"><a href="#3378">3378</a></td></tr
><tr id="gr_svn99_3379"

><td id="3379"><a href="#3379">3379</a></td></tr
><tr id="gr_svn99_3380"

><td id="3380"><a href="#3380">3380</a></td></tr
><tr id="gr_svn99_3381"

><td id="3381"><a href="#3381">3381</a></td></tr
><tr id="gr_svn99_3382"

><td id="3382"><a href="#3382">3382</a></td></tr
><tr id="gr_svn99_3383"

><td id="3383"><a href="#3383">3383</a></td></tr
><tr id="gr_svn99_3384"

><td id="3384"><a href="#3384">3384</a></td></tr
><tr id="gr_svn99_3385"

><td id="3385"><a href="#3385">3385</a></td></tr
><tr id="gr_svn99_3386"

><td id="3386"><a href="#3386">3386</a></td></tr
><tr id="gr_svn99_3387"

><td id="3387"><a href="#3387">3387</a></td></tr
><tr id="gr_svn99_3388"

><td id="3388"><a href="#3388">3388</a></td></tr
><tr id="gr_svn99_3389"

><td id="3389"><a href="#3389">3389</a></td></tr
><tr id="gr_svn99_3390"

><td id="3390"><a href="#3390">3390</a></td></tr
><tr id="gr_svn99_3391"

><td id="3391"><a href="#3391">3391</a></td></tr
><tr id="gr_svn99_3392"

><td id="3392"><a href="#3392">3392</a></td></tr
><tr id="gr_svn99_3393"

><td id="3393"><a href="#3393">3393</a></td></tr
><tr id="gr_svn99_3394"

><td id="3394"><a href="#3394">3394</a></td></tr
><tr id="gr_svn99_3395"

><td id="3395"><a href="#3395">3395</a></td></tr
><tr id="gr_svn99_3396"

><td id="3396"><a href="#3396">3396</a></td></tr
><tr id="gr_svn99_3397"

><td id="3397"><a href="#3397">3397</a></td></tr
><tr id="gr_svn99_3398"

><td id="3398"><a href="#3398">3398</a></td></tr
><tr id="gr_svn99_3399"

><td id="3399"><a href="#3399">3399</a></td></tr
><tr id="gr_svn99_3400"

><td id="3400"><a href="#3400">3400</a></td></tr
><tr id="gr_svn99_3401"

><td id="3401"><a href="#3401">3401</a></td></tr
><tr id="gr_svn99_3402"

><td id="3402"><a href="#3402">3402</a></td></tr
><tr id="gr_svn99_3403"

><td id="3403"><a href="#3403">3403</a></td></tr
><tr id="gr_svn99_3404"

><td id="3404"><a href="#3404">3404</a></td></tr
><tr id="gr_svn99_3405"

><td id="3405"><a href="#3405">3405</a></td></tr
><tr id="gr_svn99_3406"

><td id="3406"><a href="#3406">3406</a></td></tr
><tr id="gr_svn99_3407"

><td id="3407"><a href="#3407">3407</a></td></tr
><tr id="gr_svn99_3408"

><td id="3408"><a href="#3408">3408</a></td></tr
><tr id="gr_svn99_3409"

><td id="3409"><a href="#3409">3409</a></td></tr
><tr id="gr_svn99_3410"

><td id="3410"><a href="#3410">3410</a></td></tr
><tr id="gr_svn99_3411"

><td id="3411"><a href="#3411">3411</a></td></tr
><tr id="gr_svn99_3412"

><td id="3412"><a href="#3412">3412</a></td></tr
><tr id="gr_svn99_3413"

><td id="3413"><a href="#3413">3413</a></td></tr
><tr id="gr_svn99_3414"

><td id="3414"><a href="#3414">3414</a></td></tr
><tr id="gr_svn99_3415"

><td id="3415"><a href="#3415">3415</a></td></tr
><tr id="gr_svn99_3416"

><td id="3416"><a href="#3416">3416</a></td></tr
><tr id="gr_svn99_3417"

><td id="3417"><a href="#3417">3417</a></td></tr
><tr id="gr_svn99_3418"

><td id="3418"><a href="#3418">3418</a></td></tr
><tr id="gr_svn99_3419"

><td id="3419"><a href="#3419">3419</a></td></tr
><tr id="gr_svn99_3420"

><td id="3420"><a href="#3420">3420</a></td></tr
><tr id="gr_svn99_3421"

><td id="3421"><a href="#3421">3421</a></td></tr
><tr id="gr_svn99_3422"

><td id="3422"><a href="#3422">3422</a></td></tr
><tr id="gr_svn99_3423"

><td id="3423"><a href="#3423">3423</a></td></tr
><tr id="gr_svn99_3424"

><td id="3424"><a href="#3424">3424</a></td></tr
><tr id="gr_svn99_3425"

><td id="3425"><a href="#3425">3425</a></td></tr
><tr id="gr_svn99_3426"

><td id="3426"><a href="#3426">3426</a></td></tr
><tr id="gr_svn99_3427"

><td id="3427"><a href="#3427">3427</a></td></tr
><tr id="gr_svn99_3428"

><td id="3428"><a href="#3428">3428</a></td></tr
><tr id="gr_svn99_3429"

><td id="3429"><a href="#3429">3429</a></td></tr
><tr id="gr_svn99_3430"

><td id="3430"><a href="#3430">3430</a></td></tr
><tr id="gr_svn99_3431"

><td id="3431"><a href="#3431">3431</a></td></tr
><tr id="gr_svn99_3432"

><td id="3432"><a href="#3432">3432</a></td></tr
><tr id="gr_svn99_3433"

><td id="3433"><a href="#3433">3433</a></td></tr
><tr id="gr_svn99_3434"

><td id="3434"><a href="#3434">3434</a></td></tr
><tr id="gr_svn99_3435"

><td id="3435"><a href="#3435">3435</a></td></tr
><tr id="gr_svn99_3436"

><td id="3436"><a href="#3436">3436</a></td></tr
><tr id="gr_svn99_3437"

><td id="3437"><a href="#3437">3437</a></td></tr
><tr id="gr_svn99_3438"

><td id="3438"><a href="#3438">3438</a></td></tr
><tr id="gr_svn99_3439"

><td id="3439"><a href="#3439">3439</a></td></tr
><tr id="gr_svn99_3440"

><td id="3440"><a href="#3440">3440</a></td></tr
><tr id="gr_svn99_3441"

><td id="3441"><a href="#3441">3441</a></td></tr
><tr id="gr_svn99_3442"

><td id="3442"><a href="#3442">3442</a></td></tr
><tr id="gr_svn99_3443"

><td id="3443"><a href="#3443">3443</a></td></tr
><tr id="gr_svn99_3444"

><td id="3444"><a href="#3444">3444</a></td></tr
><tr id="gr_svn99_3445"

><td id="3445"><a href="#3445">3445</a></td></tr
><tr id="gr_svn99_3446"

><td id="3446"><a href="#3446">3446</a></td></tr
><tr id="gr_svn99_3447"

><td id="3447"><a href="#3447">3447</a></td></tr
><tr id="gr_svn99_3448"

><td id="3448"><a href="#3448">3448</a></td></tr
><tr id="gr_svn99_3449"

><td id="3449"><a href="#3449">3449</a></td></tr
><tr id="gr_svn99_3450"

><td id="3450"><a href="#3450">3450</a></td></tr
><tr id="gr_svn99_3451"

><td id="3451"><a href="#3451">3451</a></td></tr
><tr id="gr_svn99_3452"

><td id="3452"><a href="#3452">3452</a></td></tr
><tr id="gr_svn99_3453"

><td id="3453"><a href="#3453">3453</a></td></tr
><tr id="gr_svn99_3454"

><td id="3454"><a href="#3454">3454</a></td></tr
><tr id="gr_svn99_3455"

><td id="3455"><a href="#3455">3455</a></td></tr
><tr id="gr_svn99_3456"

><td id="3456"><a href="#3456">3456</a></td></tr
><tr id="gr_svn99_3457"

><td id="3457"><a href="#3457">3457</a></td></tr
><tr id="gr_svn99_3458"

><td id="3458"><a href="#3458">3458</a></td></tr
><tr id="gr_svn99_3459"

><td id="3459"><a href="#3459">3459</a></td></tr
><tr id="gr_svn99_3460"

><td id="3460"><a href="#3460">3460</a></td></tr
><tr id="gr_svn99_3461"

><td id="3461"><a href="#3461">3461</a></td></tr
><tr id="gr_svn99_3462"

><td id="3462"><a href="#3462">3462</a></td></tr
><tr id="gr_svn99_3463"

><td id="3463"><a href="#3463">3463</a></td></tr
><tr id="gr_svn99_3464"

><td id="3464"><a href="#3464">3464</a></td></tr
><tr id="gr_svn99_3465"

><td id="3465"><a href="#3465">3465</a></td></tr
><tr id="gr_svn99_3466"

><td id="3466"><a href="#3466">3466</a></td></tr
><tr id="gr_svn99_3467"

><td id="3467"><a href="#3467">3467</a></td></tr
><tr id="gr_svn99_3468"

><td id="3468"><a href="#3468">3468</a></td></tr
><tr id="gr_svn99_3469"

><td id="3469"><a href="#3469">3469</a></td></tr
><tr id="gr_svn99_3470"

><td id="3470"><a href="#3470">3470</a></td></tr
><tr id="gr_svn99_3471"

><td id="3471"><a href="#3471">3471</a></td></tr
><tr id="gr_svn99_3472"

><td id="3472"><a href="#3472">3472</a></td></tr
><tr id="gr_svn99_3473"

><td id="3473"><a href="#3473">3473</a></td></tr
><tr id="gr_svn99_3474"

><td id="3474"><a href="#3474">3474</a></td></tr
><tr id="gr_svn99_3475"

><td id="3475"><a href="#3475">3475</a></td></tr
><tr id="gr_svn99_3476"

><td id="3476"><a href="#3476">3476</a></td></tr
><tr id="gr_svn99_3477"

><td id="3477"><a href="#3477">3477</a></td></tr
><tr id="gr_svn99_3478"

><td id="3478"><a href="#3478">3478</a></td></tr
><tr id="gr_svn99_3479"

><td id="3479"><a href="#3479">3479</a></td></tr
><tr id="gr_svn99_3480"

><td id="3480"><a href="#3480">3480</a></td></tr
><tr id="gr_svn99_3481"

><td id="3481"><a href="#3481">3481</a></td></tr
><tr id="gr_svn99_3482"

><td id="3482"><a href="#3482">3482</a></td></tr
><tr id="gr_svn99_3483"

><td id="3483"><a href="#3483">3483</a></td></tr
><tr id="gr_svn99_3484"

><td id="3484"><a href="#3484">3484</a></td></tr
><tr id="gr_svn99_3485"

><td id="3485"><a href="#3485">3485</a></td></tr
><tr id="gr_svn99_3486"

><td id="3486"><a href="#3486">3486</a></td></tr
><tr id="gr_svn99_3487"

><td id="3487"><a href="#3487">3487</a></td></tr
><tr id="gr_svn99_3488"

><td id="3488"><a href="#3488">3488</a></td></tr
><tr id="gr_svn99_3489"

><td id="3489"><a href="#3489">3489</a></td></tr
><tr id="gr_svn99_3490"

><td id="3490"><a href="#3490">3490</a></td></tr
><tr id="gr_svn99_3491"

><td id="3491"><a href="#3491">3491</a></td></tr
><tr id="gr_svn99_3492"

><td id="3492"><a href="#3492">3492</a></td></tr
><tr id="gr_svn99_3493"

><td id="3493"><a href="#3493">3493</a></td></tr
><tr id="gr_svn99_3494"

><td id="3494"><a href="#3494">3494</a></td></tr
><tr id="gr_svn99_3495"

><td id="3495"><a href="#3495">3495</a></td></tr
><tr id="gr_svn99_3496"

><td id="3496"><a href="#3496">3496</a></td></tr
><tr id="gr_svn99_3497"

><td id="3497"><a href="#3497">3497</a></td></tr
><tr id="gr_svn99_3498"

><td id="3498"><a href="#3498">3498</a></td></tr
><tr id="gr_svn99_3499"

><td id="3499"><a href="#3499">3499</a></td></tr
><tr id="gr_svn99_3500"

><td id="3500"><a href="#3500">3500</a></td></tr
><tr id="gr_svn99_3501"

><td id="3501"><a href="#3501">3501</a></td></tr
><tr id="gr_svn99_3502"

><td id="3502"><a href="#3502">3502</a></td></tr
><tr id="gr_svn99_3503"

><td id="3503"><a href="#3503">3503</a></td></tr
><tr id="gr_svn99_3504"

><td id="3504"><a href="#3504">3504</a></td></tr
><tr id="gr_svn99_3505"

><td id="3505"><a href="#3505">3505</a></td></tr
><tr id="gr_svn99_3506"

><td id="3506"><a href="#3506">3506</a></td></tr
><tr id="gr_svn99_3507"

><td id="3507"><a href="#3507">3507</a></td></tr
><tr id="gr_svn99_3508"

><td id="3508"><a href="#3508">3508</a></td></tr
><tr id="gr_svn99_3509"

><td id="3509"><a href="#3509">3509</a></td></tr
><tr id="gr_svn99_3510"

><td id="3510"><a href="#3510">3510</a></td></tr
><tr id="gr_svn99_3511"

><td id="3511"><a href="#3511">3511</a></td></tr
><tr id="gr_svn99_3512"

><td id="3512"><a href="#3512">3512</a></td></tr
><tr id="gr_svn99_3513"

><td id="3513"><a href="#3513">3513</a></td></tr
><tr id="gr_svn99_3514"

><td id="3514"><a href="#3514">3514</a></td></tr
><tr id="gr_svn99_3515"

><td id="3515"><a href="#3515">3515</a></td></tr
><tr id="gr_svn99_3516"

><td id="3516"><a href="#3516">3516</a></td></tr
><tr id="gr_svn99_3517"

><td id="3517"><a href="#3517">3517</a></td></tr
><tr id="gr_svn99_3518"

><td id="3518"><a href="#3518">3518</a></td></tr
><tr id="gr_svn99_3519"

><td id="3519"><a href="#3519">3519</a></td></tr
><tr id="gr_svn99_3520"

><td id="3520"><a href="#3520">3520</a></td></tr
><tr id="gr_svn99_3521"

><td id="3521"><a href="#3521">3521</a></td></tr
><tr id="gr_svn99_3522"

><td id="3522"><a href="#3522">3522</a></td></tr
><tr id="gr_svn99_3523"

><td id="3523"><a href="#3523">3523</a></td></tr
><tr id="gr_svn99_3524"

><td id="3524"><a href="#3524">3524</a></td></tr
><tr id="gr_svn99_3525"

><td id="3525"><a href="#3525">3525</a></td></tr
><tr id="gr_svn99_3526"

><td id="3526"><a href="#3526">3526</a></td></tr
><tr id="gr_svn99_3527"

><td id="3527"><a href="#3527">3527</a></td></tr
><tr id="gr_svn99_3528"

><td id="3528"><a href="#3528">3528</a></td></tr
><tr id="gr_svn99_3529"

><td id="3529"><a href="#3529">3529</a></td></tr
><tr id="gr_svn99_3530"

><td id="3530"><a href="#3530">3530</a></td></tr
><tr id="gr_svn99_3531"

><td id="3531"><a href="#3531">3531</a></td></tr
><tr id="gr_svn99_3532"

><td id="3532"><a href="#3532">3532</a></td></tr
><tr id="gr_svn99_3533"

><td id="3533"><a href="#3533">3533</a></td></tr
><tr id="gr_svn99_3534"

><td id="3534"><a href="#3534">3534</a></td></tr
><tr id="gr_svn99_3535"

><td id="3535"><a href="#3535">3535</a></td></tr
><tr id="gr_svn99_3536"

><td id="3536"><a href="#3536">3536</a></td></tr
><tr id="gr_svn99_3537"

><td id="3537"><a href="#3537">3537</a></td></tr
><tr id="gr_svn99_3538"

><td id="3538"><a href="#3538">3538</a></td></tr
><tr id="gr_svn99_3539"

><td id="3539"><a href="#3539">3539</a></td></tr
><tr id="gr_svn99_3540"

><td id="3540"><a href="#3540">3540</a></td></tr
><tr id="gr_svn99_3541"

><td id="3541"><a href="#3541">3541</a></td></tr
><tr id="gr_svn99_3542"

><td id="3542"><a href="#3542">3542</a></td></tr
><tr id="gr_svn99_3543"

><td id="3543"><a href="#3543">3543</a></td></tr
><tr id="gr_svn99_3544"

><td id="3544"><a href="#3544">3544</a></td></tr
><tr id="gr_svn99_3545"

><td id="3545"><a href="#3545">3545</a></td></tr
><tr id="gr_svn99_3546"

><td id="3546"><a href="#3546">3546</a></td></tr
><tr id="gr_svn99_3547"

><td id="3547"><a href="#3547">3547</a></td></tr
><tr id="gr_svn99_3548"

><td id="3548"><a href="#3548">3548</a></td></tr
><tr id="gr_svn99_3549"

><td id="3549"><a href="#3549">3549</a></td></tr
><tr id="gr_svn99_3550"

><td id="3550"><a href="#3550">3550</a></td></tr
><tr id="gr_svn99_3551"

><td id="3551"><a href="#3551">3551</a></td></tr
><tr id="gr_svn99_3552"

><td id="3552"><a href="#3552">3552</a></td></tr
><tr id="gr_svn99_3553"

><td id="3553"><a href="#3553">3553</a></td></tr
><tr id="gr_svn99_3554"

><td id="3554"><a href="#3554">3554</a></td></tr
><tr id="gr_svn99_3555"

><td id="3555"><a href="#3555">3555</a></td></tr
><tr id="gr_svn99_3556"

><td id="3556"><a href="#3556">3556</a></td></tr
><tr id="gr_svn99_3557"

><td id="3557"><a href="#3557">3557</a></td></tr
><tr id="gr_svn99_3558"

><td id="3558"><a href="#3558">3558</a></td></tr
><tr id="gr_svn99_3559"

><td id="3559"><a href="#3559">3559</a></td></tr
><tr id="gr_svn99_3560"

><td id="3560"><a href="#3560">3560</a></td></tr
><tr id="gr_svn99_3561"

><td id="3561"><a href="#3561">3561</a></td></tr
><tr id="gr_svn99_3562"

><td id="3562"><a href="#3562">3562</a></td></tr
><tr id="gr_svn99_3563"

><td id="3563"><a href="#3563">3563</a></td></tr
><tr id="gr_svn99_3564"

><td id="3564"><a href="#3564">3564</a></td></tr
><tr id="gr_svn99_3565"

><td id="3565"><a href="#3565">3565</a></td></tr
><tr id="gr_svn99_3566"

><td id="3566"><a href="#3566">3566</a></td></tr
><tr id="gr_svn99_3567"

><td id="3567"><a href="#3567">3567</a></td></tr
><tr id="gr_svn99_3568"

><td id="3568"><a href="#3568">3568</a></td></tr
><tr id="gr_svn99_3569"

><td id="3569"><a href="#3569">3569</a></td></tr
><tr id="gr_svn99_3570"

><td id="3570"><a href="#3570">3570</a></td></tr
><tr id="gr_svn99_3571"

><td id="3571"><a href="#3571">3571</a></td></tr
><tr id="gr_svn99_3572"

><td id="3572"><a href="#3572">3572</a></td></tr
><tr id="gr_svn99_3573"

><td id="3573"><a href="#3573">3573</a></td></tr
><tr id="gr_svn99_3574"

><td id="3574"><a href="#3574">3574</a></td></tr
><tr id="gr_svn99_3575"

><td id="3575"><a href="#3575">3575</a></td></tr
><tr id="gr_svn99_3576"

><td id="3576"><a href="#3576">3576</a></td></tr
><tr id="gr_svn99_3577"

><td id="3577"><a href="#3577">3577</a></td></tr
><tr id="gr_svn99_3578"

><td id="3578"><a href="#3578">3578</a></td></tr
><tr id="gr_svn99_3579"

><td id="3579"><a href="#3579">3579</a></td></tr
><tr id="gr_svn99_3580"

><td id="3580"><a href="#3580">3580</a></td></tr
><tr id="gr_svn99_3581"

><td id="3581"><a href="#3581">3581</a></td></tr
><tr id="gr_svn99_3582"

><td id="3582"><a href="#3582">3582</a></td></tr
><tr id="gr_svn99_3583"

><td id="3583"><a href="#3583">3583</a></td></tr
><tr id="gr_svn99_3584"

><td id="3584"><a href="#3584">3584</a></td></tr
><tr id="gr_svn99_3585"

><td id="3585"><a href="#3585">3585</a></td></tr
><tr id="gr_svn99_3586"

><td id="3586"><a href="#3586">3586</a></td></tr
><tr id="gr_svn99_3587"

><td id="3587"><a href="#3587">3587</a></td></tr
><tr id="gr_svn99_3588"

><td id="3588"><a href="#3588">3588</a></td></tr
><tr id="gr_svn99_3589"

><td id="3589"><a href="#3589">3589</a></td></tr
><tr id="gr_svn99_3590"

><td id="3590"><a href="#3590">3590</a></td></tr
><tr id="gr_svn99_3591"

><td id="3591"><a href="#3591">3591</a></td></tr
><tr id="gr_svn99_3592"

><td id="3592"><a href="#3592">3592</a></td></tr
><tr id="gr_svn99_3593"

><td id="3593"><a href="#3593">3593</a></td></tr
><tr id="gr_svn99_3594"

><td id="3594"><a href="#3594">3594</a></td></tr
><tr id="gr_svn99_3595"

><td id="3595"><a href="#3595">3595</a></td></tr
><tr id="gr_svn99_3596"

><td id="3596"><a href="#3596">3596</a></td></tr
><tr id="gr_svn99_3597"

><td id="3597"><a href="#3597">3597</a></td></tr
><tr id="gr_svn99_3598"

><td id="3598"><a href="#3598">3598</a></td></tr
><tr id="gr_svn99_3599"

><td id="3599"><a href="#3599">3599</a></td></tr
><tr id="gr_svn99_3600"

><td id="3600"><a href="#3600">3600</a></td></tr
><tr id="gr_svn99_3601"

><td id="3601"><a href="#3601">3601</a></td></tr
><tr id="gr_svn99_3602"

><td id="3602"><a href="#3602">3602</a></td></tr
><tr id="gr_svn99_3603"

><td id="3603"><a href="#3603">3603</a></td></tr
><tr id="gr_svn99_3604"

><td id="3604"><a href="#3604">3604</a></td></tr
><tr id="gr_svn99_3605"

><td id="3605"><a href="#3605">3605</a></td></tr
><tr id="gr_svn99_3606"

><td id="3606"><a href="#3606">3606</a></td></tr
><tr id="gr_svn99_3607"

><td id="3607"><a href="#3607">3607</a></td></tr
><tr id="gr_svn99_3608"

><td id="3608"><a href="#3608">3608</a></td></tr
><tr id="gr_svn99_3609"

><td id="3609"><a href="#3609">3609</a></td></tr
><tr id="gr_svn99_3610"

><td id="3610"><a href="#3610">3610</a></td></tr
><tr id="gr_svn99_3611"

><td id="3611"><a href="#3611">3611</a></td></tr
><tr id="gr_svn99_3612"

><td id="3612"><a href="#3612">3612</a></td></tr
><tr id="gr_svn99_3613"

><td id="3613"><a href="#3613">3613</a></td></tr
><tr id="gr_svn99_3614"

><td id="3614"><a href="#3614">3614</a></td></tr
><tr id="gr_svn99_3615"

><td id="3615"><a href="#3615">3615</a></td></tr
><tr id="gr_svn99_3616"

><td id="3616"><a href="#3616">3616</a></td></tr
><tr id="gr_svn99_3617"

><td id="3617"><a href="#3617">3617</a></td></tr
><tr id="gr_svn99_3618"

><td id="3618"><a href="#3618">3618</a></td></tr
><tr id="gr_svn99_3619"

><td id="3619"><a href="#3619">3619</a></td></tr
><tr id="gr_svn99_3620"

><td id="3620"><a href="#3620">3620</a></td></tr
><tr id="gr_svn99_3621"

><td id="3621"><a href="#3621">3621</a></td></tr
><tr id="gr_svn99_3622"

><td id="3622"><a href="#3622">3622</a></td></tr
><tr id="gr_svn99_3623"

><td id="3623"><a href="#3623">3623</a></td></tr
><tr id="gr_svn99_3624"

><td id="3624"><a href="#3624">3624</a></td></tr
><tr id="gr_svn99_3625"

><td id="3625"><a href="#3625">3625</a></td></tr
><tr id="gr_svn99_3626"

><td id="3626"><a href="#3626">3626</a></td></tr
><tr id="gr_svn99_3627"

><td id="3627"><a href="#3627">3627</a></td></tr
><tr id="gr_svn99_3628"

><td id="3628"><a href="#3628">3628</a></td></tr
><tr id="gr_svn99_3629"

><td id="3629"><a href="#3629">3629</a></td></tr
><tr id="gr_svn99_3630"

><td id="3630"><a href="#3630">3630</a></td></tr
><tr id="gr_svn99_3631"

><td id="3631"><a href="#3631">3631</a></td></tr
><tr id="gr_svn99_3632"

><td id="3632"><a href="#3632">3632</a></td></tr
><tr id="gr_svn99_3633"

><td id="3633"><a href="#3633">3633</a></td></tr
><tr id="gr_svn99_3634"

><td id="3634"><a href="#3634">3634</a></td></tr
><tr id="gr_svn99_3635"

><td id="3635"><a href="#3635">3635</a></td></tr
><tr id="gr_svn99_3636"

><td id="3636"><a href="#3636">3636</a></td></tr
><tr id="gr_svn99_3637"

><td id="3637"><a href="#3637">3637</a></td></tr
><tr id="gr_svn99_3638"

><td id="3638"><a href="#3638">3638</a></td></tr
><tr id="gr_svn99_3639"

><td id="3639"><a href="#3639">3639</a></td></tr
><tr id="gr_svn99_3640"

><td id="3640"><a href="#3640">3640</a></td></tr
><tr id="gr_svn99_3641"

><td id="3641"><a href="#3641">3641</a></td></tr
><tr id="gr_svn99_3642"

><td id="3642"><a href="#3642">3642</a></td></tr
><tr id="gr_svn99_3643"

><td id="3643"><a href="#3643">3643</a></td></tr
><tr id="gr_svn99_3644"

><td id="3644"><a href="#3644">3644</a></td></tr
><tr id="gr_svn99_3645"

><td id="3645"><a href="#3645">3645</a></td></tr
><tr id="gr_svn99_3646"

><td id="3646"><a href="#3646">3646</a></td></tr
><tr id="gr_svn99_3647"

><td id="3647"><a href="#3647">3647</a></td></tr
><tr id="gr_svn99_3648"

><td id="3648"><a href="#3648">3648</a></td></tr
><tr id="gr_svn99_3649"

><td id="3649"><a href="#3649">3649</a></td></tr
><tr id="gr_svn99_3650"

><td id="3650"><a href="#3650">3650</a></td></tr
><tr id="gr_svn99_3651"

><td id="3651"><a href="#3651">3651</a></td></tr
><tr id="gr_svn99_3652"

><td id="3652"><a href="#3652">3652</a></td></tr
><tr id="gr_svn99_3653"

><td id="3653"><a href="#3653">3653</a></td></tr
><tr id="gr_svn99_3654"

><td id="3654"><a href="#3654">3654</a></td></tr
><tr id="gr_svn99_3655"

><td id="3655"><a href="#3655">3655</a></td></tr
><tr id="gr_svn99_3656"

><td id="3656"><a href="#3656">3656</a></td></tr
><tr id="gr_svn99_3657"

><td id="3657"><a href="#3657">3657</a></td></tr
><tr id="gr_svn99_3658"

><td id="3658"><a href="#3658">3658</a></td></tr
><tr id="gr_svn99_3659"

><td id="3659"><a href="#3659">3659</a></td></tr
><tr id="gr_svn99_3660"

><td id="3660"><a href="#3660">3660</a></td></tr
><tr id="gr_svn99_3661"

><td id="3661"><a href="#3661">3661</a></td></tr
><tr id="gr_svn99_3662"

><td id="3662"><a href="#3662">3662</a></td></tr
><tr id="gr_svn99_3663"

><td id="3663"><a href="#3663">3663</a></td></tr
><tr id="gr_svn99_3664"

><td id="3664"><a href="#3664">3664</a></td></tr
><tr id="gr_svn99_3665"

><td id="3665"><a href="#3665">3665</a></td></tr
><tr id="gr_svn99_3666"

><td id="3666"><a href="#3666">3666</a></td></tr
><tr id="gr_svn99_3667"

><td id="3667"><a href="#3667">3667</a></td></tr
><tr id="gr_svn99_3668"

><td id="3668"><a href="#3668">3668</a></td></tr
><tr id="gr_svn99_3669"

><td id="3669"><a href="#3669">3669</a></td></tr
><tr id="gr_svn99_3670"

><td id="3670"><a href="#3670">3670</a></td></tr
><tr id="gr_svn99_3671"

><td id="3671"><a href="#3671">3671</a></td></tr
><tr id="gr_svn99_3672"

><td id="3672"><a href="#3672">3672</a></td></tr
><tr id="gr_svn99_3673"

><td id="3673"><a href="#3673">3673</a></td></tr
><tr id="gr_svn99_3674"

><td id="3674"><a href="#3674">3674</a></td></tr
><tr id="gr_svn99_3675"

><td id="3675"><a href="#3675">3675</a></td></tr
><tr id="gr_svn99_3676"

><td id="3676"><a href="#3676">3676</a></td></tr
><tr id="gr_svn99_3677"

><td id="3677"><a href="#3677">3677</a></td></tr
><tr id="gr_svn99_3678"

><td id="3678"><a href="#3678">3678</a></td></tr
><tr id="gr_svn99_3679"

><td id="3679"><a href="#3679">3679</a></td></tr
><tr id="gr_svn99_3680"

><td id="3680"><a href="#3680">3680</a></td></tr
><tr id="gr_svn99_3681"

><td id="3681"><a href="#3681">3681</a></td></tr
><tr id="gr_svn99_3682"

><td id="3682"><a href="#3682">3682</a></td></tr
><tr id="gr_svn99_3683"

><td id="3683"><a href="#3683">3683</a></td></tr
><tr id="gr_svn99_3684"

><td id="3684"><a href="#3684">3684</a></td></tr
><tr id="gr_svn99_3685"

><td id="3685"><a href="#3685">3685</a></td></tr
><tr id="gr_svn99_3686"

><td id="3686"><a href="#3686">3686</a></td></tr
><tr id="gr_svn99_3687"

><td id="3687"><a href="#3687">3687</a></td></tr
><tr id="gr_svn99_3688"

><td id="3688"><a href="#3688">3688</a></td></tr
><tr id="gr_svn99_3689"

><td id="3689"><a href="#3689">3689</a></td></tr
><tr id="gr_svn99_3690"

><td id="3690"><a href="#3690">3690</a></td></tr
><tr id="gr_svn99_3691"

><td id="3691"><a href="#3691">3691</a></td></tr
><tr id="gr_svn99_3692"

><td id="3692"><a href="#3692">3692</a></td></tr
><tr id="gr_svn99_3693"

><td id="3693"><a href="#3693">3693</a></td></tr
><tr id="gr_svn99_3694"

><td id="3694"><a href="#3694">3694</a></td></tr
><tr id="gr_svn99_3695"

><td id="3695"><a href="#3695">3695</a></td></tr
><tr id="gr_svn99_3696"

><td id="3696"><a href="#3696">3696</a></td></tr
><tr id="gr_svn99_3697"

><td id="3697"><a href="#3697">3697</a></td></tr
><tr id="gr_svn99_3698"

><td id="3698"><a href="#3698">3698</a></td></tr
><tr id="gr_svn99_3699"

><td id="3699"><a href="#3699">3699</a></td></tr
><tr id="gr_svn99_3700"

><td id="3700"><a href="#3700">3700</a></td></tr
><tr id="gr_svn99_3701"

><td id="3701"><a href="#3701">3701</a></td></tr
><tr id="gr_svn99_3702"

><td id="3702"><a href="#3702">3702</a></td></tr
><tr id="gr_svn99_3703"

><td id="3703"><a href="#3703">3703</a></td></tr
><tr id="gr_svn99_3704"

><td id="3704"><a href="#3704">3704</a></td></tr
><tr id="gr_svn99_3705"

><td id="3705"><a href="#3705">3705</a></td></tr
><tr id="gr_svn99_3706"

><td id="3706"><a href="#3706">3706</a></td></tr
><tr id="gr_svn99_3707"

><td id="3707"><a href="#3707">3707</a></td></tr
><tr id="gr_svn99_3708"

><td id="3708"><a href="#3708">3708</a></td></tr
><tr id="gr_svn99_3709"

><td id="3709"><a href="#3709">3709</a></td></tr
><tr id="gr_svn99_3710"

><td id="3710"><a href="#3710">3710</a></td></tr
><tr id="gr_svn99_3711"

><td id="3711"><a href="#3711">3711</a></td></tr
><tr id="gr_svn99_3712"

><td id="3712"><a href="#3712">3712</a></td></tr
><tr id="gr_svn99_3713"

><td id="3713"><a href="#3713">3713</a></td></tr
><tr id="gr_svn99_3714"

><td id="3714"><a href="#3714">3714</a></td></tr
><tr id="gr_svn99_3715"

><td id="3715"><a href="#3715">3715</a></td></tr
><tr id="gr_svn99_3716"

><td id="3716"><a href="#3716">3716</a></td></tr
><tr id="gr_svn99_3717"

><td id="3717"><a href="#3717">3717</a></td></tr
><tr id="gr_svn99_3718"

><td id="3718"><a href="#3718">3718</a></td></tr
><tr id="gr_svn99_3719"

><td id="3719"><a href="#3719">3719</a></td></tr
><tr id="gr_svn99_3720"

><td id="3720"><a href="#3720">3720</a></td></tr
><tr id="gr_svn99_3721"

><td id="3721"><a href="#3721">3721</a></td></tr
><tr id="gr_svn99_3722"

><td id="3722"><a href="#3722">3722</a></td></tr
><tr id="gr_svn99_3723"

><td id="3723"><a href="#3723">3723</a></td></tr
><tr id="gr_svn99_3724"

><td id="3724"><a href="#3724">3724</a></td></tr
><tr id="gr_svn99_3725"

><td id="3725"><a href="#3725">3725</a></td></tr
><tr id="gr_svn99_3726"

><td id="3726"><a href="#3726">3726</a></td></tr
><tr id="gr_svn99_3727"

><td id="3727"><a href="#3727">3727</a></td></tr
><tr id="gr_svn99_3728"

><td id="3728"><a href="#3728">3728</a></td></tr
><tr id="gr_svn99_3729"

><td id="3729"><a href="#3729">3729</a></td></tr
><tr id="gr_svn99_3730"

><td id="3730"><a href="#3730">3730</a></td></tr
><tr id="gr_svn99_3731"

><td id="3731"><a href="#3731">3731</a></td></tr
><tr id="gr_svn99_3732"

><td id="3732"><a href="#3732">3732</a></td></tr
><tr id="gr_svn99_3733"

><td id="3733"><a href="#3733">3733</a></td></tr
><tr id="gr_svn99_3734"

><td id="3734"><a href="#3734">3734</a></td></tr
><tr id="gr_svn99_3735"

><td id="3735"><a href="#3735">3735</a></td></tr
><tr id="gr_svn99_3736"

><td id="3736"><a href="#3736">3736</a></td></tr
><tr id="gr_svn99_3737"

><td id="3737"><a href="#3737">3737</a></td></tr
><tr id="gr_svn99_3738"

><td id="3738"><a href="#3738">3738</a></td></tr
><tr id="gr_svn99_3739"

><td id="3739"><a href="#3739">3739</a></td></tr
><tr id="gr_svn99_3740"

><td id="3740"><a href="#3740">3740</a></td></tr
><tr id="gr_svn99_3741"

><td id="3741"><a href="#3741">3741</a></td></tr
><tr id="gr_svn99_3742"

><td id="3742"><a href="#3742">3742</a></td></tr
><tr id="gr_svn99_3743"

><td id="3743"><a href="#3743">3743</a></td></tr
><tr id="gr_svn99_3744"

><td id="3744"><a href="#3744">3744</a></td></tr
><tr id="gr_svn99_3745"

><td id="3745"><a href="#3745">3745</a></td></tr
><tr id="gr_svn99_3746"

><td id="3746"><a href="#3746">3746</a></td></tr
><tr id="gr_svn99_3747"

><td id="3747"><a href="#3747">3747</a></td></tr
><tr id="gr_svn99_3748"

><td id="3748"><a href="#3748">3748</a></td></tr
><tr id="gr_svn99_3749"

><td id="3749"><a href="#3749">3749</a></td></tr
><tr id="gr_svn99_3750"

><td id="3750"><a href="#3750">3750</a></td></tr
><tr id="gr_svn99_3751"

><td id="3751"><a href="#3751">3751</a></td></tr
><tr id="gr_svn99_3752"

><td id="3752"><a href="#3752">3752</a></td></tr
><tr id="gr_svn99_3753"

><td id="3753"><a href="#3753">3753</a></td></tr
><tr id="gr_svn99_3754"

><td id="3754"><a href="#3754">3754</a></td></tr
><tr id="gr_svn99_3755"

><td id="3755"><a href="#3755">3755</a></td></tr
><tr id="gr_svn99_3756"

><td id="3756"><a href="#3756">3756</a></td></tr
><tr id="gr_svn99_3757"

><td id="3757"><a href="#3757">3757</a></td></tr
><tr id="gr_svn99_3758"

><td id="3758"><a href="#3758">3758</a></td></tr
><tr id="gr_svn99_3759"

><td id="3759"><a href="#3759">3759</a></td></tr
><tr id="gr_svn99_3760"

><td id="3760"><a href="#3760">3760</a></td></tr
><tr id="gr_svn99_3761"

><td id="3761"><a href="#3761">3761</a></td></tr
><tr id="gr_svn99_3762"

><td id="3762"><a href="#3762">3762</a></td></tr
><tr id="gr_svn99_3763"

><td id="3763"><a href="#3763">3763</a></td></tr
><tr id="gr_svn99_3764"

><td id="3764"><a href="#3764">3764</a></td></tr
><tr id="gr_svn99_3765"

><td id="3765"><a href="#3765">3765</a></td></tr
><tr id="gr_svn99_3766"

><td id="3766"><a href="#3766">3766</a></td></tr
><tr id="gr_svn99_3767"

><td id="3767"><a href="#3767">3767</a></td></tr
><tr id="gr_svn99_3768"

><td id="3768"><a href="#3768">3768</a></td></tr
><tr id="gr_svn99_3769"

><td id="3769"><a href="#3769">3769</a></td></tr
><tr id="gr_svn99_3770"

><td id="3770"><a href="#3770">3770</a></td></tr
><tr id="gr_svn99_3771"

><td id="3771"><a href="#3771">3771</a></td></tr
><tr id="gr_svn99_3772"

><td id="3772"><a href="#3772">3772</a></td></tr
><tr id="gr_svn99_3773"

><td id="3773"><a href="#3773">3773</a></td></tr
><tr id="gr_svn99_3774"

><td id="3774"><a href="#3774">3774</a></td></tr
><tr id="gr_svn99_3775"

><td id="3775"><a href="#3775">3775</a></td></tr
><tr id="gr_svn99_3776"

><td id="3776"><a href="#3776">3776</a></td></tr
><tr id="gr_svn99_3777"

><td id="3777"><a href="#3777">3777</a></td></tr
><tr id="gr_svn99_3778"

><td id="3778"><a href="#3778">3778</a></td></tr
><tr id="gr_svn99_3779"

><td id="3779"><a href="#3779">3779</a></td></tr
><tr id="gr_svn99_3780"

><td id="3780"><a href="#3780">3780</a></td></tr
><tr id="gr_svn99_3781"

><td id="3781"><a href="#3781">3781</a></td></tr
><tr id="gr_svn99_3782"

><td id="3782"><a href="#3782">3782</a></td></tr
><tr id="gr_svn99_3783"

><td id="3783"><a href="#3783">3783</a></td></tr
><tr id="gr_svn99_3784"

><td id="3784"><a href="#3784">3784</a></td></tr
><tr id="gr_svn99_3785"

><td id="3785"><a href="#3785">3785</a></td></tr
><tr id="gr_svn99_3786"

><td id="3786"><a href="#3786">3786</a></td></tr
><tr id="gr_svn99_3787"

><td id="3787"><a href="#3787">3787</a></td></tr
><tr id="gr_svn99_3788"

><td id="3788"><a href="#3788">3788</a></td></tr
><tr id="gr_svn99_3789"

><td id="3789"><a href="#3789">3789</a></td></tr
><tr id="gr_svn99_3790"

><td id="3790"><a href="#3790">3790</a></td></tr
><tr id="gr_svn99_3791"

><td id="3791"><a href="#3791">3791</a></td></tr
><tr id="gr_svn99_3792"

><td id="3792"><a href="#3792">3792</a></td></tr
><tr id="gr_svn99_3793"

><td id="3793"><a href="#3793">3793</a></td></tr
><tr id="gr_svn99_3794"

><td id="3794"><a href="#3794">3794</a></td></tr
><tr id="gr_svn99_3795"

><td id="3795"><a href="#3795">3795</a></td></tr
><tr id="gr_svn99_3796"

><td id="3796"><a href="#3796">3796</a></td></tr
><tr id="gr_svn99_3797"

><td id="3797"><a href="#3797">3797</a></td></tr
><tr id="gr_svn99_3798"

><td id="3798"><a href="#3798">3798</a></td></tr
><tr id="gr_svn99_3799"

><td id="3799"><a href="#3799">3799</a></td></tr
><tr id="gr_svn99_3800"

><td id="3800"><a href="#3800">3800</a></td></tr
><tr id="gr_svn99_3801"

><td id="3801"><a href="#3801">3801</a></td></tr
><tr id="gr_svn99_3802"

><td id="3802"><a href="#3802">3802</a></td></tr
><tr id="gr_svn99_3803"

><td id="3803"><a href="#3803">3803</a></td></tr
><tr id="gr_svn99_3804"

><td id="3804"><a href="#3804">3804</a></td></tr
><tr id="gr_svn99_3805"

><td id="3805"><a href="#3805">3805</a></td></tr
><tr id="gr_svn99_3806"

><td id="3806"><a href="#3806">3806</a></td></tr
><tr id="gr_svn99_3807"

><td id="3807"><a href="#3807">3807</a></td></tr
><tr id="gr_svn99_3808"

><td id="3808"><a href="#3808">3808</a></td></tr
><tr id="gr_svn99_3809"

><td id="3809"><a href="#3809">3809</a></td></tr
><tr id="gr_svn99_3810"

><td id="3810"><a href="#3810">3810</a></td></tr
><tr id="gr_svn99_3811"

><td id="3811"><a href="#3811">3811</a></td></tr
><tr id="gr_svn99_3812"

><td id="3812"><a href="#3812">3812</a></td></tr
><tr id="gr_svn99_3813"

><td id="3813"><a href="#3813">3813</a></td></tr
><tr id="gr_svn99_3814"

><td id="3814"><a href="#3814">3814</a></td></tr
><tr id="gr_svn99_3815"

><td id="3815"><a href="#3815">3815</a></td></tr
><tr id="gr_svn99_3816"

><td id="3816"><a href="#3816">3816</a></td></tr
><tr id="gr_svn99_3817"

><td id="3817"><a href="#3817">3817</a></td></tr
><tr id="gr_svn99_3818"

><td id="3818"><a href="#3818">3818</a></td></tr
><tr id="gr_svn99_3819"

><td id="3819"><a href="#3819">3819</a></td></tr
><tr id="gr_svn99_3820"

><td id="3820"><a href="#3820">3820</a></td></tr
><tr id="gr_svn99_3821"

><td id="3821"><a href="#3821">3821</a></td></tr
><tr id="gr_svn99_3822"

><td id="3822"><a href="#3822">3822</a></td></tr
><tr id="gr_svn99_3823"

><td id="3823"><a href="#3823">3823</a></td></tr
><tr id="gr_svn99_3824"

><td id="3824"><a href="#3824">3824</a></td></tr
><tr id="gr_svn99_3825"

><td id="3825"><a href="#3825">3825</a></td></tr
><tr id="gr_svn99_3826"

><td id="3826"><a href="#3826">3826</a></td></tr
><tr id="gr_svn99_3827"

><td id="3827"><a href="#3827">3827</a></td></tr
><tr id="gr_svn99_3828"

><td id="3828"><a href="#3828">3828</a></td></tr
><tr id="gr_svn99_3829"

><td id="3829"><a href="#3829">3829</a></td></tr
><tr id="gr_svn99_3830"

><td id="3830"><a href="#3830">3830</a></td></tr
><tr id="gr_svn99_3831"

><td id="3831"><a href="#3831">3831</a></td></tr
><tr id="gr_svn99_3832"

><td id="3832"><a href="#3832">3832</a></td></tr
><tr id="gr_svn99_3833"

><td id="3833"><a href="#3833">3833</a></td></tr
><tr id="gr_svn99_3834"

><td id="3834"><a href="#3834">3834</a></td></tr
><tr id="gr_svn99_3835"

><td id="3835"><a href="#3835">3835</a></td></tr
><tr id="gr_svn99_3836"

><td id="3836"><a href="#3836">3836</a></td></tr
><tr id="gr_svn99_3837"

><td id="3837"><a href="#3837">3837</a></td></tr
><tr id="gr_svn99_3838"

><td id="3838"><a href="#3838">3838</a></td></tr
><tr id="gr_svn99_3839"

><td id="3839"><a href="#3839">3839</a></td></tr
><tr id="gr_svn99_3840"

><td id="3840"><a href="#3840">3840</a></td></tr
><tr id="gr_svn99_3841"

><td id="3841"><a href="#3841">3841</a></td></tr
><tr id="gr_svn99_3842"

><td id="3842"><a href="#3842">3842</a></td></tr
><tr id="gr_svn99_3843"

><td id="3843"><a href="#3843">3843</a></td></tr
><tr id="gr_svn99_3844"

><td id="3844"><a href="#3844">3844</a></td></tr
><tr id="gr_svn99_3845"

><td id="3845"><a href="#3845">3845</a></td></tr
><tr id="gr_svn99_3846"

><td id="3846"><a href="#3846">3846</a></td></tr
><tr id="gr_svn99_3847"

><td id="3847"><a href="#3847">3847</a></td></tr
><tr id="gr_svn99_3848"

><td id="3848"><a href="#3848">3848</a></td></tr
><tr id="gr_svn99_3849"

><td id="3849"><a href="#3849">3849</a></td></tr
><tr id="gr_svn99_3850"

><td id="3850"><a href="#3850">3850</a></td></tr
><tr id="gr_svn99_3851"

><td id="3851"><a href="#3851">3851</a></td></tr
><tr id="gr_svn99_3852"

><td id="3852"><a href="#3852">3852</a></td></tr
><tr id="gr_svn99_3853"

><td id="3853"><a href="#3853">3853</a></td></tr
><tr id="gr_svn99_3854"

><td id="3854"><a href="#3854">3854</a></td></tr
><tr id="gr_svn99_3855"

><td id="3855"><a href="#3855">3855</a></td></tr
><tr id="gr_svn99_3856"

><td id="3856"><a href="#3856">3856</a></td></tr
><tr id="gr_svn99_3857"

><td id="3857"><a href="#3857">3857</a></td></tr
><tr id="gr_svn99_3858"

><td id="3858"><a href="#3858">3858</a></td></tr
><tr id="gr_svn99_3859"

><td id="3859"><a href="#3859">3859</a></td></tr
><tr id="gr_svn99_3860"

><td id="3860"><a href="#3860">3860</a></td></tr
><tr id="gr_svn99_3861"

><td id="3861"><a href="#3861">3861</a></td></tr
><tr id="gr_svn99_3862"

><td id="3862"><a href="#3862">3862</a></td></tr
><tr id="gr_svn99_3863"

><td id="3863"><a href="#3863">3863</a></td></tr
><tr id="gr_svn99_3864"

><td id="3864"><a href="#3864">3864</a></td></tr
><tr id="gr_svn99_3865"

><td id="3865"><a href="#3865">3865</a></td></tr
><tr id="gr_svn99_3866"

><td id="3866"><a href="#3866">3866</a></td></tr
><tr id="gr_svn99_3867"

><td id="3867"><a href="#3867">3867</a></td></tr
><tr id="gr_svn99_3868"

><td id="3868"><a href="#3868">3868</a></td></tr
><tr id="gr_svn99_3869"

><td id="3869"><a href="#3869">3869</a></td></tr
><tr id="gr_svn99_3870"

><td id="3870"><a href="#3870">3870</a></td></tr
><tr id="gr_svn99_3871"

><td id="3871"><a href="#3871">3871</a></td></tr
><tr id="gr_svn99_3872"

><td id="3872"><a href="#3872">3872</a></td></tr
><tr id="gr_svn99_3873"

><td id="3873"><a href="#3873">3873</a></td></tr
><tr id="gr_svn99_3874"

><td id="3874"><a href="#3874">3874</a></td></tr
><tr id="gr_svn99_3875"

><td id="3875"><a href="#3875">3875</a></td></tr
><tr id="gr_svn99_3876"

><td id="3876"><a href="#3876">3876</a></td></tr
><tr id="gr_svn99_3877"

><td id="3877"><a href="#3877">3877</a></td></tr
><tr id="gr_svn99_3878"

><td id="3878"><a href="#3878">3878</a></td></tr
><tr id="gr_svn99_3879"

><td id="3879"><a href="#3879">3879</a></td></tr
><tr id="gr_svn99_3880"

><td id="3880"><a href="#3880">3880</a></td></tr
><tr id="gr_svn99_3881"

><td id="3881"><a href="#3881">3881</a></td></tr
><tr id="gr_svn99_3882"

><td id="3882"><a href="#3882">3882</a></td></tr
><tr id="gr_svn99_3883"

><td id="3883"><a href="#3883">3883</a></td></tr
><tr id="gr_svn99_3884"

><td id="3884"><a href="#3884">3884</a></td></tr
><tr id="gr_svn99_3885"

><td id="3885"><a href="#3885">3885</a></td></tr
><tr id="gr_svn99_3886"

><td id="3886"><a href="#3886">3886</a></td></tr
><tr id="gr_svn99_3887"

><td id="3887"><a href="#3887">3887</a></td></tr
><tr id="gr_svn99_3888"

><td id="3888"><a href="#3888">3888</a></td></tr
><tr id="gr_svn99_3889"

><td id="3889"><a href="#3889">3889</a></td></tr
><tr id="gr_svn99_3890"

><td id="3890"><a href="#3890">3890</a></td></tr
><tr id="gr_svn99_3891"

><td id="3891"><a href="#3891">3891</a></td></tr
><tr id="gr_svn99_3892"

><td id="3892"><a href="#3892">3892</a></td></tr
><tr id="gr_svn99_3893"

><td id="3893"><a href="#3893">3893</a></td></tr
><tr id="gr_svn99_3894"

><td id="3894"><a href="#3894">3894</a></td></tr
><tr id="gr_svn99_3895"

><td id="3895"><a href="#3895">3895</a></td></tr
><tr id="gr_svn99_3896"

><td id="3896"><a href="#3896">3896</a></td></tr
><tr id="gr_svn99_3897"

><td id="3897"><a href="#3897">3897</a></td></tr
><tr id="gr_svn99_3898"

><td id="3898"><a href="#3898">3898</a></td></tr
><tr id="gr_svn99_3899"

><td id="3899"><a href="#3899">3899</a></td></tr
><tr id="gr_svn99_3900"

><td id="3900"><a href="#3900">3900</a></td></tr
><tr id="gr_svn99_3901"

><td id="3901"><a href="#3901">3901</a></td></tr
><tr id="gr_svn99_3902"

><td id="3902"><a href="#3902">3902</a></td></tr
><tr id="gr_svn99_3903"

><td id="3903"><a href="#3903">3903</a></td></tr
><tr id="gr_svn99_3904"

><td id="3904"><a href="#3904">3904</a></td></tr
><tr id="gr_svn99_3905"

><td id="3905"><a href="#3905">3905</a></td></tr
><tr id="gr_svn99_3906"

><td id="3906"><a href="#3906">3906</a></td></tr
><tr id="gr_svn99_3907"

><td id="3907"><a href="#3907">3907</a></td></tr
><tr id="gr_svn99_3908"

><td id="3908"><a href="#3908">3908</a></td></tr
><tr id="gr_svn99_3909"

><td id="3909"><a href="#3909">3909</a></td></tr
><tr id="gr_svn99_3910"

><td id="3910"><a href="#3910">3910</a></td></tr
><tr id="gr_svn99_3911"

><td id="3911"><a href="#3911">3911</a></td></tr
><tr id="gr_svn99_3912"

><td id="3912"><a href="#3912">3912</a></td></tr
><tr id="gr_svn99_3913"

><td id="3913"><a href="#3913">3913</a></td></tr
><tr id="gr_svn99_3914"

><td id="3914"><a href="#3914">3914</a></td></tr
><tr id="gr_svn99_3915"

><td id="3915"><a href="#3915">3915</a></td></tr
><tr id="gr_svn99_3916"

><td id="3916"><a href="#3916">3916</a></td></tr
><tr id="gr_svn99_3917"

><td id="3917"><a href="#3917">3917</a></td></tr
><tr id="gr_svn99_3918"

><td id="3918"><a href="#3918">3918</a></td></tr
><tr id="gr_svn99_3919"

><td id="3919"><a href="#3919">3919</a></td></tr
><tr id="gr_svn99_3920"

><td id="3920"><a href="#3920">3920</a></td></tr
><tr id="gr_svn99_3921"

><td id="3921"><a href="#3921">3921</a></td></tr
><tr id="gr_svn99_3922"

><td id="3922"><a href="#3922">3922</a></td></tr
><tr id="gr_svn99_3923"

><td id="3923"><a href="#3923">3923</a></td></tr
><tr id="gr_svn99_3924"

><td id="3924"><a href="#3924">3924</a></td></tr
><tr id="gr_svn99_3925"

><td id="3925"><a href="#3925">3925</a></td></tr
><tr id="gr_svn99_3926"

><td id="3926"><a href="#3926">3926</a></td></tr
><tr id="gr_svn99_3927"

><td id="3927"><a href="#3927">3927</a></td></tr
><tr id="gr_svn99_3928"

><td id="3928"><a href="#3928">3928</a></td></tr
><tr id="gr_svn99_3929"

><td id="3929"><a href="#3929">3929</a></td></tr
><tr id="gr_svn99_3930"

><td id="3930"><a href="#3930">3930</a></td></tr
><tr id="gr_svn99_3931"

><td id="3931"><a href="#3931">3931</a></td></tr
><tr id="gr_svn99_3932"

><td id="3932"><a href="#3932">3932</a></td></tr
><tr id="gr_svn99_3933"

><td id="3933"><a href="#3933">3933</a></td></tr
><tr id="gr_svn99_3934"

><td id="3934"><a href="#3934">3934</a></td></tr
><tr id="gr_svn99_3935"

><td id="3935"><a href="#3935">3935</a></td></tr
><tr id="gr_svn99_3936"

><td id="3936"><a href="#3936">3936</a></td></tr
><tr id="gr_svn99_3937"

><td id="3937"><a href="#3937">3937</a></td></tr
><tr id="gr_svn99_3938"

><td id="3938"><a href="#3938">3938</a></td></tr
><tr id="gr_svn99_3939"

><td id="3939"><a href="#3939">3939</a></td></tr
><tr id="gr_svn99_3940"

><td id="3940"><a href="#3940">3940</a></td></tr
><tr id="gr_svn99_3941"

><td id="3941"><a href="#3941">3941</a></td></tr
><tr id="gr_svn99_3942"

><td id="3942"><a href="#3942">3942</a></td></tr
><tr id="gr_svn99_3943"

><td id="3943"><a href="#3943">3943</a></td></tr
><tr id="gr_svn99_3944"

><td id="3944"><a href="#3944">3944</a></td></tr
><tr id="gr_svn99_3945"

><td id="3945"><a href="#3945">3945</a></td></tr
><tr id="gr_svn99_3946"

><td id="3946"><a href="#3946">3946</a></td></tr
><tr id="gr_svn99_3947"

><td id="3947"><a href="#3947">3947</a></td></tr
><tr id="gr_svn99_3948"

><td id="3948"><a href="#3948">3948</a></td></tr
><tr id="gr_svn99_3949"

><td id="3949"><a href="#3949">3949</a></td></tr
><tr id="gr_svn99_3950"

><td id="3950"><a href="#3950">3950</a></td></tr
><tr id="gr_svn99_3951"

><td id="3951"><a href="#3951">3951</a></td></tr
><tr id="gr_svn99_3952"

><td id="3952"><a href="#3952">3952</a></td></tr
><tr id="gr_svn99_3953"

><td id="3953"><a href="#3953">3953</a></td></tr
><tr id="gr_svn99_3954"

><td id="3954"><a href="#3954">3954</a></td></tr
><tr id="gr_svn99_3955"

><td id="3955"><a href="#3955">3955</a></td></tr
><tr id="gr_svn99_3956"

><td id="3956"><a href="#3956">3956</a></td></tr
><tr id="gr_svn99_3957"

><td id="3957"><a href="#3957">3957</a></td></tr
><tr id="gr_svn99_3958"

><td id="3958"><a href="#3958">3958</a></td></tr
><tr id="gr_svn99_3959"

><td id="3959"><a href="#3959">3959</a></td></tr
><tr id="gr_svn99_3960"

><td id="3960"><a href="#3960">3960</a></td></tr
><tr id="gr_svn99_3961"

><td id="3961"><a href="#3961">3961</a></td></tr
><tr id="gr_svn99_3962"

><td id="3962"><a href="#3962">3962</a></td></tr
><tr id="gr_svn99_3963"

><td id="3963"><a href="#3963">3963</a></td></tr
><tr id="gr_svn99_3964"

><td id="3964"><a href="#3964">3964</a></td></tr
><tr id="gr_svn99_3965"

><td id="3965"><a href="#3965">3965</a></td></tr
><tr id="gr_svn99_3966"

><td id="3966"><a href="#3966">3966</a></td></tr
><tr id="gr_svn99_3967"

><td id="3967"><a href="#3967">3967</a></td></tr
><tr id="gr_svn99_3968"

><td id="3968"><a href="#3968">3968</a></td></tr
><tr id="gr_svn99_3969"

><td id="3969"><a href="#3969">3969</a></td></tr
><tr id="gr_svn99_3970"

><td id="3970"><a href="#3970">3970</a></td></tr
><tr id="gr_svn99_3971"

><td id="3971"><a href="#3971">3971</a></td></tr
><tr id="gr_svn99_3972"

><td id="3972"><a href="#3972">3972</a></td></tr
><tr id="gr_svn99_3973"

><td id="3973"><a href="#3973">3973</a></td></tr
><tr id="gr_svn99_3974"

><td id="3974"><a href="#3974">3974</a></td></tr
><tr id="gr_svn99_3975"

><td id="3975"><a href="#3975">3975</a></td></tr
><tr id="gr_svn99_3976"

><td id="3976"><a href="#3976">3976</a></td></tr
><tr id="gr_svn99_3977"

><td id="3977"><a href="#3977">3977</a></td></tr
><tr id="gr_svn99_3978"

><td id="3978"><a href="#3978">3978</a></td></tr
><tr id="gr_svn99_3979"

><td id="3979"><a href="#3979">3979</a></td></tr
><tr id="gr_svn99_3980"

><td id="3980"><a href="#3980">3980</a></td></tr
><tr id="gr_svn99_3981"

><td id="3981"><a href="#3981">3981</a></td></tr
><tr id="gr_svn99_3982"

><td id="3982"><a href="#3982">3982</a></td></tr
><tr id="gr_svn99_3983"

><td id="3983"><a href="#3983">3983</a></td></tr
><tr id="gr_svn99_3984"

><td id="3984"><a href="#3984">3984</a></td></tr
><tr id="gr_svn99_3985"

><td id="3985"><a href="#3985">3985</a></td></tr
><tr id="gr_svn99_3986"

><td id="3986"><a href="#3986">3986</a></td></tr
><tr id="gr_svn99_3987"

><td id="3987"><a href="#3987">3987</a></td></tr
><tr id="gr_svn99_3988"

><td id="3988"><a href="#3988">3988</a></td></tr
><tr id="gr_svn99_3989"

><td id="3989"><a href="#3989">3989</a></td></tr
><tr id="gr_svn99_3990"

><td id="3990"><a href="#3990">3990</a></td></tr
><tr id="gr_svn99_3991"

><td id="3991"><a href="#3991">3991</a></td></tr
><tr id="gr_svn99_3992"

><td id="3992"><a href="#3992">3992</a></td></tr
><tr id="gr_svn99_3993"

><td id="3993"><a href="#3993">3993</a></td></tr
><tr id="gr_svn99_3994"

><td id="3994"><a href="#3994">3994</a></td></tr
><tr id="gr_svn99_3995"

><td id="3995"><a href="#3995">3995</a></td></tr
><tr id="gr_svn99_3996"

><td id="3996"><a href="#3996">3996</a></td></tr
><tr id="gr_svn99_3997"

><td id="3997"><a href="#3997">3997</a></td></tr
><tr id="gr_svn99_3998"

><td id="3998"><a href="#3998">3998</a></td></tr
><tr id="gr_svn99_3999"

><td id="3999"><a href="#3999">3999</a></td></tr
><tr id="gr_svn99_4000"

><td id="4000"><a href="#4000">4000</a></td></tr
><tr id="gr_svn99_4001"

><td id="4001"><a href="#4001">4001</a></td></tr
><tr id="gr_svn99_4002"

><td id="4002"><a href="#4002">4002</a></td></tr
><tr id="gr_svn99_4003"

><td id="4003"><a href="#4003">4003</a></td></tr
><tr id="gr_svn99_4004"

><td id="4004"><a href="#4004">4004</a></td></tr
><tr id="gr_svn99_4005"

><td id="4005"><a href="#4005">4005</a></td></tr
><tr id="gr_svn99_4006"

><td id="4006"><a href="#4006">4006</a></td></tr
><tr id="gr_svn99_4007"

><td id="4007"><a href="#4007">4007</a></td></tr
><tr id="gr_svn99_4008"

><td id="4008"><a href="#4008">4008</a></td></tr
><tr id="gr_svn99_4009"

><td id="4009"><a href="#4009">4009</a></td></tr
><tr id="gr_svn99_4010"

><td id="4010"><a href="#4010">4010</a></td></tr
><tr id="gr_svn99_4011"

><td id="4011"><a href="#4011">4011</a></td></tr
><tr id="gr_svn99_4012"

><td id="4012"><a href="#4012">4012</a></td></tr
><tr id="gr_svn99_4013"

><td id="4013"><a href="#4013">4013</a></td></tr
><tr id="gr_svn99_4014"

><td id="4014"><a href="#4014">4014</a></td></tr
><tr id="gr_svn99_4015"

><td id="4015"><a href="#4015">4015</a></td></tr
><tr id="gr_svn99_4016"

><td id="4016"><a href="#4016">4016</a></td></tr
><tr id="gr_svn99_4017"

><td id="4017"><a href="#4017">4017</a></td></tr
><tr id="gr_svn99_4018"

><td id="4018"><a href="#4018">4018</a></td></tr
><tr id="gr_svn99_4019"

><td id="4019"><a href="#4019">4019</a></td></tr
><tr id="gr_svn99_4020"

><td id="4020"><a href="#4020">4020</a></td></tr
><tr id="gr_svn99_4021"

><td id="4021"><a href="#4021">4021</a></td></tr
><tr id="gr_svn99_4022"

><td id="4022"><a href="#4022">4022</a></td></tr
><tr id="gr_svn99_4023"

><td id="4023"><a href="#4023">4023</a></td></tr
><tr id="gr_svn99_4024"

><td id="4024"><a href="#4024">4024</a></td></tr
><tr id="gr_svn99_4025"

><td id="4025"><a href="#4025">4025</a></td></tr
><tr id="gr_svn99_4026"

><td id="4026"><a href="#4026">4026</a></td></tr
><tr id="gr_svn99_4027"

><td id="4027"><a href="#4027">4027</a></td></tr
><tr id="gr_svn99_4028"

><td id="4028"><a href="#4028">4028</a></td></tr
><tr id="gr_svn99_4029"

><td id="4029"><a href="#4029">4029</a></td></tr
><tr id="gr_svn99_4030"

><td id="4030"><a href="#4030">4030</a></td></tr
><tr id="gr_svn99_4031"

><td id="4031"><a href="#4031">4031</a></td></tr
><tr id="gr_svn99_4032"

><td id="4032"><a href="#4032">4032</a></td></tr
><tr id="gr_svn99_4033"

><td id="4033"><a href="#4033">4033</a></td></tr
><tr id="gr_svn99_4034"

><td id="4034"><a href="#4034">4034</a></td></tr
><tr id="gr_svn99_4035"

><td id="4035"><a href="#4035">4035</a></td></tr
><tr id="gr_svn99_4036"

><td id="4036"><a href="#4036">4036</a></td></tr
><tr id="gr_svn99_4037"

><td id="4037"><a href="#4037">4037</a></td></tr
><tr id="gr_svn99_4038"

><td id="4038"><a href="#4038">4038</a></td></tr
><tr id="gr_svn99_4039"

><td id="4039"><a href="#4039">4039</a></td></tr
><tr id="gr_svn99_4040"

><td id="4040"><a href="#4040">4040</a></td></tr
><tr id="gr_svn99_4041"

><td id="4041"><a href="#4041">4041</a></td></tr
><tr id="gr_svn99_4042"

><td id="4042"><a href="#4042">4042</a></td></tr
><tr id="gr_svn99_4043"

><td id="4043"><a href="#4043">4043</a></td></tr
><tr id="gr_svn99_4044"

><td id="4044"><a href="#4044">4044</a></td></tr
><tr id="gr_svn99_4045"

><td id="4045"><a href="#4045">4045</a></td></tr
><tr id="gr_svn99_4046"

><td id="4046"><a href="#4046">4046</a></td></tr
><tr id="gr_svn99_4047"

><td id="4047"><a href="#4047">4047</a></td></tr
><tr id="gr_svn99_4048"

><td id="4048"><a href="#4048">4048</a></td></tr
><tr id="gr_svn99_4049"

><td id="4049"><a href="#4049">4049</a></td></tr
><tr id="gr_svn99_4050"

><td id="4050"><a href="#4050">4050</a></td></tr
><tr id="gr_svn99_4051"

><td id="4051"><a href="#4051">4051</a></td></tr
><tr id="gr_svn99_4052"

><td id="4052"><a href="#4052">4052</a></td></tr
><tr id="gr_svn99_4053"

><td id="4053"><a href="#4053">4053</a></td></tr
><tr id="gr_svn99_4054"

><td id="4054"><a href="#4054">4054</a></td></tr
><tr id="gr_svn99_4055"

><td id="4055"><a href="#4055">4055</a></td></tr
><tr id="gr_svn99_4056"

><td id="4056"><a href="#4056">4056</a></td></tr
><tr id="gr_svn99_4057"

><td id="4057"><a href="#4057">4057</a></td></tr
><tr id="gr_svn99_4058"

><td id="4058"><a href="#4058">4058</a></td></tr
><tr id="gr_svn99_4059"

><td id="4059"><a href="#4059">4059</a></td></tr
><tr id="gr_svn99_4060"

><td id="4060"><a href="#4060">4060</a></td></tr
><tr id="gr_svn99_4061"

><td id="4061"><a href="#4061">4061</a></td></tr
><tr id="gr_svn99_4062"

><td id="4062"><a href="#4062">4062</a></td></tr
><tr id="gr_svn99_4063"

><td id="4063"><a href="#4063">4063</a></td></tr
><tr id="gr_svn99_4064"

><td id="4064"><a href="#4064">4064</a></td></tr
><tr id="gr_svn99_4065"

><td id="4065"><a href="#4065">4065</a></td></tr
><tr id="gr_svn99_4066"

><td id="4066"><a href="#4066">4066</a></td></tr
><tr id="gr_svn99_4067"

><td id="4067"><a href="#4067">4067</a></td></tr
><tr id="gr_svn99_4068"

><td id="4068"><a href="#4068">4068</a></td></tr
><tr id="gr_svn99_4069"

><td id="4069"><a href="#4069">4069</a></td></tr
><tr id="gr_svn99_4070"

><td id="4070"><a href="#4070">4070</a></td></tr
><tr id="gr_svn99_4071"

><td id="4071"><a href="#4071">4071</a></td></tr
><tr id="gr_svn99_4072"

><td id="4072"><a href="#4072">4072</a></td></tr
><tr id="gr_svn99_4073"

><td id="4073"><a href="#4073">4073</a></td></tr
><tr id="gr_svn99_4074"

><td id="4074"><a href="#4074">4074</a></td></tr
><tr id="gr_svn99_4075"

><td id="4075"><a href="#4075">4075</a></td></tr
><tr id="gr_svn99_4076"

><td id="4076"><a href="#4076">4076</a></td></tr
><tr id="gr_svn99_4077"

><td id="4077"><a href="#4077">4077</a></td></tr
><tr id="gr_svn99_4078"

><td id="4078"><a href="#4078">4078</a></td></tr
><tr id="gr_svn99_4079"

><td id="4079"><a href="#4079">4079</a></td></tr
><tr id="gr_svn99_4080"

><td id="4080"><a href="#4080">4080</a></td></tr
><tr id="gr_svn99_4081"

><td id="4081"><a href="#4081">4081</a></td></tr
><tr id="gr_svn99_4082"

><td id="4082"><a href="#4082">4082</a></td></tr
><tr id="gr_svn99_4083"

><td id="4083"><a href="#4083">4083</a></td></tr
><tr id="gr_svn99_4084"

><td id="4084"><a href="#4084">4084</a></td></tr
><tr id="gr_svn99_4085"

><td id="4085"><a href="#4085">4085</a></td></tr
><tr id="gr_svn99_4086"

><td id="4086"><a href="#4086">4086</a></td></tr
><tr id="gr_svn99_4087"

><td id="4087"><a href="#4087">4087</a></td></tr
><tr id="gr_svn99_4088"

><td id="4088"><a href="#4088">4088</a></td></tr
><tr id="gr_svn99_4089"

><td id="4089"><a href="#4089">4089</a></td></tr
><tr id="gr_svn99_4090"

><td id="4090"><a href="#4090">4090</a></td></tr
><tr id="gr_svn99_4091"

><td id="4091"><a href="#4091">4091</a></td></tr
><tr id="gr_svn99_4092"

><td id="4092"><a href="#4092">4092</a></td></tr
><tr id="gr_svn99_4093"

><td id="4093"><a href="#4093">4093</a></td></tr
><tr id="gr_svn99_4094"

><td id="4094"><a href="#4094">4094</a></td></tr
><tr id="gr_svn99_4095"

><td id="4095"><a href="#4095">4095</a></td></tr
><tr id="gr_svn99_4096"

><td id="4096"><a href="#4096">4096</a></td></tr
><tr id="gr_svn99_4097"

><td id="4097"><a href="#4097">4097</a></td></tr
><tr id="gr_svn99_4098"

><td id="4098"><a href="#4098">4098</a></td></tr
><tr id="gr_svn99_4099"

><td id="4099"><a href="#4099">4099</a></td></tr
><tr id="gr_svn99_4100"

><td id="4100"><a href="#4100">4100</a></td></tr
><tr id="gr_svn99_4101"

><td id="4101"><a href="#4101">4101</a></td></tr
><tr id="gr_svn99_4102"

><td id="4102"><a href="#4102">4102</a></td></tr
><tr id="gr_svn99_4103"

><td id="4103"><a href="#4103">4103</a></td></tr
><tr id="gr_svn99_4104"

><td id="4104"><a href="#4104">4104</a></td></tr
><tr id="gr_svn99_4105"

><td id="4105"><a href="#4105">4105</a></td></tr
><tr id="gr_svn99_4106"

><td id="4106"><a href="#4106">4106</a></td></tr
><tr id="gr_svn99_4107"

><td id="4107"><a href="#4107">4107</a></td></tr
><tr id="gr_svn99_4108"

><td id="4108"><a href="#4108">4108</a></td></tr
><tr id="gr_svn99_4109"

><td id="4109"><a href="#4109">4109</a></td></tr
><tr id="gr_svn99_4110"

><td id="4110"><a href="#4110">4110</a></td></tr
><tr id="gr_svn99_4111"

><td id="4111"><a href="#4111">4111</a></td></tr
><tr id="gr_svn99_4112"

><td id="4112"><a href="#4112">4112</a></td></tr
><tr id="gr_svn99_4113"

><td id="4113"><a href="#4113">4113</a></td></tr
><tr id="gr_svn99_4114"

><td id="4114"><a href="#4114">4114</a></td></tr
><tr id="gr_svn99_4115"

><td id="4115"><a href="#4115">4115</a></td></tr
><tr id="gr_svn99_4116"

><td id="4116"><a href="#4116">4116</a></td></tr
><tr id="gr_svn99_4117"

><td id="4117"><a href="#4117">4117</a></td></tr
><tr id="gr_svn99_4118"

><td id="4118"><a href="#4118">4118</a></td></tr
><tr id="gr_svn99_4119"

><td id="4119"><a href="#4119">4119</a></td></tr
><tr id="gr_svn99_4120"

><td id="4120"><a href="#4120">4120</a></td></tr
><tr id="gr_svn99_4121"

><td id="4121"><a href="#4121">4121</a></td></tr
><tr id="gr_svn99_4122"

><td id="4122"><a href="#4122">4122</a></td></tr
><tr id="gr_svn99_4123"

><td id="4123"><a href="#4123">4123</a></td></tr
><tr id="gr_svn99_4124"

><td id="4124"><a href="#4124">4124</a></td></tr
><tr id="gr_svn99_4125"

><td id="4125"><a href="#4125">4125</a></td></tr
><tr id="gr_svn99_4126"

><td id="4126"><a href="#4126">4126</a></td></tr
><tr id="gr_svn99_4127"

><td id="4127"><a href="#4127">4127</a></td></tr
><tr id="gr_svn99_4128"

><td id="4128"><a href="#4128">4128</a></td></tr
><tr id="gr_svn99_4129"

><td id="4129"><a href="#4129">4129</a></td></tr
><tr id="gr_svn99_4130"

><td id="4130"><a href="#4130">4130</a></td></tr
><tr id="gr_svn99_4131"

><td id="4131"><a href="#4131">4131</a></td></tr
><tr id="gr_svn99_4132"

><td id="4132"><a href="#4132">4132</a></td></tr
><tr id="gr_svn99_4133"

><td id="4133"><a href="#4133">4133</a></td></tr
><tr id="gr_svn99_4134"

><td id="4134"><a href="#4134">4134</a></td></tr
><tr id="gr_svn99_4135"

><td id="4135"><a href="#4135">4135</a></td></tr
><tr id="gr_svn99_4136"

><td id="4136"><a href="#4136">4136</a></td></tr
><tr id="gr_svn99_4137"

><td id="4137"><a href="#4137">4137</a></td></tr
><tr id="gr_svn99_4138"

><td id="4138"><a href="#4138">4138</a></td></tr
><tr id="gr_svn99_4139"

><td id="4139"><a href="#4139">4139</a></td></tr
><tr id="gr_svn99_4140"

><td id="4140"><a href="#4140">4140</a></td></tr
><tr id="gr_svn99_4141"

><td id="4141"><a href="#4141">4141</a></td></tr
><tr id="gr_svn99_4142"

><td id="4142"><a href="#4142">4142</a></td></tr
><tr id="gr_svn99_4143"

><td id="4143"><a href="#4143">4143</a></td></tr
><tr id="gr_svn99_4144"

><td id="4144"><a href="#4144">4144</a></td></tr
><tr id="gr_svn99_4145"

><td id="4145"><a href="#4145">4145</a></td></tr
><tr id="gr_svn99_4146"

><td id="4146"><a href="#4146">4146</a></td></tr
><tr id="gr_svn99_4147"

><td id="4147"><a href="#4147">4147</a></td></tr
><tr id="gr_svn99_4148"

><td id="4148"><a href="#4148">4148</a></td></tr
><tr id="gr_svn99_4149"

><td id="4149"><a href="#4149">4149</a></td></tr
><tr id="gr_svn99_4150"

><td id="4150"><a href="#4150">4150</a></td></tr
><tr id="gr_svn99_4151"

><td id="4151"><a href="#4151">4151</a></td></tr
><tr id="gr_svn99_4152"

><td id="4152"><a href="#4152">4152</a></td></tr
><tr id="gr_svn99_4153"

><td id="4153"><a href="#4153">4153</a></td></tr
><tr id="gr_svn99_4154"

><td id="4154"><a href="#4154">4154</a></td></tr
><tr id="gr_svn99_4155"

><td id="4155"><a href="#4155">4155</a></td></tr
><tr id="gr_svn99_4156"

><td id="4156"><a href="#4156">4156</a></td></tr
><tr id="gr_svn99_4157"

><td id="4157"><a href="#4157">4157</a></td></tr
><tr id="gr_svn99_4158"

><td id="4158"><a href="#4158">4158</a></td></tr
><tr id="gr_svn99_4159"

><td id="4159"><a href="#4159">4159</a></td></tr
><tr id="gr_svn99_4160"

><td id="4160"><a href="#4160">4160</a></td></tr
><tr id="gr_svn99_4161"

><td id="4161"><a href="#4161">4161</a></td></tr
><tr id="gr_svn99_4162"

><td id="4162"><a href="#4162">4162</a></td></tr
><tr id="gr_svn99_4163"

><td id="4163"><a href="#4163">4163</a></td></tr
><tr id="gr_svn99_4164"

><td id="4164"><a href="#4164">4164</a></td></tr
><tr id="gr_svn99_4165"

><td id="4165"><a href="#4165">4165</a></td></tr
><tr id="gr_svn99_4166"

><td id="4166"><a href="#4166">4166</a></td></tr
><tr id="gr_svn99_4167"

><td id="4167"><a href="#4167">4167</a></td></tr
><tr id="gr_svn99_4168"

><td id="4168"><a href="#4168">4168</a></td></tr
><tr id="gr_svn99_4169"

><td id="4169"><a href="#4169">4169</a></td></tr
><tr id="gr_svn99_4170"

><td id="4170"><a href="#4170">4170</a></td></tr
><tr id="gr_svn99_4171"

><td id="4171"><a href="#4171">4171</a></td></tr
><tr id="gr_svn99_4172"

><td id="4172"><a href="#4172">4172</a></td></tr
><tr id="gr_svn99_4173"

><td id="4173"><a href="#4173">4173</a></td></tr
><tr id="gr_svn99_4174"

><td id="4174"><a href="#4174">4174</a></td></tr
><tr id="gr_svn99_4175"

><td id="4175"><a href="#4175">4175</a></td></tr
><tr id="gr_svn99_4176"

><td id="4176"><a href="#4176">4176</a></td></tr
><tr id="gr_svn99_4177"

><td id="4177"><a href="#4177">4177</a></td></tr
><tr id="gr_svn99_4178"

><td id="4178"><a href="#4178">4178</a></td></tr
><tr id="gr_svn99_4179"

><td id="4179"><a href="#4179">4179</a></td></tr
><tr id="gr_svn99_4180"

><td id="4180"><a href="#4180">4180</a></td></tr
><tr id="gr_svn99_4181"

><td id="4181"><a href="#4181">4181</a></td></tr
><tr id="gr_svn99_4182"

><td id="4182"><a href="#4182">4182</a></td></tr
><tr id="gr_svn99_4183"

><td id="4183"><a href="#4183">4183</a></td></tr
><tr id="gr_svn99_4184"

><td id="4184"><a href="#4184">4184</a></td></tr
><tr id="gr_svn99_4185"

><td id="4185"><a href="#4185">4185</a></td></tr
><tr id="gr_svn99_4186"

><td id="4186"><a href="#4186">4186</a></td></tr
><tr id="gr_svn99_4187"

><td id="4187"><a href="#4187">4187</a></td></tr
><tr id="gr_svn99_4188"

><td id="4188"><a href="#4188">4188</a></td></tr
><tr id="gr_svn99_4189"

><td id="4189"><a href="#4189">4189</a></td></tr
><tr id="gr_svn99_4190"

><td id="4190"><a href="#4190">4190</a></td></tr
><tr id="gr_svn99_4191"

><td id="4191"><a href="#4191">4191</a></td></tr
><tr id="gr_svn99_4192"

><td id="4192"><a href="#4192">4192</a></td></tr
><tr id="gr_svn99_4193"

><td id="4193"><a href="#4193">4193</a></td></tr
><tr id="gr_svn99_4194"

><td id="4194"><a href="#4194">4194</a></td></tr
><tr id="gr_svn99_4195"

><td id="4195"><a href="#4195">4195</a></td></tr
><tr id="gr_svn99_4196"

><td id="4196"><a href="#4196">4196</a></td></tr
><tr id="gr_svn99_4197"

><td id="4197"><a href="#4197">4197</a></td></tr
><tr id="gr_svn99_4198"

><td id="4198"><a href="#4198">4198</a></td></tr
><tr id="gr_svn99_4199"

><td id="4199"><a href="#4199">4199</a></td></tr
><tr id="gr_svn99_4200"

><td id="4200"><a href="#4200">4200</a></td></tr
><tr id="gr_svn99_4201"

><td id="4201"><a href="#4201">4201</a></td></tr
><tr id="gr_svn99_4202"

><td id="4202"><a href="#4202">4202</a></td></tr
><tr id="gr_svn99_4203"

><td id="4203"><a href="#4203">4203</a></td></tr
><tr id="gr_svn99_4204"

><td id="4204"><a href="#4204">4204</a></td></tr
><tr id="gr_svn99_4205"

><td id="4205"><a href="#4205">4205</a></td></tr
><tr id="gr_svn99_4206"

><td id="4206"><a href="#4206">4206</a></td></tr
><tr id="gr_svn99_4207"

><td id="4207"><a href="#4207">4207</a></td></tr
><tr id="gr_svn99_4208"

><td id="4208"><a href="#4208">4208</a></td></tr
><tr id="gr_svn99_4209"

><td id="4209"><a href="#4209">4209</a></td></tr
><tr id="gr_svn99_4210"

><td id="4210"><a href="#4210">4210</a></td></tr
><tr id="gr_svn99_4211"

><td id="4211"><a href="#4211">4211</a></td></tr
><tr id="gr_svn99_4212"

><td id="4212"><a href="#4212">4212</a></td></tr
><tr id="gr_svn99_4213"

><td id="4213"><a href="#4213">4213</a></td></tr
><tr id="gr_svn99_4214"

><td id="4214"><a href="#4214">4214</a></td></tr
><tr id="gr_svn99_4215"

><td id="4215"><a href="#4215">4215</a></td></tr
><tr id="gr_svn99_4216"

><td id="4216"><a href="#4216">4216</a></td></tr
><tr id="gr_svn99_4217"

><td id="4217"><a href="#4217">4217</a></td></tr
><tr id="gr_svn99_4218"

><td id="4218"><a href="#4218">4218</a></td></tr
><tr id="gr_svn99_4219"

><td id="4219"><a href="#4219">4219</a></td></tr
><tr id="gr_svn99_4220"

><td id="4220"><a href="#4220">4220</a></td></tr
><tr id="gr_svn99_4221"

><td id="4221"><a href="#4221">4221</a></td></tr
><tr id="gr_svn99_4222"

><td id="4222"><a href="#4222">4222</a></td></tr
><tr id="gr_svn99_4223"

><td id="4223"><a href="#4223">4223</a></td></tr
><tr id="gr_svn99_4224"

><td id="4224"><a href="#4224">4224</a></td></tr
><tr id="gr_svn99_4225"

><td id="4225"><a href="#4225">4225</a></td></tr
><tr id="gr_svn99_4226"

><td id="4226"><a href="#4226">4226</a></td></tr
><tr id="gr_svn99_4227"

><td id="4227"><a href="#4227">4227</a></td></tr
><tr id="gr_svn99_4228"

><td id="4228"><a href="#4228">4228</a></td></tr
><tr id="gr_svn99_4229"

><td id="4229"><a href="#4229">4229</a></td></tr
><tr id="gr_svn99_4230"

><td id="4230"><a href="#4230">4230</a></td></tr
><tr id="gr_svn99_4231"

><td id="4231"><a href="#4231">4231</a></td></tr
><tr id="gr_svn99_4232"

><td id="4232"><a href="#4232">4232</a></td></tr
><tr id="gr_svn99_4233"

><td id="4233"><a href="#4233">4233</a></td></tr
><tr id="gr_svn99_4234"

><td id="4234"><a href="#4234">4234</a></td></tr
><tr id="gr_svn99_4235"

><td id="4235"><a href="#4235">4235</a></td></tr
><tr id="gr_svn99_4236"

><td id="4236"><a href="#4236">4236</a></td></tr
><tr id="gr_svn99_4237"

><td id="4237"><a href="#4237">4237</a></td></tr
><tr id="gr_svn99_4238"

><td id="4238"><a href="#4238">4238</a></td></tr
><tr id="gr_svn99_4239"

><td id="4239"><a href="#4239">4239</a></td></tr
><tr id="gr_svn99_4240"

><td id="4240"><a href="#4240">4240</a></td></tr
><tr id="gr_svn99_4241"

><td id="4241"><a href="#4241">4241</a></td></tr
><tr id="gr_svn99_4242"

><td id="4242"><a href="#4242">4242</a></td></tr
><tr id="gr_svn99_4243"

><td id="4243"><a href="#4243">4243</a></td></tr
><tr id="gr_svn99_4244"

><td id="4244"><a href="#4244">4244</a></td></tr
><tr id="gr_svn99_4245"

><td id="4245"><a href="#4245">4245</a></td></tr
><tr id="gr_svn99_4246"

><td id="4246"><a href="#4246">4246</a></td></tr
><tr id="gr_svn99_4247"

><td id="4247"><a href="#4247">4247</a></td></tr
><tr id="gr_svn99_4248"

><td id="4248"><a href="#4248">4248</a></td></tr
><tr id="gr_svn99_4249"

><td id="4249"><a href="#4249">4249</a></td></tr
><tr id="gr_svn99_4250"

><td id="4250"><a href="#4250">4250</a></td></tr
><tr id="gr_svn99_4251"

><td id="4251"><a href="#4251">4251</a></td></tr
><tr id="gr_svn99_4252"

><td id="4252"><a href="#4252">4252</a></td></tr
><tr id="gr_svn99_4253"

><td id="4253"><a href="#4253">4253</a></td></tr
><tr id="gr_svn99_4254"

><td id="4254"><a href="#4254">4254</a></td></tr
><tr id="gr_svn99_4255"

><td id="4255"><a href="#4255">4255</a></td></tr
><tr id="gr_svn99_4256"

><td id="4256"><a href="#4256">4256</a></td></tr
><tr id="gr_svn99_4257"

><td id="4257"><a href="#4257">4257</a></td></tr
><tr id="gr_svn99_4258"

><td id="4258"><a href="#4258">4258</a></td></tr
><tr id="gr_svn99_4259"

><td id="4259"><a href="#4259">4259</a></td></tr
><tr id="gr_svn99_4260"

><td id="4260"><a href="#4260">4260</a></td></tr
><tr id="gr_svn99_4261"

><td id="4261"><a href="#4261">4261</a></td></tr
><tr id="gr_svn99_4262"

><td id="4262"><a href="#4262">4262</a></td></tr
><tr id="gr_svn99_4263"

><td id="4263"><a href="#4263">4263</a></td></tr
><tr id="gr_svn99_4264"

><td id="4264"><a href="#4264">4264</a></td></tr
><tr id="gr_svn99_4265"

><td id="4265"><a href="#4265">4265</a></td></tr
><tr id="gr_svn99_4266"

><td id="4266"><a href="#4266">4266</a></td></tr
><tr id="gr_svn99_4267"

><td id="4267"><a href="#4267">4267</a></td></tr
><tr id="gr_svn99_4268"

><td id="4268"><a href="#4268">4268</a></td></tr
><tr id="gr_svn99_4269"

><td id="4269"><a href="#4269">4269</a></td></tr
><tr id="gr_svn99_4270"

><td id="4270"><a href="#4270">4270</a></td></tr
><tr id="gr_svn99_4271"

><td id="4271"><a href="#4271">4271</a></td></tr
><tr id="gr_svn99_4272"

><td id="4272"><a href="#4272">4272</a></td></tr
><tr id="gr_svn99_4273"

><td id="4273"><a href="#4273">4273</a></td></tr
><tr id="gr_svn99_4274"

><td id="4274"><a href="#4274">4274</a></td></tr
><tr id="gr_svn99_4275"

><td id="4275"><a href="#4275">4275</a></td></tr
><tr id="gr_svn99_4276"

><td id="4276"><a href="#4276">4276</a></td></tr
><tr id="gr_svn99_4277"

><td id="4277"><a href="#4277">4277</a></td></tr
><tr id="gr_svn99_4278"

><td id="4278"><a href="#4278">4278</a></td></tr
><tr id="gr_svn99_4279"

><td id="4279"><a href="#4279">4279</a></td></tr
><tr id="gr_svn99_4280"

><td id="4280"><a href="#4280">4280</a></td></tr
><tr id="gr_svn99_4281"

><td id="4281"><a href="#4281">4281</a></td></tr
><tr id="gr_svn99_4282"

><td id="4282"><a href="#4282">4282</a></td></tr
><tr id="gr_svn99_4283"

><td id="4283"><a href="#4283">4283</a></td></tr
><tr id="gr_svn99_4284"

><td id="4284"><a href="#4284">4284</a></td></tr
><tr id="gr_svn99_4285"

><td id="4285"><a href="#4285">4285</a></td></tr
><tr id="gr_svn99_4286"

><td id="4286"><a href="#4286">4286</a></td></tr
><tr id="gr_svn99_4287"

><td id="4287"><a href="#4287">4287</a></td></tr
><tr id="gr_svn99_4288"

><td id="4288"><a href="#4288">4288</a></td></tr
><tr id="gr_svn99_4289"

><td id="4289"><a href="#4289">4289</a></td></tr
><tr id="gr_svn99_4290"

><td id="4290"><a href="#4290">4290</a></td></tr
><tr id="gr_svn99_4291"

><td id="4291"><a href="#4291">4291</a></td></tr
><tr id="gr_svn99_4292"

><td id="4292"><a href="#4292">4292</a></td></tr
><tr id="gr_svn99_4293"

><td id="4293"><a href="#4293">4293</a></td></tr
><tr id="gr_svn99_4294"

><td id="4294"><a href="#4294">4294</a></td></tr
><tr id="gr_svn99_4295"

><td id="4295"><a href="#4295">4295</a></td></tr
><tr id="gr_svn99_4296"

><td id="4296"><a href="#4296">4296</a></td></tr
><tr id="gr_svn99_4297"

><td id="4297"><a href="#4297">4297</a></td></tr
><tr id="gr_svn99_4298"

><td id="4298"><a href="#4298">4298</a></td></tr
><tr id="gr_svn99_4299"

><td id="4299"><a href="#4299">4299</a></td></tr
><tr id="gr_svn99_4300"

><td id="4300"><a href="#4300">4300</a></td></tr
><tr id="gr_svn99_4301"

><td id="4301"><a href="#4301">4301</a></td></tr
><tr id="gr_svn99_4302"

><td id="4302"><a href="#4302">4302</a></td></tr
><tr id="gr_svn99_4303"

><td id="4303"><a href="#4303">4303</a></td></tr
><tr id="gr_svn99_4304"

><td id="4304"><a href="#4304">4304</a></td></tr
><tr id="gr_svn99_4305"

><td id="4305"><a href="#4305">4305</a></td></tr
><tr id="gr_svn99_4306"

><td id="4306"><a href="#4306">4306</a></td></tr
><tr id="gr_svn99_4307"

><td id="4307"><a href="#4307">4307</a></td></tr
><tr id="gr_svn99_4308"

><td id="4308"><a href="#4308">4308</a></td></tr
><tr id="gr_svn99_4309"

><td id="4309"><a href="#4309">4309</a></td></tr
><tr id="gr_svn99_4310"

><td id="4310"><a href="#4310">4310</a></td></tr
><tr id="gr_svn99_4311"

><td id="4311"><a href="#4311">4311</a></td></tr
><tr id="gr_svn99_4312"

><td id="4312"><a href="#4312">4312</a></td></tr
><tr id="gr_svn99_4313"

><td id="4313"><a href="#4313">4313</a></td></tr
><tr id="gr_svn99_4314"

><td id="4314"><a href="#4314">4314</a></td></tr
><tr id="gr_svn99_4315"

><td id="4315"><a href="#4315">4315</a></td></tr
><tr id="gr_svn99_4316"

><td id="4316"><a href="#4316">4316</a></td></tr
><tr id="gr_svn99_4317"

><td id="4317"><a href="#4317">4317</a></td></tr
><tr id="gr_svn99_4318"

><td id="4318"><a href="#4318">4318</a></td></tr
><tr id="gr_svn99_4319"

><td id="4319"><a href="#4319">4319</a></td></tr
><tr id="gr_svn99_4320"

><td id="4320"><a href="#4320">4320</a></td></tr
><tr id="gr_svn99_4321"

><td id="4321"><a href="#4321">4321</a></td></tr
><tr id="gr_svn99_4322"

><td id="4322"><a href="#4322">4322</a></td></tr
><tr id="gr_svn99_4323"

><td id="4323"><a href="#4323">4323</a></td></tr
><tr id="gr_svn99_4324"

><td id="4324"><a href="#4324">4324</a></td></tr
><tr id="gr_svn99_4325"

><td id="4325"><a href="#4325">4325</a></td></tr
><tr id="gr_svn99_4326"

><td id="4326"><a href="#4326">4326</a></td></tr
><tr id="gr_svn99_4327"

><td id="4327"><a href="#4327">4327</a></td></tr
><tr id="gr_svn99_4328"

><td id="4328"><a href="#4328">4328</a></td></tr
><tr id="gr_svn99_4329"

><td id="4329"><a href="#4329">4329</a></td></tr
><tr id="gr_svn99_4330"

><td id="4330"><a href="#4330">4330</a></td></tr
><tr id="gr_svn99_4331"

><td id="4331"><a href="#4331">4331</a></td></tr
><tr id="gr_svn99_4332"

><td id="4332"><a href="#4332">4332</a></td></tr
><tr id="gr_svn99_4333"

><td id="4333"><a href="#4333">4333</a></td></tr
><tr id="gr_svn99_4334"

><td id="4334"><a href="#4334">4334</a></td></tr
><tr id="gr_svn99_4335"

><td id="4335"><a href="#4335">4335</a></td></tr
><tr id="gr_svn99_4336"

><td id="4336"><a href="#4336">4336</a></td></tr
><tr id="gr_svn99_4337"

><td id="4337"><a href="#4337">4337</a></td></tr
><tr id="gr_svn99_4338"

><td id="4338"><a href="#4338">4338</a></td></tr
><tr id="gr_svn99_4339"

><td id="4339"><a href="#4339">4339</a></td></tr
><tr id="gr_svn99_4340"

><td id="4340"><a href="#4340">4340</a></td></tr
><tr id="gr_svn99_4341"

><td id="4341"><a href="#4341">4341</a></td></tr
><tr id="gr_svn99_4342"

><td id="4342"><a href="#4342">4342</a></td></tr
><tr id="gr_svn99_4343"

><td id="4343"><a href="#4343">4343</a></td></tr
><tr id="gr_svn99_4344"

><td id="4344"><a href="#4344">4344</a></td></tr
><tr id="gr_svn99_4345"

><td id="4345"><a href="#4345">4345</a></td></tr
><tr id="gr_svn99_4346"

><td id="4346"><a href="#4346">4346</a></td></tr
><tr id="gr_svn99_4347"

><td id="4347"><a href="#4347">4347</a></td></tr
><tr id="gr_svn99_4348"

><td id="4348"><a href="#4348">4348</a></td></tr
><tr id="gr_svn99_4349"

><td id="4349"><a href="#4349">4349</a></td></tr
><tr id="gr_svn99_4350"

><td id="4350"><a href="#4350">4350</a></td></tr
><tr id="gr_svn99_4351"

><td id="4351"><a href="#4351">4351</a></td></tr
><tr id="gr_svn99_4352"

><td id="4352"><a href="#4352">4352</a></td></tr
><tr id="gr_svn99_4353"

><td id="4353"><a href="#4353">4353</a></td></tr
><tr id="gr_svn99_4354"

><td id="4354"><a href="#4354">4354</a></td></tr
><tr id="gr_svn99_4355"

><td id="4355"><a href="#4355">4355</a></td></tr
><tr id="gr_svn99_4356"

><td id="4356"><a href="#4356">4356</a></td></tr
><tr id="gr_svn99_4357"

><td id="4357"><a href="#4357">4357</a></td></tr
><tr id="gr_svn99_4358"

><td id="4358"><a href="#4358">4358</a></td></tr
><tr id="gr_svn99_4359"

><td id="4359"><a href="#4359">4359</a></td></tr
><tr id="gr_svn99_4360"

><td id="4360"><a href="#4360">4360</a></td></tr
><tr id="gr_svn99_4361"

><td id="4361"><a href="#4361">4361</a></td></tr
><tr id="gr_svn99_4362"

><td id="4362"><a href="#4362">4362</a></td></tr
><tr id="gr_svn99_4363"

><td id="4363"><a href="#4363">4363</a></td></tr
><tr id="gr_svn99_4364"

><td id="4364"><a href="#4364">4364</a></td></tr
><tr id="gr_svn99_4365"

><td id="4365"><a href="#4365">4365</a></td></tr
><tr id="gr_svn99_4366"

><td id="4366"><a href="#4366">4366</a></td></tr
><tr id="gr_svn99_4367"

><td id="4367"><a href="#4367">4367</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre ><table id="src_table_0"><tr
id=sl_svn99_1

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_2

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_3

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_4

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_5

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_6

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_7

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_8

><td class="source"><br></td></tr
><tr
id=sl_svn99_9

><td class="source">if (typeof PhoneGap === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_10

><td class="source"><br></td></tr
><tr
id=sl_svn99_11

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_12

><td class="source"> * The order of events during page load and PhoneGap startup is as follows:<br></td></tr
><tr
id=sl_svn99_13

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_14

><td class="source"> * onDOMContentLoaded         Internal event that is received when the web page is loaded and parsed.<br></td></tr
><tr
id=sl_svn99_15

><td class="source"> * window.onload              Body onload event.<br></td></tr
><tr
id=sl_svn99_16

><td class="source"> * onNativeReady              Internal event that indicates the PhoneGap native side is ready.<br></td></tr
><tr
id=sl_svn99_17

><td class="source"> * onPhoneGapInit             Internal event that kicks off creation of all PhoneGap JavaScript objects (runs constructors).<br></td></tr
><tr
id=sl_svn99_18

><td class="source"> * onPhoneGapReady            Internal event fired when all PhoneGap JavaScript objects have been created<br></td></tr
><tr
id=sl_svn99_19

><td class="source"> * onPhoneGapInfoReady        Internal event fired when device properties are available<br></td></tr
><tr
id=sl_svn99_20

><td class="source"> * onDeviceReady              User event fired to indicate that PhoneGap is ready<br></td></tr
><tr
id=sl_svn99_21

><td class="source"> * onResume                   User event fired to indicate a start/resume lifecycle event<br></td></tr
><tr
id=sl_svn99_22

><td class="source"> * onPause                    User event fired to indicate a pause lifecycle event<br></td></tr
><tr
id=sl_svn99_23

><td class="source"> * onDestroy                  Internal event fired when app is being destroyed (User should use window.onunload event, not this one).<br></td></tr
><tr
id=sl_svn99_24

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_25

><td class="source"> * The only PhoneGap events that user code should register for are:<br></td></tr
><tr
id=sl_svn99_26

><td class="source"> *      onDeviceReady<br></td></tr
><tr
id=sl_svn99_27

><td class="source"> *      onResume<br></td></tr
><tr
id=sl_svn99_28

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_29

><td class="source"> * Listeners can be registered as:<br></td></tr
><tr
id=sl_svn99_30

><td class="source"> *      document.addEventListener(&quot;deviceready&quot;, myDeviceReadyListener, false);<br></td></tr
><tr
id=sl_svn99_31

><td class="source"> *      document.addEventListener(&quot;resume&quot;, myResumeListener, false);<br></td></tr
><tr
id=sl_svn99_32

><td class="source"> *      document.addEventListener(&quot;pause&quot;, myPauseListener, false);<br></td></tr
><tr
id=sl_svn99_33

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_34

><td class="source"><br></td></tr
><tr
id=sl_svn99_35

><td class="source">if (typeof(DeviceInfo) !== &#39;object&#39;) {<br></td></tr
><tr
id=sl_svn99_36

><td class="source">    var DeviceInfo = {};<br></td></tr
><tr
id=sl_svn99_37

><td class="source">}<br></td></tr
><tr
id=sl_svn99_38

><td class="source"><br></td></tr
><tr
id=sl_svn99_39

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_40

><td class="source"> * This represents the PhoneGap API itself, and provides a global namespace for accessing<br></td></tr
><tr
id=sl_svn99_41

><td class="source"> * information about the state of PhoneGap.<br></td></tr
><tr
id=sl_svn99_42

><td class="source"> * @class<br></td></tr
><tr
id=sl_svn99_43

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_44

><td class="source">var PhoneGap = {<br></td></tr
><tr
id=sl_svn99_45

><td class="source">    queue: {<br></td></tr
><tr
id=sl_svn99_46

><td class="source">        ready: true,<br></td></tr
><tr
id=sl_svn99_47

><td class="source">        commands: [],<br></td></tr
><tr
id=sl_svn99_48

><td class="source">        timer: null<br></td></tr
><tr
id=sl_svn99_49

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_50

><td class="source">};<br></td></tr
><tr
id=sl_svn99_51

><td class="source"><br></td></tr
><tr
id=sl_svn99_52

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_53

><td class="source"> * List of resource files loaded by PhoneGap.<br></td></tr
><tr
id=sl_svn99_54

><td class="source"> * This is used to ensure JS and other files are loaded only once.<br></td></tr
><tr
id=sl_svn99_55

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_56

><td class="source">PhoneGap.resources = {base: true};<br></td></tr
><tr
id=sl_svn99_57

><td class="source"><br></td></tr
><tr
id=sl_svn99_58

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_59

><td class="source"> * Determine if resource has been loaded by PhoneGap<br></td></tr
><tr
id=sl_svn99_60

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_61

><td class="source"> * @param name<br></td></tr
><tr
id=sl_svn99_62

><td class="source"> * @return<br></td></tr
><tr
id=sl_svn99_63

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_64

><td class="source">PhoneGap.hasResource = function(name) {<br></td></tr
><tr
id=sl_svn99_65

><td class="source">    return PhoneGap.resources[name];<br></td></tr
><tr
id=sl_svn99_66

><td class="source">};<br></td></tr
><tr
id=sl_svn99_67

><td class="source"><br></td></tr
><tr
id=sl_svn99_68

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_69

><td class="source"> * Add a resource to list of loaded resources by PhoneGap<br></td></tr
><tr
id=sl_svn99_70

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_71

><td class="source"> * @param name<br></td></tr
><tr
id=sl_svn99_72

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_73

><td class="source">PhoneGap.addResource = function(name) {<br></td></tr
><tr
id=sl_svn99_74

><td class="source">    PhoneGap.resources[name] = true;<br></td></tr
><tr
id=sl_svn99_75

><td class="source">};<br></td></tr
><tr
id=sl_svn99_76

><td class="source"><br></td></tr
><tr
id=sl_svn99_77

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_78

><td class="source"> * Custom pub-sub channel that can have functions subscribed to it<br></td></tr
><tr
id=sl_svn99_79

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_80

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_81

><td class="source">PhoneGap.Channel = function (type)<br></td></tr
><tr
id=sl_svn99_82

><td class="source">{<br></td></tr
><tr
id=sl_svn99_83

><td class="source">    this.type = type;<br></td></tr
><tr
id=sl_svn99_84

><td class="source">    this.handlers = {};<br></td></tr
><tr
id=sl_svn99_85

><td class="source">    this.guid = 0;<br></td></tr
><tr
id=sl_svn99_86

><td class="source">    this.fired = false;<br></td></tr
><tr
id=sl_svn99_87

><td class="source">    this.enabled = true;<br></td></tr
><tr
id=sl_svn99_88

><td class="source">};<br></td></tr
><tr
id=sl_svn99_89

><td class="source"><br></td></tr
><tr
id=sl_svn99_90

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_91

><td class="source"> * Subscribes the given function to the channel. Any time that<br></td></tr
><tr
id=sl_svn99_92

><td class="source"> * Channel.fire is called so too will the function.<br></td></tr
><tr
id=sl_svn99_93

><td class="source"> * Optionally specify an execution context for the function<br></td></tr
><tr
id=sl_svn99_94

><td class="source"> * and a guid that can be used to stop subscribing to the channel.<br></td></tr
><tr
id=sl_svn99_95

><td class="source"> * Returns the guid.<br></td></tr
><tr
id=sl_svn99_96

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_97

><td class="source">PhoneGap.Channel.prototype.subscribe = function(f, c, g) {<br></td></tr
><tr
id=sl_svn99_98

><td class="source">    // need a function to call<br></td></tr
><tr
id=sl_svn99_99

><td class="source">    if (f === null) { return; }<br></td></tr
><tr
id=sl_svn99_100

><td class="source"><br></td></tr
><tr
id=sl_svn99_101

><td class="source">    var func = f;<br></td></tr
><tr
id=sl_svn99_102

><td class="source">    if (typeof c === &quot;object&quot; &amp;&amp; typeof f === &quot;function&quot;) { func = PhoneGap.close(c, f); }<br></td></tr
><tr
id=sl_svn99_103

><td class="source"><br></td></tr
><tr
id=sl_svn99_104

><td class="source">    g = g || func.observer_guid || f.observer_guid || this.guid++;<br></td></tr
><tr
id=sl_svn99_105

><td class="source">    func.observer_guid = g;<br></td></tr
><tr
id=sl_svn99_106

><td class="source">    f.observer_guid = g;<br></td></tr
><tr
id=sl_svn99_107

><td class="source">    this.handlers[g] = func;<br></td></tr
><tr
id=sl_svn99_108

><td class="source">    return g;<br></td></tr
><tr
id=sl_svn99_109

><td class="source">};<br></td></tr
><tr
id=sl_svn99_110

><td class="source"><br></td></tr
><tr
id=sl_svn99_111

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_112

><td class="source"> * Like subscribe but the function is only called once and then it<br></td></tr
><tr
id=sl_svn99_113

><td class="source"> * auto-unsubscribes itself.<br></td></tr
><tr
id=sl_svn99_114

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_115

><td class="source">PhoneGap.Channel.prototype.subscribeOnce = function(f, c) {<br></td></tr
><tr
id=sl_svn99_116

><td class="source">    var g = null;<br></td></tr
><tr
id=sl_svn99_117

><td class="source">    var _this = this;<br></td></tr
><tr
id=sl_svn99_118

><td class="source">    var m = function() {<br></td></tr
><tr
id=sl_svn99_119

><td class="source">        f.apply(c || null, arguments);<br></td></tr
><tr
id=sl_svn99_120

><td class="source">        _this.unsubscribe(g);<br></td></tr
><tr
id=sl_svn99_121

><td class="source">    };<br></td></tr
><tr
id=sl_svn99_122

><td class="source">    if (this.fired) {<br></td></tr
><tr
id=sl_svn99_123

><td class="source">        if (typeof c === &quot;object&quot; &amp;&amp; typeof f === &quot;function&quot;) { f = PhoneGap.close(c, f); }<br></td></tr
><tr
id=sl_svn99_124

><td class="source">        f.apply(this, this.fireArgs);<br></td></tr
><tr
id=sl_svn99_125

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn99_126

><td class="source">        g = this.subscribe(m);<br></td></tr
><tr
id=sl_svn99_127

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_128

><td class="source">    return g;<br></td></tr
><tr
id=sl_svn99_129

><td class="source">};<br></td></tr
><tr
id=sl_svn99_130

><td class="source"><br></td></tr
><tr
id=sl_svn99_131

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_132

><td class="source"> * Unsubscribes the function with the given guid from the channel.<br></td></tr
><tr
id=sl_svn99_133

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_134

><td class="source">PhoneGap.Channel.prototype.unsubscribe = function(g) {<br></td></tr
><tr
id=sl_svn99_135

><td class="source">    if (typeof g === &quot;function&quot;) { g = g.observer_guid; }<br></td></tr
><tr
id=sl_svn99_136

><td class="source">    this.handlers[g] = null;<br></td></tr
><tr
id=sl_svn99_137

><td class="source">    delete this.handlers[g];<br></td></tr
><tr
id=sl_svn99_138

><td class="source">};<br></td></tr
><tr
id=sl_svn99_139

><td class="source"><br></td></tr
><tr
id=sl_svn99_140

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_141

><td class="source"> * Calls all functions subscribed to this channel.<br></td></tr
><tr
id=sl_svn99_142

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_143

><td class="source">PhoneGap.Channel.prototype.fire = function(e) {<br></td></tr
><tr
id=sl_svn99_144

><td class="source">    if (this.enabled) {<br></td></tr
><tr
id=sl_svn99_145

><td class="source">        var fail = false;<br></td></tr
><tr
id=sl_svn99_146

><td class="source">        var item, handler, rv;<br></td></tr
><tr
id=sl_svn99_147

><td class="source">        for (item in this.handlers) {<br></td></tr
><tr
id=sl_svn99_148

><td class="source">            if (this.handlers.hasOwnProperty(item)) {<br></td></tr
><tr
id=sl_svn99_149

><td class="source">                handler = this.handlers[item];<br></td></tr
><tr
id=sl_svn99_150

><td class="source">                if (typeof handler === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_151

><td class="source">                    rv = (handler.apply(this, arguments) === false);<br></td></tr
><tr
id=sl_svn99_152

><td class="source">                    fail = fail || rv;<br></td></tr
><tr
id=sl_svn99_153

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_154

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_155

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_156

><td class="source">        this.fired = true;<br></td></tr
><tr
id=sl_svn99_157

><td class="source">        this.fireArgs = arguments;<br></td></tr
><tr
id=sl_svn99_158

><td class="source">        return !fail;<br></td></tr
><tr
id=sl_svn99_159

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_160

><td class="source">    return true;<br></td></tr
><tr
id=sl_svn99_161

><td class="source">};<br></td></tr
><tr
id=sl_svn99_162

><td class="source"><br></td></tr
><tr
id=sl_svn99_163

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_164

><td class="source"> * Calls the provided function only after all of the channels specified<br></td></tr
><tr
id=sl_svn99_165

><td class="source"> * have been fired.<br></td></tr
><tr
id=sl_svn99_166

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_167

><td class="source">PhoneGap.Channel.join = function(h, c) {<br></td></tr
><tr
id=sl_svn99_168

><td class="source">    var i = c.length;<br></td></tr
><tr
id=sl_svn99_169

><td class="source">    var f = function() {<br></td></tr
><tr
id=sl_svn99_170

><td class="source">        if (!(--i)) {<br></td></tr
><tr
id=sl_svn99_171

><td class="source">            h();<br></td></tr
><tr
id=sl_svn99_172

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_173

><td class="source">    };<br></td></tr
><tr
id=sl_svn99_174

><td class="source">    var len = i;<br></td></tr
><tr
id=sl_svn99_175

><td class="source">    var j;<br></td></tr
><tr
id=sl_svn99_176

><td class="source">    for (j=0; j&lt;len; j++) {<br></td></tr
><tr
id=sl_svn99_177

><td class="source">        if (!c[j].fired) {<br></td></tr
><tr
id=sl_svn99_178

><td class="source">            c[j].subscribeOnce(f);<br></td></tr
><tr
id=sl_svn99_179

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_180

><td class="source">        else {<br></td></tr
><tr
id=sl_svn99_181

><td class="source">            i--;<br></td></tr
><tr
id=sl_svn99_182

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_183

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_184

><td class="source">    if (!i) {<br></td></tr
><tr
id=sl_svn99_185

><td class="source">        h();<br></td></tr
><tr
id=sl_svn99_186

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_187

><td class="source">};<br></td></tr
><tr
id=sl_svn99_188

><td class="source"><br></td></tr
><tr
id=sl_svn99_189

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_190

><td class="source"> * Boolean flag indicating if the PhoneGap API is available and initialized.<br></td></tr
><tr
id=sl_svn99_191

><td class="source"> */ // TODO: Remove this, it is unused here ... -jm<br></td></tr
><tr
id=sl_svn99_192

><td class="source">PhoneGap.available = DeviceInfo.uuid !== undefined;<br></td></tr
><tr
id=sl_svn99_193

><td class="source"><br></td></tr
><tr
id=sl_svn99_194

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_195

><td class="source"> * Add an initialization function to a queue that ensures it will run and initialize<br></td></tr
><tr
id=sl_svn99_196

><td class="source"> * application constructors only once PhoneGap has been initialized.<br></td></tr
><tr
id=sl_svn99_197

><td class="source"> * @param {Function} func The function callback you want run once PhoneGap is initialized<br></td></tr
><tr
id=sl_svn99_198

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_199

><td class="source">PhoneGap.addConstructor = function(func) {<br></td></tr
><tr
id=sl_svn99_200

><td class="source">    PhoneGap.onPhoneGapInit.subscribeOnce(function() {<br></td></tr
><tr
id=sl_svn99_201

><td class="source">        try {<br></td></tr
><tr
id=sl_svn99_202

><td class="source">            func();<br></td></tr
><tr
id=sl_svn99_203

><td class="source">        } catch(e) {<br></td></tr
><tr
id=sl_svn99_204

><td class="source">            console.log(&quot;Failed to run constructor: &quot; + e);<br></td></tr
><tr
id=sl_svn99_205

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_206

><td class="source">    });<br></td></tr
><tr
id=sl_svn99_207

><td class="source">};<br></td></tr
><tr
id=sl_svn99_208

><td class="source"><br></td></tr
><tr
id=sl_svn99_209

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_210

><td class="source"> * Plugins object<br></td></tr
><tr
id=sl_svn99_211

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_212

><td class="source">if (!window.plugins) {<br></td></tr
><tr
id=sl_svn99_213

><td class="source">    window.plugins = {};<br></td></tr
><tr
id=sl_svn99_214

><td class="source">}<br></td></tr
><tr
id=sl_svn99_215

><td class="source"><br></td></tr
><tr
id=sl_svn99_216

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_217

><td class="source"> * Adds a plugin object to window.plugins.<br></td></tr
><tr
id=sl_svn99_218

><td class="source"> * The plugin is accessed using window.plugins.&lt;name&gt;<br></td></tr
><tr
id=sl_svn99_219

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_220

><td class="source"> * @param name          The plugin name<br></td></tr
><tr
id=sl_svn99_221

><td class="source"> * @param obj           The plugin object<br></td></tr
><tr
id=sl_svn99_222

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_223

><td class="source">PhoneGap.addPlugin = function(name, obj) {<br></td></tr
><tr
id=sl_svn99_224

><td class="source">    if (!window.plugins[name]) {<br></td></tr
><tr
id=sl_svn99_225

><td class="source">        window.plugins[name] = obj;<br></td></tr
><tr
id=sl_svn99_226

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_227

><td class="source">    else {<br></td></tr
><tr
id=sl_svn99_228

><td class="source">        console.log(&quot;Error: Plugin &quot;+name+&quot; already exists.&quot;);<br></td></tr
><tr
id=sl_svn99_229

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_230

><td class="source">};<br></td></tr
><tr
id=sl_svn99_231

><td class="source"><br></td></tr
><tr
id=sl_svn99_232

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_233

><td class="source"> * onDOMContentLoaded channel is fired when the DOM content<br></td></tr
><tr
id=sl_svn99_234

><td class="source"> * of the page has been parsed.<br></td></tr
><tr
id=sl_svn99_235

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_236

><td class="source">PhoneGap.onDOMContentLoaded = new PhoneGap.Channel(&#39;onDOMContentLoaded&#39;);<br></td></tr
><tr
id=sl_svn99_237

><td class="source"><br></td></tr
><tr
id=sl_svn99_238

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_239

><td class="source"> * onNativeReady channel is fired when the PhoneGap native code<br></td></tr
><tr
id=sl_svn99_240

><td class="source"> * has been initialized.<br></td></tr
><tr
id=sl_svn99_241

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_242

><td class="source">PhoneGap.onNativeReady = new PhoneGap.Channel(&#39;onNativeReady&#39;);<br></td></tr
><tr
id=sl_svn99_243

><td class="source"><br></td></tr
><tr
id=sl_svn99_244

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_245

><td class="source"> * onPhoneGapInit channel is fired when the web page is fully loaded and<br></td></tr
><tr
id=sl_svn99_246

><td class="source"> * PhoneGap native code has been initialized.<br></td></tr
><tr
id=sl_svn99_247

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_248

><td class="source">PhoneGap.onPhoneGapInit = new PhoneGap.Channel(&#39;onPhoneGapInit&#39;);<br></td></tr
><tr
id=sl_svn99_249

><td class="source"><br></td></tr
><tr
id=sl_svn99_250

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_251

><td class="source"> * onPhoneGapReady channel is fired when the JS PhoneGap objects have been created.<br></td></tr
><tr
id=sl_svn99_252

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_253

><td class="source">PhoneGap.onPhoneGapReady = new PhoneGap.Channel(&#39;onPhoneGapReady&#39;);<br></td></tr
><tr
id=sl_svn99_254

><td class="source"><br></td></tr
><tr
id=sl_svn99_255

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_256

><td class="source"> * onPhoneGapInfoReady channel is fired when the PhoneGap device properties<br></td></tr
><tr
id=sl_svn99_257

><td class="source"> * has been set.<br></td></tr
><tr
id=sl_svn99_258

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_259

><td class="source">PhoneGap.onPhoneGapInfoReady = new PhoneGap.Channel(&#39;onPhoneGapInfoReady&#39;);<br></td></tr
><tr
id=sl_svn99_260

><td class="source"><br></td></tr
><tr
id=sl_svn99_261

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_262

><td class="source"> * onPhoneGapConnectionReady channel is fired when the PhoneGap connection properties<br></td></tr
><tr
id=sl_svn99_263

><td class="source"> * has been set.<br></td></tr
><tr
id=sl_svn99_264

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_265

><td class="source">PhoneGap.onPhoneGapConnectionReady = new PhoneGap.Channel(&#39;onPhoneGapConnectionReady&#39;);<br></td></tr
><tr
id=sl_svn99_266

><td class="source"><br></td></tr
><tr
id=sl_svn99_267

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_268

><td class="source"> * onResume channel is fired when the PhoneGap native code<br></td></tr
><tr
id=sl_svn99_269

><td class="source"> * resumes.<br></td></tr
><tr
id=sl_svn99_270

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_271

><td class="source">PhoneGap.onResume = new PhoneGap.Channel(&#39;onResume&#39;);<br></td></tr
><tr
id=sl_svn99_272

><td class="source"><br></td></tr
><tr
id=sl_svn99_273

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_274

><td class="source"> * onPause channel is fired when the PhoneGap native code<br></td></tr
><tr
id=sl_svn99_275

><td class="source"> * pauses.<br></td></tr
><tr
id=sl_svn99_276

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_277

><td class="source">PhoneGap.onPause = new PhoneGap.Channel(&#39;onPause&#39;);<br></td></tr
><tr
id=sl_svn99_278

><td class="source"><br></td></tr
><tr
id=sl_svn99_279

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_280

><td class="source"> * onDestroy channel is fired when the PhoneGap native code<br></td></tr
><tr
id=sl_svn99_281

><td class="source"> * is destroyed.  It is used internally.<br></td></tr
><tr
id=sl_svn99_282

><td class="source"> * Window.onunload should be used by the user.<br></td></tr
><tr
id=sl_svn99_283

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_284

><td class="source">PhoneGap.onDestroy = new PhoneGap.Channel(&#39;onDestroy&#39;);<br></td></tr
><tr
id=sl_svn99_285

><td class="source">PhoneGap.onDestroy.subscribeOnce(function() {<br></td></tr
><tr
id=sl_svn99_286

><td class="source">    PhoneGap.shuttingDown = true;<br></td></tr
><tr
id=sl_svn99_287

><td class="source">});<br></td></tr
><tr
id=sl_svn99_288

><td class="source">PhoneGap.shuttingDown = false;<br></td></tr
><tr
id=sl_svn99_289

><td class="source"><br></td></tr
><tr
id=sl_svn99_290

><td class="source">// _nativeReady is global variable that the native side can set<br></td></tr
><tr
id=sl_svn99_291

><td class="source">// to signify that the native code is ready. It is a global since<br></td></tr
><tr
id=sl_svn99_292

><td class="source">// it may be called before any PhoneGap JS is ready.<br></td></tr
><tr
id=sl_svn99_293

><td class="source">if (typeof _nativeReady !== &#39;undefined&#39;) { PhoneGap.onNativeReady.fire(); }<br></td></tr
><tr
id=sl_svn99_294

><td class="source"><br></td></tr
><tr
id=sl_svn99_295

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_296

><td class="source"> * onDeviceReady is fired only after all PhoneGap objects are created and<br></td></tr
><tr
id=sl_svn99_297

><td class="source"> * the device properties are set.<br></td></tr
><tr
id=sl_svn99_298

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_299

><td class="source">PhoneGap.onDeviceReady = new PhoneGap.Channel(&#39;onDeviceReady&#39;);<br></td></tr
><tr
id=sl_svn99_300

><td class="source"><br></td></tr
><tr
id=sl_svn99_301

><td class="source"><br></td></tr
><tr
id=sl_svn99_302

><td class="source">// Array of channels that must fire before &quot;deviceready&quot; is fired<br></td></tr
><tr
id=sl_svn99_303

><td class="source">PhoneGap.deviceReadyChannelsArray = [ PhoneGap.onPhoneGapReady, PhoneGap.onPhoneGapInfoReady, PhoneGap.onPhoneGapConnectionReady];<br></td></tr
><tr
id=sl_svn99_304

><td class="source"><br></td></tr
><tr
id=sl_svn99_305

><td class="source">// Hashtable of user defined channels that must also fire before &quot;deviceready&quot; is fired<br></td></tr
><tr
id=sl_svn99_306

><td class="source">PhoneGap.deviceReadyChannelsMap = {};<br></td></tr
><tr
id=sl_svn99_307

><td class="source"><br></td></tr
><tr
id=sl_svn99_308

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_309

><td class="source"> * Indicate that a feature needs to be initialized before it is ready to be used.<br></td></tr
><tr
id=sl_svn99_310

><td class="source"> * This holds up PhoneGap&#39;s &quot;deviceready&quot; event until the feature has been initialized<br></td></tr
><tr
id=sl_svn99_311

><td class="source"> * and PhoneGap.initComplete(feature) is called.<br></td></tr
><tr
id=sl_svn99_312

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_313

><td class="source"> * @param feature {String}     The unique feature name<br></td></tr
><tr
id=sl_svn99_314

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_315

><td class="source">PhoneGap.waitForInitialization = function(feature) {<br></td></tr
><tr
id=sl_svn99_316

><td class="source">    if (feature) {<br></td></tr
><tr
id=sl_svn99_317

><td class="source">        var channel = new PhoneGap.Channel(feature);<br></td></tr
><tr
id=sl_svn99_318

><td class="source">        PhoneGap.deviceReadyChannelsMap[feature] = channel;<br></td></tr
><tr
id=sl_svn99_319

><td class="source">        PhoneGap.deviceReadyChannelsArray.push(channel);<br></td></tr
><tr
id=sl_svn99_320

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_321

><td class="source">};<br></td></tr
><tr
id=sl_svn99_322

><td class="source"><br></td></tr
><tr
id=sl_svn99_323

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_324

><td class="source"> * Indicate that initialization code has completed and the feature is ready to be used.<br></td></tr
><tr
id=sl_svn99_325

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_326

><td class="source"> * @param feature {String}     The unique feature name<br></td></tr
><tr
id=sl_svn99_327

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_328

><td class="source">PhoneGap.initializationComplete = function(feature) {<br></td></tr
><tr
id=sl_svn99_329

><td class="source">    var channel = PhoneGap.deviceReadyChannelsMap[feature];<br></td></tr
><tr
id=sl_svn99_330

><td class="source">    if (channel) {<br></td></tr
><tr
id=sl_svn99_331

><td class="source">        channel.fire();<br></td></tr
><tr
id=sl_svn99_332

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_333

><td class="source">};<br></td></tr
><tr
id=sl_svn99_334

><td class="source"><br></td></tr
><tr
id=sl_svn99_335

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_336

><td class="source"> * Create all PhoneGap objects once page has fully loaded and native side is ready.<br></td></tr
><tr
id=sl_svn99_337

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_338

><td class="source">PhoneGap.Channel.join(function() {<br></td></tr
><tr
id=sl_svn99_339

><td class="source"><br></td></tr
><tr
id=sl_svn99_340

><td class="source">    // Start listening for XHR callbacks<br></td></tr
><tr
id=sl_svn99_341

><td class="source">    setTimeout(function() {<br></td></tr
><tr
id=sl_svn99_342

><td class="source">            if (PhoneGap.UsePolling) {<br></td></tr
><tr
id=sl_svn99_343

><td class="source">                PhoneGap.JSCallbackPolling();<br></td></tr
><tr
id=sl_svn99_344

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_345

><td class="source">            else {<br></td></tr
><tr
id=sl_svn99_346

><td class="source">                var polling = prompt(&quot;usePolling&quot;, &quot;gap_callbackServer:&quot;);<br></td></tr
><tr
id=sl_svn99_347

><td class="source">                PhoneGap.UsePolling = polling;<br></td></tr
><tr
id=sl_svn99_348

><td class="source">                if (polling == &quot;true&quot;) {<br></td></tr
><tr
id=sl_svn99_349

><td class="source">                    PhoneGap.UsePolling = true;<br></td></tr
><tr
id=sl_svn99_350

><td class="source">                    PhoneGap.JSCallbackPolling();<br></td></tr
><tr
id=sl_svn99_351

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_352

><td class="source">                else {<br></td></tr
><tr
id=sl_svn99_353

><td class="source">                    PhoneGap.UsePolling = false;<br></td></tr
><tr
id=sl_svn99_354

><td class="source">                    PhoneGap.JSCallback();<br></td></tr
><tr
id=sl_svn99_355

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_356

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_357

><td class="source">        }, 1);<br></td></tr
><tr
id=sl_svn99_358

><td class="source"><br></td></tr
><tr
id=sl_svn99_359

><td class="source">    // Run PhoneGap constructors<br></td></tr
><tr
id=sl_svn99_360

><td class="source">    PhoneGap.onPhoneGapInit.fire();<br></td></tr
><tr
id=sl_svn99_361

><td class="source"><br></td></tr
><tr
id=sl_svn99_362

><td class="source">    // Fire event to notify that all objects are created<br></td></tr
><tr
id=sl_svn99_363

><td class="source">    PhoneGap.onPhoneGapReady.fire();<br></td></tr
><tr
id=sl_svn99_364

><td class="source"><br></td></tr
><tr
id=sl_svn99_365

><td class="source">    // Fire onDeviceReady event once all constructors have run and PhoneGap info has been<br></td></tr
><tr
id=sl_svn99_366

><td class="source">    // received from native side, and any user defined initialization channels.<br></td></tr
><tr
id=sl_svn99_367

><td class="source">    PhoneGap.Channel.join(function() {<br></td></tr
><tr
id=sl_svn99_368

><td class="source">        PhoneGap.onDeviceReady.fire();<br></td></tr
><tr
id=sl_svn99_369

><td class="source"><br></td></tr
><tr
id=sl_svn99_370

><td class="source">        // Fire the onresume event, since first one happens before JavaScript is loaded<br></td></tr
><tr
id=sl_svn99_371

><td class="source">        PhoneGap.onResume.fire();<br></td></tr
><tr
id=sl_svn99_372

><td class="source">    }, PhoneGap.deviceReadyChannelsArray);<br></td></tr
><tr
id=sl_svn99_373

><td class="source"><br></td></tr
><tr
id=sl_svn99_374

><td class="source">}, [ PhoneGap.onDOMContentLoaded, PhoneGap.onNativeReady ]);<br></td></tr
><tr
id=sl_svn99_375

><td class="source"><br></td></tr
><tr
id=sl_svn99_376

><td class="source">// Listen for DOMContentLoaded and notify our channel subscribers<br></td></tr
><tr
id=sl_svn99_377

><td class="source">document.addEventListener(&#39;DOMContentLoaded&#39;, function() {<br></td></tr
><tr
id=sl_svn99_378

><td class="source">    PhoneGap.onDOMContentLoaded.fire();<br></td></tr
><tr
id=sl_svn99_379

><td class="source">}, false);<br></td></tr
><tr
id=sl_svn99_380

><td class="source"><br></td></tr
><tr
id=sl_svn99_381

><td class="source">// Intercept calls to document.addEventListener and watch for deviceready<br></td></tr
><tr
id=sl_svn99_382

><td class="source">PhoneGap.m_document_addEventListener = document.addEventListener;<br></td></tr
><tr
id=sl_svn99_383

><td class="source"><br></td></tr
><tr
id=sl_svn99_384

><td class="source">document.addEventListener = function(evt, handler, capture) {<br></td></tr
><tr
id=sl_svn99_385

><td class="source">    var e = evt.toLowerCase();<br></td></tr
><tr
id=sl_svn99_386

><td class="source">    if (e === &#39;deviceready&#39;) {<br></td></tr
><tr
id=sl_svn99_387

><td class="source">        PhoneGap.onDeviceReady.subscribeOnce(handler);<br></td></tr
><tr
id=sl_svn99_388

><td class="source">    } else if (e === &#39;resume&#39;) {<br></td></tr
><tr
id=sl_svn99_389

><td class="source">        PhoneGap.onResume.subscribe(handler);<br></td></tr
><tr
id=sl_svn99_390

><td class="source">        if (PhoneGap.onDeviceReady.fired) {<br></td></tr
><tr
id=sl_svn99_391

><td class="source">            PhoneGap.onResume.fire();<br></td></tr
><tr
id=sl_svn99_392

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_393

><td class="source">    } else if (e === &#39;pause&#39;) {<br></td></tr
><tr
id=sl_svn99_394

><td class="source">        PhoneGap.onPause.subscribe(handler);<br></td></tr
><tr
id=sl_svn99_395

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_396

><td class="source">    else {<br></td></tr
><tr
id=sl_svn99_397

><td class="source">        // If subscribing to Android backbutton<br></td></tr
><tr
id=sl_svn99_398

><td class="source">        if (e === &#39;backbutton&#39;) {<br></td></tr
><tr
id=sl_svn99_399

><td class="source">            PhoneGap.exec(null, null, &quot;App&quot;, &quot;overrideBackbutton&quot;, [true]);<br></td></tr
><tr
id=sl_svn99_400

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_401

><td class="source"><br></td></tr
><tr
id=sl_svn99_402

><td class="source">        PhoneGap.m_document_addEventListener.call(document, evt, handler, capture);<br></td></tr
><tr
id=sl_svn99_403

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_404

><td class="source">};<br></td></tr
><tr
id=sl_svn99_405

><td class="source"><br></td></tr
><tr
id=sl_svn99_406

><td class="source">// Intercept calls to document.removeEventListener and watch for events that<br></td></tr
><tr
id=sl_svn99_407

><td class="source">// are generated by PhoneGap native code<br></td></tr
><tr
id=sl_svn99_408

><td class="source">PhoneGap.m_document_removeEventListener = document.removeEventListener;<br></td></tr
><tr
id=sl_svn99_409

><td class="source"><br></td></tr
><tr
id=sl_svn99_410

><td class="source">document.removeEventListener = function(evt, handler, capture) {<br></td></tr
><tr
id=sl_svn99_411

><td class="source">    var e = evt.toLowerCase();<br></td></tr
><tr
id=sl_svn99_412

><td class="source"><br></td></tr
><tr
id=sl_svn99_413

><td class="source">    // If unsubscribing to Android backbutton<br></td></tr
><tr
id=sl_svn99_414

><td class="source">    if (e === &#39;backbutton&#39;) {<br></td></tr
><tr
id=sl_svn99_415

><td class="source">        PhoneGap.exec(null, null, &quot;App&quot;, &quot;overrideBackbutton&quot;, [false]);<br></td></tr
><tr
id=sl_svn99_416

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_417

><td class="source"><br></td></tr
><tr
id=sl_svn99_418

><td class="source">    PhoneGap.m_document_removeEventListener.call(document, evt, handler, capture);<br></td></tr
><tr
id=sl_svn99_419

><td class="source">};<br></td></tr
><tr
id=sl_svn99_420

><td class="source"><br></td></tr
><tr
id=sl_svn99_421

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_422

><td class="source"> * Method to fire event from native code<br></td></tr
><tr
id=sl_svn99_423

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_424

><td class="source">PhoneGap.fireEvent = function(type) {<br></td></tr
><tr
id=sl_svn99_425

><td class="source">    var e = document.createEvent(&#39;Events&#39;);<br></td></tr
><tr
id=sl_svn99_426

><td class="source">    e.initEvent(type);<br></td></tr
><tr
id=sl_svn99_427

><td class="source">    document.dispatchEvent(e);<br></td></tr
><tr
id=sl_svn99_428

><td class="source">};<br></td></tr
><tr
id=sl_svn99_429

><td class="source"><br></td></tr
><tr
id=sl_svn99_430

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_431

><td class="source"> * If JSON not included, use our own stringify. (Android 1.6)<br></td></tr
><tr
id=sl_svn99_432

><td class="source"> * The restriction on ours is that it must be an array of simple types.<br></td></tr
><tr
id=sl_svn99_433

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_434

><td class="source"> * @param args<br></td></tr
><tr
id=sl_svn99_435

><td class="source"> * @return {String}<br></td></tr
><tr
id=sl_svn99_436

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_437

><td class="source">PhoneGap.stringify = function(args) {<br></td></tr
><tr
id=sl_svn99_438

><td class="source">    if (typeof JSON === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_439

><td class="source">        var s = &quot;[&quot;;<br></td></tr
><tr
id=sl_svn99_440

><td class="source">        var i, type, start, name, nameType, a;<br></td></tr
><tr
id=sl_svn99_441

><td class="source">        for (i = 0; i &lt; args.length; i++) {<br></td></tr
><tr
id=sl_svn99_442

><td class="source">            if (args[i] !== null) {<br></td></tr
><tr
id=sl_svn99_443

><td class="source">                if (i &gt; 0) {<br></td></tr
><tr
id=sl_svn99_444

><td class="source">                    s = s + &quot;,&quot;;<br></td></tr
><tr
id=sl_svn99_445

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_446

><td class="source">                type = typeof args[i];<br></td></tr
><tr
id=sl_svn99_447

><td class="source">                if ((type === &quot;number&quot;) || (type === &quot;boolean&quot;)) {<br></td></tr
><tr
id=sl_svn99_448

><td class="source">                    s = s + args[i];<br></td></tr
><tr
id=sl_svn99_449

><td class="source">                } else if (args[i] instanceof Array) {<br></td></tr
><tr
id=sl_svn99_450

><td class="source">                    s = s + &quot;[&quot; + args[i] + &quot;]&quot;;<br></td></tr
><tr
id=sl_svn99_451

><td class="source">                } else if (args[i] instanceof Object) {<br></td></tr
><tr
id=sl_svn99_452

><td class="source">                    start = true;<br></td></tr
><tr
id=sl_svn99_453

><td class="source">                    s = s + &#39;{&#39;;<br></td></tr
><tr
id=sl_svn99_454

><td class="source">                    for (name in args[i]) {<br></td></tr
><tr
id=sl_svn99_455

><td class="source">                        if (args[i][name] !== null) {<br></td></tr
><tr
id=sl_svn99_456

><td class="source">                            if (!start) {<br></td></tr
><tr
id=sl_svn99_457

><td class="source">                                s = s + &#39;,&#39;;<br></td></tr
><tr
id=sl_svn99_458

><td class="source">                            }<br></td></tr
><tr
id=sl_svn99_459

><td class="source">                            s = s + &#39;&quot;&#39; + name + &#39;&quot;:&#39;;<br></td></tr
><tr
id=sl_svn99_460

><td class="source">                            nameType = typeof args[i][name];<br></td></tr
><tr
id=sl_svn99_461

><td class="source">                            if ((nameType === &quot;number&quot;) || (nameType === &quot;boolean&quot;)) {<br></td></tr
><tr
id=sl_svn99_462

><td class="source">                                s = s + args[i][name];<br></td></tr
><tr
id=sl_svn99_463

><td class="source">                            } else if ((typeof args[i][name]) === &#39;function&#39;) {<br></td></tr
><tr
id=sl_svn99_464

><td class="source">                                // don&#39;t copy the functions<br></td></tr
><tr
id=sl_svn99_465

><td class="source">                                s = s + &#39;&quot;&quot;&#39;;<br></td></tr
><tr
id=sl_svn99_466

><td class="source">                            } else if (args[i][name] instanceof Object) {<br></td></tr
><tr
id=sl_svn99_467

><td class="source">                                s = s + PhoneGap.stringify(args[i][name]);<br></td></tr
><tr
id=sl_svn99_468

><td class="source">                            } else {<br></td></tr
><tr
id=sl_svn99_469

><td class="source">                                s = s + &#39;&quot;&#39; + args[i][name] + &#39;&quot;&#39;;<br></td></tr
><tr
id=sl_svn99_470

><td class="source">                            }<br></td></tr
><tr
id=sl_svn99_471

><td class="source">                            start = false;<br></td></tr
><tr
id=sl_svn99_472

><td class="source">                        }<br></td></tr
><tr
id=sl_svn99_473

><td class="source">                    }<br></td></tr
><tr
id=sl_svn99_474

><td class="source">                    s = s + &#39;}&#39;;<br></td></tr
><tr
id=sl_svn99_475

><td class="source">                } else {<br></td></tr
><tr
id=sl_svn99_476

><td class="source">                    a = args[i].replace(/\\/g, &#39;\\\\&#39;);<br></td></tr
><tr
id=sl_svn99_477

><td class="source">                    a = a.replace(/&quot;/g, &#39;\\&quot;&#39;);<br></td></tr
><tr
id=sl_svn99_478

><td class="source">                    s = s + &#39;&quot;&#39; + a + &#39;&quot;&#39;;<br></td></tr
><tr
id=sl_svn99_479

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_480

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_481

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_482

><td class="source">        s = s + &quot;]&quot;;<br></td></tr
><tr
id=sl_svn99_483

><td class="source">        return s;<br></td></tr
><tr
id=sl_svn99_484

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn99_485

><td class="source">        return JSON.stringify(args);<br></td></tr
><tr
id=sl_svn99_486

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_487

><td class="source">};<br></td></tr
><tr
id=sl_svn99_488

><td class="source"><br></td></tr
><tr
id=sl_svn99_489

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_490

><td class="source"> * Does a deep clone of the object.<br></td></tr
><tr
id=sl_svn99_491

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_492

><td class="source"> * @param obj<br></td></tr
><tr
id=sl_svn99_493

><td class="source"> * @return {Object}<br></td></tr
><tr
id=sl_svn99_494

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_495

><td class="source">PhoneGap.clone = function(obj) {<br></td></tr
><tr
id=sl_svn99_496

><td class="source">    var i, retVal;<br></td></tr
><tr
id=sl_svn99_497

><td class="source">    if(!obj) { <br></td></tr
><tr
id=sl_svn99_498

><td class="source">        return obj;<br></td></tr
><tr
id=sl_svn99_499

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_500

><td class="source">    <br></td></tr
><tr
id=sl_svn99_501

><td class="source">    if(obj instanceof Array){<br></td></tr
><tr
id=sl_svn99_502

><td class="source">        retVal = [];<br></td></tr
><tr
id=sl_svn99_503

><td class="source">        for(i = 0; i &lt; obj.length; ++i){<br></td></tr
><tr
id=sl_svn99_504

><td class="source">            retVal.push(PhoneGap.clone(obj[i]));<br></td></tr
><tr
id=sl_svn99_505

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_506

><td class="source">        return retVal;<br></td></tr
><tr
id=sl_svn99_507

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_508

><td class="source">    <br></td></tr
><tr
id=sl_svn99_509

><td class="source">    if (typeof obj === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_510

><td class="source">        return obj;<br></td></tr
><tr
id=sl_svn99_511

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_512

><td class="source">    <br></td></tr
><tr
id=sl_svn99_513

><td class="source">    if(!(obj instanceof Object)){<br></td></tr
><tr
id=sl_svn99_514

><td class="source">        return obj;<br></td></tr
><tr
id=sl_svn99_515

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_516

><td class="source">    <br></td></tr
><tr
id=sl_svn99_517

><td class="source">    if (obj instanceof Date) {<br></td></tr
><tr
id=sl_svn99_518

><td class="source">        return obj;<br></td></tr
><tr
id=sl_svn99_519

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_520

><td class="source">    <br></td></tr
><tr
id=sl_svn99_521

><td class="source">    retVal = {};<br></td></tr
><tr
id=sl_svn99_522

><td class="source">    for(i in obj){<br></td></tr
><tr
id=sl_svn99_523

><td class="source">        if(!(i in retVal) || retVal[i] !== obj[i]) {<br></td></tr
><tr
id=sl_svn99_524

><td class="source">            retVal[i] = PhoneGap.clone(obj[i]);<br></td></tr
><tr
id=sl_svn99_525

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_526

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_527

><td class="source">    return retVal;<br></td></tr
><tr
id=sl_svn99_528

><td class="source">};<br></td></tr
><tr
id=sl_svn99_529

><td class="source"><br></td></tr
><tr
id=sl_svn99_530

><td class="source">PhoneGap.callbackId = 0;<br></td></tr
><tr
id=sl_svn99_531

><td class="source">PhoneGap.callbacks = {};<br></td></tr
><tr
id=sl_svn99_532

><td class="source">PhoneGap.callbackStatus = {<br></td></tr
><tr
id=sl_svn99_533

><td class="source">    NO_RESULT: 0,<br></td></tr
><tr
id=sl_svn99_534

><td class="source">    OK: 1,<br></td></tr
><tr
id=sl_svn99_535

><td class="source">    CLASS_NOT_FOUND_EXCEPTION: 2,<br></td></tr
><tr
id=sl_svn99_536

><td class="source">    ILLEGAL_ACCESS_EXCEPTION: 3,<br></td></tr
><tr
id=sl_svn99_537

><td class="source">    INSTANTIATION_EXCEPTION: 4,<br></td></tr
><tr
id=sl_svn99_538

><td class="source">    MALFORMED_URL_EXCEPTION: 5,<br></td></tr
><tr
id=sl_svn99_539

><td class="source">    IO_EXCEPTION: 6,<br></td></tr
><tr
id=sl_svn99_540

><td class="source">    INVALID_ACTION: 7,<br></td></tr
><tr
id=sl_svn99_541

><td class="source">    JSON_EXCEPTION: 8,<br></td></tr
><tr
id=sl_svn99_542

><td class="source">    ERROR: 9<br></td></tr
><tr
id=sl_svn99_543

><td class="source">    };<br></td></tr
><tr
id=sl_svn99_544

><td class="source"><br></td></tr
><tr
id=sl_svn99_545

><td class="source"><br></td></tr
><tr
id=sl_svn99_546

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_547

><td class="source"> * Execute a PhoneGap command.  It is up to the native side whether this action is synch or async.<br></td></tr
><tr
id=sl_svn99_548

><td class="source"> * The native side can return:<br></td></tr
><tr
id=sl_svn99_549

><td class="source"> *      Synchronous: PluginResult object as a JSON string<br></td></tr
><tr
id=sl_svn99_550

><td class="source"> *      Asynchrounous: Empty string &quot;&quot;<br></td></tr
><tr
id=sl_svn99_551

><td class="source"> * If async, the native side will PhoneGap.callbackSuccess or PhoneGap.callbackError,<br></td></tr
><tr
id=sl_svn99_552

><td class="source"> * depending upon the result of the action.<br></td></tr
><tr
id=sl_svn99_553

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_554

><td class="source"> * @param {Function} success    The success callback<br></td></tr
><tr
id=sl_svn99_555

><td class="source"> * @param {Function} fail       The fail callback<br></td></tr
><tr
id=sl_svn99_556

><td class="source"> * @param {String} service      The name of the service to use<br></td></tr
><tr
id=sl_svn99_557

><td class="source"> * @param {String} action       Action to be run in PhoneGap<br></td></tr
><tr
id=sl_svn99_558

><td class="source"> * @param {Array.&lt;String&gt;} [args]     Zero or more arguments to pass to the method<br></td></tr
><tr
id=sl_svn99_559

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_560

><td class="source">PhoneGap.exec = function(success, fail, service, action, args) {<br></td></tr
><tr
id=sl_svn99_561

><td class="source">    try {<br></td></tr
><tr
id=sl_svn99_562

><td class="source">        var callbackId = service + PhoneGap.callbackId++;<br></td></tr
><tr
id=sl_svn99_563

><td class="source">        if (success || fail) {<br></td></tr
><tr
id=sl_svn99_564

><td class="source">            PhoneGap.callbacks[callbackId] = {success:success, fail:fail};<br></td></tr
><tr
id=sl_svn99_565

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_566

><td class="source"><br></td></tr
><tr
id=sl_svn99_567

><td class="source">        var r = prompt(PhoneGap.stringify(args), &quot;gap:&quot;+PhoneGap.stringify([service, action, callbackId, true]));<br></td></tr
><tr
id=sl_svn99_568

><td class="source"><br></td></tr
><tr
id=sl_svn99_569

><td class="source">        // If a result was returned<br></td></tr
><tr
id=sl_svn99_570

><td class="source">        if (r.length &gt; 0) {<br></td></tr
><tr
id=sl_svn99_571

><td class="source">            eval(&quot;var v=&quot;+r+&quot;;&quot;);<br></td></tr
><tr
id=sl_svn99_572

><td class="source"><br></td></tr
><tr
id=sl_svn99_573

><td class="source">            // If status is OK, then return value back to caller<br></td></tr
><tr
id=sl_svn99_574

><td class="source">            if (v.status === PhoneGap.callbackStatus.OK) {<br></td></tr
><tr
id=sl_svn99_575

><td class="source"><br></td></tr
><tr
id=sl_svn99_576

><td class="source">                // If there is a success callback, then call it now with<br></td></tr
><tr
id=sl_svn99_577

><td class="source">                // returned value<br></td></tr
><tr
id=sl_svn99_578

><td class="source">                if (success) {<br></td></tr
><tr
id=sl_svn99_579

><td class="source">                    try {<br></td></tr
><tr
id=sl_svn99_580

><td class="source">                        success(v.message);<br></td></tr
><tr
id=sl_svn99_581

><td class="source">                    } catch (e) {<br></td></tr
><tr
id=sl_svn99_582

><td class="source">                        console.log(&quot;Error in success callback: &quot; + callbackId  + &quot; = &quot; + e);<br></td></tr
><tr
id=sl_svn99_583

><td class="source">                    }<br></td></tr
><tr
id=sl_svn99_584

><td class="source"><br></td></tr
><tr
id=sl_svn99_585

><td class="source">                    // Clear callback if not expecting any more results<br></td></tr
><tr
id=sl_svn99_586

><td class="source">                    if (!v.keepCallback) {<br></td></tr
><tr
id=sl_svn99_587

><td class="source">                        delete PhoneGap.callbacks[callbackId];<br></td></tr
><tr
id=sl_svn99_588

><td class="source">                    }<br></td></tr
><tr
id=sl_svn99_589

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_590

><td class="source">                return v.message;<br></td></tr
><tr
id=sl_svn99_591

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_592

><td class="source"><br></td></tr
><tr
id=sl_svn99_593

><td class="source">            // If no result<br></td></tr
><tr
id=sl_svn99_594

><td class="source">            else if (v.status === PhoneGap.callbackStatus.NO_RESULT) {<br></td></tr
><tr
id=sl_svn99_595

><td class="source"><br></td></tr
><tr
id=sl_svn99_596

><td class="source">                // Clear callback if not expecting any more results<br></td></tr
><tr
id=sl_svn99_597

><td class="source">                if (!v.keepCallback) {<br></td></tr
><tr
id=sl_svn99_598

><td class="source">                    delete PhoneGap.callbacks[callbackId];<br></td></tr
><tr
id=sl_svn99_599

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_600

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_601

><td class="source"><br></td></tr
><tr
id=sl_svn99_602

><td class="source">            // If error, then display error<br></td></tr
><tr
id=sl_svn99_603

><td class="source">            else {<br></td></tr
><tr
id=sl_svn99_604

><td class="source">                console.log(&quot;Error: Status=&quot;+v.status+&quot; Message=&quot;+v.message);<br></td></tr
><tr
id=sl_svn99_605

><td class="source"><br></td></tr
><tr
id=sl_svn99_606

><td class="source">                // If there is a fail callback, then call it now with returned value<br></td></tr
><tr
id=sl_svn99_607

><td class="source">                if (fail) {<br></td></tr
><tr
id=sl_svn99_608

><td class="source">                    try {<br></td></tr
><tr
id=sl_svn99_609

><td class="source">                        fail(v.message);<br></td></tr
><tr
id=sl_svn99_610

><td class="source">                    }<br></td></tr
><tr
id=sl_svn99_611

><td class="source">                    catch (e1) {<br></td></tr
><tr
id=sl_svn99_612

><td class="source">                        console.log(&quot;Error in error callback: &quot;+callbackId+&quot; = &quot;+e1);<br></td></tr
><tr
id=sl_svn99_613

><td class="source">                    }<br></td></tr
><tr
id=sl_svn99_614

><td class="source"><br></td></tr
><tr
id=sl_svn99_615

><td class="source">                    // Clear callback if not expecting any more results<br></td></tr
><tr
id=sl_svn99_616

><td class="source">                    if (!v.keepCallback) {<br></td></tr
><tr
id=sl_svn99_617

><td class="source">                        delete PhoneGap.callbacks[callbackId];<br></td></tr
><tr
id=sl_svn99_618

><td class="source">                    }<br></td></tr
><tr
id=sl_svn99_619

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_620

><td class="source">                return null;<br></td></tr
><tr
id=sl_svn99_621

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_622

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_623

><td class="source">    } catch (e2) {<br></td></tr
><tr
id=sl_svn99_624

><td class="source">        console.log(&quot;Error: &quot;+e2);<br></td></tr
><tr
id=sl_svn99_625

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_626

><td class="source">};<br></td></tr
><tr
id=sl_svn99_627

><td class="source"><br></td></tr
><tr
id=sl_svn99_628

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_629

><td class="source"> * Called by native code when returning successful result from an action.<br></td></tr
><tr
id=sl_svn99_630

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_631

><td class="source"> * @param callbackId<br></td></tr
><tr
id=sl_svn99_632

><td class="source"> * @param args<br></td></tr
><tr
id=sl_svn99_633

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_634

><td class="source">PhoneGap.callbackSuccess = function(callbackId, args) {<br></td></tr
><tr
id=sl_svn99_635

><td class="source">    if (PhoneGap.callbacks[callbackId]) {<br></td></tr
><tr
id=sl_svn99_636

><td class="source"><br></td></tr
><tr
id=sl_svn99_637

><td class="source">        // If result is to be sent to callback<br></td></tr
><tr
id=sl_svn99_638

><td class="source">        if (args.status === PhoneGap.callbackStatus.OK) {<br></td></tr
><tr
id=sl_svn99_639

><td class="source">            try {<br></td></tr
><tr
id=sl_svn99_640

><td class="source">                if (PhoneGap.callbacks[callbackId].success) {<br></td></tr
><tr
id=sl_svn99_641

><td class="source">                    PhoneGap.callbacks[callbackId].success(args.message);<br></td></tr
><tr
id=sl_svn99_642

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_643

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_644

><td class="source">            catch (e) {<br></td></tr
><tr
id=sl_svn99_645

><td class="source">                console.log(&quot;Error in success callback: &quot;+callbackId+&quot; = &quot;+e);<br></td></tr
><tr
id=sl_svn99_646

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_647

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_648

><td class="source"><br></td></tr
><tr
id=sl_svn99_649

><td class="source">        // Clear callback if not expecting any more results<br></td></tr
><tr
id=sl_svn99_650

><td class="source">        if (!args.keepCallback) {<br></td></tr
><tr
id=sl_svn99_651

><td class="source">            delete PhoneGap.callbacks[callbackId];<br></td></tr
><tr
id=sl_svn99_652

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_653

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_654

><td class="source">};<br></td></tr
><tr
id=sl_svn99_655

><td class="source"><br></td></tr
><tr
id=sl_svn99_656

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_657

><td class="source"> * Called by native code when returning error result from an action.<br></td></tr
><tr
id=sl_svn99_658

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_659

><td class="source"> * @param callbackId<br></td></tr
><tr
id=sl_svn99_660

><td class="source"> * @param args<br></td></tr
><tr
id=sl_svn99_661

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_662

><td class="source">PhoneGap.callbackError = function(callbackId, args) {<br></td></tr
><tr
id=sl_svn99_663

><td class="source">    if (PhoneGap.callbacks[callbackId]) {<br></td></tr
><tr
id=sl_svn99_664

><td class="source">        try {<br></td></tr
><tr
id=sl_svn99_665

><td class="source">            if (PhoneGap.callbacks[callbackId].fail) {<br></td></tr
><tr
id=sl_svn99_666

><td class="source">                PhoneGap.callbacks[callbackId].fail(args.message);<br></td></tr
><tr
id=sl_svn99_667

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_668

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_669

><td class="source">        catch (e) {<br></td></tr
><tr
id=sl_svn99_670

><td class="source">            console.log(&quot;Error in error callback: &quot;+callbackId+&quot; = &quot;+e);<br></td></tr
><tr
id=sl_svn99_671

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_672

><td class="source"><br></td></tr
><tr
id=sl_svn99_673

><td class="source">        // Clear callback if not expecting any more results<br></td></tr
><tr
id=sl_svn99_674

><td class="source">        if (!args.keepCallback) {<br></td></tr
><tr
id=sl_svn99_675

><td class="source">            delete PhoneGap.callbacks[callbackId];<br></td></tr
><tr
id=sl_svn99_676

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_677

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_678

><td class="source">};<br></td></tr
><tr
id=sl_svn99_679

><td class="source"><br></td></tr
><tr
id=sl_svn99_680

><td class="source"><br></td></tr
><tr
id=sl_svn99_681

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_682

><td class="source"> * Internal function used to dispatch the request to PhoneGap.  It processes the<br></td></tr
><tr
id=sl_svn99_683

><td class="source"> * command queue and executes the next command on the list.  If one of the<br></td></tr
><tr
id=sl_svn99_684

><td class="source"> * arguments is a JavaScript object, it will be passed on the QueryString of the<br></td></tr
><tr
id=sl_svn99_685

><td class="source"> * url, which will be turned into a dictionary on the other end.<br></td></tr
><tr
id=sl_svn99_686

><td class="source"> * @private<br></td></tr
><tr
id=sl_svn99_687

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_688

><td class="source">// TODO: Is this used?<br></td></tr
><tr
id=sl_svn99_689

><td class="source">PhoneGap.run_command = function() {<br></td></tr
><tr
id=sl_svn99_690

><td class="source">    if (!PhoneGap.available || !PhoneGap.queue.ready) {<br></td></tr
><tr
id=sl_svn99_691

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_692

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_693

><td class="source">    PhoneGap.queue.ready = false;<br></td></tr
><tr
id=sl_svn99_694

><td class="source"><br></td></tr
><tr
id=sl_svn99_695

><td class="source">    var args = PhoneGap.queue.commands.shift();<br></td></tr
><tr
id=sl_svn99_696

><td class="source">    if (PhoneGap.queue.commands.length === 0) {<br></td></tr
><tr
id=sl_svn99_697

><td class="source">        clearInterval(PhoneGap.queue.timer);<br></td></tr
><tr
id=sl_svn99_698

><td class="source">        PhoneGap.queue.timer = null;<br></td></tr
><tr
id=sl_svn99_699

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_700

><td class="source"><br></td></tr
><tr
id=sl_svn99_701

><td class="source">    var uri = [];<br></td></tr
><tr
id=sl_svn99_702

><td class="source">    var dict = null;<br></td></tr
><tr
id=sl_svn99_703

><td class="source">    var i;<br></td></tr
><tr
id=sl_svn99_704

><td class="source">    for (i = 1; i &lt; args.length; i++) {<br></td></tr
><tr
id=sl_svn99_705

><td class="source">        var arg = args[i];<br></td></tr
><tr
id=sl_svn99_706

><td class="source">        if (arg === undefined || arg === null) {<br></td></tr
><tr
id=sl_svn99_707

><td class="source">            arg = &#39;&#39;;<br></td></tr
><tr
id=sl_svn99_708

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_709

><td class="source">        if (typeof(arg) === &#39;object&#39;) {<br></td></tr
><tr
id=sl_svn99_710

><td class="source">            dict = arg;<br></td></tr
><tr
id=sl_svn99_711

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn99_712

><td class="source">            uri.push(encodeURIComponent(arg));<br></td></tr
><tr
id=sl_svn99_713

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_714

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_715

><td class="source">    var url = &quot;gap://&quot; + args[0] + &quot;/&quot; + uri.join(&quot;/&quot;);<br></td></tr
><tr
id=sl_svn99_716

><td class="source">    if (dict !== null) {<br></td></tr
><tr
id=sl_svn99_717

><td class="source">        var name;<br></td></tr
><tr
id=sl_svn99_718

><td class="source">        var query_args = [];<br></td></tr
><tr
id=sl_svn99_719

><td class="source">        for (name in dict) {<br></td></tr
><tr
id=sl_svn99_720

><td class="source">            if (dict.hasOwnProperty(name) &amp;&amp; (typeof (name) === &#39;string&#39;)) {<br></td></tr
><tr
id=sl_svn99_721

><td class="source">                query_args.push(encodeURIComponent(name) + &quot;=&quot; + encodeURIComponent(dict[name]));<br></td></tr
><tr
id=sl_svn99_722

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_723

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_724

><td class="source">        if (query_args.length &gt; 0) {<br></td></tr
><tr
id=sl_svn99_725

><td class="source">            url += &quot;?&quot; + query_args.join(&quot;&amp;&quot;);<br></td></tr
><tr
id=sl_svn99_726

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_727

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_728

><td class="source">    document.location = url;<br></td></tr
><tr
id=sl_svn99_729

><td class="source"><br></td></tr
><tr
id=sl_svn99_730

><td class="source">};<br></td></tr
><tr
id=sl_svn99_731

><td class="source"><br></td></tr
><tr
id=sl_svn99_732

><td class="source">PhoneGap.JSCallbackPort = null;<br></td></tr
><tr
id=sl_svn99_733

><td class="source">PhoneGap.JSCallbackToken = null;<br></td></tr
><tr
id=sl_svn99_734

><td class="source"><br></td></tr
><tr
id=sl_svn99_735

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_736

><td class="source"> * This is only for Android.<br></td></tr
><tr
id=sl_svn99_737

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_738

><td class="source"> * Internal function that uses XHR to call into PhoneGap Java code and retrieve<br></td></tr
><tr
id=sl_svn99_739

><td class="source"> * any JavaScript code that needs to be run.  This is used for callbacks from<br></td></tr
><tr
id=sl_svn99_740

><td class="source"> * Java to JavaScript.<br></td></tr
><tr
id=sl_svn99_741

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_742

><td class="source">PhoneGap.JSCallback = function() {<br></td></tr
><tr
id=sl_svn99_743

><td class="source"><br></td></tr
><tr
id=sl_svn99_744

><td class="source">    // Exit if shutting down app<br></td></tr
><tr
id=sl_svn99_745

><td class="source">    if (PhoneGap.shuttingDown) {<br></td></tr
><tr
id=sl_svn99_746

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_747

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_748

><td class="source"><br></td></tr
><tr
id=sl_svn99_749

><td class="source">    // If polling flag was changed, start using polling from now on<br></td></tr
><tr
id=sl_svn99_750

><td class="source">    if (PhoneGap.UsePolling) {<br></td></tr
><tr
id=sl_svn99_751

><td class="source">        PhoneGap.JSCallbackPolling();<br></td></tr
><tr
id=sl_svn99_752

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_753

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_754

><td class="source"><br></td></tr
><tr
id=sl_svn99_755

><td class="source">    var xmlhttp = new XMLHttpRequest();<br></td></tr
><tr
id=sl_svn99_756

><td class="source"><br></td></tr
><tr
id=sl_svn99_757

><td class="source">    // Callback function when XMLHttpRequest is ready<br></td></tr
><tr
id=sl_svn99_758

><td class="source">    xmlhttp.onreadystatechange=function(){<br></td></tr
><tr
id=sl_svn99_759

><td class="source">        if(xmlhttp.readyState === 4){<br></td></tr
><tr
id=sl_svn99_760

><td class="source"><br></td></tr
><tr
id=sl_svn99_761

><td class="source">            // Exit if shutting down app<br></td></tr
><tr
id=sl_svn99_762

><td class="source">            if (PhoneGap.shuttingDown) {<br></td></tr
><tr
id=sl_svn99_763

><td class="source">                return;<br></td></tr
><tr
id=sl_svn99_764

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_765

><td class="source"><br></td></tr
><tr
id=sl_svn99_766

><td class="source">            // If callback has JavaScript statement to execute<br></td></tr
><tr
id=sl_svn99_767

><td class="source">            if (xmlhttp.status === 200) {<br></td></tr
><tr
id=sl_svn99_768

><td class="source"><br></td></tr
><tr
id=sl_svn99_769

><td class="source">                // Need to url decode the response<br></td></tr
><tr
id=sl_svn99_770

><td class="source">                var msg = decodeURIComponent(xmlhttp.responseText);<br></td></tr
><tr
id=sl_svn99_771

><td class="source">                setTimeout(function() {<br></td></tr
><tr
id=sl_svn99_772

><td class="source">                    try {<br></td></tr
><tr
id=sl_svn99_773

><td class="source">                        var t = eval(msg);<br></td></tr
><tr
id=sl_svn99_774

><td class="source">                    }<br></td></tr
><tr
id=sl_svn99_775

><td class="source">                    catch (e) {<br></td></tr
><tr
id=sl_svn99_776

><td class="source">                        // If we&#39;re getting an error here, seeing the message will help in debugging<br></td></tr
><tr
id=sl_svn99_777

><td class="source">                        console.log(&quot;JSCallback: Message from Server: &quot; + msg);<br></td></tr
><tr
id=sl_svn99_778

><td class="source">                        console.log(&quot;JSCallback Error: &quot;+e);<br></td></tr
><tr
id=sl_svn99_779

><td class="source">                    }<br></td></tr
><tr
id=sl_svn99_780

><td class="source">                }, 1);<br></td></tr
><tr
id=sl_svn99_781

><td class="source">                setTimeout(PhoneGap.JSCallback, 1);<br></td></tr
><tr
id=sl_svn99_782

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_783

><td class="source"><br></td></tr
><tr
id=sl_svn99_784

><td class="source">            // If callback ping (used to keep XHR request from timing out)<br></td></tr
><tr
id=sl_svn99_785

><td class="source">            else if (xmlhttp.status === 404) {<br></td></tr
><tr
id=sl_svn99_786

><td class="source">                setTimeout(PhoneGap.JSCallback, 10);<br></td></tr
><tr
id=sl_svn99_787

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_788

><td class="source"><br></td></tr
><tr
id=sl_svn99_789

><td class="source">            // If security error<br></td></tr
><tr
id=sl_svn99_790

><td class="source">            else if (xmlhttp.status === 403) {<br></td></tr
><tr
id=sl_svn99_791

><td class="source">                console.log(&quot;JSCallback Error: Invalid token.  Stopping callbacks.&quot;);<br></td></tr
><tr
id=sl_svn99_792

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_793

><td class="source"><br></td></tr
><tr
id=sl_svn99_794

><td class="source">            // If server is stopping<br></td></tr
><tr
id=sl_svn99_795

><td class="source">            else if (xmlhttp.status === 503) {<br></td></tr
><tr
id=sl_svn99_796

><td class="source">                console.log(&quot;JSCallback Error: Service unavailable.  Stopping callbacks.&quot;);<br></td></tr
><tr
id=sl_svn99_797

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_798

><td class="source"><br></td></tr
><tr
id=sl_svn99_799

><td class="source">            // If request wasn&#39;t GET<br></td></tr
><tr
id=sl_svn99_800

><td class="source">            else if (xmlhttp.status === 400) {<br></td></tr
><tr
id=sl_svn99_801

><td class="source">                console.log(&quot;JSCallback Error: Bad request.  Stopping callbacks.&quot;);<br></td></tr
><tr
id=sl_svn99_802

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_803

><td class="source"><br></td></tr
><tr
id=sl_svn99_804

><td class="source">            // If error, revert to polling<br></td></tr
><tr
id=sl_svn99_805

><td class="source">            else {<br></td></tr
><tr
id=sl_svn99_806

><td class="source">                console.log(&quot;JSCallback Error: Request failed.&quot;);<br></td></tr
><tr
id=sl_svn99_807

><td class="source">                PhoneGap.UsePolling = true;<br></td></tr
><tr
id=sl_svn99_808

><td class="source">                PhoneGap.JSCallbackPolling();<br></td></tr
><tr
id=sl_svn99_809

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_810

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_811

><td class="source">    };<br></td></tr
><tr
id=sl_svn99_812

><td class="source"><br></td></tr
><tr
id=sl_svn99_813

><td class="source">    if (PhoneGap.JSCallbackPort === null) {<br></td></tr
><tr
id=sl_svn99_814

><td class="source">        PhoneGap.JSCallbackPort = prompt(&quot;getPort&quot;, &quot;gap_callbackServer:&quot;);<br></td></tr
><tr
id=sl_svn99_815

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_816

><td class="source">    if (PhoneGap.JSCallbackToken === null) {<br></td></tr
><tr
id=sl_svn99_817

><td class="source">        PhoneGap.JSCallbackToken = prompt(&quot;getToken&quot;, &quot;gap_callbackServer:&quot;);<br></td></tr
><tr
id=sl_svn99_818

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_819

><td class="source">    xmlhttp.open(&quot;GET&quot;, &quot;http://127.0.0.1:&quot;+PhoneGap.JSCallbackPort+&quot;/&quot;+PhoneGap.JSCallbackToken , true);<br></td></tr
><tr
id=sl_svn99_820

><td class="source">    xmlhttp.send();<br></td></tr
><tr
id=sl_svn99_821

><td class="source">};<br></td></tr
><tr
id=sl_svn99_822

><td class="source"><br></td></tr
><tr
id=sl_svn99_823

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_824

><td class="source"> * The polling period to use with JSCallbackPolling.<br></td></tr
><tr
id=sl_svn99_825

><td class="source"> * This can be changed by the application.  The default is 50ms.<br></td></tr
><tr
id=sl_svn99_826

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_827

><td class="source">PhoneGap.JSCallbackPollingPeriod = 50;<br></td></tr
><tr
id=sl_svn99_828

><td class="source"><br></td></tr
><tr
id=sl_svn99_829

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_830

><td class="source"> * Flag that can be set by the user to force polling to be used or force XHR to be used.<br></td></tr
><tr
id=sl_svn99_831

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_832

><td class="source">PhoneGap.UsePolling = false;    // T=use polling, F=use XHR<br></td></tr
><tr
id=sl_svn99_833

><td class="source"><br></td></tr
><tr
id=sl_svn99_834

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_835

><td class="source"> * This is only for Android.<br></td></tr
><tr
id=sl_svn99_836

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_837

><td class="source"> * Internal function that uses polling to call into PhoneGap Java code and retrieve<br></td></tr
><tr
id=sl_svn99_838

><td class="source"> * any JavaScript code that needs to be run.  This is used for callbacks from<br></td></tr
><tr
id=sl_svn99_839

><td class="source"> * Java to JavaScript.<br></td></tr
><tr
id=sl_svn99_840

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_841

><td class="source">PhoneGap.JSCallbackPolling = function() {<br></td></tr
><tr
id=sl_svn99_842

><td class="source"><br></td></tr
><tr
id=sl_svn99_843

><td class="source">    // Exit if shutting down app<br></td></tr
><tr
id=sl_svn99_844

><td class="source">    if (PhoneGap.shuttingDown) {<br></td></tr
><tr
id=sl_svn99_845

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_846

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_847

><td class="source"><br></td></tr
><tr
id=sl_svn99_848

><td class="source">    // If polling flag was changed, stop using polling from now on<br></td></tr
><tr
id=sl_svn99_849

><td class="source">    if (!PhoneGap.UsePolling) {<br></td></tr
><tr
id=sl_svn99_850

><td class="source">        PhoneGap.JSCallback();<br></td></tr
><tr
id=sl_svn99_851

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_852

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_853

><td class="source"><br></td></tr
><tr
id=sl_svn99_854

><td class="source">    var msg = prompt(&quot;&quot;, &quot;gap_poll:&quot;);<br></td></tr
><tr
id=sl_svn99_855

><td class="source">    if (msg) {<br></td></tr
><tr
id=sl_svn99_856

><td class="source">        setTimeout(function() {<br></td></tr
><tr
id=sl_svn99_857

><td class="source">            try {<br></td></tr
><tr
id=sl_svn99_858

><td class="source">                var t = eval(&quot;&quot;+msg);<br></td></tr
><tr
id=sl_svn99_859

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_860

><td class="source">            catch (e) {<br></td></tr
><tr
id=sl_svn99_861

><td class="source">                console.log(&quot;JSCallbackPolling: Message from Server: &quot; + msg);<br></td></tr
><tr
id=sl_svn99_862

><td class="source">                console.log(&quot;JSCallbackPolling Error: &quot;+e);<br></td></tr
><tr
id=sl_svn99_863

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_864

><td class="source">        }, 1);<br></td></tr
><tr
id=sl_svn99_865

><td class="source">        setTimeout(PhoneGap.JSCallbackPolling, 1);<br></td></tr
><tr
id=sl_svn99_866

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_867

><td class="source">    else {<br></td></tr
><tr
id=sl_svn99_868

><td class="source">        setTimeout(PhoneGap.JSCallbackPolling, PhoneGap.JSCallbackPollingPeriod);<br></td></tr
><tr
id=sl_svn99_869

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_870

><td class="source">};<br></td></tr
><tr
id=sl_svn99_871

><td class="source"><br></td></tr
><tr
id=sl_svn99_872

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_873

><td class="source"> * Create a UUID<br></td></tr
><tr
id=sl_svn99_874

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_875

><td class="source"> * @return {String}<br></td></tr
><tr
id=sl_svn99_876

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_877

><td class="source">PhoneGap.createUUID = function() {<br></td></tr
><tr
id=sl_svn99_878

><td class="source">    return PhoneGap.UUIDcreatePart(4) + &#39;-&#39; +<br></td></tr
><tr
id=sl_svn99_879

><td class="source">        PhoneGap.UUIDcreatePart(2) + &#39;-&#39; +<br></td></tr
><tr
id=sl_svn99_880

><td class="source">        PhoneGap.UUIDcreatePart(2) + &#39;-&#39; +<br></td></tr
><tr
id=sl_svn99_881

><td class="source">        PhoneGap.UUIDcreatePart(2) + &#39;-&#39; +<br></td></tr
><tr
id=sl_svn99_882

><td class="source">        PhoneGap.UUIDcreatePart(6);<br></td></tr
><tr
id=sl_svn99_883

><td class="source">};<br></td></tr
><tr
id=sl_svn99_884

><td class="source"><br></td></tr
><tr
id=sl_svn99_885

><td class="source">PhoneGap.UUIDcreatePart = function(length) {<br></td></tr
><tr
id=sl_svn99_886

><td class="source">    var uuidpart = &quot;&quot;;<br></td></tr
><tr
id=sl_svn99_887

><td class="source">    var i, uuidchar;<br></td></tr
><tr
id=sl_svn99_888

><td class="source">    for (i=0; i&lt;length; i++) {<br></td></tr
><tr
id=sl_svn99_889

><td class="source">        uuidchar = parseInt((Math.random() * 256),0).toString(16);<br></td></tr
><tr
id=sl_svn99_890

><td class="source">        if (uuidchar.length === 1) {<br></td></tr
><tr
id=sl_svn99_891

><td class="source">            uuidchar = &quot;0&quot; + uuidchar;<br></td></tr
><tr
id=sl_svn99_892

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_893

><td class="source">        uuidpart += uuidchar;<br></td></tr
><tr
id=sl_svn99_894

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_895

><td class="source">    return uuidpart;<br></td></tr
><tr
id=sl_svn99_896

><td class="source">};<br></td></tr
><tr
id=sl_svn99_897

><td class="source"><br></td></tr
><tr
id=sl_svn99_898

><td class="source">PhoneGap.close = function(context, func, params) {<br></td></tr
><tr
id=sl_svn99_899

><td class="source">    if (typeof params === &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn99_900

><td class="source">        return function() {<br></td></tr
><tr
id=sl_svn99_901

><td class="source">            return func.apply(context, arguments);<br></td></tr
><tr
id=sl_svn99_902

><td class="source">        };<br></td></tr
><tr
id=sl_svn99_903

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn99_904

><td class="source">        return function() {<br></td></tr
><tr
id=sl_svn99_905

><td class="source">            return func.apply(context, params);<br></td></tr
><tr
id=sl_svn99_906

><td class="source">        };<br></td></tr
><tr
id=sl_svn99_907

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_908

><td class="source">};<br></td></tr
><tr
id=sl_svn99_909

><td class="source"><br></td></tr
><tr
id=sl_svn99_910

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_911

><td class="source"> * Load a JavaScript file after page has loaded.<br></td></tr
><tr
id=sl_svn99_912

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_913

><td class="source"> * @param {String} jsfile               The url of the JavaScript file to load.<br></td></tr
><tr
id=sl_svn99_914

><td class="source"> * @param {Function} successCallback    The callback to call when the file has been loaded.<br></td></tr
><tr
id=sl_svn99_915

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_916

><td class="source">PhoneGap.includeJavascript = function(jsfile, successCallback) {<br></td></tr
><tr
id=sl_svn99_917

><td class="source">    var id = document.getElementsByTagName(&quot;head&quot;)[0];<br></td></tr
><tr
id=sl_svn99_918

><td class="source">    var el = document.createElement(&#39;script&#39;);<br></td></tr
><tr
id=sl_svn99_919

><td class="source">    el.type = &#39;text/javascript&#39;;<br></td></tr
><tr
id=sl_svn99_920

><td class="source">    if (typeof successCallback === &#39;function&#39;) {<br></td></tr
><tr
id=sl_svn99_921

><td class="source">        el.onload = successCallback;<br></td></tr
><tr
id=sl_svn99_922

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_923

><td class="source">    el.src = jsfile;<br></td></tr
><tr
id=sl_svn99_924

><td class="source">    id.appendChild(el);<br></td></tr
><tr
id=sl_svn99_925

><td class="source">};<br></td></tr
><tr
id=sl_svn99_926

><td class="source"><br></td></tr
><tr
id=sl_svn99_927

><td class="source">}<br></td></tr
><tr
id=sl_svn99_928

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_929

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_930

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_931

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_932

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_933

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_934

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_935

><td class="source"><br></td></tr
><tr
id=sl_svn99_936

><td class="source">if (!PhoneGap.hasResource(&quot;accelerometer&quot;)) {<br></td></tr
><tr
id=sl_svn99_937

><td class="source">PhoneGap.addResource(&quot;accelerometer&quot;);<br></td></tr
><tr
id=sl_svn99_938

><td class="source"><br></td></tr
><tr
id=sl_svn99_939

><td class="source">/** @constructor */<br></td></tr
><tr
id=sl_svn99_940

><td class="source">var Acceleration = function(x, y, z) {<br></td></tr
><tr
id=sl_svn99_941

><td class="source">  this.x = x;<br></td></tr
><tr
id=sl_svn99_942

><td class="source">  this.y = y;<br></td></tr
><tr
id=sl_svn99_943

><td class="source">  this.z = z;<br></td></tr
><tr
id=sl_svn99_944

><td class="source">  this.timestamp = new Date().getTime();<br></td></tr
><tr
id=sl_svn99_945

><td class="source">};<br></td></tr
><tr
id=sl_svn99_946

><td class="source"><br></td></tr
><tr
id=sl_svn99_947

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_948

><td class="source"> * This class provides access to device accelerometer data.<br></td></tr
><tr
id=sl_svn99_949

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_950

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_951

><td class="source">var Accelerometer = function() {<br></td></tr
><tr
id=sl_svn99_952

><td class="source"><br></td></tr
><tr
id=sl_svn99_953

><td class="source">    /**<br></td></tr
><tr
id=sl_svn99_954

><td class="source">     * The last known acceleration.  type=Acceleration()<br></td></tr
><tr
id=sl_svn99_955

><td class="source">     */<br></td></tr
><tr
id=sl_svn99_956

><td class="source">    this.lastAcceleration = null;<br></td></tr
><tr
id=sl_svn99_957

><td class="source"><br></td></tr
><tr
id=sl_svn99_958

><td class="source">    /**<br></td></tr
><tr
id=sl_svn99_959

><td class="source">     * List of accelerometer watch timers<br></td></tr
><tr
id=sl_svn99_960

><td class="source">     */<br></td></tr
><tr
id=sl_svn99_961

><td class="source">    this.timers = {};<br></td></tr
><tr
id=sl_svn99_962

><td class="source">};<br></td></tr
><tr
id=sl_svn99_963

><td class="source"><br></td></tr
><tr
id=sl_svn99_964

><td class="source">Accelerometer.ERROR_MSG = [&quot;Not running&quot;, &quot;Starting&quot;, &quot;&quot;, &quot;Failed to start&quot;];<br></td></tr
><tr
id=sl_svn99_965

><td class="source"><br></td></tr
><tr
id=sl_svn99_966

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_967

><td class="source"> * Asynchronously aquires the current acceleration.<br></td></tr
><tr
id=sl_svn99_968

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_969

><td class="source"> * @param {Function} successCallback    The function to call when the acceleration data is available<br></td></tr
><tr
id=sl_svn99_970

><td class="source"> * @param {Function} errorCallback      The function to call when there is an error getting the acceleration data. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_971

><td class="source"> * @param {AccelerationOptions} options The options for getting the accelerometer data such as timeout. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_972

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_973

><td class="source">Accelerometer.prototype.getCurrentAcceleration = function(successCallback, errorCallback, options) {<br></td></tr
><tr
id=sl_svn99_974

><td class="source"><br></td></tr
><tr
id=sl_svn99_975

><td class="source">    // successCallback required<br></td></tr
><tr
id=sl_svn99_976

><td class="source">    if (typeof successCallback !== &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_977

><td class="source">        console.log(&quot;Accelerometer Error: successCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_978

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_979

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_980

><td class="source"><br></td></tr
><tr
id=sl_svn99_981

><td class="source">    // errorCallback optional<br></td></tr
><tr
id=sl_svn99_982

><td class="source">    if (errorCallback &amp;&amp; (typeof errorCallback !== &quot;function&quot;)) {<br></td></tr
><tr
id=sl_svn99_983

><td class="source">        console.log(&quot;Accelerometer Error: errorCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_984

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_985

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_986

><td class="source"><br></td></tr
><tr
id=sl_svn99_987

><td class="source">    // Get acceleration<br></td></tr
><tr
id=sl_svn99_988

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;Accelerometer&quot;, &quot;getAcceleration&quot;, []);<br></td></tr
><tr
id=sl_svn99_989

><td class="source">};<br></td></tr
><tr
id=sl_svn99_990

><td class="source"><br></td></tr
><tr
id=sl_svn99_991

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_992

><td class="source"> * Asynchronously aquires the acceleration repeatedly at a given interval.<br></td></tr
><tr
id=sl_svn99_993

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_994

><td class="source"> * @param {Function} successCallback    The function to call each time the acceleration data is available<br></td></tr
><tr
id=sl_svn99_995

><td class="source"> * @param {Function} errorCallback      The function to call when there is an error getting the acceleration data. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_996

><td class="source"> * @param {AccelerationOptions} options The options for getting the accelerometer data such as timeout. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_997

><td class="source"> * @return String                       The watch id that must be passed to #clearWatch to stop watching.<br></td></tr
><tr
id=sl_svn99_998

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_999

><td class="source">Accelerometer.prototype.watchAcceleration = function(successCallback, errorCallback, options) {<br></td></tr
><tr
id=sl_svn99_1000

><td class="source"><br></td></tr
><tr
id=sl_svn99_1001

><td class="source">    // Default interval (10 sec)<br></td></tr
><tr
id=sl_svn99_1002

><td class="source">    var frequency = (options !== undefined)? options.frequency : 10000;<br></td></tr
><tr
id=sl_svn99_1003

><td class="source"><br></td></tr
><tr
id=sl_svn99_1004

><td class="source">    // successCallback required<br></td></tr
><tr
id=sl_svn99_1005

><td class="source">    if (typeof successCallback !== &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_1006

><td class="source">        console.log(&quot;Accelerometer Error: successCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_1007

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_1008

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1009

><td class="source"><br></td></tr
><tr
id=sl_svn99_1010

><td class="source">    // errorCallback optional<br></td></tr
><tr
id=sl_svn99_1011

><td class="source">    if (errorCallback &amp;&amp; (typeof errorCallback !== &quot;function&quot;)) {<br></td></tr
><tr
id=sl_svn99_1012

><td class="source">        console.log(&quot;Accelerometer Error: errorCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_1013

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_1014

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1015

><td class="source"><br></td></tr
><tr
id=sl_svn99_1016

><td class="source">    // Make sure accelerometer timeout &gt; frequency + 10 sec<br></td></tr
><tr
id=sl_svn99_1017

><td class="source">    PhoneGap.exec(<br></td></tr
><tr
id=sl_svn99_1018

><td class="source">        function(timeout) {<br></td></tr
><tr
id=sl_svn99_1019

><td class="source">            if (timeout &lt; (frequency + 10000)) {<br></td></tr
><tr
id=sl_svn99_1020

><td class="source">                PhoneGap.exec(null, null, &quot;Accelerometer&quot;, &quot;setTimeout&quot;, [frequency + 10000]);<br></td></tr
><tr
id=sl_svn99_1021

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_1022

><td class="source">        },<br></td></tr
><tr
id=sl_svn99_1023

><td class="source">        function(e) { }, &quot;Accelerometer&quot;, &quot;getTimeout&quot;, []);<br></td></tr
><tr
id=sl_svn99_1024

><td class="source"><br></td></tr
><tr
id=sl_svn99_1025

><td class="source">    // Start watch timer<br></td></tr
><tr
id=sl_svn99_1026

><td class="source">    var id = PhoneGap.createUUID();<br></td></tr
><tr
id=sl_svn99_1027

><td class="source">    navigator.accelerometer.timers[id] = setInterval(function() {<br></td></tr
><tr
id=sl_svn99_1028

><td class="source">        PhoneGap.exec(successCallback, errorCallback, &quot;Accelerometer&quot;, &quot;getAcceleration&quot;, []);<br></td></tr
><tr
id=sl_svn99_1029

><td class="source">    }, (frequency ? frequency : 1));<br></td></tr
><tr
id=sl_svn99_1030

><td class="source"><br></td></tr
><tr
id=sl_svn99_1031

><td class="source">    return id;<br></td></tr
><tr
id=sl_svn99_1032

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1033

><td class="source"><br></td></tr
><tr
id=sl_svn99_1034

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1035

><td class="source"> * Clears the specified accelerometer watch.<br></td></tr
><tr
id=sl_svn99_1036

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1037

><td class="source"> * @param {String} id       The id of the watch returned from #watchAcceleration.<br></td></tr
><tr
id=sl_svn99_1038

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1039

><td class="source">Accelerometer.prototype.clearWatch = function(id) {<br></td></tr
><tr
id=sl_svn99_1040

><td class="source"><br></td></tr
><tr
id=sl_svn99_1041

><td class="source">    // Stop javascript timer &amp; remove from timer list<br></td></tr
><tr
id=sl_svn99_1042

><td class="source">    if (id &amp;&amp; navigator.accelerometer.timers[id] !== undefined) {<br></td></tr
><tr
id=sl_svn99_1043

><td class="source">        clearInterval(navigator.accelerometer.timers[id]);<br></td></tr
><tr
id=sl_svn99_1044

><td class="source">        delete navigator.accelerometer.timers[id];<br></td></tr
><tr
id=sl_svn99_1045

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1046

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1047

><td class="source"><br></td></tr
><tr
id=sl_svn99_1048

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_1049

><td class="source">    if (typeof navigator.accelerometer === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_1050

><td class="source">        navigator.accelerometer = new Accelerometer();<br></td></tr
><tr
id=sl_svn99_1051

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1052

><td class="source">});<br></td></tr
><tr
id=sl_svn99_1053

><td class="source">}<br></td></tr
><tr
id=sl_svn99_1054

><td class="source"><br></td></tr
><tr
id=sl_svn99_1055

><td class="source"><br></td></tr
><tr
id=sl_svn99_1056

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_1057

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_1058

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_1059

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1060

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_1061

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_1062

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1063

><td class="source"><br></td></tr
><tr
id=sl_svn99_1064

><td class="source">if (!PhoneGap.hasResource(&quot;app&quot;)) {<br></td></tr
><tr
id=sl_svn99_1065

><td class="source">PhoneGap.addResource(&quot;app&quot;);<br></td></tr
><tr
id=sl_svn99_1066

><td class="source">(function() {<br></td></tr
><tr
id=sl_svn99_1067

><td class="source"><br></td></tr
><tr
id=sl_svn99_1068

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1069

><td class="source"> * Constructor<br></td></tr
><tr
id=sl_svn99_1070

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_1071

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1072

><td class="source">var App = function() {};<br></td></tr
><tr
id=sl_svn99_1073

><td class="source"><br></td></tr
><tr
id=sl_svn99_1074

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1075

><td class="source"> * Clear the resource cache.<br></td></tr
><tr
id=sl_svn99_1076

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1077

><td class="source">App.prototype.clearCache = function() {<br></td></tr
><tr
id=sl_svn99_1078

><td class="source">    PhoneGap.exec(null, null, &quot;App&quot;, &quot;clearCache&quot;, []);<br></td></tr
><tr
id=sl_svn99_1079

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1080

><td class="source"><br></td></tr
><tr
id=sl_svn99_1081

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1082

><td class="source"> * Load the url into the webview.<br></td></tr
><tr
id=sl_svn99_1083

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1084

><td class="source"> * @param url           The URL to load<br></td></tr
><tr
id=sl_svn99_1085

><td class="source"> * @param props         Properties that can be passed in to the activity:<br></td></tr
><tr
id=sl_svn99_1086

><td class="source"> *      wait: int                           =&gt; wait msec before loading URL<br></td></tr
><tr
id=sl_svn99_1087

><td class="source"> *      loadingDialog: &quot;Title,Message&quot;      =&gt; display a native loading dialog<br></td></tr
><tr
id=sl_svn99_1088

><td class="source"> *      hideLoadingDialogOnPage: boolean    =&gt; hide loadingDialog when page loaded instead of when deviceready event occurs.<br></td></tr
><tr
id=sl_svn99_1089

><td class="source"> *      loadInWebView: boolean              =&gt; cause all links on web page to be loaded into existing web view, instead of being loaded into new browser.<br></td></tr
><tr
id=sl_svn99_1090

><td class="source"> *      loadUrlTimeoutValue: int            =&gt; time in msec to wait before triggering a timeout error<br></td></tr
><tr
id=sl_svn99_1091

><td class="source"> *      errorUrl: URL                       =&gt; URL to load if there&#39;s an error loading specified URL with loadUrl().  Should be a local URL such as file:///android_asset/www/error.html&quot;);<br></td></tr
><tr
id=sl_svn99_1092

><td class="source"> *      keepRunning: boolean                =&gt; enable app to keep running in background<br></td></tr
><tr
id=sl_svn99_1093

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1094

><td class="source"> * Example:<br></td></tr
><tr
id=sl_svn99_1095

><td class="source"> *      App app = new App();<br></td></tr
><tr
id=sl_svn99_1096

><td class="source"> *      app.loadUrl(&quot;http://server/myapp/index.html&quot;, {wait:2000, loadingDialog:&quot;Wait,Loading App&quot;, loadUrlTimeoutValue: 60000});<br></td></tr
><tr
id=sl_svn99_1097

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1098

><td class="source">App.prototype.loadUrl = function(url, props) {<br></td></tr
><tr
id=sl_svn99_1099

><td class="source">    PhoneGap.exec(null, null, &quot;App&quot;, &quot;loadUrl&quot;, [url, props]);<br></td></tr
><tr
id=sl_svn99_1100

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1101

><td class="source"><br></td></tr
><tr
id=sl_svn99_1102

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1103

><td class="source"> * Cancel loadUrl that is waiting to be loaded.<br></td></tr
><tr
id=sl_svn99_1104

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1105

><td class="source">App.prototype.cancelLoadUrl = function() {<br></td></tr
><tr
id=sl_svn99_1106

><td class="source">    PhoneGap.exec(null, null, &quot;App&quot;, &quot;cancelLoadUrl&quot;, []);<br></td></tr
><tr
id=sl_svn99_1107

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1108

><td class="source"><br></td></tr
><tr
id=sl_svn99_1109

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1110

><td class="source"> * Clear web history in this web view.<br></td></tr
><tr
id=sl_svn99_1111

><td class="source"> * Instead of BACK button loading the previous web page, it will exit the app.<br></td></tr
><tr
id=sl_svn99_1112

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1113

><td class="source">App.prototype.clearHistory = function() {<br></td></tr
><tr
id=sl_svn99_1114

><td class="source">    PhoneGap.exec(null, null, &quot;App&quot;, &quot;clearHistory&quot;, []);<br></td></tr
><tr
id=sl_svn99_1115

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1116

><td class="source"><br></td></tr
><tr
id=sl_svn99_1117

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1118

><td class="source"> * Override the default behavior of the Android back button.<br></td></tr
><tr
id=sl_svn99_1119

><td class="source"> * If overridden, when the back button is pressed, the &quot;backKeyDown&quot; JavaScript event will be fired.<br></td></tr
><tr
id=sl_svn99_1120

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1121

><td class="source"> * Note: The user should not have to call this method.  Instead, when the user<br></td></tr
><tr
id=sl_svn99_1122

><td class="source"> *       registers for the &quot;backbutton&quot; event, this is automatically done.<br></td></tr
><tr
id=sl_svn99_1123

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1124

><td class="source"> * @param override		T=override, F=cancel override<br></td></tr
><tr
id=sl_svn99_1125

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1126

><td class="source">App.prototype.overrideBackbutton = function(override) {<br></td></tr
><tr
id=sl_svn99_1127

><td class="source">    PhoneGap.exec(null, null, &quot;App&quot;, &quot;overrideBackbutton&quot;, [override]);<br></td></tr
><tr
id=sl_svn99_1128

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1129

><td class="source"><br></td></tr
><tr
id=sl_svn99_1130

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1131

><td class="source"> * Exit and terminate the application.<br></td></tr
><tr
id=sl_svn99_1132

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1133

><td class="source">App.prototype.exitApp = function() {<br></td></tr
><tr
id=sl_svn99_1134

><td class="source">	return PhoneGap.exec(null, null, &quot;App&quot;, &quot;exitApp&quot;, []);<br></td></tr
><tr
id=sl_svn99_1135

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1136

><td class="source"><br></td></tr
><tr
id=sl_svn99_1137

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_1138

><td class="source">    navigator.app = new App();<br></td></tr
><tr
id=sl_svn99_1139

><td class="source">});<br></td></tr
><tr
id=sl_svn99_1140

><td class="source">}());<br></td></tr
><tr
id=sl_svn99_1141

><td class="source">}<br></td></tr
><tr
id=sl_svn99_1142

><td class="source"><br></td></tr
><tr
id=sl_svn99_1143

><td class="source"><br></td></tr
><tr
id=sl_svn99_1144

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_1145

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_1146

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_1147

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1148

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_1149

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_1150

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1151

><td class="source"><br></td></tr
><tr
id=sl_svn99_1152

><td class="source">if (!PhoneGap.hasResource(&quot;camera&quot;)) {<br></td></tr
><tr
id=sl_svn99_1153

><td class="source">PhoneGap.addResource(&quot;camera&quot;);<br></td></tr
><tr
id=sl_svn99_1154

><td class="source"><br></td></tr
><tr
id=sl_svn99_1155

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1156

><td class="source"> * This class provides access to the device camera.<br></td></tr
><tr
id=sl_svn99_1157

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1158

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_1159

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1160

><td class="source">var Camera = function() {<br></td></tr
><tr
id=sl_svn99_1161

><td class="source">    this.successCallback = null;<br></td></tr
><tr
id=sl_svn99_1162

><td class="source">    this.errorCallback = null;<br></td></tr
><tr
id=sl_svn99_1163

><td class="source">    this.options = null;<br></td></tr
><tr
id=sl_svn99_1164

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1165

><td class="source"><br></td></tr
><tr
id=sl_svn99_1166

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1167

><td class="source"> * Format of image that returned from getPicture.<br></td></tr
><tr
id=sl_svn99_1168

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1169

><td class="source"> * Example: navigator.camera.getPicture(success, fail,<br></td></tr
><tr
id=sl_svn99_1170

><td class="source"> *              { quality: 80,<br></td></tr
><tr
id=sl_svn99_1171

><td class="source"> *                destinationType: Camera.DestinationType.DATA_URL,<br></td></tr
><tr
id=sl_svn99_1172

><td class="source"> *                sourceType: Camera.PictureSourceType.PHOTOLIBRARY})<br></td></tr
><tr
id=sl_svn99_1173

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1174

><td class="source">Camera.DestinationType = {<br></td></tr
><tr
id=sl_svn99_1175

><td class="source">    DATA_URL: 0,                // Return base64 encoded string<br></td></tr
><tr
id=sl_svn99_1176

><td class="source">    FILE_URI: 1                 // Return file uri (content://media/external/images/media/2 for Android)<br></td></tr
><tr
id=sl_svn99_1177

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1178

><td class="source">Camera.prototype.DestinationType = Camera.DestinationType;<br></td></tr
><tr
id=sl_svn99_1179

><td class="source"><br></td></tr
><tr
id=sl_svn99_1180

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1181

><td class="source"> * Encoding of image returned from getPicture.<br></td></tr
><tr
id=sl_svn99_1182

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1183

><td class="source"> * Example: navigator.camera.getPicture(success, fail,<br></td></tr
><tr
id=sl_svn99_1184

><td class="source"> *              { quality: 80,<br></td></tr
><tr
id=sl_svn99_1185

><td class="source"> *                destinationType: Camera.DestinationType.DATA_URL,<br></td></tr
><tr
id=sl_svn99_1186

><td class="source"> *                sourceType: Camera.PictureSourceType.CAMERA,<br></td></tr
><tr
id=sl_svn99_1187

><td class="source"> *                encodingType: Camera.EncodingType.PNG})<br></td></tr
><tr
id=sl_svn99_1188

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1189

><td class="source">Camera.EncodingType = {<br></td></tr
><tr
id=sl_svn99_1190

><td class="source">    JPEG: 0,                    // Return JPEG encoded image<br></td></tr
><tr
id=sl_svn99_1191

><td class="source">    PNG: 1                      // Return PNG encoded image<br></td></tr
><tr
id=sl_svn99_1192

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1193

><td class="source">Camera.prototype.EncodingType = Camera.EncodingType;<br></td></tr
><tr
id=sl_svn99_1194

><td class="source"><br></td></tr
><tr
id=sl_svn99_1195

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1196

><td class="source"> * Source to getPicture from.<br></td></tr
><tr
id=sl_svn99_1197

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1198

><td class="source"> * Example: navigator.camera.getPicture(success, fail,<br></td></tr
><tr
id=sl_svn99_1199

><td class="source"> *              { quality: 80,<br></td></tr
><tr
id=sl_svn99_1200

><td class="source"> *                destinationType: Camera.DestinationType.DATA_URL,<br></td></tr
><tr
id=sl_svn99_1201

><td class="source"> *                sourceType: Camera.PictureSourceType.PHOTOLIBRARY})<br></td></tr
><tr
id=sl_svn99_1202

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1203

><td class="source">Camera.PictureSourceType = {<br></td></tr
><tr
id=sl_svn99_1204

><td class="source">    PHOTOLIBRARY : 0,           // Choose image from picture library (same as SAVEDPHOTOALBUM for Android)<br></td></tr
><tr
id=sl_svn99_1205

><td class="source">    CAMERA : 1,                 // Take picture from camera<br></td></tr
><tr
id=sl_svn99_1206

><td class="source">    SAVEDPHOTOALBUM : 2         // Choose image from picture library (same as PHOTOLIBRARY for Android)<br></td></tr
><tr
id=sl_svn99_1207

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1208

><td class="source">Camera.prototype.PictureSourceType = Camera.PictureSourceType;<br></td></tr
><tr
id=sl_svn99_1209

><td class="source"><br></td></tr
><tr
id=sl_svn99_1210

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1211

><td class="source"> * Gets a picture from source defined by &quot;options.sourceType&quot;, and returns the<br></td></tr
><tr
id=sl_svn99_1212

><td class="source"> * image as defined by the &quot;options.destinationType&quot; option.<br></td></tr
><tr
id=sl_svn99_1213

><td class="source"><br></td></tr
><tr
id=sl_svn99_1214

><td class="source"> * The defaults are sourceType=CAMERA and destinationType=DATA_URL.<br></td></tr
><tr
id=sl_svn99_1215

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1216

><td class="source"> * @param {Function} successCallback<br></td></tr
><tr
id=sl_svn99_1217

><td class="source"> * @param {Function} errorCallback<br></td></tr
><tr
id=sl_svn99_1218

><td class="source"> * @param {Object} options<br></td></tr
><tr
id=sl_svn99_1219

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1220

><td class="source">Camera.prototype.getPicture = function(successCallback, errorCallback, options) {<br></td></tr
><tr
id=sl_svn99_1221

><td class="source"><br></td></tr
><tr
id=sl_svn99_1222

><td class="source">    // successCallback required<br></td></tr
><tr
id=sl_svn99_1223

><td class="source">    if (typeof successCallback !== &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_1224

><td class="source">        console.log(&quot;Camera Error: successCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_1225

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_1226

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1227

><td class="source"><br></td></tr
><tr
id=sl_svn99_1228

><td class="source">    // errorCallback optional<br></td></tr
><tr
id=sl_svn99_1229

><td class="source">    if (errorCallback &amp;&amp; (typeof errorCallback !== &quot;function&quot;)) {<br></td></tr
><tr
id=sl_svn99_1230

><td class="source">        console.log(&quot;Camera Error: errorCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_1231

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_1232

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1233

><td class="source"><br></td></tr
><tr
id=sl_svn99_1234

><td class="source">    this.options = options;<br></td></tr
><tr
id=sl_svn99_1235

><td class="source">    var quality = 80;<br></td></tr
><tr
id=sl_svn99_1236

><td class="source">    if (options.quality) {<br></td></tr
><tr
id=sl_svn99_1237

><td class="source">        quality = this.options.quality;<br></td></tr
><tr
id=sl_svn99_1238

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1239

><td class="source">    <br></td></tr
><tr
id=sl_svn99_1240

><td class="source">    var maxResolution = 0;<br></td></tr
><tr
id=sl_svn99_1241

><td class="source">    if (options.maxResolution) {<br></td></tr
><tr
id=sl_svn99_1242

><td class="source">    	maxResolution = this.options.maxResolution;<br></td></tr
><tr
id=sl_svn99_1243

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1244

><td class="source">    <br></td></tr
><tr
id=sl_svn99_1245

><td class="source">    var destinationType = Camera.DestinationType.DATA_URL;<br></td></tr
><tr
id=sl_svn99_1246

><td class="source">    if (this.options.destinationType) {<br></td></tr
><tr
id=sl_svn99_1247

><td class="source">        destinationType = this.options.destinationType;<br></td></tr
><tr
id=sl_svn99_1248

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1249

><td class="source">    var sourceType = Camera.PictureSourceType.CAMERA;<br></td></tr
><tr
id=sl_svn99_1250

><td class="source">    if (typeof this.options.sourceType === &quot;number&quot;) {<br></td></tr
><tr
id=sl_svn99_1251

><td class="source">        sourceType = this.options.sourceType;<br></td></tr
><tr
id=sl_svn99_1252

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1253

><td class="source">    var encodingType = Camera.EncodingType.JPEG;<br></td></tr
><tr
id=sl_svn99_1254

><td class="source">    if (typeof options.encodingType == &quot;number&quot;) {<br></td></tr
><tr
id=sl_svn99_1255

><td class="source">        encodingType = this.options.encodingType;<br></td></tr
><tr
id=sl_svn99_1256

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1257

><td class="source">    <br></td></tr
><tr
id=sl_svn99_1258

><td class="source">    var targetWidth = -1;<br></td></tr
><tr
id=sl_svn99_1259

><td class="source">    if (typeof options.targetWidth == &quot;number&quot;) {<br></td></tr
><tr
id=sl_svn99_1260

><td class="source">        targetWidth = options.targetWidth;<br></td></tr
><tr
id=sl_svn99_1261

><td class="source">    } else if (typeof options.targetWidth == &quot;string&quot;) {<br></td></tr
><tr
id=sl_svn99_1262

><td class="source">        var width = new Number(options.targetWidth);<br></td></tr
><tr
id=sl_svn99_1263

><td class="source">        if (isNaN(width) === false) {<br></td></tr
><tr
id=sl_svn99_1264

><td class="source">            targetWidth = width.valueOf();<br></td></tr
><tr
id=sl_svn99_1265

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1266

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1267

><td class="source"><br></td></tr
><tr
id=sl_svn99_1268

><td class="source">    var targetHeight = -1;<br></td></tr
><tr
id=sl_svn99_1269

><td class="source">    if (typeof options.targetHeight == &quot;number&quot;) {<br></td></tr
><tr
id=sl_svn99_1270

><td class="source">        targetHeight = options.targetHeight;<br></td></tr
><tr
id=sl_svn99_1271

><td class="source">    } else if (typeof options.targetHeight == &quot;string&quot;) {<br></td></tr
><tr
id=sl_svn99_1272

><td class="source">        var height = new Number(options.targetHeight);<br></td></tr
><tr
id=sl_svn99_1273

><td class="source">        if (isNaN(height) === false) {<br></td></tr
><tr
id=sl_svn99_1274

><td class="source">            targetHeight = height.valueOf();<br></td></tr
><tr
id=sl_svn99_1275

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1276

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1277

><td class="source">    <br></td></tr
><tr
id=sl_svn99_1278

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;Camera&quot;, &quot;takePicture&quot;, [quality, destinationType, sourceType, targetWidth, targetHeight, encodingType]);<br></td></tr
><tr
id=sl_svn99_1279

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1280

><td class="source"><br></td></tr
><tr
id=sl_svn99_1281

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_1282

><td class="source">    if (typeof navigator.camera === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_1283

><td class="source">        navigator.camera = new Camera();<br></td></tr
><tr
id=sl_svn99_1284

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1285

><td class="source">});<br></td></tr
><tr
id=sl_svn99_1286

><td class="source">}<br></td></tr
><tr
id=sl_svn99_1287

><td class="source"><br></td></tr
><tr
id=sl_svn99_1288

><td class="source"><br></td></tr
><tr
id=sl_svn99_1289

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_1290

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_1291

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_1292

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1293

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_1294

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_1295

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1296

><td class="source"><br></td></tr
><tr
id=sl_svn99_1297

><td class="source">if (!PhoneGap.hasResource(&quot;capture&quot;)) {<br></td></tr
><tr
id=sl_svn99_1298

><td class="source">PhoneGap.addResource(&quot;capture&quot;);<br></td></tr
><tr
id=sl_svn99_1299

><td class="source">	<br></td></tr
><tr
id=sl_svn99_1300

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1301

><td class="source"> * Represents a single file.<br></td></tr
><tr
id=sl_svn99_1302

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1303

><td class="source"> * name {DOMString} name of the file, without path information<br></td></tr
><tr
id=sl_svn99_1304

><td class="source"> * fullPath {DOMString} the full path of the file, including the name<br></td></tr
><tr
id=sl_svn99_1305

><td class="source"> * type {DOMString} mime type<br></td></tr
><tr
id=sl_svn99_1306

><td class="source"> * lastModifiedDate {Date} last modified date<br></td></tr
><tr
id=sl_svn99_1307

><td class="source"> * size {Number} size of the file in bytes<br></td></tr
><tr
id=sl_svn99_1308

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1309

><td class="source">var MediaFile = function(name, fullPath, type, lastModifiedDate, size){<br></td></tr
><tr
id=sl_svn99_1310

><td class="source">	this.name = name || null;<br></td></tr
><tr
id=sl_svn99_1311

><td class="source">	this.fullPath = fullPath || null;<br></td></tr
><tr
id=sl_svn99_1312

><td class="source">	this.type = type || null;<br></td></tr
><tr
id=sl_svn99_1313

><td class="source">	this.lastModifiedDate = lastModifiedDate || null;<br></td></tr
><tr
id=sl_svn99_1314

><td class="source">	this.size = size || 0;<br></td></tr
><tr
id=sl_svn99_1315

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1316

><td class="source"><br></td></tr
><tr
id=sl_svn99_1317

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1318

><td class="source"> * Launch device camera application for recording video(s).<br></td></tr
><tr
id=sl_svn99_1319

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1320

><td class="source"> * @param {Function} successCB<br></td></tr
><tr
id=sl_svn99_1321

><td class="source"> * @param {Function} errorCB<br></td></tr
><tr
id=sl_svn99_1322

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1323

><td class="source">MediaFile.prototype.getFormatData = function(successCallback, errorCallback){<br></td></tr
><tr
id=sl_svn99_1324

><td class="source">	PhoneGap.exec(successCallback, errorCallback, &quot;Capture&quot;, &quot;getFormatData&quot;, [this.fullPath, this.type]);<br></td></tr
><tr
id=sl_svn99_1325

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1326

><td class="source"><br></td></tr
><tr
id=sl_svn99_1327

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1328

><td class="source"> * MediaFileData encapsulates format information of a media file.<br></td></tr
><tr
id=sl_svn99_1329

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1330

><td class="source"> * @param {DOMString} codecs<br></td></tr
><tr
id=sl_svn99_1331

><td class="source"> * @param {long} bitrate<br></td></tr
><tr
id=sl_svn99_1332

><td class="source"> * @param {long} height<br></td></tr
><tr
id=sl_svn99_1333

><td class="source"> * @param {long} width<br></td></tr
><tr
id=sl_svn99_1334

><td class="source"> * @param {float} duration<br></td></tr
><tr
id=sl_svn99_1335

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1336

><td class="source">var MediaFileData = function(codecs, bitrate, height, width, duration){<br></td></tr
><tr
id=sl_svn99_1337

><td class="source">	this.codecs = codecs || null;<br></td></tr
><tr
id=sl_svn99_1338

><td class="source">	this.bitrate = bitrate || 0;<br></td></tr
><tr
id=sl_svn99_1339

><td class="source">	this.height = height || 0;<br></td></tr
><tr
id=sl_svn99_1340

><td class="source">	this.width = width || 0;<br></td></tr
><tr
id=sl_svn99_1341

><td class="source">	this.duration = duration || 0;<br></td></tr
><tr
id=sl_svn99_1342

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1343

><td class="source"><br></td></tr
><tr
id=sl_svn99_1344

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1345

><td class="source"> * The CaptureError interface encapsulates all errors in the Capture API.<br></td></tr
><tr
id=sl_svn99_1346

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1347

><td class="source">var CaptureError = function(){<br></td></tr
><tr
id=sl_svn99_1348

><td class="source">	this.code = null;<br></td></tr
><tr
id=sl_svn99_1349

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1350

><td class="source"><br></td></tr
><tr
id=sl_svn99_1351

><td class="source">// Capture error codes<br></td></tr
><tr
id=sl_svn99_1352

><td class="source">CaptureError.CAPTURE_INTERNAL_ERR = 0;<br></td></tr
><tr
id=sl_svn99_1353

><td class="source">CaptureError.CAPTURE_APPLICATION_BUSY = 1;<br></td></tr
><tr
id=sl_svn99_1354

><td class="source">CaptureError.CAPTURE_INVALID_ARGUMENT = 2;<br></td></tr
><tr
id=sl_svn99_1355

><td class="source">CaptureError.CAPTURE_NO_MEDIA_FILES = 3;<br></td></tr
><tr
id=sl_svn99_1356

><td class="source">CaptureError.CAPTURE_NOT_SUPPORTED = 20;<br></td></tr
><tr
id=sl_svn99_1357

><td class="source"><br></td></tr
><tr
id=sl_svn99_1358

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1359

><td class="source"> * The Capture interface exposes an interface to the camera and microphone of the hosting device.<br></td></tr
><tr
id=sl_svn99_1360

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1361

><td class="source">var Capture = function(){<br></td></tr
><tr
id=sl_svn99_1362

><td class="source">	this.supportedAudioModes = [];<br></td></tr
><tr
id=sl_svn99_1363

><td class="source">	this.supportedImageModes = [];<br></td></tr
><tr
id=sl_svn99_1364

><td class="source">	this.supportedVideoModes = [];<br></td></tr
><tr
id=sl_svn99_1365

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1366

><td class="source"><br></td></tr
><tr
id=sl_svn99_1367

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1368

><td class="source"> * Launch audio recorder application for recording audio clip(s).<br></td></tr
><tr
id=sl_svn99_1369

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1370

><td class="source"> * @param {Function} successCB<br></td></tr
><tr
id=sl_svn99_1371

><td class="source"> * @param {Function} errorCB<br></td></tr
><tr
id=sl_svn99_1372

><td class="source"> * @param {CaptureAudioOptions} options<br></td></tr
><tr
id=sl_svn99_1373

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1374

><td class="source">Capture.prototype.captureAudio = function(successCallback, errorCallback, options){<br></td></tr
><tr
id=sl_svn99_1375

><td class="source">	PhoneGap.exec(successCallback, errorCallback, &quot;Capture&quot;, &quot;captureAudio&quot;, [options]);<br></td></tr
><tr
id=sl_svn99_1376

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1377

><td class="source"><br></td></tr
><tr
id=sl_svn99_1378

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1379

><td class="source"> * Launch camera application for taking image(s).<br></td></tr
><tr
id=sl_svn99_1380

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1381

><td class="source"> * @param {Function} successCB<br></td></tr
><tr
id=sl_svn99_1382

><td class="source"> * @param {Function} errorCB<br></td></tr
><tr
id=sl_svn99_1383

><td class="source"> * @param {CaptureImageOptions} options<br></td></tr
><tr
id=sl_svn99_1384

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1385

><td class="source">Capture.prototype.captureImage = function(successCallback, errorCallback, options){<br></td></tr
><tr
id=sl_svn99_1386

><td class="source">	PhoneGap.exec(successCallback, errorCallback, &quot;Capture&quot;, &quot;captureImage&quot;, [options]);<br></td></tr
><tr
id=sl_svn99_1387

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1388

><td class="source"><br></td></tr
><tr
id=sl_svn99_1389

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1390

><td class="source"> * Launch camera application for taking image(s).<br></td></tr
><tr
id=sl_svn99_1391

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1392

><td class="source"> * @param {Function} successCB<br></td></tr
><tr
id=sl_svn99_1393

><td class="source"> * @param {Function} errorCB<br></td></tr
><tr
id=sl_svn99_1394

><td class="source"> * @param {CaptureImageOptions} options<br></td></tr
><tr
id=sl_svn99_1395

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1396

><td class="source">Capture.prototype._castMediaFile = function(pluginResult){<br></td></tr
><tr
id=sl_svn99_1397

><td class="source">	var mediaFiles = [];<br></td></tr
><tr
id=sl_svn99_1398

><td class="source">	var i;<br></td></tr
><tr
id=sl_svn99_1399

><td class="source">	for (i = 0; i &lt; pluginResult.message.length; i++) {<br></td></tr
><tr
id=sl_svn99_1400

><td class="source">		var mediaFile = new MediaFile();<br></td></tr
><tr
id=sl_svn99_1401

><td class="source">		mediaFile.name = pluginResult.message[i].name;<br></td></tr
><tr
id=sl_svn99_1402

><td class="source">		mediaFile.fullPath = pluginResult.message[i].fullPath;<br></td></tr
><tr
id=sl_svn99_1403

><td class="source">		mediaFile.type = pluginResult.message[i].type;<br></td></tr
><tr
id=sl_svn99_1404

><td class="source">		mediaFile.lastModifiedDate = pluginResult.message[i].lastModifiedDate;<br></td></tr
><tr
id=sl_svn99_1405

><td class="source">		mediaFile.size = pluginResult.message[i].size;<br></td></tr
><tr
id=sl_svn99_1406

><td class="source">		mediaFiles.push(mediaFile);<br></td></tr
><tr
id=sl_svn99_1407

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_1408

><td class="source">	pluginResult.message = mediaFiles;<br></td></tr
><tr
id=sl_svn99_1409

><td class="source">	return pluginResult;<br></td></tr
><tr
id=sl_svn99_1410

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1411

><td class="source"><br></td></tr
><tr
id=sl_svn99_1412

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1413

><td class="source"> * Launch device camera application for recording video(s).<br></td></tr
><tr
id=sl_svn99_1414

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1415

><td class="source"> * @param {Function} successCB<br></td></tr
><tr
id=sl_svn99_1416

><td class="source"> * @param {Function} errorCB<br></td></tr
><tr
id=sl_svn99_1417

><td class="source"> * @param {CaptureVideoOptions} options<br></td></tr
><tr
id=sl_svn99_1418

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1419

><td class="source">Capture.prototype.captureVideo = function(successCallback, errorCallback, options){<br></td></tr
><tr
id=sl_svn99_1420

><td class="source">	PhoneGap.exec(successCallback, errorCallback, &quot;Capture&quot;, &quot;captureVideo&quot;, [options]);<br></td></tr
><tr
id=sl_svn99_1421

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1422

><td class="source"><br></td></tr
><tr
id=sl_svn99_1423

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1424

><td class="source"> * Encapsulates a set of parameters that the capture device supports.<br></td></tr
><tr
id=sl_svn99_1425

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1426

><td class="source">var ConfigurationData = function(){<br></td></tr
><tr
id=sl_svn99_1427

><td class="source">	// The ASCII-encoded string in lower case representing the media type. <br></td></tr
><tr
id=sl_svn99_1428

><td class="source">	this.type = null;<br></td></tr
><tr
id=sl_svn99_1429

><td class="source">	// The height attribute represents height of the image or video in pixels. <br></td></tr
><tr
id=sl_svn99_1430

><td class="source">	// In the case of a sound clip this attribute has value 0. <br></td></tr
><tr
id=sl_svn99_1431

><td class="source">	this.height = 0;<br></td></tr
><tr
id=sl_svn99_1432

><td class="source">	// The width attribute represents width of the image or video in pixels. <br></td></tr
><tr
id=sl_svn99_1433

><td class="source">	// In the case of a sound clip this attribute has value 0<br></td></tr
><tr
id=sl_svn99_1434

><td class="source">	this.width = 0;<br></td></tr
><tr
id=sl_svn99_1435

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1436

><td class="source"><br></td></tr
><tr
id=sl_svn99_1437

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1438

><td class="source"> * Encapsulates all image capture operation configuration options.<br></td></tr
><tr
id=sl_svn99_1439

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1440

><td class="source">var CaptureImageOptions = function(){<br></td></tr
><tr
id=sl_svn99_1441

><td class="source">	// Upper limit of images user can take. Value must be equal or greater than 1.<br></td></tr
><tr
id=sl_svn99_1442

><td class="source">	this.limit = 1;<br></td></tr
><tr
id=sl_svn99_1443

><td class="source">	// The selected image mode. Must match with one of the elements in supportedImageModes array.<br></td></tr
><tr
id=sl_svn99_1444

><td class="source">	this.mode = null;<br></td></tr
><tr
id=sl_svn99_1445

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1446

><td class="source"><br></td></tr
><tr
id=sl_svn99_1447

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1448

><td class="source"> * Encapsulates all video capture operation configuration options.<br></td></tr
><tr
id=sl_svn99_1449

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1450

><td class="source">var CaptureVideoOptions = function(){<br></td></tr
><tr
id=sl_svn99_1451

><td class="source">	// Upper limit of videos user can record. Value must be equal or greater than 1.<br></td></tr
><tr
id=sl_svn99_1452

><td class="source">	this.limit = 1;<br></td></tr
><tr
id=sl_svn99_1453

><td class="source">	// Maximum duration of a single video clip in seconds.<br></td></tr
><tr
id=sl_svn99_1454

><td class="source">	this.duration = 0;<br></td></tr
><tr
id=sl_svn99_1455

><td class="source">	// The selected video mode. Must match with one of the elements in supportedVideoModes array.<br></td></tr
><tr
id=sl_svn99_1456

><td class="source">	this.mode = null;<br></td></tr
><tr
id=sl_svn99_1457

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1458

><td class="source"><br></td></tr
><tr
id=sl_svn99_1459

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1460

><td class="source"> * Encapsulates all audio capture operation configuration options.<br></td></tr
><tr
id=sl_svn99_1461

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1462

><td class="source">var CaptureAudioOptions = function(){<br></td></tr
><tr
id=sl_svn99_1463

><td class="source">	// Upper limit of sound clips user can record. Value must be equal or greater than 1.<br></td></tr
><tr
id=sl_svn99_1464

><td class="source">	this.limit = 1;<br></td></tr
><tr
id=sl_svn99_1465

><td class="source">	// Maximum duration of a single sound clip in seconds.<br></td></tr
><tr
id=sl_svn99_1466

><td class="source">	this.duration = 0;<br></td></tr
><tr
id=sl_svn99_1467

><td class="source">	// The selected audio mode. Must match with one of the elements in supportedAudioModes array.<br></td></tr
><tr
id=sl_svn99_1468

><td class="source">	this.mode = null;<br></td></tr
><tr
id=sl_svn99_1469

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1470

><td class="source"><br></td></tr
><tr
id=sl_svn99_1471

><td class="source">PhoneGap.addConstructor(function(){<br></td></tr
><tr
id=sl_svn99_1472

><td class="source">	if (typeof navigator.device === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_1473

><td class="source">		navigator.device = window.device = new Device();<br></td></tr
><tr
id=sl_svn99_1474

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_1475

><td class="source">	if (typeof navigator.device.capture === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_1476

><td class="source">		navigator.device.capture = window.device.capture = new Capture();<br></td></tr
><tr
id=sl_svn99_1477

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_1478

><td class="source">});<br></td></tr
><tr
id=sl_svn99_1479

><td class="source">}<br></td></tr
><tr
id=sl_svn99_1480

><td class="source"><br></td></tr
><tr
id=sl_svn99_1481

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_1482

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_1483

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_1484

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1485

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_1486

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_1487

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1488

><td class="source"><br></td></tr
><tr
id=sl_svn99_1489

><td class="source">if (!PhoneGap.hasResource(&quot;compass&quot;)) {<br></td></tr
><tr
id=sl_svn99_1490

><td class="source">PhoneGap.addResource(&quot;compass&quot;);<br></td></tr
><tr
id=sl_svn99_1491

><td class="source"><br></td></tr
><tr
id=sl_svn99_1492

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1493

><td class="source"> * This class provides access to device Compass data.<br></td></tr
><tr
id=sl_svn99_1494

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_1495

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1496

><td class="source">var Compass = function() {<br></td></tr
><tr
id=sl_svn99_1497

><td class="source">    /**<br></td></tr
><tr
id=sl_svn99_1498

><td class="source">     * The last known Compass position.<br></td></tr
><tr
id=sl_svn99_1499

><td class="source">     */<br></td></tr
><tr
id=sl_svn99_1500

><td class="source">    this.lastHeading = null;<br></td></tr
><tr
id=sl_svn99_1501

><td class="source"><br></td></tr
><tr
id=sl_svn99_1502

><td class="source">    /**<br></td></tr
><tr
id=sl_svn99_1503

><td class="source">     * List of compass watch timers<br></td></tr
><tr
id=sl_svn99_1504

><td class="source">     */<br></td></tr
><tr
id=sl_svn99_1505

><td class="source">    this.timers = {};<br></td></tr
><tr
id=sl_svn99_1506

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1507

><td class="source"><br></td></tr
><tr
id=sl_svn99_1508

><td class="source">Compass.ERROR_MSG = [&quot;Not running&quot;, &quot;Starting&quot;, &quot;&quot;, &quot;Failed to start&quot;];<br></td></tr
><tr
id=sl_svn99_1509

><td class="source"><br></td></tr
><tr
id=sl_svn99_1510

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1511

><td class="source"> * Asynchronously aquires the current heading.<br></td></tr
><tr
id=sl_svn99_1512

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1513

><td class="source"> * @param {Function} successCallback The function to call when the heading data is available<br></td></tr
><tr
id=sl_svn99_1514

><td class="source"> * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_1515

><td class="source"> * @param {PositionOptions} options The options for getting the heading data such as timeout. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_1516

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1517

><td class="source">Compass.prototype.getCurrentHeading = function(successCallback, errorCallback, options) {<br></td></tr
><tr
id=sl_svn99_1518

><td class="source"><br></td></tr
><tr
id=sl_svn99_1519

><td class="source">    // successCallback required<br></td></tr
><tr
id=sl_svn99_1520

><td class="source">    if (typeof successCallback !== &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_1521

><td class="source">        console.log(&quot;Compass Error: successCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_1522

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_1523

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1524

><td class="source"><br></td></tr
><tr
id=sl_svn99_1525

><td class="source">    // errorCallback optional<br></td></tr
><tr
id=sl_svn99_1526

><td class="source">    if (errorCallback &amp;&amp; (typeof errorCallback !== &quot;function&quot;)) {<br></td></tr
><tr
id=sl_svn99_1527

><td class="source">        console.log(&quot;Compass Error: errorCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_1528

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_1529

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1530

><td class="source"><br></td></tr
><tr
id=sl_svn99_1531

><td class="source">    // Get heading<br></td></tr
><tr
id=sl_svn99_1532

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;Compass&quot;, &quot;getHeading&quot;, []);<br></td></tr
><tr
id=sl_svn99_1533

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1534

><td class="source"><br></td></tr
><tr
id=sl_svn99_1535

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1536

><td class="source"> * Asynchronously aquires the heading repeatedly at a given interval.<br></td></tr
><tr
id=sl_svn99_1537

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1538

><td class="source"> * @param {Function} successCallback    The function to call each time the heading data is available<br></td></tr
><tr
id=sl_svn99_1539

><td class="source"> * @param {Function} errorCallback      The function to call when there is an error getting the heading data. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_1540

><td class="source"> * @param {HeadingOptions} options      The options for getting the heading data such as timeout and the frequency of the watch. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_1541

><td class="source"> * @return String                       The watch id that must be passed to #clearWatch to stop watching.<br></td></tr
><tr
id=sl_svn99_1542

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1543

><td class="source">Compass.prototype.watchHeading= function(successCallback, errorCallback, options) {<br></td></tr
><tr
id=sl_svn99_1544

><td class="source"><br></td></tr
><tr
id=sl_svn99_1545

><td class="source">    // Default interval (100 msec)<br></td></tr
><tr
id=sl_svn99_1546

><td class="source">    var frequency = (options !== undefined) ? options.frequency : 100;<br></td></tr
><tr
id=sl_svn99_1547

><td class="source"><br></td></tr
><tr
id=sl_svn99_1548

><td class="source">    // successCallback required<br></td></tr
><tr
id=sl_svn99_1549

><td class="source">    if (typeof successCallback !== &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_1550

><td class="source">        console.log(&quot;Compass Error: successCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_1551

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_1552

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1553

><td class="source"><br></td></tr
><tr
id=sl_svn99_1554

><td class="source">    // errorCallback optional<br></td></tr
><tr
id=sl_svn99_1555

><td class="source">    if (errorCallback &amp;&amp; (typeof errorCallback !== &quot;function&quot;)) {<br></td></tr
><tr
id=sl_svn99_1556

><td class="source">        console.log(&quot;Compass Error: errorCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_1557

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_1558

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1559

><td class="source"><br></td></tr
><tr
id=sl_svn99_1560

><td class="source">    // Make sure compass timeout &gt; frequency + 10 sec<br></td></tr
><tr
id=sl_svn99_1561

><td class="source">    PhoneGap.exec(<br></td></tr
><tr
id=sl_svn99_1562

><td class="source">        function(timeout) {<br></td></tr
><tr
id=sl_svn99_1563

><td class="source">            if (timeout &lt; (frequency + 10000)) {<br></td></tr
><tr
id=sl_svn99_1564

><td class="source">                PhoneGap.exec(null, null, &quot;Compass&quot;, &quot;setTimeout&quot;, [frequency + 10000]);<br></td></tr
><tr
id=sl_svn99_1565

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_1566

><td class="source">        },<br></td></tr
><tr
id=sl_svn99_1567

><td class="source">        function(e) { }, &quot;Compass&quot;, &quot;getTimeout&quot;, []);<br></td></tr
><tr
id=sl_svn99_1568

><td class="source"><br></td></tr
><tr
id=sl_svn99_1569

><td class="source">    // Start watch timer to get headings<br></td></tr
><tr
id=sl_svn99_1570

><td class="source">    var id = PhoneGap.createUUID();<br></td></tr
><tr
id=sl_svn99_1571

><td class="source">    navigator.compass.timers[id] = setInterval(<br></td></tr
><tr
id=sl_svn99_1572

><td class="source">        function() {<br></td></tr
><tr
id=sl_svn99_1573

><td class="source">            PhoneGap.exec(successCallback, errorCallback, &quot;Compass&quot;, &quot;getHeading&quot;, []);<br></td></tr
><tr
id=sl_svn99_1574

><td class="source">        }, (frequency ? frequency : 1));<br></td></tr
><tr
id=sl_svn99_1575

><td class="source"><br></td></tr
><tr
id=sl_svn99_1576

><td class="source">    return id;<br></td></tr
><tr
id=sl_svn99_1577

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1578

><td class="source"><br></td></tr
><tr
id=sl_svn99_1579

><td class="source"><br></td></tr
><tr
id=sl_svn99_1580

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1581

><td class="source"> * Clears the specified heading watch.<br></td></tr
><tr
id=sl_svn99_1582

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1583

><td class="source"> * @param {String} id       The ID of the watch returned from #watchHeading.<br></td></tr
><tr
id=sl_svn99_1584

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1585

><td class="source">Compass.prototype.clearWatch = function(id) {<br></td></tr
><tr
id=sl_svn99_1586

><td class="source"><br></td></tr
><tr
id=sl_svn99_1587

><td class="source">    // Stop javascript timer &amp; remove from timer list<br></td></tr
><tr
id=sl_svn99_1588

><td class="source">    if (id &amp;&amp; navigator.compass.timers[id]) {<br></td></tr
><tr
id=sl_svn99_1589

><td class="source">        clearInterval(navigator.compass.timers[id]);<br></td></tr
><tr
id=sl_svn99_1590

><td class="source">        delete navigator.compass.timers[id];<br></td></tr
><tr
id=sl_svn99_1591

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1592

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1593

><td class="source"><br></td></tr
><tr
id=sl_svn99_1594

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_1595

><td class="source">    if (typeof navigator.compass === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_1596

><td class="source">        navigator.compass = new Compass();<br></td></tr
><tr
id=sl_svn99_1597

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1598

><td class="source">});<br></td></tr
><tr
id=sl_svn99_1599

><td class="source">}<br></td></tr
><tr
id=sl_svn99_1600

><td class="source"><br></td></tr
><tr
id=sl_svn99_1601

><td class="source"><br></td></tr
><tr
id=sl_svn99_1602

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_1603

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_1604

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_1605

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1606

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_1607

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_1608

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1609

><td class="source"><br></td></tr
><tr
id=sl_svn99_1610

><td class="source">if (!PhoneGap.hasResource(&quot;contact&quot;)) {<br></td></tr
><tr
id=sl_svn99_1611

><td class="source">PhoneGap.addResource(&quot;contact&quot;);<br></td></tr
><tr
id=sl_svn99_1612

><td class="source"><br></td></tr
><tr
id=sl_svn99_1613

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1614

><td class="source">* Contains information about a single contact.<br></td></tr
><tr
id=sl_svn99_1615

><td class="source">* @constructor<br></td></tr
><tr
id=sl_svn99_1616

><td class="source">* @param {DOMString} id unique identifier<br></td></tr
><tr
id=sl_svn99_1617

><td class="source">* @param {DOMString} displayName<br></td></tr
><tr
id=sl_svn99_1618

><td class="source">* @param {ContactName} name<br></td></tr
><tr
id=sl_svn99_1619

><td class="source">* @param {DOMString} nickname<br></td></tr
><tr
id=sl_svn99_1620

><td class="source">* @param {Array.&lt;ContactField&gt;} phoneNumbers array of phone numbers<br></td></tr
><tr
id=sl_svn99_1621

><td class="source">* @param {Array.&lt;ContactField&gt;} emails array of email addresses<br></td></tr
><tr
id=sl_svn99_1622

><td class="source">* @param {Array.&lt;ContactAddress&gt;} addresses array of addresses<br></td></tr
><tr
id=sl_svn99_1623

><td class="source">* @param {Array.&lt;ContactField&gt;} ims instant messaging user ids<br></td></tr
><tr
id=sl_svn99_1624

><td class="source">* @param {Array.&lt;ContactOrganization&gt;} organizations<br></td></tr
><tr
id=sl_svn99_1625

><td class="source">* @param {DOMString} birthday contact&#39;s birthday<br></td></tr
><tr
id=sl_svn99_1626

><td class="source">* @param {DOMString} note user notes about contact<br></td></tr
><tr
id=sl_svn99_1627

><td class="source">* @param {Array.&lt;ContactField&gt;} photos<br></td></tr
><tr
id=sl_svn99_1628

><td class="source">* @param {Array.&lt;ContactField&gt;} categories<br></td></tr
><tr
id=sl_svn99_1629

><td class="source">* @param {Array.&lt;ContactField&gt;} urls contact&#39;s web sites<br></td></tr
><tr
id=sl_svn99_1630

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1631

><td class="source">var Contact = function (id, displayName, name, nickname, phoneNumbers, emails, addresses,<br></td></tr
><tr
id=sl_svn99_1632

><td class="source">    ims, organizations, birthday, note, photos, categories, urls) {<br></td></tr
><tr
id=sl_svn99_1633

><td class="source">    this.id = id || null;<br></td></tr
><tr
id=sl_svn99_1634

><td class="source">    this.rawId = null;<br></td></tr
><tr
id=sl_svn99_1635

><td class="source">    this.displayName = displayName || null;<br></td></tr
><tr
id=sl_svn99_1636

><td class="source">    this.name = name || null; // ContactName<br></td></tr
><tr
id=sl_svn99_1637

><td class="source">    this.nickname = nickname || null;<br></td></tr
><tr
id=sl_svn99_1638

><td class="source">    this.phoneNumbers = phoneNumbers || null; // ContactField[]<br></td></tr
><tr
id=sl_svn99_1639

><td class="source">    this.emails = emails || null; // ContactField[]<br></td></tr
><tr
id=sl_svn99_1640

><td class="source">    this.addresses = addresses || null; // ContactAddress[]<br></td></tr
><tr
id=sl_svn99_1641

><td class="source">    this.ims = ims || null; // ContactField[]<br></td></tr
><tr
id=sl_svn99_1642

><td class="source">    this.organizations = organizations || null; // ContactOrganization[]<br></td></tr
><tr
id=sl_svn99_1643

><td class="source">    this.birthday = birthday || null;<br></td></tr
><tr
id=sl_svn99_1644

><td class="source">    this.note = note || null;<br></td></tr
><tr
id=sl_svn99_1645

><td class="source">    this.photos = photos || null; // ContactField[]<br></td></tr
><tr
id=sl_svn99_1646

><td class="source">    this.categories = categories || null; // ContactField[]<br></td></tr
><tr
id=sl_svn99_1647

><td class="source">    this.urls = urls || null; // ContactField[]<br></td></tr
><tr
id=sl_svn99_1648

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1649

><td class="source"><br></td></tr
><tr
id=sl_svn99_1650

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1651

><td class="source"> *  ContactError.<br></td></tr
><tr
id=sl_svn99_1652

><td class="source"> *  An error code assigned by an implementation when an error has occurreds<br></td></tr
><tr
id=sl_svn99_1653

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_1654

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1655

><td class="source">var ContactError = function() {<br></td></tr
><tr
id=sl_svn99_1656

><td class="source">    this.code=null;<br></td></tr
><tr
id=sl_svn99_1657

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1658

><td class="source"><br></td></tr
><tr
id=sl_svn99_1659

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1660

><td class="source"> * Error codes<br></td></tr
><tr
id=sl_svn99_1661

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1662

><td class="source">ContactError.UNKNOWN_ERROR = 0;<br></td></tr
><tr
id=sl_svn99_1663

><td class="source">ContactError.INVALID_ARGUMENT_ERROR = 1;<br></td></tr
><tr
id=sl_svn99_1664

><td class="source">ContactError.TIMEOUT_ERROR = 2;<br></td></tr
><tr
id=sl_svn99_1665

><td class="source">ContactError.PENDING_OPERATION_ERROR = 3;<br></td></tr
><tr
id=sl_svn99_1666

><td class="source">ContactError.IO_ERROR = 4;<br></td></tr
><tr
id=sl_svn99_1667

><td class="source">ContactError.NOT_SUPPORTED_ERROR = 5;<br></td></tr
><tr
id=sl_svn99_1668

><td class="source">ContactError.PERMISSION_DENIED_ERROR = 20;<br></td></tr
><tr
id=sl_svn99_1669

><td class="source"><br></td></tr
><tr
id=sl_svn99_1670

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1671

><td class="source">* Removes contact from device storage.<br></td></tr
><tr
id=sl_svn99_1672

><td class="source">* @param successCB success callback<br></td></tr
><tr
id=sl_svn99_1673

><td class="source">* @param errorCB error callback<br></td></tr
><tr
id=sl_svn99_1674

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1675

><td class="source">Contact.prototype.remove = function(successCB, errorCB) {<br></td></tr
><tr
id=sl_svn99_1676

><td class="source">    if (this.id === null) {<br></td></tr
><tr
id=sl_svn99_1677

><td class="source">        var errorObj = new ContactError();<br></td></tr
><tr
id=sl_svn99_1678

><td class="source">        errorObj.code = ContactError.UNKNOWN_ERROR;<br></td></tr
><tr
id=sl_svn99_1679

><td class="source">        errorCB(errorObj);<br></td></tr
><tr
id=sl_svn99_1680

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1681

><td class="source">    else {<br></td></tr
><tr
id=sl_svn99_1682

><td class="source">        PhoneGap.exec(successCB, errorCB, &quot;Contacts&quot;, &quot;remove&quot;, [this.id]);<br></td></tr
><tr
id=sl_svn99_1683

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1684

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1685

><td class="source"><br></td></tr
><tr
id=sl_svn99_1686

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1687

><td class="source">* Creates a deep copy of this Contact.<br></td></tr
><tr
id=sl_svn99_1688

><td class="source">* With the contact ID set to null.<br></td></tr
><tr
id=sl_svn99_1689

><td class="source">* @return copy of this Contact<br></td></tr
><tr
id=sl_svn99_1690

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1691

><td class="source">Contact.prototype.clone = function() {<br></td></tr
><tr
id=sl_svn99_1692

><td class="source">    var clonedContact = PhoneGap.clone(this);<br></td></tr
><tr
id=sl_svn99_1693

><td class="source">    var i;<br></td></tr
><tr
id=sl_svn99_1694

><td class="source">    clonedContact.id = null;<br></td></tr
><tr
id=sl_svn99_1695

><td class="source">    clonedContact.rawId = null;<br></td></tr
><tr
id=sl_svn99_1696

><td class="source">    // Loop through and clear out any id&#39;s in phones, emails, etc.<br></td></tr
><tr
id=sl_svn99_1697

><td class="source">    if (clonedContact.phoneNumbers) {<br></td></tr
><tr
id=sl_svn99_1698

><td class="source">        for (i = 0; i &lt; clonedContact.phoneNumbers.length; i++) {<br></td></tr
><tr
id=sl_svn99_1699

><td class="source">            clonedContact.phoneNumbers[i].id = null;<br></td></tr
><tr
id=sl_svn99_1700

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1701

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1702

><td class="source">    if (clonedContact.emails) {<br></td></tr
><tr
id=sl_svn99_1703

><td class="source">        for (i = 0; i &lt; clonedContact.emails.length; i++) {<br></td></tr
><tr
id=sl_svn99_1704

><td class="source">            clonedContact.emails[i].id = null;<br></td></tr
><tr
id=sl_svn99_1705

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1706

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1707

><td class="source">    if (clonedContact.addresses) {<br></td></tr
><tr
id=sl_svn99_1708

><td class="source">        for (i = 0; i &lt; clonedContact.addresses.length; i++) {<br></td></tr
><tr
id=sl_svn99_1709

><td class="source">            clonedContact.addresses[i].id = null;<br></td></tr
><tr
id=sl_svn99_1710

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1711

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1712

><td class="source">    if (clonedContact.ims) {<br></td></tr
><tr
id=sl_svn99_1713

><td class="source">        for (i = 0; i &lt; clonedContact.ims.length; i++) {<br></td></tr
><tr
id=sl_svn99_1714

><td class="source">            clonedContact.ims[i].id = null;<br></td></tr
><tr
id=sl_svn99_1715

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1716

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1717

><td class="source">    if (clonedContact.organizations) {<br></td></tr
><tr
id=sl_svn99_1718

><td class="source">        for (i = 0; i &lt; clonedContact.organizations.length; i++) {<br></td></tr
><tr
id=sl_svn99_1719

><td class="source">            clonedContact.organizations[i].id = null;<br></td></tr
><tr
id=sl_svn99_1720

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1721

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1722

><td class="source">    if (clonedContact.tags) {<br></td></tr
><tr
id=sl_svn99_1723

><td class="source">        for (i = 0; i &lt; clonedContact.tags.length; i++) {<br></td></tr
><tr
id=sl_svn99_1724

><td class="source">            clonedContact.tags[i].id = null;<br></td></tr
><tr
id=sl_svn99_1725

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1726

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1727

><td class="source">    if (clonedContact.photos) {<br></td></tr
><tr
id=sl_svn99_1728

><td class="source">        for (i = 0; i &lt; clonedContact.photos.length; i++) {<br></td></tr
><tr
id=sl_svn99_1729

><td class="source">            clonedContact.photos[i].id = null;<br></td></tr
><tr
id=sl_svn99_1730

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1731

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1732

><td class="source">    if (clonedContact.urls) {<br></td></tr
><tr
id=sl_svn99_1733

><td class="source">        for (i = 0; i &lt; clonedContact.urls.length; i++) {<br></td></tr
><tr
id=sl_svn99_1734

><td class="source">            clonedContact.urls[i].id = null;<br></td></tr
><tr
id=sl_svn99_1735

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1736

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1737

><td class="source">    return clonedContact;<br></td></tr
><tr
id=sl_svn99_1738

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1739

><td class="source"><br></td></tr
><tr
id=sl_svn99_1740

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1741

><td class="source">* Persists contact to device storage.<br></td></tr
><tr
id=sl_svn99_1742

><td class="source">* @param successCB success callback<br></td></tr
><tr
id=sl_svn99_1743

><td class="source">* @param errorCB error callback<br></td></tr
><tr
id=sl_svn99_1744

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1745

><td class="source">Contact.prototype.save = function(successCB, errorCB) {<br></td></tr
><tr
id=sl_svn99_1746

><td class="source">    PhoneGap.exec(successCB, errorCB, &quot;Contacts&quot;, &quot;save&quot;, [this]);<br></td></tr
><tr
id=sl_svn99_1747

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1748

><td class="source"><br></td></tr
><tr
id=sl_svn99_1749

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1750

><td class="source">* Contact name.<br></td></tr
><tr
id=sl_svn99_1751

><td class="source">* @constructor<br></td></tr
><tr
id=sl_svn99_1752

><td class="source">* @param formatted<br></td></tr
><tr
id=sl_svn99_1753

><td class="source">* @param familyName<br></td></tr
><tr
id=sl_svn99_1754

><td class="source">* @param givenName<br></td></tr
><tr
id=sl_svn99_1755

><td class="source">* @param middle<br></td></tr
><tr
id=sl_svn99_1756

><td class="source">* @param prefix<br></td></tr
><tr
id=sl_svn99_1757

><td class="source">* @param suffix<br></td></tr
><tr
id=sl_svn99_1758

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1759

><td class="source">var ContactName = function(formatted, familyName, givenName, middle, prefix, suffix) {<br></td></tr
><tr
id=sl_svn99_1760

><td class="source">    this.formatted = formatted || null;<br></td></tr
><tr
id=sl_svn99_1761

><td class="source">    this.familyName = familyName || null;<br></td></tr
><tr
id=sl_svn99_1762

><td class="source">    this.givenName = givenName || null;<br></td></tr
><tr
id=sl_svn99_1763

><td class="source">    this.middleName = middle || null;<br></td></tr
><tr
id=sl_svn99_1764

><td class="source">    this.honorificPrefix = prefix || null;<br></td></tr
><tr
id=sl_svn99_1765

><td class="source">    this.honorificSuffix = suffix || null;<br></td></tr
><tr
id=sl_svn99_1766

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1767

><td class="source"><br></td></tr
><tr
id=sl_svn99_1768

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1769

><td class="source">* Generic contact field.<br></td></tr
><tr
id=sl_svn99_1770

><td class="source">* @constructor<br></td></tr
><tr
id=sl_svn99_1771

><td class="source">* @param {DOMString} id unique identifier, should only be set by native code<br></td></tr
><tr
id=sl_svn99_1772

><td class="source">* @param type<br></td></tr
><tr
id=sl_svn99_1773

><td class="source">* @param value<br></td></tr
><tr
id=sl_svn99_1774

><td class="source">* @param pref<br></td></tr
><tr
id=sl_svn99_1775

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1776

><td class="source">var ContactField = function(type, value, pref) {<br></td></tr
><tr
id=sl_svn99_1777

><td class="source">	this.id = null;<br></td></tr
><tr
id=sl_svn99_1778

><td class="source">    this.type = type || null;<br></td></tr
><tr
id=sl_svn99_1779

><td class="source">    this.value = value || null;<br></td></tr
><tr
id=sl_svn99_1780

><td class="source">    this.pref = pref || null;<br></td></tr
><tr
id=sl_svn99_1781

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1782

><td class="source"><br></td></tr
><tr
id=sl_svn99_1783

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1784

><td class="source">* Contact address.<br></td></tr
><tr
id=sl_svn99_1785

><td class="source">* @constructor<br></td></tr
><tr
id=sl_svn99_1786

><td class="source">* @param {DOMString} id unique identifier, should only be set by native code<br></td></tr
><tr
id=sl_svn99_1787

><td class="source">* @param formatted<br></td></tr
><tr
id=sl_svn99_1788

><td class="source">* @param streetAddress<br></td></tr
><tr
id=sl_svn99_1789

><td class="source">* @param locality<br></td></tr
><tr
id=sl_svn99_1790

><td class="source">* @param region<br></td></tr
><tr
id=sl_svn99_1791

><td class="source">* @param postalCode<br></td></tr
><tr
id=sl_svn99_1792

><td class="source">* @param country<br></td></tr
><tr
id=sl_svn99_1793

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1794

><td class="source">var ContactAddress = function(pref, type, formatted, streetAddress, locality, region, postalCode, country) {<br></td></tr
><tr
id=sl_svn99_1795

><td class="source">	this.id = null;<br></td></tr
><tr
id=sl_svn99_1796

><td class="source">    this.pref = pref || null;<br></td></tr
><tr
id=sl_svn99_1797

><td class="source">    this.type = type || null;<br></td></tr
><tr
id=sl_svn99_1798

><td class="source">    this.formatted = formatted || null;<br></td></tr
><tr
id=sl_svn99_1799

><td class="source">    this.streetAddress = streetAddress || null;<br></td></tr
><tr
id=sl_svn99_1800

><td class="source">    this.locality = locality || null;<br></td></tr
><tr
id=sl_svn99_1801

><td class="source">    this.region = region || null;<br></td></tr
><tr
id=sl_svn99_1802

><td class="source">    this.postalCode = postalCode || null;<br></td></tr
><tr
id=sl_svn99_1803

><td class="source">    this.country = country || null;<br></td></tr
><tr
id=sl_svn99_1804

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1805

><td class="source"><br></td></tr
><tr
id=sl_svn99_1806

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1807

><td class="source">* Contact organization.<br></td></tr
><tr
id=sl_svn99_1808

><td class="source">* @constructor<br></td></tr
><tr
id=sl_svn99_1809

><td class="source">* @param {DOMString} id unique identifier, should only be set by native code<br></td></tr
><tr
id=sl_svn99_1810

><td class="source">* @param name<br></td></tr
><tr
id=sl_svn99_1811

><td class="source">* @param dept<br></td></tr
><tr
id=sl_svn99_1812

><td class="source">* @param title<br></td></tr
><tr
id=sl_svn99_1813

><td class="source">* @param startDate<br></td></tr
><tr
id=sl_svn99_1814

><td class="source">* @param endDate<br></td></tr
><tr
id=sl_svn99_1815

><td class="source">* @param location<br></td></tr
><tr
id=sl_svn99_1816

><td class="source">* @param desc<br></td></tr
><tr
id=sl_svn99_1817

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1818

><td class="source">var ContactOrganization = function(pref, type, name, dept, title) {<br></td></tr
><tr
id=sl_svn99_1819

><td class="source">	this.id = null;<br></td></tr
><tr
id=sl_svn99_1820

><td class="source">    this.pref = pref || null;<br></td></tr
><tr
id=sl_svn99_1821

><td class="source">    this.type = type || null;<br></td></tr
><tr
id=sl_svn99_1822

><td class="source">    this.name = name || null;<br></td></tr
><tr
id=sl_svn99_1823

><td class="source">    this.department = dept || null;<br></td></tr
><tr
id=sl_svn99_1824

><td class="source">    this.title = title || null;<br></td></tr
><tr
id=sl_svn99_1825

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1826

><td class="source"><br></td></tr
><tr
id=sl_svn99_1827

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1828

><td class="source">* Represents a group of Contacts.<br></td></tr
><tr
id=sl_svn99_1829

><td class="source">* @constructor<br></td></tr
><tr
id=sl_svn99_1830

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1831

><td class="source">var Contacts = function() {<br></td></tr
><tr
id=sl_svn99_1832

><td class="source">    this.inProgress = false;<br></td></tr
><tr
id=sl_svn99_1833

><td class="source">    this.records = [];<br></td></tr
><tr
id=sl_svn99_1834

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1835

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1836

><td class="source">* Returns an array of Contacts matching the search criteria.<br></td></tr
><tr
id=sl_svn99_1837

><td class="source">* @param fields that should be searched<br></td></tr
><tr
id=sl_svn99_1838

><td class="source">* @param successCB success callback<br></td></tr
><tr
id=sl_svn99_1839

><td class="source">* @param errorCB error callback<br></td></tr
><tr
id=sl_svn99_1840

><td class="source">* @param {ContactFindOptions} options that can be applied to contact searching<br></td></tr
><tr
id=sl_svn99_1841

><td class="source">* @return array of Contacts matching search criteria<br></td></tr
><tr
id=sl_svn99_1842

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1843

><td class="source">Contacts.prototype.find = function(fields, successCB, errorCB, options) {<br></td></tr
><tr
id=sl_svn99_1844

><td class="source">    if (successCB === null) {<br></td></tr
><tr
id=sl_svn99_1845

><td class="source">        throw new TypeError(&quot;You must specify a success callback for the find command.&quot;);<br></td></tr
><tr
id=sl_svn99_1846

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1847

><td class="source">    if (fields === null || fields === &quot;undefined&quot; || fields.length === &quot;undefined&quot; || fields.length &lt;= 0) {<br></td></tr
><tr
id=sl_svn99_1848

><td class="source">        if (typeof errorCB === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_1849

><td class="source">            errorCB({&quot;code&quot;: ContactError.INVALID_ARGUMENT_ERROR});<br></td></tr
><tr
id=sl_svn99_1850

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1851

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn99_1852

><td class="source">        PhoneGap.exec(successCB, errorCB, &quot;Contacts&quot;, &quot;search&quot;, [fields, options]);        <br></td></tr
><tr
id=sl_svn99_1853

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1854

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1855

><td class="source"><br></td></tr
><tr
id=sl_svn99_1856

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1857

><td class="source">* This function creates a new contact, but it does not persist the contact<br></td></tr
><tr
id=sl_svn99_1858

><td class="source">* to device storage. To persist the contact to device storage, invoke<br></td></tr
><tr
id=sl_svn99_1859

><td class="source">* contact.save().<br></td></tr
><tr
id=sl_svn99_1860

><td class="source">* @param properties an object who&#39;s properties will be examined to create a new Contact<br></td></tr
><tr
id=sl_svn99_1861

><td class="source">* @returns new Contact object<br></td></tr
><tr
id=sl_svn99_1862

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1863

><td class="source">Contacts.prototype.create = function(properties) {<br></td></tr
><tr
id=sl_svn99_1864

><td class="source">    var i;<br></td></tr
><tr
id=sl_svn99_1865

><td class="source">	var contact = new Contact();<br></td></tr
><tr
id=sl_svn99_1866

><td class="source">    for (i in properties) {<br></td></tr
><tr
id=sl_svn99_1867

><td class="source">        if (contact[i] !== &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn99_1868

><td class="source">            contact[i] = properties[i];<br></td></tr
><tr
id=sl_svn99_1869

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_1870

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1871

><td class="source">    return contact;<br></td></tr
><tr
id=sl_svn99_1872

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1873

><td class="source"><br></td></tr
><tr
id=sl_svn99_1874

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1875

><td class="source">* This function returns and array of contacts.  It is required as we need to convert raw<br></td></tr
><tr
id=sl_svn99_1876

><td class="source">* JSON objects into concrete Contact objects.  Currently this method is called after<br></td></tr
><tr
id=sl_svn99_1877

><td class="source">* navigator.contacts.find but before the find methods success call back.<br></td></tr
><tr
id=sl_svn99_1878

><td class="source">*<br></td></tr
><tr
id=sl_svn99_1879

><td class="source">* @param jsonArray an array of JSON Objects that need to be converted to Contact objects.<br></td></tr
><tr
id=sl_svn99_1880

><td class="source">* @returns an array of Contact objects<br></td></tr
><tr
id=sl_svn99_1881

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1882

><td class="source">Contacts.prototype.cast = function(pluginResult) {<br></td></tr
><tr
id=sl_svn99_1883

><td class="source">	var contacts = [];<br></td></tr
><tr
id=sl_svn99_1884

><td class="source">	var i;<br></td></tr
><tr
id=sl_svn99_1885

><td class="source">	for (i=0; i&lt;pluginResult.message.length; i++) {<br></td></tr
><tr
id=sl_svn99_1886

><td class="source">		contacts.push(navigator.contacts.create(pluginResult.message[i]));<br></td></tr
><tr
id=sl_svn99_1887

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_1888

><td class="source">	pluginResult.message = contacts;<br></td></tr
><tr
id=sl_svn99_1889

><td class="source">	return pluginResult;<br></td></tr
><tr
id=sl_svn99_1890

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1891

><td class="source"><br></td></tr
><tr
id=sl_svn99_1892

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1893

><td class="source"> * ContactFindOptions.<br></td></tr
><tr
id=sl_svn99_1894

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_1895

><td class="source"> * @param filter used to match contacts against<br></td></tr
><tr
id=sl_svn99_1896

><td class="source"> * @param multiple boolean used to determine if more than one contact should be returned<br></td></tr
><tr
id=sl_svn99_1897

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1898

><td class="source">var ContactFindOptions = function(filter, multiple) {<br></td></tr
><tr
id=sl_svn99_1899

><td class="source">    this.filter = filter || &#39;&#39;;<br></td></tr
><tr
id=sl_svn99_1900

><td class="source">    this.multiple = multiple || false;<br></td></tr
><tr
id=sl_svn99_1901

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1902

><td class="source"><br></td></tr
><tr
id=sl_svn99_1903

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1904

><td class="source"> * Add the contact interface into the browser.<br></td></tr
><tr
id=sl_svn99_1905

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1906

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_1907

><td class="source">    if(typeof navigator.contacts === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_1908

><td class="source">        navigator.contacts = new Contacts();<br></td></tr
><tr
id=sl_svn99_1909

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1910

><td class="source">});<br></td></tr
><tr
id=sl_svn99_1911

><td class="source">}<br></td></tr
><tr
id=sl_svn99_1912

><td class="source"><br></td></tr
><tr
id=sl_svn99_1913

><td class="source"><br></td></tr
><tr
id=sl_svn99_1914

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_1915

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_1916

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_1917

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1918

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_1919

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_1920

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1921

><td class="source"><br></td></tr
><tr
id=sl_svn99_1922

><td class="source">// TODO: Needs to be commented<br></td></tr
><tr
id=sl_svn99_1923

><td class="source"><br></td></tr
><tr
id=sl_svn99_1924

><td class="source">if (!PhoneGap.hasResource(&quot;crypto&quot;)) {<br></td></tr
><tr
id=sl_svn99_1925

><td class="source">PhoneGap.addResource(&quot;crypto&quot;);<br></td></tr
><tr
id=sl_svn99_1926

><td class="source"><br></td></tr
><tr
id=sl_svn99_1927

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1928

><td class="source">* @constructor<br></td></tr
><tr
id=sl_svn99_1929

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_1930

><td class="source">var Crypto = function() {<br></td></tr
><tr
id=sl_svn99_1931

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1932

><td class="source"><br></td></tr
><tr
id=sl_svn99_1933

><td class="source">Crypto.prototype.encrypt = function(seed, string, callback) {<br></td></tr
><tr
id=sl_svn99_1934

><td class="source">    this.encryptWin = callback;<br></td></tr
><tr
id=sl_svn99_1935

><td class="source">    PhoneGap.exec(null, null, &quot;Crypto&quot;, &quot;encrypt&quot;, [seed, string]);<br></td></tr
><tr
id=sl_svn99_1936

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1937

><td class="source"><br></td></tr
><tr
id=sl_svn99_1938

><td class="source">Crypto.prototype.decrypt = function(seed, string, callback) {<br></td></tr
><tr
id=sl_svn99_1939

><td class="source">    this.decryptWin = callback;<br></td></tr
><tr
id=sl_svn99_1940

><td class="source">    PhoneGap.exec(null, null, &quot;Crypto&quot;, &quot;decrypt&quot;, [seed, string]);<br></td></tr
><tr
id=sl_svn99_1941

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1942

><td class="source"><br></td></tr
><tr
id=sl_svn99_1943

><td class="source">Crypto.prototype.gotCryptedString = function(string) {<br></td></tr
><tr
id=sl_svn99_1944

><td class="source">    this.encryptWin(string);<br></td></tr
><tr
id=sl_svn99_1945

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1946

><td class="source"><br></td></tr
><tr
id=sl_svn99_1947

><td class="source">Crypto.prototype.getPlainString = function(string) {<br></td></tr
><tr
id=sl_svn99_1948

><td class="source">    this.decryptWin(string);<br></td></tr
><tr
id=sl_svn99_1949

><td class="source">};<br></td></tr
><tr
id=sl_svn99_1950

><td class="source"><br></td></tr
><tr
id=sl_svn99_1951

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_1952

><td class="source">    if (typeof navigator.Crypto === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_1953

><td class="source">        navigator.Crypto = new Crypto();<br></td></tr
><tr
id=sl_svn99_1954

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_1955

><td class="source">});<br></td></tr
><tr
id=sl_svn99_1956

><td class="source">}<br></td></tr
><tr
id=sl_svn99_1957

><td class="source"><br></td></tr
><tr
id=sl_svn99_1958

><td class="source"><br></td></tr
><tr
id=sl_svn99_1959

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_1960

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_1961

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_1962

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_1963

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_1964

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_1965

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1966

><td class="source"><br></td></tr
><tr
id=sl_svn99_1967

><td class="source">if (!PhoneGap.hasResource(&quot;device&quot;)) {<br></td></tr
><tr
id=sl_svn99_1968

><td class="source">PhoneGap.addResource(&quot;device&quot;);<br></td></tr
><tr
id=sl_svn99_1969

><td class="source"><br></td></tr
><tr
id=sl_svn99_1970

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_1971

><td class="source"> * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the<br></td></tr
><tr
id=sl_svn99_1972

><td class="source"> * phone, etc.<br></td></tr
><tr
id=sl_svn99_1973

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_1974

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_1975

><td class="source">var Device = function() {<br></td></tr
><tr
id=sl_svn99_1976

><td class="source">    this.available = PhoneGap.available;<br></td></tr
><tr
id=sl_svn99_1977

><td class="source">    this.platform = null;<br></td></tr
><tr
id=sl_svn99_1978

><td class="source">    this.version = null;<br></td></tr
><tr
id=sl_svn99_1979

><td class="source">    this.name = null;<br></td></tr
><tr
id=sl_svn99_1980

><td class="source">    this.uuid = null;<br></td></tr
><tr
id=sl_svn99_1981

><td class="source">    this.phonegap = null;<br></td></tr
><tr
id=sl_svn99_1982

><td class="source"><br></td></tr
><tr
id=sl_svn99_1983

><td class="source">    var me = this;<br></td></tr
><tr
id=sl_svn99_1984

><td class="source">    this.getInfo(<br></td></tr
><tr
id=sl_svn99_1985

><td class="source">        function(info) {<br></td></tr
><tr
id=sl_svn99_1986

><td class="source">            me.available = true;<br></td></tr
><tr
id=sl_svn99_1987

><td class="source">            me.platform = info.platform;<br></td></tr
><tr
id=sl_svn99_1988

><td class="source">            me.version = info.version;<br></td></tr
><tr
id=sl_svn99_1989

><td class="source">            me.name = info.name;<br></td></tr
><tr
id=sl_svn99_1990

><td class="source">            me.uuid = info.uuid;<br></td></tr
><tr
id=sl_svn99_1991

><td class="source">            me.phonegap = info.phonegap;<br></td></tr
><tr
id=sl_svn99_1992

><td class="source">            PhoneGap.onPhoneGapInfoReady.fire();<br></td></tr
><tr
id=sl_svn99_1993

><td class="source">        },<br></td></tr
><tr
id=sl_svn99_1994

><td class="source">        function(e) {<br></td></tr
><tr
id=sl_svn99_1995

><td class="source">            me.available = false;<br></td></tr
><tr
id=sl_svn99_1996

><td class="source">            console.log(&quot;Error initializing PhoneGap: &quot; + e);<br></td></tr
><tr
id=sl_svn99_1997

><td class="source">            alert(&quot;Error initializing PhoneGap: &quot;+e);<br></td></tr
><tr
id=sl_svn99_1998

><td class="source">        });<br></td></tr
><tr
id=sl_svn99_1999

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2000

><td class="source"><br></td></tr
><tr
id=sl_svn99_2001

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2002

><td class="source"> * Get device info<br></td></tr
><tr
id=sl_svn99_2003

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2004

><td class="source"> * @param {Function} successCallback The function to call when the heading data is available<br></td></tr
><tr
id=sl_svn99_2005

><td class="source"> * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_2006

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2007

><td class="source">Device.prototype.getInfo = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2008

><td class="source"><br></td></tr
><tr
id=sl_svn99_2009

><td class="source">    // successCallback required<br></td></tr
><tr
id=sl_svn99_2010

><td class="source">    if (typeof successCallback !== &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2011

><td class="source">        console.log(&quot;Device Error: successCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_2012

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_2013

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2014

><td class="source"><br></td></tr
><tr
id=sl_svn99_2015

><td class="source">    // errorCallback optional<br></td></tr
><tr
id=sl_svn99_2016

><td class="source">    if (errorCallback &amp;&amp; (typeof errorCallback !== &quot;function&quot;)) {<br></td></tr
><tr
id=sl_svn99_2017

><td class="source">        console.log(&quot;Device Error: errorCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_2018

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_2019

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2020

><td class="source"><br></td></tr
><tr
id=sl_svn99_2021

><td class="source">    // Get info<br></td></tr
><tr
id=sl_svn99_2022

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;Device&quot;, &quot;getDeviceInfo&quot;, []);<br></td></tr
><tr
id=sl_svn99_2023

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2024

><td class="source"><br></td></tr
><tr
id=sl_svn99_2025

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_2026

><td class="source"> * DEPRECATED<br></td></tr
><tr
id=sl_svn99_2027

><td class="source"> * This is only for Android.<br></td></tr
><tr
id=sl_svn99_2028

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2029

><td class="source"> * You must explicitly override the back button.<br></td></tr
><tr
id=sl_svn99_2030

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2031

><td class="source">Device.prototype.overrideBackButton = function() {<br></td></tr
><tr
id=sl_svn99_2032

><td class="source">	console.log(&quot;Device.overrideBackButton() is deprecated.  Use App.overrideBackbutton(true).&quot;);<br></td></tr
><tr
id=sl_svn99_2033

><td class="source">	navigator.app.overrideBackbutton(true);<br></td></tr
><tr
id=sl_svn99_2034

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2035

><td class="source"><br></td></tr
><tr
id=sl_svn99_2036

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_2037

><td class="source"> * DEPRECATED<br></td></tr
><tr
id=sl_svn99_2038

><td class="source"> * This is only for Android.<br></td></tr
><tr
id=sl_svn99_2039

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2040

><td class="source"> * This resets the back button to the default behaviour<br></td></tr
><tr
id=sl_svn99_2041

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2042

><td class="source">Device.prototype.resetBackButton = function() {<br></td></tr
><tr
id=sl_svn99_2043

><td class="source">	console.log(&quot;Device.resetBackButton() is deprecated.  Use App.overrideBackbutton(false).&quot;);<br></td></tr
><tr
id=sl_svn99_2044

><td class="source">	navigator.app.overrideBackbutton(false);<br></td></tr
><tr
id=sl_svn99_2045

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2046

><td class="source"><br></td></tr
><tr
id=sl_svn99_2047

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_2048

><td class="source"> * DEPRECATED<br></td></tr
><tr
id=sl_svn99_2049

><td class="source"> * This is only for Android.<br></td></tr
><tr
id=sl_svn99_2050

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2051

><td class="source"> * This terminates the activity!<br></td></tr
><tr
id=sl_svn99_2052

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2053

><td class="source">Device.prototype.exitApp = function() {<br></td></tr
><tr
id=sl_svn99_2054

><td class="source">	console.log(&quot;Device.exitApp() is deprecated.  Use App.exitApp().&quot;);<br></td></tr
><tr
id=sl_svn99_2055

><td class="source">	navigator.app.exitApp();<br></td></tr
><tr
id=sl_svn99_2056

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2057

><td class="source"><br></td></tr
><tr
id=sl_svn99_2058

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_2059

><td class="source">    if (typeof navigator.device === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_2060

><td class="source">        navigator.device = window.device = new Device();<br></td></tr
><tr
id=sl_svn99_2061

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2062

><td class="source">});<br></td></tr
><tr
id=sl_svn99_2063

><td class="source">}<br></td></tr
><tr
id=sl_svn99_2064

><td class="source"><br></td></tr
><tr
id=sl_svn99_2065

><td class="source"><br></td></tr
><tr
id=sl_svn99_2066

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_2067

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_2068

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_2069

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2070

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_2071

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_2072

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2073

><td class="source"><br></td></tr
><tr
id=sl_svn99_2074

><td class="source">if (!PhoneGap.hasResource(&quot;file&quot;)) {<br></td></tr
><tr
id=sl_svn99_2075

><td class="source">PhoneGap.addResource(&quot;file&quot;);<br></td></tr
><tr
id=sl_svn99_2076

><td class="source"><br></td></tr
><tr
id=sl_svn99_2077

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2078

><td class="source"> * This class provides some useful information about a file.<br></td></tr
><tr
id=sl_svn99_2079

><td class="source"> * This is the fields returned when navigator.fileMgr.getFileProperties()<br></td></tr
><tr
id=sl_svn99_2080

><td class="source"> * is called.<br></td></tr
><tr
id=sl_svn99_2081

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_2082

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2083

><td class="source">var FileProperties = function(filePath) {<br></td></tr
><tr
id=sl_svn99_2084

><td class="source">    this.filePath = filePath;<br></td></tr
><tr
id=sl_svn99_2085

><td class="source">    this.size = 0;<br></td></tr
><tr
id=sl_svn99_2086

><td class="source">    this.lastModifiedDate = null;<br></td></tr
><tr
id=sl_svn99_2087

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2088

><td class="source"><br></td></tr
><tr
id=sl_svn99_2089

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2090

><td class="source"> * Represents a single file.<br></td></tr
><tr
id=sl_svn99_2091

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2092

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_2093

><td class="source"> * @param name {DOMString} name of the file, without path information<br></td></tr
><tr
id=sl_svn99_2094

><td class="source"> * @param fullPath {DOMString} the full path of the file, including the name<br></td></tr
><tr
id=sl_svn99_2095

><td class="source"> * @param type {DOMString} mime type<br></td></tr
><tr
id=sl_svn99_2096

><td class="source"> * @param lastModifiedDate {Date} last modified date<br></td></tr
><tr
id=sl_svn99_2097

><td class="source"> * @param size {Number} size of the file in bytes<br></td></tr
><tr
id=sl_svn99_2098

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2099

><td class="source">var File = function(name, fullPath, type, lastModifiedDate, size) {<br></td></tr
><tr
id=sl_svn99_2100

><td class="source">	this.name = name || null;<br></td></tr
><tr
id=sl_svn99_2101

><td class="source">    this.fullPath = fullPath || null;<br></td></tr
><tr
id=sl_svn99_2102

><td class="source">	this.type = type || null;<br></td></tr
><tr
id=sl_svn99_2103

><td class="source">    this.lastModifiedDate = lastModifiedDate || null;<br></td></tr
><tr
id=sl_svn99_2104

><td class="source">    this.size = size || 0;<br></td></tr
><tr
id=sl_svn99_2105

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2106

><td class="source"><br></td></tr
><tr
id=sl_svn99_2107

><td class="source">/** @constructor */<br></td></tr
><tr
id=sl_svn99_2108

><td class="source">var FileError = function() {<br></td></tr
><tr
id=sl_svn99_2109

><td class="source">   this.code = null;<br></td></tr
><tr
id=sl_svn99_2110

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2111

><td class="source"><br></td></tr
><tr
id=sl_svn99_2112

><td class="source">// File error codes<br></td></tr
><tr
id=sl_svn99_2113

><td class="source">// Found in DOMException<br></td></tr
><tr
id=sl_svn99_2114

><td class="source">FileError.NOT_FOUND_ERR = 1;<br></td></tr
><tr
id=sl_svn99_2115

><td class="source">FileError.SECURITY_ERR = 2;<br></td></tr
><tr
id=sl_svn99_2116

><td class="source">FileError.ABORT_ERR = 3;<br></td></tr
><tr
id=sl_svn99_2117

><td class="source"><br></td></tr
><tr
id=sl_svn99_2118

><td class="source">// Added by this specification<br></td></tr
><tr
id=sl_svn99_2119

><td class="source">FileError.NOT_READABLE_ERR = 4;<br></td></tr
><tr
id=sl_svn99_2120

><td class="source">FileError.ENCODING_ERR = 5;<br></td></tr
><tr
id=sl_svn99_2121

><td class="source">FileError.NO_MODIFICATION_ALLOWED_ERR = 6;<br></td></tr
><tr
id=sl_svn99_2122

><td class="source">FileError.INVALID_STATE_ERR = 7;<br></td></tr
><tr
id=sl_svn99_2123

><td class="source">FileError.SYNTAX_ERR = 8;<br></td></tr
><tr
id=sl_svn99_2124

><td class="source">FileError.INVALID_MODIFICATION_ERR = 9;<br></td></tr
><tr
id=sl_svn99_2125

><td class="source">FileError.QUOTA_EXCEEDED_ERR = 10;<br></td></tr
><tr
id=sl_svn99_2126

><td class="source">FileError.TYPE_MISMATCH_ERR = 11;<br></td></tr
><tr
id=sl_svn99_2127

><td class="source">FileError.PATH_EXISTS_ERR = 12;<br></td></tr
><tr
id=sl_svn99_2128

><td class="source"><br></td></tr
><tr
id=sl_svn99_2129

><td class="source">//-----------------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn99_2130

><td class="source">// File manager<br></td></tr
><tr
id=sl_svn99_2131

><td class="source">//-----------------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn99_2132

><td class="source"><br></td></tr
><tr
id=sl_svn99_2133

><td class="source">/** @constructor */<br></td></tr
><tr
id=sl_svn99_2134

><td class="source">var FileMgr = function() {<br></td></tr
><tr
id=sl_svn99_2135

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2136

><td class="source"><br></td></tr
><tr
id=sl_svn99_2137

><td class="source">FileMgr.prototype.getFileProperties = function(filePath) {<br></td></tr
><tr
id=sl_svn99_2138

><td class="source">    return PhoneGap.exec(null, null, &quot;File&quot;, &quot;getFileProperties&quot;, [filePath]);<br></td></tr
><tr
id=sl_svn99_2139

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2140

><td class="source"><br></td></tr
><tr
id=sl_svn99_2141

><td class="source">FileMgr.prototype.getFileBasePaths = function() {<br></td></tr
><tr
id=sl_svn99_2142

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2143

><td class="source"><br></td></tr
><tr
id=sl_svn99_2144

><td class="source">FileMgr.prototype.testSaveLocationExists = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2145

><td class="source">    return PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;testSaveLocationExists&quot;, []);<br></td></tr
><tr
id=sl_svn99_2146

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2147

><td class="source"><br></td></tr
><tr
id=sl_svn99_2148

><td class="source">FileMgr.prototype.testFileExists = function(fileName, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2149

><td class="source">    return PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;testFileExists&quot;, [fileName]);<br></td></tr
><tr
id=sl_svn99_2150

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2151

><td class="source"><br></td></tr
><tr
id=sl_svn99_2152

><td class="source">FileMgr.prototype.testDirectoryExists = function(dirName, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2153

><td class="source">    return PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;testDirectoryExists&quot;, [dirName]);<br></td></tr
><tr
id=sl_svn99_2154

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2155

><td class="source"><br></td></tr
><tr
id=sl_svn99_2156

><td class="source">FileMgr.prototype.getFreeDiskSpace = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2157

><td class="source">    return PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;getFreeDiskSpace&quot;, []);<br></td></tr
><tr
id=sl_svn99_2158

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2159

><td class="source"><br></td></tr
><tr
id=sl_svn99_2160

><td class="source">FileMgr.prototype.write = function(fileName, data, position, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2161

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;write&quot;, [fileName, data, position]);<br></td></tr
><tr
id=sl_svn99_2162

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2163

><td class="source"><br></td></tr
><tr
id=sl_svn99_2164

><td class="source">FileMgr.prototype.truncate = function(fileName, size, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2165

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;truncate&quot;, [fileName, size]);<br></td></tr
><tr
id=sl_svn99_2166

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2167

><td class="source"><br></td></tr
><tr
id=sl_svn99_2168

><td class="source">FileMgr.prototype.readAsText = function(fileName, encoding, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2169

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;readAsText&quot;, [fileName, encoding]);<br></td></tr
><tr
id=sl_svn99_2170

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2171

><td class="source"><br></td></tr
><tr
id=sl_svn99_2172

><td class="source">FileMgr.prototype.readAsDataURL = function(fileName, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2173

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;readAsDataURL&quot;, [fileName]);<br></td></tr
><tr
id=sl_svn99_2174

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2175

><td class="source"><br></td></tr
><tr
id=sl_svn99_2176

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_2177

><td class="source">    if (typeof navigator.fileMgr === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_2178

><td class="source">        navigator.fileMgr = new FileMgr();<br></td></tr
><tr
id=sl_svn99_2179

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2180

><td class="source">});<br></td></tr
><tr
id=sl_svn99_2181

><td class="source"><br></td></tr
><tr
id=sl_svn99_2182

><td class="source">//-----------------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn99_2183

><td class="source">// File Reader<br></td></tr
><tr
id=sl_svn99_2184

><td class="source">//-----------------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn99_2185

><td class="source">// TODO: All other FileMgr function operate on the SD card as root.  However,<br></td></tr
><tr
id=sl_svn99_2186

><td class="source">//       for FileReader &amp; FileWriter the root is not SD card.  Should this be changed?<br></td></tr
><tr
id=sl_svn99_2187

><td class="source"><br></td></tr
><tr
id=sl_svn99_2188

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2189

><td class="source"> * This class reads the mobile device file system.<br></td></tr
><tr
id=sl_svn99_2190

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2191

><td class="source"> * For Android:<br></td></tr
><tr
id=sl_svn99_2192

><td class="source"> *      The root directory is the root of the file system.<br></td></tr
><tr
id=sl_svn99_2193

><td class="source"> *      To read from the SD card, the file name is &quot;sdcard/my_file.txt&quot;<br></td></tr
><tr
id=sl_svn99_2194

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_2195

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2196

><td class="source">var FileReader = function() {<br></td></tr
><tr
id=sl_svn99_2197

><td class="source">    this.fileName = &quot;&quot;;<br></td></tr
><tr
id=sl_svn99_2198

><td class="source"><br></td></tr
><tr
id=sl_svn99_2199

><td class="source">    this.readyState = 0;<br></td></tr
><tr
id=sl_svn99_2200

><td class="source"><br></td></tr
><tr
id=sl_svn99_2201

><td class="source">    // File data<br></td></tr
><tr
id=sl_svn99_2202

><td class="source">    this.result = null;<br></td></tr
><tr
id=sl_svn99_2203

><td class="source"><br></td></tr
><tr
id=sl_svn99_2204

><td class="source">    // Error<br></td></tr
><tr
id=sl_svn99_2205

><td class="source">    this.error = null;<br></td></tr
><tr
id=sl_svn99_2206

><td class="source"><br></td></tr
><tr
id=sl_svn99_2207

><td class="source">    // Event handlers<br></td></tr
><tr
id=sl_svn99_2208

><td class="source">    this.onloadstart = null;    // When the read starts.<br></td></tr
><tr
id=sl_svn99_2209

><td class="source">    this.onprogress = null;     // While reading (and decoding) file or fileBlob data, and reporting partial file data (progess.loaded/progress.total)<br></td></tr
><tr
id=sl_svn99_2210

><td class="source">    this.onload = null;         // When the read has successfully completed.<br></td></tr
><tr
id=sl_svn99_2211

><td class="source">    this.onerror = null;        // When the read has failed (see errors).<br></td></tr
><tr
id=sl_svn99_2212

><td class="source">    this.onloadend = null;      // When the request has completed (either in success or failure).<br></td></tr
><tr
id=sl_svn99_2213

><td class="source">    this.onabort = null;        // When the read has been aborted. For instance, by invoking the abort() method.<br></td></tr
><tr
id=sl_svn99_2214

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2215

><td class="source"><br></td></tr
><tr
id=sl_svn99_2216

><td class="source">// States<br></td></tr
><tr
id=sl_svn99_2217

><td class="source">FileReader.EMPTY = 0;<br></td></tr
><tr
id=sl_svn99_2218

><td class="source">FileReader.LOADING = 1;<br></td></tr
><tr
id=sl_svn99_2219

><td class="source">FileReader.DONE = 2;<br></td></tr
><tr
id=sl_svn99_2220

><td class="source"><br></td></tr
><tr
id=sl_svn99_2221

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2222

><td class="source"> * Abort reading file.<br></td></tr
><tr
id=sl_svn99_2223

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2224

><td class="source">FileReader.prototype.abort = function() {<br></td></tr
><tr
id=sl_svn99_2225

><td class="source">    var evt;<br></td></tr
><tr
id=sl_svn99_2226

><td class="source">    this.readyState = FileReader.DONE;<br></td></tr
><tr
id=sl_svn99_2227

><td class="source">    this.result = null;<br></td></tr
><tr
id=sl_svn99_2228

><td class="source"><br></td></tr
><tr
id=sl_svn99_2229

><td class="source">    // set error<br></td></tr
><tr
id=sl_svn99_2230

><td class="source">    var error = new FileError();<br></td></tr
><tr
id=sl_svn99_2231

><td class="source">    error.code = error.ABORT_ERR;<br></td></tr
><tr
id=sl_svn99_2232

><td class="source">    this.error = error;<br></td></tr
><tr
id=sl_svn99_2233

><td class="source"><br></td></tr
><tr
id=sl_svn99_2234

><td class="source">    // If error callback<br></td></tr
><tr
id=sl_svn99_2235

><td class="source">    if (typeof this.onerror === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2236

><td class="source">        this.onerror({&quot;type&quot;:&quot;error&quot;, &quot;target&quot;:this});<br></td></tr
><tr
id=sl_svn99_2237

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2238

><td class="source">    // If abort callback<br></td></tr
><tr
id=sl_svn99_2239

><td class="source">    if (typeof this.onabort === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2240

><td class="source">        this.onabort({&quot;type&quot;:&quot;abort&quot;, &quot;target&quot;:this});<br></td></tr
><tr
id=sl_svn99_2241

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2242

><td class="source">    // If load end callback<br></td></tr
><tr
id=sl_svn99_2243

><td class="source">    if (typeof this.onloadend === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2244

><td class="source">        this.onloadend({&quot;type&quot;:&quot;loadend&quot;, &quot;target&quot;:this});<br></td></tr
><tr
id=sl_svn99_2245

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2246

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2247

><td class="source"><br></td></tr
><tr
id=sl_svn99_2248

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2249

><td class="source"> * Read text file.<br></td></tr
><tr
id=sl_svn99_2250

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2251

><td class="source"> * @param file          {File} File object containing file properties<br></td></tr
><tr
id=sl_svn99_2252

><td class="source"> * @param encoding      [Optional] (see http://www.iana.org/assignments/character-sets)<br></td></tr
><tr
id=sl_svn99_2253

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2254

><td class="source">FileReader.prototype.readAsText = function(file, encoding) {<br></td></tr
><tr
id=sl_svn99_2255

><td class="source">    this.fileName = &quot;&quot;;<br></td></tr
><tr
id=sl_svn99_2256

><td class="source">	if (typeof file.fullPath === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_2257

><td class="source">		this.fileName = file;<br></td></tr
><tr
id=sl_svn99_2258

><td class="source">	} else {<br></td></tr
><tr
id=sl_svn99_2259

><td class="source">		this.fileName = file.fullPath;<br></td></tr
><tr
id=sl_svn99_2260

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_2261

><td class="source"><br></td></tr
><tr
id=sl_svn99_2262

><td class="source">    // LOADING state<br></td></tr
><tr
id=sl_svn99_2263

><td class="source">    this.readyState = FileReader.LOADING;<br></td></tr
><tr
id=sl_svn99_2264

><td class="source"><br></td></tr
><tr
id=sl_svn99_2265

><td class="source">    // If loadstart callback<br></td></tr
><tr
id=sl_svn99_2266

><td class="source">    if (typeof this.onloadstart === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2267

><td class="source">        this.onloadstart({&quot;type&quot;:&quot;loadstart&quot;, &quot;target&quot;:this});<br></td></tr
><tr
id=sl_svn99_2268

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2269

><td class="source"><br></td></tr
><tr
id=sl_svn99_2270

><td class="source">    // Default encoding is UTF-8<br></td></tr
><tr
id=sl_svn99_2271

><td class="source">    var enc = encoding ? encoding : &quot;UTF-8&quot;;<br></td></tr
><tr
id=sl_svn99_2272

><td class="source"><br></td></tr
><tr
id=sl_svn99_2273

><td class="source">    var me = this;<br></td></tr
><tr
id=sl_svn99_2274

><td class="source"><br></td></tr
><tr
id=sl_svn99_2275

><td class="source">    // Read file<br></td></tr
><tr
id=sl_svn99_2276

><td class="source">    navigator.fileMgr.readAsText(this.fileName, enc,<br></td></tr
><tr
id=sl_svn99_2277

><td class="source"><br></td></tr
><tr
id=sl_svn99_2278

><td class="source">        // Success callback<br></td></tr
><tr
id=sl_svn99_2279

><td class="source">        function(r) {<br></td></tr
><tr
id=sl_svn99_2280

><td class="source">            var evt;<br></td></tr
><tr
id=sl_svn99_2281

><td class="source"><br></td></tr
><tr
id=sl_svn99_2282

><td class="source">            // If DONE (cancelled), then don&#39;t do anything<br></td></tr
><tr
id=sl_svn99_2283

><td class="source">            if (me.readyState === FileReader.DONE) {<br></td></tr
><tr
id=sl_svn99_2284

><td class="source">                return;<br></td></tr
><tr
id=sl_svn99_2285

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2286

><td class="source"><br></td></tr
><tr
id=sl_svn99_2287

><td class="source">            // Save result<br></td></tr
><tr
id=sl_svn99_2288

><td class="source">            me.result = r;<br></td></tr
><tr
id=sl_svn99_2289

><td class="source"><br></td></tr
><tr
id=sl_svn99_2290

><td class="source">            // If onload callback<br></td></tr
><tr
id=sl_svn99_2291

><td class="source">            if (typeof me.onload === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2292

><td class="source">                me.onload({&quot;type&quot;:&quot;load&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2293

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2294

><td class="source"><br></td></tr
><tr
id=sl_svn99_2295

><td class="source">            // DONE state<br></td></tr
><tr
id=sl_svn99_2296

><td class="source">            me.readyState = FileReader.DONE;<br></td></tr
><tr
id=sl_svn99_2297

><td class="source"><br></td></tr
><tr
id=sl_svn99_2298

><td class="source">            // If onloadend callback<br></td></tr
><tr
id=sl_svn99_2299

><td class="source">            if (typeof me.onloadend === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2300

><td class="source">                me.onloadend({&quot;type&quot;:&quot;loadend&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2301

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2302

><td class="source">        },<br></td></tr
><tr
id=sl_svn99_2303

><td class="source"><br></td></tr
><tr
id=sl_svn99_2304

><td class="source">        // Error callback<br></td></tr
><tr
id=sl_svn99_2305

><td class="source">        function(e) {<br></td></tr
><tr
id=sl_svn99_2306

><td class="source">            var evt;<br></td></tr
><tr
id=sl_svn99_2307

><td class="source">            // If DONE (cancelled), then don&#39;t do anything<br></td></tr
><tr
id=sl_svn99_2308

><td class="source">            if (me.readyState === FileReader.DONE) {<br></td></tr
><tr
id=sl_svn99_2309

><td class="source">                return;<br></td></tr
><tr
id=sl_svn99_2310

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2311

><td class="source"><br></td></tr
><tr
id=sl_svn99_2312

><td class="source">            // Save error<br></td></tr
><tr
id=sl_svn99_2313

><td class="source">		    me.error = e;<br></td></tr
><tr
id=sl_svn99_2314

><td class="source"><br></td></tr
><tr
id=sl_svn99_2315

><td class="source">            // If onerror callback<br></td></tr
><tr
id=sl_svn99_2316

><td class="source">            if (typeof me.onerror === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2317

><td class="source">                me.onerror({&quot;type&quot;:&quot;error&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2318

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2319

><td class="source"><br></td></tr
><tr
id=sl_svn99_2320

><td class="source">            // DONE state<br></td></tr
><tr
id=sl_svn99_2321

><td class="source">            me.readyState = FileReader.DONE;<br></td></tr
><tr
id=sl_svn99_2322

><td class="source"><br></td></tr
><tr
id=sl_svn99_2323

><td class="source">            // If onloadend callback<br></td></tr
><tr
id=sl_svn99_2324

><td class="source">            if (typeof me.onloadend === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2325

><td class="source">                me.onloadend({&quot;type&quot;:&quot;loadend&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2326

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2327

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_2328

><td class="source">        );<br></td></tr
><tr
id=sl_svn99_2329

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2330

><td class="source"><br></td></tr
><tr
id=sl_svn99_2331

><td class="source"><br></td></tr
><tr
id=sl_svn99_2332

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2333

><td class="source"> * Read file and return data as a base64 encoded data url.<br></td></tr
><tr
id=sl_svn99_2334

><td class="source"> * A data url is of the form:<br></td></tr
><tr
id=sl_svn99_2335

><td class="source"> *      data:[&lt;mediatype&gt;][;base64],&lt;data&gt;<br></td></tr
><tr
id=sl_svn99_2336

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2337

><td class="source"> * @param file          {File} File object containing file properties<br></td></tr
><tr
id=sl_svn99_2338

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2339

><td class="source">FileReader.prototype.readAsDataURL = function(file) {<br></td></tr
><tr
id=sl_svn99_2340

><td class="source">	this.fileName = &quot;&quot;;<br></td></tr
><tr
id=sl_svn99_2341

><td class="source">    if (typeof file.fullPath === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_2342

><td class="source">        this.fileName = file;<br></td></tr
><tr
id=sl_svn99_2343

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn99_2344

><td class="source">        this.fileName = file.fullPath;<br></td></tr
><tr
id=sl_svn99_2345

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2346

><td class="source"><br></td></tr
><tr
id=sl_svn99_2347

><td class="source">    // LOADING state<br></td></tr
><tr
id=sl_svn99_2348

><td class="source">    this.readyState = FileReader.LOADING;<br></td></tr
><tr
id=sl_svn99_2349

><td class="source"><br></td></tr
><tr
id=sl_svn99_2350

><td class="source">    // If loadstart callback<br></td></tr
><tr
id=sl_svn99_2351

><td class="source">    if (typeof this.onloadstart === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2352

><td class="source">        this.onloadstart({&quot;type&quot;:&quot;loadstart&quot;, &quot;target&quot;:this});<br></td></tr
><tr
id=sl_svn99_2353

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2354

><td class="source"><br></td></tr
><tr
id=sl_svn99_2355

><td class="source">    var me = this;<br></td></tr
><tr
id=sl_svn99_2356

><td class="source"><br></td></tr
><tr
id=sl_svn99_2357

><td class="source">    // Read file<br></td></tr
><tr
id=sl_svn99_2358

><td class="source">    navigator.fileMgr.readAsDataURL(this.fileName,<br></td></tr
><tr
id=sl_svn99_2359

><td class="source"><br></td></tr
><tr
id=sl_svn99_2360

><td class="source">        // Success callback<br></td></tr
><tr
id=sl_svn99_2361

><td class="source">        function(r) {<br></td></tr
><tr
id=sl_svn99_2362

><td class="source">            var evt;<br></td></tr
><tr
id=sl_svn99_2363

><td class="source"><br></td></tr
><tr
id=sl_svn99_2364

><td class="source">            // If DONE (cancelled), then don&#39;t do anything<br></td></tr
><tr
id=sl_svn99_2365

><td class="source">            if (me.readyState === FileReader.DONE) {<br></td></tr
><tr
id=sl_svn99_2366

><td class="source">                return;<br></td></tr
><tr
id=sl_svn99_2367

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2368

><td class="source"><br></td></tr
><tr
id=sl_svn99_2369

><td class="source">            // Save result<br></td></tr
><tr
id=sl_svn99_2370

><td class="source">            me.result = r;<br></td></tr
><tr
id=sl_svn99_2371

><td class="source"><br></td></tr
><tr
id=sl_svn99_2372

><td class="source">            // If onload callback<br></td></tr
><tr
id=sl_svn99_2373

><td class="source">            if (typeof me.onload === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2374

><td class="source">                me.onload({&quot;type&quot;:&quot;load&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2375

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2376

><td class="source"><br></td></tr
><tr
id=sl_svn99_2377

><td class="source">            // DONE state<br></td></tr
><tr
id=sl_svn99_2378

><td class="source">            me.readyState = FileReader.DONE;<br></td></tr
><tr
id=sl_svn99_2379

><td class="source"><br></td></tr
><tr
id=sl_svn99_2380

><td class="source">            // If onloadend callback<br></td></tr
><tr
id=sl_svn99_2381

><td class="source">            if (typeof me.onloadend === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2382

><td class="source">                me.onloadend({&quot;type&quot;:&quot;loadend&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2383

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2384

><td class="source">        },<br></td></tr
><tr
id=sl_svn99_2385

><td class="source"><br></td></tr
><tr
id=sl_svn99_2386

><td class="source">        // Error callback<br></td></tr
><tr
id=sl_svn99_2387

><td class="source">        function(e) {<br></td></tr
><tr
id=sl_svn99_2388

><td class="source">            var evt;<br></td></tr
><tr
id=sl_svn99_2389

><td class="source">            // If DONE (cancelled), then don&#39;t do anything<br></td></tr
><tr
id=sl_svn99_2390

><td class="source">            if (me.readyState === FileReader.DONE) {<br></td></tr
><tr
id=sl_svn99_2391

><td class="source">                return;<br></td></tr
><tr
id=sl_svn99_2392

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2393

><td class="source"><br></td></tr
><tr
id=sl_svn99_2394

><td class="source">            // Save error<br></td></tr
><tr
id=sl_svn99_2395

><td class="source">            me.error = e;<br></td></tr
><tr
id=sl_svn99_2396

><td class="source"><br></td></tr
><tr
id=sl_svn99_2397

><td class="source">            // If onerror callback<br></td></tr
><tr
id=sl_svn99_2398

><td class="source">            if (typeof me.onerror === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2399

><td class="source">                me.onerror({&quot;type&quot;:&quot;error&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2400

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2401

><td class="source"><br></td></tr
><tr
id=sl_svn99_2402

><td class="source">            // DONE state<br></td></tr
><tr
id=sl_svn99_2403

><td class="source">            me.readyState = FileReader.DONE;<br></td></tr
><tr
id=sl_svn99_2404

><td class="source"><br></td></tr
><tr
id=sl_svn99_2405

><td class="source">            // If onloadend callback<br></td></tr
><tr
id=sl_svn99_2406

><td class="source">            if (typeof me.onloadend === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2407

><td class="source">                me.onloadend({&quot;type&quot;:&quot;loadend&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2408

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2409

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_2410

><td class="source">        );<br></td></tr
><tr
id=sl_svn99_2411

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2412

><td class="source"><br></td></tr
><tr
id=sl_svn99_2413

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2414

><td class="source"> * Read file and return data as a binary data.<br></td></tr
><tr
id=sl_svn99_2415

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2416

><td class="source"> * @param file          {File} File object containing file properties<br></td></tr
><tr
id=sl_svn99_2417

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2418

><td class="source">FileReader.prototype.readAsBinaryString = function(file) {<br></td></tr
><tr
id=sl_svn99_2419

><td class="source">    // TODO - Can&#39;t return binary data to browser.<br></td></tr
><tr
id=sl_svn99_2420

><td class="source">    this.fileName = file;<br></td></tr
><tr
id=sl_svn99_2421

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2422

><td class="source"><br></td></tr
><tr
id=sl_svn99_2423

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2424

><td class="source"> * Read file and return data as a binary data.<br></td></tr
><tr
id=sl_svn99_2425

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2426

><td class="source"> * @param file          {File} File object containing file properties<br></td></tr
><tr
id=sl_svn99_2427

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2428

><td class="source">FileReader.prototype.readAsArrayBuffer = function(file) {<br></td></tr
><tr
id=sl_svn99_2429

><td class="source">    // TODO - Can&#39;t return binary data to browser.<br></td></tr
><tr
id=sl_svn99_2430

><td class="source">    this.fileName = file;<br></td></tr
><tr
id=sl_svn99_2431

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2432

><td class="source"><br></td></tr
><tr
id=sl_svn99_2433

><td class="source">//-----------------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn99_2434

><td class="source">// File Writer<br></td></tr
><tr
id=sl_svn99_2435

><td class="source">//-----------------------------------------------------------------------------<br></td></tr
><tr
id=sl_svn99_2436

><td class="source"><br></td></tr
><tr
id=sl_svn99_2437

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2438

><td class="source"> * This class writes to the mobile device file system.<br></td></tr
><tr
id=sl_svn99_2439

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2440

><td class="source"> * For Android:<br></td></tr
><tr
id=sl_svn99_2441

><td class="source"> *      The root directory is the root of the file system.<br></td></tr
><tr
id=sl_svn99_2442

><td class="source"> *      To write to the SD card, the file name is &quot;sdcard/my_file.txt&quot;<br></td></tr
><tr
id=sl_svn99_2443

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2444

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_2445

><td class="source"> * @param file {File} File object containing file properties<br></td></tr
><tr
id=sl_svn99_2446

><td class="source"> * @param append if true write to the end of the file, otherwise overwrite the file<br></td></tr
><tr
id=sl_svn99_2447

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2448

><td class="source">var FileWriter = function(file) {<br></td></tr
><tr
id=sl_svn99_2449

><td class="source">    this.fileName = &quot;&quot;;<br></td></tr
><tr
id=sl_svn99_2450

><td class="source">    this.length = 0;<br></td></tr
><tr
id=sl_svn99_2451

><td class="source">	if (file) {<br></td></tr
><tr
id=sl_svn99_2452

><td class="source">	    this.fileName = file.fullPath || file;<br></td></tr
><tr
id=sl_svn99_2453

><td class="source">	    this.length = file.size || 0;<br></td></tr
><tr
id=sl_svn99_2454

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_2455

><td class="source">    // default is to write at the beginning of the file<br></td></tr
><tr
id=sl_svn99_2456

><td class="source">    this.position = 0;<br></td></tr
><tr
id=sl_svn99_2457

><td class="source"><br></td></tr
><tr
id=sl_svn99_2458

><td class="source">    this.readyState = 0; // EMPTY<br></td></tr
><tr
id=sl_svn99_2459

><td class="source"><br></td></tr
><tr
id=sl_svn99_2460

><td class="source">    this.result = null;<br></td></tr
><tr
id=sl_svn99_2461

><td class="source"><br></td></tr
><tr
id=sl_svn99_2462

><td class="source">    // Error<br></td></tr
><tr
id=sl_svn99_2463

><td class="source">    this.error = null;<br></td></tr
><tr
id=sl_svn99_2464

><td class="source"><br></td></tr
><tr
id=sl_svn99_2465

><td class="source">    // Event handlers<br></td></tr
><tr
id=sl_svn99_2466

><td class="source">    this.onwritestart = null;	// When writing starts<br></td></tr
><tr
id=sl_svn99_2467

><td class="source">    this.onprogress = null;		// While writing the file, and reporting partial file data<br></td></tr
><tr
id=sl_svn99_2468

><td class="source">    this.onwrite = null;		// When the write has successfully completed.<br></td></tr
><tr
id=sl_svn99_2469

><td class="source">    this.onwriteend = null;		// When the request has completed (either in success or failure).<br></td></tr
><tr
id=sl_svn99_2470

><td class="source">    this.onabort = null;		// When the write has been aborted. For instance, by invoking the abort() method.<br></td></tr
><tr
id=sl_svn99_2471

><td class="source">    this.onerror = null;		// When the write has failed (see errors).<br></td></tr
><tr
id=sl_svn99_2472

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2473

><td class="source"><br></td></tr
><tr
id=sl_svn99_2474

><td class="source">// States<br></td></tr
><tr
id=sl_svn99_2475

><td class="source">FileWriter.INIT = 0;<br></td></tr
><tr
id=sl_svn99_2476

><td class="source">FileWriter.WRITING = 1;<br></td></tr
><tr
id=sl_svn99_2477

><td class="source">FileWriter.DONE = 2;<br></td></tr
><tr
id=sl_svn99_2478

><td class="source"><br></td></tr
><tr
id=sl_svn99_2479

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2480

><td class="source"> * Abort writing file.<br></td></tr
><tr
id=sl_svn99_2481

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2482

><td class="source">FileWriter.prototype.abort = function() {<br></td></tr
><tr
id=sl_svn99_2483

><td class="source">    // check for invalid state<br></td></tr
><tr
id=sl_svn99_2484

><td class="source">	if (this.readyState === FileWriter.DONE || this.readyState === FileWriter.INIT) {<br></td></tr
><tr
id=sl_svn99_2485

><td class="source">		throw FileError.INVALID_STATE_ERR;<br></td></tr
><tr
id=sl_svn99_2486

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_2487

><td class="source"><br></td></tr
><tr
id=sl_svn99_2488

><td class="source">    // set error<br></td></tr
><tr
id=sl_svn99_2489

><td class="source">    var error = new FileError(), evt;<br></td></tr
><tr
id=sl_svn99_2490

><td class="source">    error.code = error.ABORT_ERR;<br></td></tr
><tr
id=sl_svn99_2491

><td class="source">    this.error = error;<br></td></tr
><tr
id=sl_svn99_2492

><td class="source"><br></td></tr
><tr
id=sl_svn99_2493

><td class="source">    // If error callback<br></td></tr
><tr
id=sl_svn99_2494

><td class="source">    if (typeof this.onerror === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2495

><td class="source">        this.onerror({&quot;type&quot;:&quot;error&quot;, &quot;target&quot;:this});<br></td></tr
><tr
id=sl_svn99_2496

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2497

><td class="source">    // If abort callback<br></td></tr
><tr
id=sl_svn99_2498

><td class="source">    if (typeof this.onabort === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2499

><td class="source">        this.onabort({&quot;type&quot;:&quot;abort&quot;, &quot;target&quot;:this});<br></td></tr
><tr
id=sl_svn99_2500

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2501

><td class="source"><br></td></tr
><tr
id=sl_svn99_2502

><td class="source">    this.readyState = FileWriter.DONE;<br></td></tr
><tr
id=sl_svn99_2503

><td class="source"><br></td></tr
><tr
id=sl_svn99_2504

><td class="source">    // If write end callback<br></td></tr
><tr
id=sl_svn99_2505

><td class="source">    if (typeof this.onwriteend == &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2506

><td class="source">        this.onwriteend({&quot;type&quot;:&quot;writeend&quot;, &quot;target&quot;:this});<br></td></tr
><tr
id=sl_svn99_2507

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2508

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2509

><td class="source"><br></td></tr
><tr
id=sl_svn99_2510

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2511

><td class="source"> * Writes data to the file<br></td></tr
><tr
id=sl_svn99_2512

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2513

><td class="source"> * @param text to be written<br></td></tr
><tr
id=sl_svn99_2514

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2515

><td class="source">FileWriter.prototype.write = function(text) {<br></td></tr
><tr
id=sl_svn99_2516

><td class="source">	// Throw an exception if we are already writing a file<br></td></tr
><tr
id=sl_svn99_2517

><td class="source">	if (this.readyState === FileWriter.WRITING) {<br></td></tr
><tr
id=sl_svn99_2518

><td class="source">		throw FileError.INVALID_STATE_ERR;<br></td></tr
><tr
id=sl_svn99_2519

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_2520

><td class="source"><br></td></tr
><tr
id=sl_svn99_2521

><td class="source">    // WRITING state<br></td></tr
><tr
id=sl_svn99_2522

><td class="source">    this.readyState = FileWriter.WRITING;<br></td></tr
><tr
id=sl_svn99_2523

><td class="source"><br></td></tr
><tr
id=sl_svn99_2524

><td class="source">    var me = this;<br></td></tr
><tr
id=sl_svn99_2525

><td class="source"><br></td></tr
><tr
id=sl_svn99_2526

><td class="source">    // If onwritestart callback<br></td></tr
><tr
id=sl_svn99_2527

><td class="source">    if (typeof me.onwritestart === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2528

><td class="source">        me.onwritestart({&quot;type&quot;:&quot;writestart&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2529

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2530

><td class="source"><br></td></tr
><tr
id=sl_svn99_2531

><td class="source">    // Write file<br></td></tr
><tr
id=sl_svn99_2532

><td class="source">    navigator.fileMgr.write(this.fileName, text, this.position,<br></td></tr
><tr
id=sl_svn99_2533

><td class="source"><br></td></tr
><tr
id=sl_svn99_2534

><td class="source">        // Success callback<br></td></tr
><tr
id=sl_svn99_2535

><td class="source">        function(r) {<br></td></tr
><tr
id=sl_svn99_2536

><td class="source">            var evt;<br></td></tr
><tr
id=sl_svn99_2537

><td class="source">            // If DONE (cancelled), then don&#39;t do anything<br></td></tr
><tr
id=sl_svn99_2538

><td class="source">            if (me.readyState === FileWriter.DONE) {<br></td></tr
><tr
id=sl_svn99_2539

><td class="source">                return;<br></td></tr
><tr
id=sl_svn99_2540

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2541

><td class="source"><br></td></tr
><tr
id=sl_svn99_2542

><td class="source">            // position always increases by bytes written because file would be extended<br></td></tr
><tr
id=sl_svn99_2543

><td class="source">            me.position += r;<br></td></tr
><tr
id=sl_svn99_2544

><td class="source">            // The length of the file is now where we are done writing.<br></td></tr
><tr
id=sl_svn99_2545

><td class="source">            me.length = me.position;<br></td></tr
><tr
id=sl_svn99_2546

><td class="source"><br></td></tr
><tr
id=sl_svn99_2547

><td class="source">            // If onwrite callback<br></td></tr
><tr
id=sl_svn99_2548

><td class="source">            if (typeof me.onwrite === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2549

><td class="source">                me.onwrite({&quot;type&quot;:&quot;write&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2550

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2551

><td class="source"><br></td></tr
><tr
id=sl_svn99_2552

><td class="source">            // DONE state<br></td></tr
><tr
id=sl_svn99_2553

><td class="source">            me.readyState = FileWriter.DONE;<br></td></tr
><tr
id=sl_svn99_2554

><td class="source"><br></td></tr
><tr
id=sl_svn99_2555

><td class="source">            // If onwriteend callback<br></td></tr
><tr
id=sl_svn99_2556

><td class="source">            if (typeof me.onwriteend === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2557

><td class="source">                me.onwriteend({&quot;type&quot;:&quot;writeend&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2558

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2559

><td class="source">        },<br></td></tr
><tr
id=sl_svn99_2560

><td class="source"><br></td></tr
><tr
id=sl_svn99_2561

><td class="source">        // Error callback<br></td></tr
><tr
id=sl_svn99_2562

><td class="source">        function(e) {<br></td></tr
><tr
id=sl_svn99_2563

><td class="source">            var evt;<br></td></tr
><tr
id=sl_svn99_2564

><td class="source"><br></td></tr
><tr
id=sl_svn99_2565

><td class="source">            // If DONE (cancelled), then don&#39;t do anything<br></td></tr
><tr
id=sl_svn99_2566

><td class="source">            if (me.readyState === FileWriter.DONE) {<br></td></tr
><tr
id=sl_svn99_2567

><td class="source">                return;<br></td></tr
><tr
id=sl_svn99_2568

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2569

><td class="source"><br></td></tr
><tr
id=sl_svn99_2570

><td class="source">            // Save error<br></td></tr
><tr
id=sl_svn99_2571

><td class="source">            me.error = e;<br></td></tr
><tr
id=sl_svn99_2572

><td class="source"><br></td></tr
><tr
id=sl_svn99_2573

><td class="source">            // If onerror callback<br></td></tr
><tr
id=sl_svn99_2574

><td class="source">            if (typeof me.onerror === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2575

><td class="source">                me.onerror({&quot;type&quot;:&quot;error&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2576

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2577

><td class="source"><br></td></tr
><tr
id=sl_svn99_2578

><td class="source">            // DONE state<br></td></tr
><tr
id=sl_svn99_2579

><td class="source">            me.readyState = FileWriter.DONE;<br></td></tr
><tr
id=sl_svn99_2580

><td class="source"><br></td></tr
><tr
id=sl_svn99_2581

><td class="source">            // If onwriteend callback<br></td></tr
><tr
id=sl_svn99_2582

><td class="source">            if (typeof me.onwriteend === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2583

><td class="source">                me.onwriteend({&quot;type&quot;:&quot;writeend&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2584

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2585

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_2586

><td class="source">        );<br></td></tr
><tr
id=sl_svn99_2587

><td class="source"><br></td></tr
><tr
id=sl_svn99_2588

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2589

><td class="source"><br></td></tr
><tr
id=sl_svn99_2590

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2591

><td class="source"> * Moves the file pointer to the location specified.<br></td></tr
><tr
id=sl_svn99_2592

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2593

><td class="source"> * If the offset is a negative number the position of the file<br></td></tr
><tr
id=sl_svn99_2594

><td class="source"> * pointer is rewound.  If the offset is greater than the file<br></td></tr
><tr
id=sl_svn99_2595

><td class="source"> * size the position is set to the end of the file.<br></td></tr
><tr
id=sl_svn99_2596

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2597

><td class="source"> * @param offset is the location to move the file pointer to.<br></td></tr
><tr
id=sl_svn99_2598

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2599

><td class="source">FileWriter.prototype.seek = function(offset) {<br></td></tr
><tr
id=sl_svn99_2600

><td class="source">    // Throw an exception if we are already writing a file<br></td></tr
><tr
id=sl_svn99_2601

><td class="source">    if (this.readyState === FileWriter.WRITING) {<br></td></tr
><tr
id=sl_svn99_2602

><td class="source">        throw FileError.INVALID_STATE_ERR;<br></td></tr
><tr
id=sl_svn99_2603

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2604

><td class="source"><br></td></tr
><tr
id=sl_svn99_2605

><td class="source">    if (!offset) {<br></td></tr
><tr
id=sl_svn99_2606

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_2607

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2608

><td class="source"><br></td></tr
><tr
id=sl_svn99_2609

><td class="source">    // See back from end of file.<br></td></tr
><tr
id=sl_svn99_2610

><td class="source">    if (offset &lt; 0) {<br></td></tr
><tr
id=sl_svn99_2611

><td class="source">		this.position = Math.max(offset + this.length, 0);<br></td></tr
><tr
id=sl_svn99_2612

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_2613

><td class="source">    // Offset is bigger then file size so set position<br></td></tr
><tr
id=sl_svn99_2614

><td class="source">    // to the end of the file.<br></td></tr
><tr
id=sl_svn99_2615

><td class="source">	else if (offset &gt; this.length) {<br></td></tr
><tr
id=sl_svn99_2616

><td class="source">		this.position = this.length;<br></td></tr
><tr
id=sl_svn99_2617

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_2618

><td class="source">    // Offset is between 0 and file size so set the position<br></td></tr
><tr
id=sl_svn99_2619

><td class="source">    // to start writing.<br></td></tr
><tr
id=sl_svn99_2620

><td class="source">	else {<br></td></tr
><tr
id=sl_svn99_2621

><td class="source">		this.position = offset;<br></td></tr
><tr
id=sl_svn99_2622

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_2623

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2624

><td class="source"><br></td></tr
><tr
id=sl_svn99_2625

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2626

><td class="source"> * Truncates the file to the size specified.<br></td></tr
><tr
id=sl_svn99_2627

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2628

><td class="source"> * @param size to chop the file at.<br></td></tr
><tr
id=sl_svn99_2629

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2630

><td class="source">FileWriter.prototype.truncate = function(size) {<br></td></tr
><tr
id=sl_svn99_2631

><td class="source">	// Throw an exception if we are already writing a file<br></td></tr
><tr
id=sl_svn99_2632

><td class="source">	if (this.readyState === FileWriter.WRITING) {<br></td></tr
><tr
id=sl_svn99_2633

><td class="source">		throw FileError.INVALID_STATE_ERR;<br></td></tr
><tr
id=sl_svn99_2634

><td class="source">	}<br></td></tr
><tr
id=sl_svn99_2635

><td class="source"><br></td></tr
><tr
id=sl_svn99_2636

><td class="source">    // WRITING state<br></td></tr
><tr
id=sl_svn99_2637

><td class="source">    this.readyState = FileWriter.WRITING;<br></td></tr
><tr
id=sl_svn99_2638

><td class="source"><br></td></tr
><tr
id=sl_svn99_2639

><td class="source">    var me = this;<br></td></tr
><tr
id=sl_svn99_2640

><td class="source"><br></td></tr
><tr
id=sl_svn99_2641

><td class="source">    // If onwritestart callback<br></td></tr
><tr
id=sl_svn99_2642

><td class="source">    if (typeof me.onwritestart === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2643

><td class="source">        me.onwritestart({&quot;type&quot;:&quot;writestart&quot;, &quot;target&quot;:this});<br></td></tr
><tr
id=sl_svn99_2644

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_2645

><td class="source"><br></td></tr
><tr
id=sl_svn99_2646

><td class="source">    // Write file<br></td></tr
><tr
id=sl_svn99_2647

><td class="source">    navigator.fileMgr.truncate(this.fileName, size,<br></td></tr
><tr
id=sl_svn99_2648

><td class="source"><br></td></tr
><tr
id=sl_svn99_2649

><td class="source">        // Success callback<br></td></tr
><tr
id=sl_svn99_2650

><td class="source">        function(r) {<br></td></tr
><tr
id=sl_svn99_2651

><td class="source">            var evt;<br></td></tr
><tr
id=sl_svn99_2652

><td class="source">            // If DONE (cancelled), then don&#39;t do anything<br></td></tr
><tr
id=sl_svn99_2653

><td class="source">            if (me.readyState === FileWriter.DONE) {<br></td></tr
><tr
id=sl_svn99_2654

><td class="source">                return;<br></td></tr
><tr
id=sl_svn99_2655

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2656

><td class="source"><br></td></tr
><tr
id=sl_svn99_2657

><td class="source">            // Update the length of the file<br></td></tr
><tr
id=sl_svn99_2658

><td class="source">            me.length = r;<br></td></tr
><tr
id=sl_svn99_2659

><td class="source">            me.position = Math.min(me.position, r);<br></td></tr
><tr
id=sl_svn99_2660

><td class="source"><br></td></tr
><tr
id=sl_svn99_2661

><td class="source">            // If onwrite callback<br></td></tr
><tr
id=sl_svn99_2662

><td class="source">            if (typeof me.onwrite === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2663

><td class="source">                me.onwrite({&quot;type&quot;:&quot;write&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2664

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2665

><td class="source"><br></td></tr
><tr
id=sl_svn99_2666

><td class="source">            // DONE state<br></td></tr
><tr
id=sl_svn99_2667

><td class="source">            me.readyState = FileWriter.DONE;<br></td></tr
><tr
id=sl_svn99_2668

><td class="source"><br></td></tr
><tr
id=sl_svn99_2669

><td class="source">            // If onwriteend callback<br></td></tr
><tr
id=sl_svn99_2670

><td class="source">            if (typeof me.onwriteend === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2671

><td class="source">                me.onwriteend({&quot;type&quot;:&quot;writeend&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2672

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2673

><td class="source">        },<br></td></tr
><tr
id=sl_svn99_2674

><td class="source"><br></td></tr
><tr
id=sl_svn99_2675

><td class="source">        // Error callback<br></td></tr
><tr
id=sl_svn99_2676

><td class="source">        function(e) {<br></td></tr
><tr
id=sl_svn99_2677

><td class="source">            var evt;<br></td></tr
><tr
id=sl_svn99_2678

><td class="source">            // If DONE (cancelled), then don&#39;t do anything<br></td></tr
><tr
id=sl_svn99_2679

><td class="source">            if (me.readyState === FileWriter.DONE) {<br></td></tr
><tr
id=sl_svn99_2680

><td class="source">                return;<br></td></tr
><tr
id=sl_svn99_2681

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2682

><td class="source"><br></td></tr
><tr
id=sl_svn99_2683

><td class="source">            // Save error<br></td></tr
><tr
id=sl_svn99_2684

><td class="source">            me.error = e;<br></td></tr
><tr
id=sl_svn99_2685

><td class="source"><br></td></tr
><tr
id=sl_svn99_2686

><td class="source">            // If onerror callback<br></td></tr
><tr
id=sl_svn99_2687

><td class="source">            if (typeof me.onerror === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2688

><td class="source">                me.onerror({&quot;type&quot;:&quot;error&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2689

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2690

><td class="source"><br></td></tr
><tr
id=sl_svn99_2691

><td class="source">            // DONE state<br></td></tr
><tr
id=sl_svn99_2692

><td class="source">            me.readyState = FileWriter.DONE;<br></td></tr
><tr
id=sl_svn99_2693

><td class="source"><br></td></tr
><tr
id=sl_svn99_2694

><td class="source">            // If onwriteend callback<br></td></tr
><tr
id=sl_svn99_2695

><td class="source">            if (typeof me.onwriteend === &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2696

><td class="source">                me.onwriteend({&quot;type&quot;:&quot;writeend&quot;, &quot;target&quot;:me});<br></td></tr
><tr
id=sl_svn99_2697

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2698

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_2699

><td class="source">    );<br></td></tr
><tr
id=sl_svn99_2700

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2701

><td class="source"><br></td></tr
><tr
id=sl_svn99_2702

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2703

><td class="source"> * Information about the state of the file or directory<br></td></tr
><tr
id=sl_svn99_2704

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2705

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_2706

><td class="source"> * {Date} modificationTime (readonly)<br></td></tr
><tr
id=sl_svn99_2707

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2708

><td class="source">var Metadata = function() {<br></td></tr
><tr
id=sl_svn99_2709

><td class="source">    this.modificationTime=null;<br></td></tr
><tr
id=sl_svn99_2710

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2711

><td class="source"><br></td></tr
><tr
id=sl_svn99_2712

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2713

><td class="source"> * Supplies arguments to methods that lookup or create files and directories<br></td></tr
><tr
id=sl_svn99_2714

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2715

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_2716

><td class="source"> * @param {boolean} create file or directory if it doesn&#39;t exist<br></td></tr
><tr
id=sl_svn99_2717

><td class="source"> * @param {boolean} exclusive if true the command will fail if the file or directory exists<br></td></tr
><tr
id=sl_svn99_2718

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2719

><td class="source">var Flags = function(create, exclusive) {<br></td></tr
><tr
id=sl_svn99_2720

><td class="source">    this.create = create || false;<br></td></tr
><tr
id=sl_svn99_2721

><td class="source">    this.exclusive = exclusive || false;<br></td></tr
><tr
id=sl_svn99_2722

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2723

><td class="source"><br></td></tr
><tr
id=sl_svn99_2724

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2725

><td class="source"> * An interface representing a file system<br></td></tr
><tr
id=sl_svn99_2726

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2727

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_2728

><td class="source"> * {DOMString} name the unique name of the file system (readonly)<br></td></tr
><tr
id=sl_svn99_2729

><td class="source"> * {DirectoryEntry} root directory of the file system (readonly)<br></td></tr
><tr
id=sl_svn99_2730

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2731

><td class="source">var FileSystem = function() {<br></td></tr
><tr
id=sl_svn99_2732

><td class="source">    this.name = null;<br></td></tr
><tr
id=sl_svn99_2733

><td class="source">    this.root = null;<br></td></tr
><tr
id=sl_svn99_2734

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2735

><td class="source"><br></td></tr
><tr
id=sl_svn99_2736

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2737

><td class="source"> * An interface that lists the files and directories in a directory.<br></td></tr
><tr
id=sl_svn99_2738

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_2739

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2740

><td class="source">var DirectoryReader = function(fullPath){<br></td></tr
><tr
id=sl_svn99_2741

><td class="source">    this.fullPath = fullPath || null;<br></td></tr
><tr
id=sl_svn99_2742

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2743

><td class="source"><br></td></tr
><tr
id=sl_svn99_2744

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2745

><td class="source"> * Returns a list of entries from a directory.<br></td></tr
><tr
id=sl_svn99_2746

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2747

><td class="source"> * @param {Function} successCallback is called with a list of entries<br></td></tr
><tr
id=sl_svn99_2748

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2749

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2750

><td class="source">DirectoryReader.prototype.readEntries = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2751

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;readEntries&quot;, [this.fullPath]);<br></td></tr
><tr
id=sl_svn99_2752

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2753

><td class="source"><br></td></tr
><tr
id=sl_svn99_2754

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2755

><td class="source"> * An interface representing a directory on the file system.<br></td></tr
><tr
id=sl_svn99_2756

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2757

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_2758

><td class="source"> * {boolean} isFile always false (readonly)<br></td></tr
><tr
id=sl_svn99_2759

><td class="source"> * {boolean} isDirectory always true (readonly)<br></td></tr
><tr
id=sl_svn99_2760

><td class="source"> * {DOMString} name of the directory, excluding the path leading to it (readonly)<br></td></tr
><tr
id=sl_svn99_2761

><td class="source"> * {DOMString} fullPath the absolute full path to the directory (readonly)<br></td></tr
><tr
id=sl_svn99_2762

><td class="source"> * {FileSystem} filesystem on which the directory resides (readonly)<br></td></tr
><tr
id=sl_svn99_2763

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2764

><td class="source">var DirectoryEntry = function() {<br></td></tr
><tr
id=sl_svn99_2765

><td class="source">    this.isFile = false;<br></td></tr
><tr
id=sl_svn99_2766

><td class="source">    this.isDirectory = true;<br></td></tr
><tr
id=sl_svn99_2767

><td class="source">    this.name = null;<br></td></tr
><tr
id=sl_svn99_2768

><td class="source">    this.fullPath = null;<br></td></tr
><tr
id=sl_svn99_2769

><td class="source">    this.filesystem = null;<br></td></tr
><tr
id=sl_svn99_2770

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2771

><td class="source"><br></td></tr
><tr
id=sl_svn99_2772

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2773

><td class="source"> * Copies a directory to a new location<br></td></tr
><tr
id=sl_svn99_2774

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2775

><td class="source"> * @param {DirectoryEntry} parent the directory to which to copy the entry<br></td></tr
><tr
id=sl_svn99_2776

><td class="source"> * @param {DOMString} newName the new name of the entry, defaults to the current name<br></td></tr
><tr
id=sl_svn99_2777

><td class="source"> * @param {Function} successCallback is called with the new entry<br></td></tr
><tr
id=sl_svn99_2778

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2779

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2780

><td class="source">DirectoryEntry.prototype.copyTo = function(parent, newName, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2781

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;copyTo&quot;, [this.fullPath, parent, newName]);<br></td></tr
><tr
id=sl_svn99_2782

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2783

><td class="source"><br></td></tr
><tr
id=sl_svn99_2784

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2785

><td class="source"> * Looks up the metadata of the entry<br></td></tr
><tr
id=sl_svn99_2786

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2787

><td class="source"> * @param {Function} successCallback is called with a Metadata object<br></td></tr
><tr
id=sl_svn99_2788

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2789

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2790

><td class="source">DirectoryEntry.prototype.getMetadata = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2791

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;getMetadata&quot;, [this.fullPath]);<br></td></tr
><tr
id=sl_svn99_2792

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2793

><td class="source"><br></td></tr
><tr
id=sl_svn99_2794

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2795

><td class="source"> * Gets the parent of the entry<br></td></tr
><tr
id=sl_svn99_2796

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2797

><td class="source"> * @param {Function} successCallback is called with a parent entry<br></td></tr
><tr
id=sl_svn99_2798

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2799

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2800

><td class="source">DirectoryEntry.prototype.getParent = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2801

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;getParent&quot;, [this.fullPath]);<br></td></tr
><tr
id=sl_svn99_2802

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2803

><td class="source"><br></td></tr
><tr
id=sl_svn99_2804

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2805

><td class="source"> * Moves a directory to a new location<br></td></tr
><tr
id=sl_svn99_2806

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2807

><td class="source"> * @param {DirectoryEntry} parent the directory to which to move the entry<br></td></tr
><tr
id=sl_svn99_2808

><td class="source"> * @param {DOMString} newName the new name of the entry, defaults to the current name<br></td></tr
><tr
id=sl_svn99_2809

><td class="source"> * @param {Function} successCallback is called with the new entry<br></td></tr
><tr
id=sl_svn99_2810

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2811

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2812

><td class="source">DirectoryEntry.prototype.moveTo = function(parent, newName, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2813

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;moveTo&quot;, [this.fullPath, parent, newName]);<br></td></tr
><tr
id=sl_svn99_2814

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2815

><td class="source"><br></td></tr
><tr
id=sl_svn99_2816

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2817

><td class="source"> * Removes the entry<br></td></tr
><tr
id=sl_svn99_2818

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2819

><td class="source"> * @param {Function} successCallback is called with no parameters<br></td></tr
><tr
id=sl_svn99_2820

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2821

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2822

><td class="source">DirectoryEntry.prototype.remove = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2823

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;remove&quot;, [this.fullPath]);<br></td></tr
><tr
id=sl_svn99_2824

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2825

><td class="source"><br></td></tr
><tr
id=sl_svn99_2826

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2827

><td class="source"> * Returns a URI that can be used to identify this entry.<br></td></tr
><tr
id=sl_svn99_2828

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2829

><td class="source"> * @param {DOMString} mimeType for a FileEntry, the mime type to be used to interpret the file, when loaded through this URI.<br></td></tr
><tr
id=sl_svn99_2830

><td class="source"> * @return uri<br></td></tr
><tr
id=sl_svn99_2831

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2832

><td class="source">DirectoryEntry.prototype.toURI = function(mimeType) {<br></td></tr
><tr
id=sl_svn99_2833

><td class="source">    return &quot;file://&quot; + this.fullPath;<br></td></tr
><tr
id=sl_svn99_2834

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2835

><td class="source"><br></td></tr
><tr
id=sl_svn99_2836

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2837

><td class="source"> * Creates a new DirectoryReader to read entries from this directory<br></td></tr
><tr
id=sl_svn99_2838

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2839

><td class="source">DirectoryEntry.prototype.createReader = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2840

><td class="source">    return new DirectoryReader(this.fullPath);<br></td></tr
><tr
id=sl_svn99_2841

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2842

><td class="source"><br></td></tr
><tr
id=sl_svn99_2843

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2844

><td class="source"> * Creates or looks up a directory<br></td></tr
><tr
id=sl_svn99_2845

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2846

><td class="source"> * @param {DOMString} path either a relative or absolute path from this directory in which to look up or create a directory<br></td></tr
><tr
id=sl_svn99_2847

><td class="source"> * @param {Flags} options to create or excluively create the directory<br></td></tr
><tr
id=sl_svn99_2848

><td class="source"> * @param {Function} successCallback is called with the new entry<br></td></tr
><tr
id=sl_svn99_2849

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2850

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2851

><td class="source">DirectoryEntry.prototype.getDirectory = function(path, options, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2852

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;getDirectory&quot;, [this.fullPath, path, options]);<br></td></tr
><tr
id=sl_svn99_2853

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2854

><td class="source"><br></td></tr
><tr
id=sl_svn99_2855

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2856

><td class="source"> * Creates or looks up a file<br></td></tr
><tr
id=sl_svn99_2857

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2858

><td class="source"> * @param {DOMString} path either a relative or absolute path from this directory in which to look up or create a file<br></td></tr
><tr
id=sl_svn99_2859

><td class="source"> * @param {Flags} options to create or excluively create the file<br></td></tr
><tr
id=sl_svn99_2860

><td class="source"> * @param {Function} successCallback is called with the new entry<br></td></tr
><tr
id=sl_svn99_2861

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2862

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2863

><td class="source">DirectoryEntry.prototype.getFile = function(path, options, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2864

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;getFile&quot;, [this.fullPath, path, options]);<br></td></tr
><tr
id=sl_svn99_2865

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2866

><td class="source"><br></td></tr
><tr
id=sl_svn99_2867

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2868

><td class="source"> * Deletes a directory and all of it&#39;s contents<br></td></tr
><tr
id=sl_svn99_2869

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2870

><td class="source"> * @param {Function} successCallback is called with no parameters<br></td></tr
><tr
id=sl_svn99_2871

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2872

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2873

><td class="source">DirectoryEntry.prototype.removeRecursively = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2874

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;removeRecursively&quot;, [this.fullPath]);<br></td></tr
><tr
id=sl_svn99_2875

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2876

><td class="source"><br></td></tr
><tr
id=sl_svn99_2877

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2878

><td class="source"> * An interface representing a directory on the file system.<br></td></tr
><tr
id=sl_svn99_2879

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2880

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_2881

><td class="source"> * {boolean} isFile always true (readonly)<br></td></tr
><tr
id=sl_svn99_2882

><td class="source"> * {boolean} isDirectory always false (readonly)<br></td></tr
><tr
id=sl_svn99_2883

><td class="source"> * {DOMString} name of the file, excluding the path leading to it (readonly)<br></td></tr
><tr
id=sl_svn99_2884

><td class="source"> * {DOMString} fullPath the absolute full path to the file (readonly)<br></td></tr
><tr
id=sl_svn99_2885

><td class="source"> * {FileSystem} filesystem on which the directory resides (readonly)<br></td></tr
><tr
id=sl_svn99_2886

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2887

><td class="source">var FileEntry = function() {<br></td></tr
><tr
id=sl_svn99_2888

><td class="source">    this.isFile = true;<br></td></tr
><tr
id=sl_svn99_2889

><td class="source">    this.isDirectory = false;<br></td></tr
><tr
id=sl_svn99_2890

><td class="source">    this.name = null;<br></td></tr
><tr
id=sl_svn99_2891

><td class="source">    this.fullPath = null;<br></td></tr
><tr
id=sl_svn99_2892

><td class="source">    this.filesystem = null;<br></td></tr
><tr
id=sl_svn99_2893

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2894

><td class="source"><br></td></tr
><tr
id=sl_svn99_2895

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2896

><td class="source"> * Copies a file to a new location<br></td></tr
><tr
id=sl_svn99_2897

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2898

><td class="source"> * @param {DirectoryEntry} parent the directory to which to copy the entry<br></td></tr
><tr
id=sl_svn99_2899

><td class="source"> * @param {DOMString} newName the new name of the entry, defaults to the current name<br></td></tr
><tr
id=sl_svn99_2900

><td class="source"> * @param {Function} successCallback is called with the new entry<br></td></tr
><tr
id=sl_svn99_2901

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2902

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2903

><td class="source">FileEntry.prototype.copyTo = function(parent, newName, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2904

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;copyTo&quot;, [this.fullPath, parent, newName]);<br></td></tr
><tr
id=sl_svn99_2905

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2906

><td class="source"><br></td></tr
><tr
id=sl_svn99_2907

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2908

><td class="source"> * Looks up the metadata of the entry<br></td></tr
><tr
id=sl_svn99_2909

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2910

><td class="source"> * @param {Function} successCallback is called with a Metadata object<br></td></tr
><tr
id=sl_svn99_2911

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2912

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2913

><td class="source">FileEntry.prototype.getMetadata = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2914

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;getMetadata&quot;, [this.fullPath]);<br></td></tr
><tr
id=sl_svn99_2915

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2916

><td class="source"><br></td></tr
><tr
id=sl_svn99_2917

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2918

><td class="source"> * Gets the parent of the entry<br></td></tr
><tr
id=sl_svn99_2919

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2920

><td class="source"> * @param {Function} successCallback is called with a parent entry<br></td></tr
><tr
id=sl_svn99_2921

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2922

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2923

><td class="source">FileEntry.prototype.getParent = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2924

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;getParent&quot;, [this.fullPath]);<br></td></tr
><tr
id=sl_svn99_2925

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2926

><td class="source"><br></td></tr
><tr
id=sl_svn99_2927

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2928

><td class="source"> * Moves a directory to a new location<br></td></tr
><tr
id=sl_svn99_2929

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2930

><td class="source"> * @param {DirectoryEntry} parent the directory to which to move the entry<br></td></tr
><tr
id=sl_svn99_2931

><td class="source"> * @param {DOMString} newName the new name of the entry, defaults to the current name<br></td></tr
><tr
id=sl_svn99_2932

><td class="source"> * @param {Function} successCallback is called with the new entry<br></td></tr
><tr
id=sl_svn99_2933

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2934

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2935

><td class="source">FileEntry.prototype.moveTo = function(parent, newName, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2936

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;moveTo&quot;, [this.fullPath, parent, newName]);<br></td></tr
><tr
id=sl_svn99_2937

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2938

><td class="source"><br></td></tr
><tr
id=sl_svn99_2939

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2940

><td class="source"> * Removes the entry<br></td></tr
><tr
id=sl_svn99_2941

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2942

><td class="source"> * @param {Function} successCallback is called with no parameters<br></td></tr
><tr
id=sl_svn99_2943

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2944

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2945

><td class="source">FileEntry.prototype.remove = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2946

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;remove&quot;, [this.fullPath]);<br></td></tr
><tr
id=sl_svn99_2947

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2948

><td class="source"><br></td></tr
><tr
id=sl_svn99_2949

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2950

><td class="source"> * Returns a URI that can be used to identify this entry.<br></td></tr
><tr
id=sl_svn99_2951

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2952

><td class="source"> * @param {DOMString} mimeType for a FileEntry, the mime type to be used to interpret the file, when loaded through this URI.<br></td></tr
><tr
id=sl_svn99_2953

><td class="source"> * @return uri<br></td></tr
><tr
id=sl_svn99_2954

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2955

><td class="source">FileEntry.prototype.toURI = function(mimeType) {<br></td></tr
><tr
id=sl_svn99_2956

><td class="source">    return &quot;file://&quot; + this.fullPath;<br></td></tr
><tr
id=sl_svn99_2957

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2958

><td class="source"><br></td></tr
><tr
id=sl_svn99_2959

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2960

><td class="source"> * Creates a new FileWriter associated with the file that this FileEntry represents.<br></td></tr
><tr
id=sl_svn99_2961

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2962

><td class="source"> * @param {Function} successCallback is called with the new FileWriter<br></td></tr
><tr
id=sl_svn99_2963

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2964

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2965

><td class="source">FileEntry.prototype.createWriter = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2966

><td class="source">    this.file(function(filePointer) {<br></td></tr
><tr
id=sl_svn99_2967

><td class="source">        var writer = new FileWriter(filePointer);<br></td></tr
><tr
id=sl_svn99_2968

><td class="source">    <br></td></tr
><tr
id=sl_svn99_2969

><td class="source">        if (writer.fileName === null || writer.fileName === &quot;&quot;) {<br></td></tr
><tr
id=sl_svn99_2970

><td class="source">            if (typeof errorCallback == &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2971

><td class="source">                errorCallback({<br></td></tr
><tr
id=sl_svn99_2972

><td class="source">                    &quot;code&quot;: FileError.INVALID_STATE_ERR<br></td></tr
><tr
id=sl_svn99_2973

><td class="source">                });<br></td></tr
><tr
id=sl_svn99_2974

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_2975

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_2976

><td class="source">    <br></td></tr
><tr
id=sl_svn99_2977

><td class="source">        if (typeof successCallback == &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_2978

><td class="source">            successCallback(writer);<br></td></tr
><tr
id=sl_svn99_2979

><td class="source">        }       <br></td></tr
><tr
id=sl_svn99_2980

><td class="source">    }, errorCallback);<br></td></tr
><tr
id=sl_svn99_2981

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2982

><td class="source"><br></td></tr
><tr
id=sl_svn99_2983

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_2984

><td class="source"> * Returns a File that represents the current state of the file that this FileEntry represents.<br></td></tr
><tr
id=sl_svn99_2985

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_2986

><td class="source"> * @param {Function} successCallback is called with the new File object<br></td></tr
><tr
id=sl_svn99_2987

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_2988

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_2989

><td class="source">FileEntry.prototype.file = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_2990

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;getFileMetadata&quot;, [this.fullPath]);<br></td></tr
><tr
id=sl_svn99_2991

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2992

><td class="source"><br></td></tr
><tr
id=sl_svn99_2993

><td class="source">/** @constructor */<br></td></tr
><tr
id=sl_svn99_2994

><td class="source">var LocalFileSystem = function() {<br></td></tr
><tr
id=sl_svn99_2995

><td class="source">};<br></td></tr
><tr
id=sl_svn99_2996

><td class="source"><br></td></tr
><tr
id=sl_svn99_2997

><td class="source">// File error codes<br></td></tr
><tr
id=sl_svn99_2998

><td class="source">LocalFileSystem.TEMPORARY = 0;<br></td></tr
><tr
id=sl_svn99_2999

><td class="source">LocalFileSystem.PERSISTENT = 1;<br></td></tr
><tr
id=sl_svn99_3000

><td class="source">LocalFileSystem.RESOURCE = 2;<br></td></tr
><tr
id=sl_svn99_3001

><td class="source">LocalFileSystem.APPLICATION = 3;<br></td></tr
><tr
id=sl_svn99_3002

><td class="source"><br></td></tr
><tr
id=sl_svn99_3003

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3004

><td class="source"> * Requests a filesystem in which to store application data.<br></td></tr
><tr
id=sl_svn99_3005

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3006

><td class="source"> * @param {int} type of file system being requested<br></td></tr
><tr
id=sl_svn99_3007

><td class="source"> * @param {Function} successCallback is called with the new FileSystem<br></td></tr
><tr
id=sl_svn99_3008

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_3009

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3010

><td class="source">LocalFileSystem.prototype.requestFileSystem = function(type, size, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_3011

><td class="source">    if (type &lt; 0 || type &gt; 3) {<br></td></tr
><tr
id=sl_svn99_3012

><td class="source">        if (typeof errorCallback == &quot;function&quot;) {<br></td></tr
><tr
id=sl_svn99_3013

><td class="source">            errorCallback({<br></td></tr
><tr
id=sl_svn99_3014

><td class="source">                &quot;code&quot;: FileError.SYNTAX_ERR<br></td></tr
><tr
id=sl_svn99_3015

><td class="source">            });<br></td></tr
><tr
id=sl_svn99_3016

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3017

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3018

><td class="source">    else {<br></td></tr
><tr
id=sl_svn99_3019

><td class="source">        PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;requestFileSystem&quot;, [type, size]);<br></td></tr
><tr
id=sl_svn99_3020

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3021

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3022

><td class="source"><br></td></tr
><tr
id=sl_svn99_3023

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3024

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3025

><td class="source"> * @param {DOMString} uri referring to a local file in a filesystem<br></td></tr
><tr
id=sl_svn99_3026

><td class="source"> * @param {Function} successCallback is called with the new entry<br></td></tr
><tr
id=sl_svn99_3027

><td class="source"> * @param {Function} errorCallback is called with a FileError<br></td></tr
><tr
id=sl_svn99_3028

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3029

><td class="source">LocalFileSystem.prototype.resolveLocalFileSystemURI = function(uri, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_3030

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;File&quot;, &quot;resolveLocalFileSystemURI&quot;, [uri]);<br></td></tr
><tr
id=sl_svn99_3031

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3032

><td class="source"><br></td></tr
><tr
id=sl_svn99_3033

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3034

><td class="source">* This function returns and array of contacts.  It is required as we need to convert raw<br></td></tr
><tr
id=sl_svn99_3035

><td class="source">* JSON objects into concrete Contact objects.  Currently this method is called after<br></td></tr
><tr
id=sl_svn99_3036

><td class="source">* navigator.service.contacts.find but before the find methods success call back.<br></td></tr
><tr
id=sl_svn99_3037

><td class="source">*<br></td></tr
><tr
id=sl_svn99_3038

><td class="source">* @param a JSON Objects that need to be converted to DirectoryEntry or FileEntry objects.<br></td></tr
><tr
id=sl_svn99_3039

><td class="source">* @returns an entry<br></td></tr
><tr
id=sl_svn99_3040

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_3041

><td class="source">LocalFileSystem.prototype._castFS = function(pluginResult) {<br></td></tr
><tr
id=sl_svn99_3042

><td class="source">    var entry = null;<br></td></tr
><tr
id=sl_svn99_3043

><td class="source">    entry = new DirectoryEntry();<br></td></tr
><tr
id=sl_svn99_3044

><td class="source">    entry.isDirectory = pluginResult.message.root.isDirectory;<br></td></tr
><tr
id=sl_svn99_3045

><td class="source">    entry.isFile = pluginResult.message.root.isFile;<br></td></tr
><tr
id=sl_svn99_3046

><td class="source">    entry.name = pluginResult.message.root.name;<br></td></tr
><tr
id=sl_svn99_3047

><td class="source">    entry.fullPath = pluginResult.message.root.fullPath;<br></td></tr
><tr
id=sl_svn99_3048

><td class="source">    pluginResult.message.root = entry;<br></td></tr
><tr
id=sl_svn99_3049

><td class="source">    return pluginResult;<br></td></tr
><tr
id=sl_svn99_3050

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3051

><td class="source"><br></td></tr
><tr
id=sl_svn99_3052

><td class="source">LocalFileSystem.prototype._castEntry = function(pluginResult) {<br></td></tr
><tr
id=sl_svn99_3053

><td class="source">    var entry = null;<br></td></tr
><tr
id=sl_svn99_3054

><td class="source">    if (pluginResult.message.isDirectory) {<br></td></tr
><tr
id=sl_svn99_3055

><td class="source">        console.log(&quot;This is a dir&quot;);<br></td></tr
><tr
id=sl_svn99_3056

><td class="source">        entry = new DirectoryEntry();<br></td></tr
><tr
id=sl_svn99_3057

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3058

><td class="source">    else if (pluginResult.message.isFile) {<br></td></tr
><tr
id=sl_svn99_3059

><td class="source">        console.log(&quot;This is a file&quot;);<br></td></tr
><tr
id=sl_svn99_3060

><td class="source">        entry = new FileEntry();<br></td></tr
><tr
id=sl_svn99_3061

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3062

><td class="source">    entry.isDirectory = pluginResult.message.isDirectory;<br></td></tr
><tr
id=sl_svn99_3063

><td class="source">    entry.isFile = pluginResult.message.isFile;<br></td></tr
><tr
id=sl_svn99_3064

><td class="source">    entry.name = pluginResult.message.name;<br></td></tr
><tr
id=sl_svn99_3065

><td class="source">    entry.fullPath = pluginResult.message.fullPath;<br></td></tr
><tr
id=sl_svn99_3066

><td class="source">    pluginResult.message = entry;<br></td></tr
><tr
id=sl_svn99_3067

><td class="source">    return pluginResult;<br></td></tr
><tr
id=sl_svn99_3068

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3069

><td class="source"><br></td></tr
><tr
id=sl_svn99_3070

><td class="source">LocalFileSystem.prototype._castEntries = function(pluginResult) {<br></td></tr
><tr
id=sl_svn99_3071

><td class="source">    var entries = pluginResult.message;<br></td></tr
><tr
id=sl_svn99_3072

><td class="source">    var retVal = [];<br></td></tr
><tr
id=sl_svn99_3073

><td class="source">    for (var i=0; i&lt;entries.length; i++) {<br></td></tr
><tr
id=sl_svn99_3074

><td class="source">        retVal.push(window.localFileSystem._createEntry(entries[i]));<br></td></tr
><tr
id=sl_svn99_3075

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3076

><td class="source">    pluginResult.message = retVal;<br></td></tr
><tr
id=sl_svn99_3077

><td class="source">    return pluginResult;<br></td></tr
><tr
id=sl_svn99_3078

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3079

><td class="source"><br></td></tr
><tr
id=sl_svn99_3080

><td class="source">LocalFileSystem.prototype._createEntry = function(castMe) {<br></td></tr
><tr
id=sl_svn99_3081

><td class="source">    var entry = null;<br></td></tr
><tr
id=sl_svn99_3082

><td class="source">    if (castMe.isDirectory) {<br></td></tr
><tr
id=sl_svn99_3083

><td class="source">        console.log(&quot;This is a dir&quot;);<br></td></tr
><tr
id=sl_svn99_3084

><td class="source">        entry = new DirectoryEntry();<br></td></tr
><tr
id=sl_svn99_3085

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3086

><td class="source">    else if (castMe.isFile) {<br></td></tr
><tr
id=sl_svn99_3087

><td class="source">        console.log(&quot;This is a file&quot;);<br></td></tr
><tr
id=sl_svn99_3088

><td class="source">        entry = new FileEntry();<br></td></tr
><tr
id=sl_svn99_3089

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3090

><td class="source">    entry.isDirectory = castMe.isDirectory;<br></td></tr
><tr
id=sl_svn99_3091

><td class="source">    entry.isFile = castMe.isFile;<br></td></tr
><tr
id=sl_svn99_3092

><td class="source">    entry.name = castMe.name;<br></td></tr
><tr
id=sl_svn99_3093

><td class="source">    entry.fullPath = castMe.fullPath;<br></td></tr
><tr
id=sl_svn99_3094

><td class="source">    return entry;<br></td></tr
><tr
id=sl_svn99_3095

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3096

><td class="source"><br></td></tr
><tr
id=sl_svn99_3097

><td class="source">LocalFileSystem.prototype._castDate = function(pluginResult) {<br></td></tr
><tr
id=sl_svn99_3098

><td class="source">    if (pluginResult.message.modificationTime) {<br></td></tr
><tr
id=sl_svn99_3099

><td class="source">        var modTime = new Date(pluginResult.message.modificationTime);<br></td></tr
><tr
id=sl_svn99_3100

><td class="source">        pluginResult.message.modificationTime = modTime;<br></td></tr
><tr
id=sl_svn99_3101

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3102

><td class="source">    else if (pluginResult.message.lastModifiedDate) {<br></td></tr
><tr
id=sl_svn99_3103

><td class="source">        var file = new File();<br></td></tr
><tr
id=sl_svn99_3104

><td class="source">        file.size = pluginResult.message.size;<br></td></tr
><tr
id=sl_svn99_3105

><td class="source">        file.type = pluginResult.message.type;<br></td></tr
><tr
id=sl_svn99_3106

><td class="source">        file.name = pluginResult.message.name;<br></td></tr
><tr
id=sl_svn99_3107

><td class="source">        file.fullPath = pluginResult.message.fullPath;<br></td></tr
><tr
id=sl_svn99_3108

><td class="source">        file.lastModifiedDate = new Date(pluginResult.message.lastModifiedDate);<br></td></tr
><tr
id=sl_svn99_3109

><td class="source">        pluginResult.message = file;<br></td></tr
><tr
id=sl_svn99_3110

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3111

><td class="source">    return pluginResult;<br></td></tr
><tr
id=sl_svn99_3112

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3113

><td class="source"><br></td></tr
><tr
id=sl_svn99_3114

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3115

><td class="source"> * Add the FileSystem interface into the browser.<br></td></tr
><tr
id=sl_svn99_3116

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3117

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_3118

><td class="source">	var pgLocalFileSystem = new LocalFileSystem();<br></td></tr
><tr
id=sl_svn99_3119

><td class="source">	// Needed for cast methods<br></td></tr
><tr
id=sl_svn99_3120

><td class="source">    if(typeof window.localFileSystem == &quot;undefined&quot;) window.localFileSystem  = pgLocalFileSystem;<br></td></tr
><tr
id=sl_svn99_3121

><td class="source">    if(typeof window.requestFileSystem == &quot;undefined&quot;) window.requestFileSystem  = pgLocalFileSystem.requestFileSystem;<br></td></tr
><tr
id=sl_svn99_3122

><td class="source">    if(typeof window.resolveLocalFileSystemURI == &quot;undefined&quot;) window.resolveLocalFileSystemURI = pgLocalFileSystem.resolveLocalFileSystemURI;<br></td></tr
><tr
id=sl_svn99_3123

><td class="source">});<br></td></tr
><tr
id=sl_svn99_3124

><td class="source">}<br></td></tr
><tr
id=sl_svn99_3125

><td class="source"><br></td></tr
><tr
id=sl_svn99_3126

><td class="source"><br></td></tr
><tr
id=sl_svn99_3127

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_3128

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_3129

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_3130

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3131

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_3132

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_3133

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3134

><td class="source"><br></td></tr
><tr
id=sl_svn99_3135

><td class="source">if (!PhoneGap.hasResource(&quot;filetransfer&quot;)) {<br></td></tr
><tr
id=sl_svn99_3136

><td class="source">PhoneGap.addResource(&quot;filetransfer&quot;);<br></td></tr
><tr
id=sl_svn99_3137

><td class="source"><br></td></tr
><tr
id=sl_svn99_3138

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3139

><td class="source"> * FileTransfer uploads a file to a remote server.<br></td></tr
><tr
id=sl_svn99_3140

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3141

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3142

><td class="source">var FileTransfer = function() {};<br></td></tr
><tr
id=sl_svn99_3143

><td class="source"><br></td></tr
><tr
id=sl_svn99_3144

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3145

><td class="source"> * FileUploadResult<br></td></tr
><tr
id=sl_svn99_3146

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3147

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3148

><td class="source">var FileUploadResult = function() {<br></td></tr
><tr
id=sl_svn99_3149

><td class="source">    this.bytesSent = 0;<br></td></tr
><tr
id=sl_svn99_3150

><td class="source">    this.responseCode = null;<br></td></tr
><tr
id=sl_svn99_3151

><td class="source">    this.response = null;<br></td></tr
><tr
id=sl_svn99_3152

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3153

><td class="source"><br></td></tr
><tr
id=sl_svn99_3154

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3155

><td class="source"> * FileTransferError<br></td></tr
><tr
id=sl_svn99_3156

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3157

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3158

><td class="source">var FileTransferError = function() {<br></td></tr
><tr
id=sl_svn99_3159

><td class="source">    this.code = null;<br></td></tr
><tr
id=sl_svn99_3160

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3161

><td class="source"><br></td></tr
><tr
id=sl_svn99_3162

><td class="source">FileTransferError.FILE_NOT_FOUND_ERR = 1;<br></td></tr
><tr
id=sl_svn99_3163

><td class="source">FileTransferError.INVALID_URL_ERR = 2;<br></td></tr
><tr
id=sl_svn99_3164

><td class="source">FileTransferError.CONNECTION_ERR = 3;<br></td></tr
><tr
id=sl_svn99_3165

><td class="source"><br></td></tr
><tr
id=sl_svn99_3166

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3167

><td class="source">* Given an absolute file path, uploads a file on the device to a remote server<br></td></tr
><tr
id=sl_svn99_3168

><td class="source">* using a multipart HTTP request.<br></td></tr
><tr
id=sl_svn99_3169

><td class="source">* @param filePath {String}           Full path of the file on the device<br></td></tr
><tr
id=sl_svn99_3170

><td class="source">* @param server {String}             URL of the server to receive the file<br></td></tr
><tr
id=sl_svn99_3171

><td class="source">* @param successCallback (Function}  Callback to be invoked when upload has completed<br></td></tr
><tr
id=sl_svn99_3172

><td class="source">* @param errorCallback {Function}    Callback to be invoked upon error<br></td></tr
><tr
id=sl_svn99_3173

><td class="source">* @param options {FileUploadOptions} Optional parameters such as file name and mimetype<br></td></tr
><tr
id=sl_svn99_3174

><td class="source">*/<br></td></tr
><tr
id=sl_svn99_3175

><td class="source">FileTransfer.prototype.upload = function(filePath, server, successCallback, errorCallback, options, debug) {<br></td></tr
><tr
id=sl_svn99_3176

><td class="source"><br></td></tr
><tr
id=sl_svn99_3177

><td class="source">    // check for options<br></td></tr
><tr
id=sl_svn99_3178

><td class="source">    var fileKey = null;<br></td></tr
><tr
id=sl_svn99_3179

><td class="source">    var fileName = null;<br></td></tr
><tr
id=sl_svn99_3180

><td class="source">    var mimeType = null;<br></td></tr
><tr
id=sl_svn99_3181

><td class="source">    var params = null;<br></td></tr
><tr
id=sl_svn99_3182

><td class="source">    if (options) {<br></td></tr
><tr
id=sl_svn99_3183

><td class="source">        fileKey = options.fileKey;<br></td></tr
><tr
id=sl_svn99_3184

><td class="source">        fileName = options.fileName;<br></td></tr
><tr
id=sl_svn99_3185

><td class="source">        mimeType = options.mimeType;<br></td></tr
><tr
id=sl_svn99_3186

><td class="source">        if (options.params) {<br></td></tr
><tr
id=sl_svn99_3187

><td class="source">            params = options.params;<br></td></tr
><tr
id=sl_svn99_3188

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3189

><td class="source">        else {<br></td></tr
><tr
id=sl_svn99_3190

><td class="source">            params = {};<br></td></tr
><tr
id=sl_svn99_3191

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3192

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3193

><td class="source"><br></td></tr
><tr
id=sl_svn99_3194

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &#39;FileTransfer&#39;, &#39;upload&#39;, [filePath, server, fileKey, fileName, mimeType, params, debug]);<br></td></tr
><tr
id=sl_svn99_3195

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3196

><td class="source"><br></td></tr
><tr
id=sl_svn99_3197

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3198

><td class="source"> * Options to customize the HTTP request used to upload files.<br></td></tr
><tr
id=sl_svn99_3199

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3200

><td class="source"> * @param fileKey {String}   Name of file request parameter.<br></td></tr
><tr
id=sl_svn99_3201

><td class="source"> * @param fileName {String}  Filename to be used by the server. Defaults to image.jpg.<br></td></tr
><tr
id=sl_svn99_3202

><td class="source"> * @param mimeType {String}  Mimetype of the uploaded file. Defaults to image/jpeg.<br></td></tr
><tr
id=sl_svn99_3203

><td class="source"> * @param params {Object}    Object with key: value params to send to the server.<br></td></tr
><tr
id=sl_svn99_3204

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3205

><td class="source">var FileUploadOptions = function(fileKey, fileName, mimeType, params) {<br></td></tr
><tr
id=sl_svn99_3206

><td class="source">    this.fileKey = fileKey || null;<br></td></tr
><tr
id=sl_svn99_3207

><td class="source">    this.fileName = fileName || null;<br></td></tr
><tr
id=sl_svn99_3208

><td class="source">    this.mimeType = mimeType || null;<br></td></tr
><tr
id=sl_svn99_3209

><td class="source">    this.params = params || null;<br></td></tr
><tr
id=sl_svn99_3210

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3211

><td class="source">}<br></td></tr
><tr
id=sl_svn99_3212

><td class="source"><br></td></tr
><tr
id=sl_svn99_3213

><td class="source"><br></td></tr
><tr
id=sl_svn99_3214

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_3215

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_3216

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_3217

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3218

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_3219

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_3220

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3221

><td class="source"><br></td></tr
><tr
id=sl_svn99_3222

><td class="source">if (!PhoneGap.hasResource(&quot;geolocation&quot;)) {<br></td></tr
><tr
id=sl_svn99_3223

><td class="source">PhoneGap.addResource(&quot;geolocation&quot;);<br></td></tr
><tr
id=sl_svn99_3224

><td class="source"><br></td></tr
><tr
id=sl_svn99_3225

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3226

><td class="source"> * This class provides access to device GPS data.<br></td></tr
><tr
id=sl_svn99_3227

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3228

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3229

><td class="source">var Geolocation = function() {<br></td></tr
><tr
id=sl_svn99_3230

><td class="source"><br></td></tr
><tr
id=sl_svn99_3231

><td class="source">    // The last known GPS position.<br></td></tr
><tr
id=sl_svn99_3232

><td class="source">    this.lastPosition = null;<br></td></tr
><tr
id=sl_svn99_3233

><td class="source"><br></td></tr
><tr
id=sl_svn99_3234

><td class="source">    // Geolocation listeners<br></td></tr
><tr
id=sl_svn99_3235

><td class="source">    this.listeners = {};<br></td></tr
><tr
id=sl_svn99_3236

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3237

><td class="source"><br></td></tr
><tr
id=sl_svn99_3238

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3239

><td class="source"> * Position error object<br></td></tr
><tr
id=sl_svn99_3240

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3241

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3242

><td class="source"> * @param code<br></td></tr
><tr
id=sl_svn99_3243

><td class="source"> * @param message<br></td></tr
><tr
id=sl_svn99_3244

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3245

><td class="source">var PositionError = function(code, message) {<br></td></tr
><tr
id=sl_svn99_3246

><td class="source">    this.code = code;<br></td></tr
><tr
id=sl_svn99_3247

><td class="source">    this.message = message;<br></td></tr
><tr
id=sl_svn99_3248

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3249

><td class="source"><br></td></tr
><tr
id=sl_svn99_3250

><td class="source">PositionError.PERMISSION_DENIED = 1;<br></td></tr
><tr
id=sl_svn99_3251

><td class="source">PositionError.POSITION_UNAVAILABLE = 2;<br></td></tr
><tr
id=sl_svn99_3252

><td class="source">PositionError.TIMEOUT = 3;<br></td></tr
><tr
id=sl_svn99_3253

><td class="source"><br></td></tr
><tr
id=sl_svn99_3254

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3255

><td class="source"> * Asynchronously aquires the current position.<br></td></tr
><tr
id=sl_svn99_3256

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3257

><td class="source"> * @param {Function} successCallback    The function to call when the position data is available<br></td></tr
><tr
id=sl_svn99_3258

><td class="source"> * @param {Function} errorCallback      The function to call when there is an error getting the heading position. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_3259

><td class="source"> * @param {PositionOptions} options     The options for getting the position data. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_3260

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3261

><td class="source">Geolocation.prototype.getCurrentPosition = function(successCallback, errorCallback, options) {<br></td></tr
><tr
id=sl_svn99_3262

><td class="source">    if (navigator._geo.listeners.global) {<br></td></tr
><tr
id=sl_svn99_3263

><td class="source">        console.log(&quot;Geolocation Error: Still waiting for previous getCurrentPosition() request.&quot;);<br></td></tr
><tr
id=sl_svn99_3264

><td class="source">        try {<br></td></tr
><tr
id=sl_svn99_3265

><td class="source">            errorCallback(new PositionError(PositionError.TIMEOUT, &quot;Geolocation Error: Still waiting for previous getCurrentPosition() request.&quot;));<br></td></tr
><tr
id=sl_svn99_3266

><td class="source">        } catch (e) {<br></td></tr
><tr
id=sl_svn99_3267

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3268

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_3269

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3270

><td class="source">    var maximumAge = 10000;<br></td></tr
><tr
id=sl_svn99_3271

><td class="source">    var enableHighAccuracy = false;<br></td></tr
><tr
id=sl_svn99_3272

><td class="source">    var timeout = 10000;<br></td></tr
><tr
id=sl_svn99_3273

><td class="source">    if (typeof options !== &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3274

><td class="source">        if (typeof options.maximumAge !== &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3275

><td class="source">            maximumAge = options.maximumAge;<br></td></tr
><tr
id=sl_svn99_3276

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3277

><td class="source">        if (typeof options.enableHighAccuracy !== &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3278

><td class="source">            enableHighAccuracy = options.enableHighAccuracy;<br></td></tr
><tr
id=sl_svn99_3279

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3280

><td class="source">        if (typeof options.timeout !== &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3281

><td class="source">            timeout = options.timeout;<br></td></tr
><tr
id=sl_svn99_3282

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3283

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3284

><td class="source">    navigator._geo.listeners.global = {&quot;success&quot; : successCallback, &quot;fail&quot; : errorCallback };<br></td></tr
><tr
id=sl_svn99_3285

><td class="source">    PhoneGap.exec(null, null, &quot;Geolocation&quot;, &quot;getCurrentLocation&quot;, [enableHighAccuracy, timeout, maximumAge]);<br></td></tr
><tr
id=sl_svn99_3286

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3287

><td class="source"><br></td></tr
><tr
id=sl_svn99_3288

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3289

><td class="source"> * Asynchronously watches the geolocation for changes to geolocation.  When a change occurs,<br></td></tr
><tr
id=sl_svn99_3290

><td class="source"> * the successCallback is called with the new location.<br></td></tr
><tr
id=sl_svn99_3291

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3292

><td class="source"> * @param {Function} successCallback    The function to call each time the location data is available<br></td></tr
><tr
id=sl_svn99_3293

><td class="source"> * @param {Function} errorCallback      The function to call when there is an error getting the location data. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_3294

><td class="source"> * @param {PositionOptions} options     The options for getting the location data such as frequency. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_3295

><td class="source"> * @return String                       The watch id that must be passed to #clearWatch to stop watching.<br></td></tr
><tr
id=sl_svn99_3296

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3297

><td class="source">Geolocation.prototype.watchPosition = function(successCallback, errorCallback, options) {<br></td></tr
><tr
id=sl_svn99_3298

><td class="source">    var maximumAge = 10000;<br></td></tr
><tr
id=sl_svn99_3299

><td class="source">    var enableHighAccuracy = false;<br></td></tr
><tr
id=sl_svn99_3300

><td class="source">    var timeout = 10000;<br></td></tr
><tr
id=sl_svn99_3301

><td class="source">    if (typeof options !== &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3302

><td class="source">        if (typeof options.frequency  !== &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3303

><td class="source">            maximumAge = options.frequency;<br></td></tr
><tr
id=sl_svn99_3304

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3305

><td class="source">        if (typeof options.maximumAge !== &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3306

><td class="source">            maximumAge = options.maximumAge;<br></td></tr
><tr
id=sl_svn99_3307

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3308

><td class="source">        if (typeof options.enableHighAccuracy !== &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3309

><td class="source">            enableHighAccuracy = options.enableHighAccuracy;<br></td></tr
><tr
id=sl_svn99_3310

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3311

><td class="source">        if (typeof options.timeout !== &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3312

><td class="source">            timeout = options.timeout;<br></td></tr
><tr
id=sl_svn99_3313

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3314

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3315

><td class="source">    var id = PhoneGap.createUUID();<br></td></tr
><tr
id=sl_svn99_3316

><td class="source">    navigator._geo.listeners[id] = {&quot;success&quot; : successCallback, &quot;fail&quot; : errorCallback };<br></td></tr
><tr
id=sl_svn99_3317

><td class="source">    PhoneGap.exec(null, null, &quot;Geolocation&quot;, &quot;start&quot;, [id, enableHighAccuracy, timeout, maximumAge]);<br></td></tr
><tr
id=sl_svn99_3318

><td class="source">    return id;<br></td></tr
><tr
id=sl_svn99_3319

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3320

><td class="source"><br></td></tr
><tr
id=sl_svn99_3321

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_3322

><td class="source"> * Native callback when watch position has a new position.<br></td></tr
><tr
id=sl_svn99_3323

><td class="source"> * PRIVATE METHOD<br></td></tr
><tr
id=sl_svn99_3324

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3325

><td class="source"> * @param {String} id<br></td></tr
><tr
id=sl_svn99_3326

><td class="source"> * @param {Number} lat<br></td></tr
><tr
id=sl_svn99_3327

><td class="source"> * @param {Number} lng<br></td></tr
><tr
id=sl_svn99_3328

><td class="source"> * @param {Number} alt<br></td></tr
><tr
id=sl_svn99_3329

><td class="source"> * @param {Number} altacc<br></td></tr
><tr
id=sl_svn99_3330

><td class="source"> * @param {Number} head<br></td></tr
><tr
id=sl_svn99_3331

><td class="source"> * @param {Number} vel<br></td></tr
><tr
id=sl_svn99_3332

><td class="source"> * @param {Number} stamp<br></td></tr
><tr
id=sl_svn99_3333

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3334

><td class="source">Geolocation.prototype.success = function(id, lat, lng, alt, altacc, head, vel, stamp) {<br></td></tr
><tr
id=sl_svn99_3335

><td class="source">    var coords = new Coordinates(lat, lng, alt, altacc, head, vel);<br></td></tr
><tr
id=sl_svn99_3336

><td class="source">    var loc = new Position(coords, stamp);<br></td></tr
><tr
id=sl_svn99_3337

><td class="source">    try {<br></td></tr
><tr
id=sl_svn99_3338

><td class="source">        if (lat === &quot;undefined&quot; || lng === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3339

><td class="source">            navigator._geo.listeners[id].fail(new PositionError(PositionError.POSITION_UNAVAILABLE, &quot;Lat/Lng are undefined.&quot;));<br></td></tr
><tr
id=sl_svn99_3340

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3341

><td class="source">        else {<br></td></tr
><tr
id=sl_svn99_3342

><td class="source">            navigator._geo.lastPosition = loc;<br></td></tr
><tr
id=sl_svn99_3343

><td class="source">            navigator._geo.listeners[id].success(loc);<br></td></tr
><tr
id=sl_svn99_3344

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3345

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3346

><td class="source">    catch (e) {<br></td></tr
><tr
id=sl_svn99_3347

><td class="source">        console.log(&quot;Geolocation Error: Error calling success callback function.&quot;);<br></td></tr
><tr
id=sl_svn99_3348

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3349

><td class="source"><br></td></tr
><tr
id=sl_svn99_3350

><td class="source">    if (id === &quot;global&quot;) {<br></td></tr
><tr
id=sl_svn99_3351

><td class="source">        delete navigator._geo.listeners.global;<br></td></tr
><tr
id=sl_svn99_3352

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3353

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3354

><td class="source"><br></td></tr
><tr
id=sl_svn99_3355

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3356

><td class="source"> * Native callback when watch position has an error.<br></td></tr
><tr
id=sl_svn99_3357

><td class="source"> * PRIVATE METHOD<br></td></tr
><tr
id=sl_svn99_3358

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3359

><td class="source"> * @param {String} id       The ID of the watch<br></td></tr
><tr
id=sl_svn99_3360

><td class="source"> * @param {Number} code     The error code<br></td></tr
><tr
id=sl_svn99_3361

><td class="source"> * @param {String} msg      The error message<br></td></tr
><tr
id=sl_svn99_3362

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3363

><td class="source">Geolocation.prototype.fail = function(id, code, msg) {<br></td></tr
><tr
id=sl_svn99_3364

><td class="source">    try {<br></td></tr
><tr
id=sl_svn99_3365

><td class="source">        navigator._geo.listeners[id].fail(new PositionError(code, msg));<br></td></tr
><tr
id=sl_svn99_3366

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3367

><td class="source">    catch (e) {<br></td></tr
><tr
id=sl_svn99_3368

><td class="source">        console.log(&quot;Geolocation Error: Error calling error callback function.&quot;);<br></td></tr
><tr
id=sl_svn99_3369

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3370

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3371

><td class="source"><br></td></tr
><tr
id=sl_svn99_3372

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3373

><td class="source"> * Clears the specified heading watch.<br></td></tr
><tr
id=sl_svn99_3374

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3375

><td class="source"> * @param {String} id       The ID of the watch returned from #watchPosition<br></td></tr
><tr
id=sl_svn99_3376

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3377

><td class="source">Geolocation.prototype.clearWatch = function(id) {<br></td></tr
><tr
id=sl_svn99_3378

><td class="source">    PhoneGap.exec(null, null, &quot;Geolocation&quot;, &quot;stop&quot;, [id]);<br></td></tr
><tr
id=sl_svn99_3379

><td class="source">    delete navigator._geo.listeners[id];<br></td></tr
><tr
id=sl_svn99_3380

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3381

><td class="source"><br></td></tr
><tr
id=sl_svn99_3382

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3383

><td class="source"> * Force the PhoneGap geolocation to be used instead of built-in.<br></td></tr
><tr
id=sl_svn99_3384

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3385

><td class="source">Geolocation.usingPhoneGap = false;<br></td></tr
><tr
id=sl_svn99_3386

><td class="source">Geolocation.usePhoneGap = function() {<br></td></tr
><tr
id=sl_svn99_3387

><td class="source">    if (Geolocation.usingPhoneGap) {<br></td></tr
><tr
id=sl_svn99_3388

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_3389

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3390

><td class="source">    Geolocation.usingPhoneGap = true;<br></td></tr
><tr
id=sl_svn99_3391

><td class="source"><br></td></tr
><tr
id=sl_svn99_3392

><td class="source">    // Set built-in geolocation methods to our own implementations<br></td></tr
><tr
id=sl_svn99_3393

><td class="source">    // (Cannot replace entire geolocation, but can replace individual methods)<br></td></tr
><tr
id=sl_svn99_3394

><td class="source">    navigator.geolocation.setLocation = navigator._geo.setLocation;<br></td></tr
><tr
id=sl_svn99_3395

><td class="source">    navigator.geolocation.getCurrentPosition = navigator._geo.getCurrentPosition;<br></td></tr
><tr
id=sl_svn99_3396

><td class="source">    navigator.geolocation.watchPosition = navigator._geo.watchPosition;<br></td></tr
><tr
id=sl_svn99_3397

><td class="source">    navigator.geolocation.clearWatch = navigator._geo.clearWatch;<br></td></tr
><tr
id=sl_svn99_3398

><td class="source">    navigator.geolocation.start = navigator._geo.start;<br></td></tr
><tr
id=sl_svn99_3399

><td class="source">    navigator.geolocation.stop = navigator._geo.stop;<br></td></tr
><tr
id=sl_svn99_3400

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3401

><td class="source"><br></td></tr
><tr
id=sl_svn99_3402

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_3403

><td class="source">    navigator._geo = new Geolocation();<br></td></tr
><tr
id=sl_svn99_3404

><td class="source"><br></td></tr
><tr
id=sl_svn99_3405

><td class="source">    // No native geolocation object for Android 1.x, so use PhoneGap geolocation<br></td></tr
><tr
id=sl_svn99_3406

><td class="source">    if (typeof navigator.geolocation === &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn99_3407

><td class="source">        navigator.geolocation = navigator._geo;<br></td></tr
><tr
id=sl_svn99_3408

><td class="source">        Geolocation.usingPhoneGap = true;<br></td></tr
><tr
id=sl_svn99_3409

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3410

><td class="source">});<br></td></tr
><tr
id=sl_svn99_3411

><td class="source">}<br></td></tr
><tr
id=sl_svn99_3412

><td class="source"><br></td></tr
><tr
id=sl_svn99_3413

><td class="source"><br></td></tr
><tr
id=sl_svn99_3414

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_3415

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_3416

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_3417

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3418

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_3419

><td class="source"> * Copyright (c) 2010, IBM Corporation<br></td></tr
><tr
id=sl_svn99_3420

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3421

><td class="source"><br></td></tr
><tr
id=sl_svn99_3422

><td class="source"><br></td></tr
><tr
id=sl_svn99_3423

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_3424

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_3425

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_3426

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3427

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_3428

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_3429

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3430

><td class="source"><br></td></tr
><tr
id=sl_svn99_3431

><td class="source">if (!PhoneGap.hasResource(&quot;media&quot;)) {<br></td></tr
><tr
id=sl_svn99_3432

><td class="source">PhoneGap.addResource(&quot;media&quot;);<br></td></tr
><tr
id=sl_svn99_3433

><td class="source"><br></td></tr
><tr
id=sl_svn99_3434

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3435

><td class="source"> * This class provides access to the device media, interfaces to both sound and video<br></td></tr
><tr
id=sl_svn99_3436

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3437

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3438

><td class="source"> * @param src                   The file name or url to play<br></td></tr
><tr
id=sl_svn99_3439

><td class="source"> * @param successCallback       The callback to be called when the file is done playing or recording.<br></td></tr
><tr
id=sl_svn99_3440

><td class="source"> *                                  successCallback() - OPTIONAL<br></td></tr
><tr
id=sl_svn99_3441

><td class="source"> * @param errorCallback         The callback to be called if there is an error.<br></td></tr
><tr
id=sl_svn99_3442

><td class="source"> *                                  errorCallback(int errorCode) - OPTIONAL<br></td></tr
><tr
id=sl_svn99_3443

><td class="source"> * @param statusCallback        The callback to be called when media status has changed.<br></td></tr
><tr
id=sl_svn99_3444

><td class="source"> *                                  statusCallback(int statusCode) - OPTIONAL<br></td></tr
><tr
id=sl_svn99_3445

><td class="source"> * @param positionCallback      The callback to be called when media position has changed.<br></td></tr
><tr
id=sl_svn99_3446

><td class="source"> *                                  positionCallback(long position) - OPTIONAL<br></td></tr
><tr
id=sl_svn99_3447

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3448

><td class="source">var Media = function(src, successCallback, errorCallback, statusCallback, positionCallback) {<br></td></tr
><tr
id=sl_svn99_3449

><td class="source"><br></td></tr
><tr
id=sl_svn99_3450

><td class="source">    // successCallback optional<br></td></tr
><tr
id=sl_svn99_3451

><td class="source">    if (successCallback &amp;&amp; (typeof successCallback !== &quot;function&quot;)) {<br></td></tr
><tr
id=sl_svn99_3452

><td class="source">        console.log(&quot;Media Error: successCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_3453

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_3454

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3455

><td class="source"><br></td></tr
><tr
id=sl_svn99_3456

><td class="source">    // errorCallback optional<br></td></tr
><tr
id=sl_svn99_3457

><td class="source">    if (errorCallback &amp;&amp; (typeof errorCallback !== &quot;function&quot;)) {<br></td></tr
><tr
id=sl_svn99_3458

><td class="source">        console.log(&quot;Media Error: errorCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_3459

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_3460

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3461

><td class="source"><br></td></tr
><tr
id=sl_svn99_3462

><td class="source">    // statusCallback optional<br></td></tr
><tr
id=sl_svn99_3463

><td class="source">    if (statusCallback &amp;&amp; (typeof statusCallback !== &quot;function&quot;)) {<br></td></tr
><tr
id=sl_svn99_3464

><td class="source">        console.log(&quot;Media Error: statusCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_3465

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_3466

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3467

><td class="source"><br></td></tr
><tr
id=sl_svn99_3468

><td class="source">    // statusCallback optional<br></td></tr
><tr
id=sl_svn99_3469

><td class="source">    if (positionCallback &amp;&amp; (typeof positionCallback !== &quot;function&quot;)) {<br></td></tr
><tr
id=sl_svn99_3470

><td class="source">        console.log(&quot;Media Error: positionCallback is not a function&quot;);<br></td></tr
><tr
id=sl_svn99_3471

><td class="source">        return;<br></td></tr
><tr
id=sl_svn99_3472

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3473

><td class="source"><br></td></tr
><tr
id=sl_svn99_3474

><td class="source">    this.id = PhoneGap.createUUID();<br></td></tr
><tr
id=sl_svn99_3475

><td class="source">    PhoneGap.mediaObjects[this.id] = this;<br></td></tr
><tr
id=sl_svn99_3476

><td class="source">    this.src = src;<br></td></tr
><tr
id=sl_svn99_3477

><td class="source">    this.successCallback = successCallback;<br></td></tr
><tr
id=sl_svn99_3478

><td class="source">    this.errorCallback = errorCallback;<br></td></tr
><tr
id=sl_svn99_3479

><td class="source">    this.statusCallback = statusCallback;<br></td></tr
><tr
id=sl_svn99_3480

><td class="source">    this.positionCallback = positionCallback;<br></td></tr
><tr
id=sl_svn99_3481

><td class="source">    this._duration = -1;<br></td></tr
><tr
id=sl_svn99_3482

><td class="source">    this._position = -1;<br></td></tr
><tr
id=sl_svn99_3483

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3484

><td class="source"><br></td></tr
><tr
id=sl_svn99_3485

><td class="source">// Media messages<br></td></tr
><tr
id=sl_svn99_3486

><td class="source">Media.MEDIA_STATE = 1;<br></td></tr
><tr
id=sl_svn99_3487

><td class="source">Media.MEDIA_DURATION = 2;<br></td></tr
><tr
id=sl_svn99_3488

><td class="source">Media.MEDIA_POSITION = 3;<br></td></tr
><tr
id=sl_svn99_3489

><td class="source">Media.MEDIA_ERROR = 9;<br></td></tr
><tr
id=sl_svn99_3490

><td class="source"><br></td></tr
><tr
id=sl_svn99_3491

><td class="source">// Media states<br></td></tr
><tr
id=sl_svn99_3492

><td class="source">Media.MEDIA_NONE = 0;<br></td></tr
><tr
id=sl_svn99_3493

><td class="source">Media.MEDIA_STARTING = 1;<br></td></tr
><tr
id=sl_svn99_3494

><td class="source">Media.MEDIA_RUNNING = 2;<br></td></tr
><tr
id=sl_svn99_3495

><td class="source">Media.MEDIA_PAUSED = 3;<br></td></tr
><tr
id=sl_svn99_3496

><td class="source">Media.MEDIA_STOPPED = 4;<br></td></tr
><tr
id=sl_svn99_3497

><td class="source">Media.MEDIA_MSG = [&quot;None&quot;, &quot;Starting&quot;, &quot;Running&quot;, &quot;Paused&quot;, &quot;Stopped&quot;];<br></td></tr
><tr
id=sl_svn99_3498

><td class="source"><br></td></tr
><tr
id=sl_svn99_3499

><td class="source">// TODO: Will MediaError be used?<br></td></tr
><tr
id=sl_svn99_3500

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3501

><td class="source"> * This class contains information about any Media errors.<br></td></tr
><tr
id=sl_svn99_3502

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3503

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3504

><td class="source">var MediaError = function() {<br></td></tr
><tr
id=sl_svn99_3505

><td class="source">    this.code = null;<br></td></tr
><tr
id=sl_svn99_3506

><td class="source">    this.message = &quot;&quot;;<br></td></tr
><tr
id=sl_svn99_3507

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3508

><td class="source"><br></td></tr
><tr
id=sl_svn99_3509

><td class="source">MediaError.MEDIA_ERR_ABORTED        = 1;<br></td></tr
><tr
id=sl_svn99_3510

><td class="source">MediaError.MEDIA_ERR_NETWORK        = 2;<br></td></tr
><tr
id=sl_svn99_3511

><td class="source">MediaError.MEDIA_ERR_DECODE         = 3;<br></td></tr
><tr
id=sl_svn99_3512

><td class="source">MediaError.MEDIA_ERR_NONE_SUPPORTED = 4;<br></td></tr
><tr
id=sl_svn99_3513

><td class="source"><br></td></tr
><tr
id=sl_svn99_3514

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3515

><td class="source"> * Start or resume playing audio file.<br></td></tr
><tr
id=sl_svn99_3516

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3517

><td class="source">Media.prototype.play = function() {<br></td></tr
><tr
id=sl_svn99_3518

><td class="source">    PhoneGap.exec(null, null, &quot;Media&quot;, &quot;startPlayingAudio&quot;, [this.id, this.src]);<br></td></tr
><tr
id=sl_svn99_3519

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3520

><td class="source"><br></td></tr
><tr
id=sl_svn99_3521

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3522

><td class="source"> * Stop playing audio file.<br></td></tr
><tr
id=sl_svn99_3523

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3524

><td class="source">Media.prototype.stop = function() {<br></td></tr
><tr
id=sl_svn99_3525

><td class="source">    return PhoneGap.exec(null, null, &quot;Media&quot;, &quot;stopPlayingAudio&quot;, [this.id]);<br></td></tr
><tr
id=sl_svn99_3526

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3527

><td class="source"><br></td></tr
><tr
id=sl_svn99_3528

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3529

><td class="source"> * Seek or jump to a new time in the track..<br></td></tr
><tr
id=sl_svn99_3530

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3531

><td class="source">Media.prototype.seekTo = function(milliseconds) {<br></td></tr
><tr
id=sl_svn99_3532

><td class="source">    PhoneGap.exec(null, null, &quot;Media&quot;, &quot;seekToAudio&quot;, [this.id, milliseconds]);<br></td></tr
><tr
id=sl_svn99_3533

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3534

><td class="source"><br></td></tr
><tr
id=sl_svn99_3535

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3536

><td class="source"> * Pause playing audio file.<br></td></tr
><tr
id=sl_svn99_3537

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3538

><td class="source">Media.prototype.pause = function() {<br></td></tr
><tr
id=sl_svn99_3539

><td class="source">    PhoneGap.exec(null, null, &quot;Media&quot;, &quot;pausePlayingAudio&quot;, [this.id]);<br></td></tr
><tr
id=sl_svn99_3540

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3541

><td class="source"><br></td></tr
><tr
id=sl_svn99_3542

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3543

><td class="source"> * Get duration of an audio file.<br></td></tr
><tr
id=sl_svn99_3544

><td class="source"> * The duration is only set for audio that is playing, paused or stopped.<br></td></tr
><tr
id=sl_svn99_3545

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3546

><td class="source"> * @return      duration or -1 if not known.<br></td></tr
><tr
id=sl_svn99_3547

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3548

><td class="source">Media.prototype.getDuration = function() {<br></td></tr
><tr
id=sl_svn99_3549

><td class="source">    return this._duration;<br></td></tr
><tr
id=sl_svn99_3550

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3551

><td class="source"><br></td></tr
><tr
id=sl_svn99_3552

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3553

><td class="source"> * Get position of audio.<br></td></tr
><tr
id=sl_svn99_3554

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3555

><td class="source">Media.prototype.getCurrentPosition = function(success, fail) {<br></td></tr
><tr
id=sl_svn99_3556

><td class="source">    PhoneGap.exec(success, fail, &quot;Media&quot;, &quot;getCurrentPositionAudio&quot;, [this.id]);<br></td></tr
><tr
id=sl_svn99_3557

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3558

><td class="source"><br></td></tr
><tr
id=sl_svn99_3559

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3560

><td class="source"> * Start recording audio file.<br></td></tr
><tr
id=sl_svn99_3561

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3562

><td class="source">Media.prototype.startRecord = function() {<br></td></tr
><tr
id=sl_svn99_3563

><td class="source">    PhoneGap.exec(null, null, &quot;Media&quot;, &quot;startRecordingAudio&quot;, [this.id, this.src]);<br></td></tr
><tr
id=sl_svn99_3564

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3565

><td class="source"><br></td></tr
><tr
id=sl_svn99_3566

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3567

><td class="source"> * Stop recording audio file.<br></td></tr
><tr
id=sl_svn99_3568

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3569

><td class="source">Media.prototype.stopRecord = function() {<br></td></tr
><tr
id=sl_svn99_3570

><td class="source">    PhoneGap.exec(null, null, &quot;Media&quot;, &quot;stopRecordingAudio&quot;, [this.id]);<br></td></tr
><tr
id=sl_svn99_3571

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3572

><td class="source"><br></td></tr
><tr
id=sl_svn99_3573

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3574

><td class="source"> * Release the resources.<br></td></tr
><tr
id=sl_svn99_3575

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3576

><td class="source">Media.prototype.release = function() {<br></td></tr
><tr
id=sl_svn99_3577

><td class="source">    PhoneGap.exec(null, null, &quot;Media&quot;, &quot;release&quot;, [this.id]);<br></td></tr
><tr
id=sl_svn99_3578

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3579

><td class="source"><br></td></tr
><tr
id=sl_svn99_3580

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3581

><td class="source"> * List of media objects.<br></td></tr
><tr
id=sl_svn99_3582

><td class="source"> * PRIVATE<br></td></tr
><tr
id=sl_svn99_3583

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3584

><td class="source">PhoneGap.mediaObjects = {};<br></td></tr
><tr
id=sl_svn99_3585

><td class="source"><br></td></tr
><tr
id=sl_svn99_3586

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3587

><td class="source"> * Object that receives native callbacks.<br></td></tr
><tr
id=sl_svn99_3588

><td class="source"> * PRIVATE<br></td></tr
><tr
id=sl_svn99_3589

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3590

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3591

><td class="source">PhoneGap.Media = function() {};<br></td></tr
><tr
id=sl_svn99_3592

><td class="source"><br></td></tr
><tr
id=sl_svn99_3593

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3594

><td class="source"> * Get the media object.<br></td></tr
><tr
id=sl_svn99_3595

><td class="source"> * PRIVATE<br></td></tr
><tr
id=sl_svn99_3596

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3597

><td class="source"> * @param id            The media object id (string)<br></td></tr
><tr
id=sl_svn99_3598

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3599

><td class="source">PhoneGap.Media.getMediaObject = function(id) {<br></td></tr
><tr
id=sl_svn99_3600

><td class="source">    return PhoneGap.mediaObjects[id];<br></td></tr
><tr
id=sl_svn99_3601

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3602

><td class="source"><br></td></tr
><tr
id=sl_svn99_3603

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3604

><td class="source"> * Audio has status update.<br></td></tr
><tr
id=sl_svn99_3605

><td class="source"> * PRIVATE<br></td></tr
><tr
id=sl_svn99_3606

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3607

><td class="source"> * @param id            The media object id (string)<br></td></tr
><tr
id=sl_svn99_3608

><td class="source"> * @param status        The status code (int)<br></td></tr
><tr
id=sl_svn99_3609

><td class="source"> * @param msg           The status message (string)<br></td></tr
><tr
id=sl_svn99_3610

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3611

><td class="source">PhoneGap.Media.onStatus = function(id, msg, value) {<br></td></tr
><tr
id=sl_svn99_3612

><td class="source">    var media = PhoneGap.mediaObjects[id];<br></td></tr
><tr
id=sl_svn99_3613

><td class="source">    // If state update<br></td></tr
><tr
id=sl_svn99_3614

><td class="source">    if (msg === Media.MEDIA_STATE) {<br></td></tr
><tr
id=sl_svn99_3615

><td class="source">        if (value === Media.MEDIA_STOPPED) {<br></td></tr
><tr
id=sl_svn99_3616

><td class="source">            if (media.successCallback) {<br></td></tr
><tr
id=sl_svn99_3617

><td class="source">                media.successCallback();<br></td></tr
><tr
id=sl_svn99_3618

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_3619

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3620

><td class="source">        if (media.statusCallback) {<br></td></tr
><tr
id=sl_svn99_3621

><td class="source">            media.statusCallback(value);<br></td></tr
><tr
id=sl_svn99_3622

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3623

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3624

><td class="source">    else if (msg === Media.MEDIA_DURATION) {<br></td></tr
><tr
id=sl_svn99_3625

><td class="source">        media._duration = value;<br></td></tr
><tr
id=sl_svn99_3626

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3627

><td class="source">    else if (msg === Media.MEDIA_ERROR) {<br></td></tr
><tr
id=sl_svn99_3628

><td class="source">        if (media.errorCallback) {<br></td></tr
><tr
id=sl_svn99_3629

><td class="source">            media.errorCallback(value);<br></td></tr
><tr
id=sl_svn99_3630

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_3631

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3632

><td class="source">    else if (msg == Media.MEDIA_POSITION) {<br></td></tr
><tr
id=sl_svn99_3633

><td class="source">        media._position = value;<br></td></tr
><tr
id=sl_svn99_3634

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3635

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3636

><td class="source">}<br></td></tr
><tr
id=sl_svn99_3637

><td class="source"><br></td></tr
><tr
id=sl_svn99_3638

><td class="source"><br></td></tr
><tr
id=sl_svn99_3639

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_3640

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_3641

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_3642

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3643

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_3644

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_3645

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3646

><td class="source"><br></td></tr
><tr
id=sl_svn99_3647

><td class="source">if (!PhoneGap.hasResource(&quot;network&quot;)) {<br></td></tr
><tr
id=sl_svn99_3648

><td class="source">PhoneGap.addResource(&quot;network&quot;);<br></td></tr
><tr
id=sl_svn99_3649

><td class="source"><br></td></tr
><tr
id=sl_svn99_3650

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3651

><td class="source"> * This class contains information about the current network Connection.<br></td></tr
><tr
id=sl_svn99_3652

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3653

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3654

><td class="source">var Connection = function() {<br></td></tr
><tr
id=sl_svn99_3655

><td class="source">    this.type = null;<br></td></tr
><tr
id=sl_svn99_3656

><td class="source">    this._firstRun = true;<br></td></tr
><tr
id=sl_svn99_3657

><td class="source">    this._timer = null;<br></td></tr
><tr
id=sl_svn99_3658

><td class="source">    this.timeout = 500;<br></td></tr
><tr
id=sl_svn99_3659

><td class="source"><br></td></tr
><tr
id=sl_svn99_3660

><td class="source">    var me = this;<br></td></tr
><tr
id=sl_svn99_3661

><td class="source">    this.getInfo(<br></td></tr
><tr
id=sl_svn99_3662

><td class="source">        function(type) {<br></td></tr
><tr
id=sl_svn99_3663

><td class="source">            // Need to send events if we are on or offline<br></td></tr
><tr
id=sl_svn99_3664

><td class="source">            if (type == &quot;none&quot;) {<br></td></tr
><tr
id=sl_svn99_3665

><td class="source">                // set a timer if still offline at the end of timer send the offline event<br></td></tr
><tr
id=sl_svn99_3666

><td class="source">                me._timer = setTimeout(function(){<br></td></tr
><tr
id=sl_svn99_3667

><td class="source">                    me.type = type;<br></td></tr
><tr
id=sl_svn99_3668

><td class="source">                    PhoneGap.fireEvent(&#39;offline&#39;);<br></td></tr
><tr
id=sl_svn99_3669

><td class="source">                    me._timer = null;<br></td></tr
><tr
id=sl_svn99_3670

><td class="source">                    }, me.timeout);<br></td></tr
><tr
id=sl_svn99_3671

><td class="source">            } else {<br></td></tr
><tr
id=sl_svn99_3672

><td class="source">                // If there is a current offline event pending clear it<br></td></tr
><tr
id=sl_svn99_3673

><td class="source">                if (me._timer != null) {<br></td></tr
><tr
id=sl_svn99_3674

><td class="source">                    clearTimeout(me._timer);<br></td></tr
><tr
id=sl_svn99_3675

><td class="source">                    me._timer = null;<br></td></tr
><tr
id=sl_svn99_3676

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_3677

><td class="source">                me.type = type;<br></td></tr
><tr
id=sl_svn99_3678

><td class="source">                PhoneGap.fireEvent(&#39;online&#39;);<br></td></tr
><tr
id=sl_svn99_3679

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_3680

><td class="source">            <br></td></tr
><tr
id=sl_svn99_3681

><td class="source">            // should only fire this once<br></td></tr
><tr
id=sl_svn99_3682

><td class="source">            if (me._firstRun) {<br></td></tr
><tr
id=sl_svn99_3683

><td class="source">                me._firstRun = false;<br></td></tr
><tr
id=sl_svn99_3684

><td class="source">                PhoneGap.onPhoneGapConnectionReady.fire();<br></td></tr
><tr
id=sl_svn99_3685

><td class="source">            }            <br></td></tr
><tr
id=sl_svn99_3686

><td class="source">        },<br></td></tr
><tr
id=sl_svn99_3687

><td class="source">        function(e) {<br></td></tr
><tr
id=sl_svn99_3688

><td class="source">            console.log(&quot;Error initializing Network Connection: &quot; + e);<br></td></tr
><tr
id=sl_svn99_3689

><td class="source">        });<br></td></tr
><tr
id=sl_svn99_3690

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3691

><td class="source"><br></td></tr
><tr
id=sl_svn99_3692

><td class="source">Connection.UNKNOWN = &quot;unknown&quot;;<br></td></tr
><tr
id=sl_svn99_3693

><td class="source">Connection.ETHERNET = &quot;ethernet&quot;;<br></td></tr
><tr
id=sl_svn99_3694

><td class="source">Connection.WIFI = &quot;wifi&quot;;<br></td></tr
><tr
id=sl_svn99_3695

><td class="source">Connection.CELL_2G = &quot;2g&quot;;<br></td></tr
><tr
id=sl_svn99_3696

><td class="source">Connection.CELL_3G = &quot;3g&quot;;<br></td></tr
><tr
id=sl_svn99_3697

><td class="source">Connection.CELL_4G = &quot;4g&quot;;<br></td></tr
><tr
id=sl_svn99_3698

><td class="source">Connection.NONE = &quot;none&quot;;<br></td></tr
><tr
id=sl_svn99_3699

><td class="source"><br></td></tr
><tr
id=sl_svn99_3700

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3701

><td class="source"> * Get connection info<br></td></tr
><tr
id=sl_svn99_3702

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3703

><td class="source"> * @param {Function} successCallback The function to call when the Connection data is available<br></td></tr
><tr
id=sl_svn99_3704

><td class="source"> * @param {Function} errorCallback The function to call when there is an error getting the Connection data. (OPTIONAL)<br></td></tr
><tr
id=sl_svn99_3705

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3706

><td class="source">Connection.prototype.getInfo = function(successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_3707

><td class="source">    // Get info<br></td></tr
><tr
id=sl_svn99_3708

><td class="source">    PhoneGap.exec(successCallback, errorCallback, &quot;Network Status&quot;, &quot;getConnectionInfo&quot;, []);<br></td></tr
><tr
id=sl_svn99_3709

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3710

><td class="source"><br></td></tr
><tr
id=sl_svn99_3711

><td class="source"><br></td></tr
><tr
id=sl_svn99_3712

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_3713

><td class="source">    if (typeof navigator.network === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3714

><td class="source">        navigator.network = new Object();<br></td></tr
><tr
id=sl_svn99_3715

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3716

><td class="source">    if (typeof navigator.network.connection === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3717

><td class="source">        navigator.network.connection = new Connection();<br></td></tr
><tr
id=sl_svn99_3718

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3719

><td class="source">});<br></td></tr
><tr
id=sl_svn99_3720

><td class="source">}<br></td></tr
><tr
id=sl_svn99_3721

><td class="source"><br></td></tr
><tr
id=sl_svn99_3722

><td class="source"><br></td></tr
><tr
id=sl_svn99_3723

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_3724

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_3725

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_3726

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3727

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_3728

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_3729

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3730

><td class="source"><br></td></tr
><tr
id=sl_svn99_3731

><td class="source">if (!PhoneGap.hasResource(&quot;notification&quot;)) {<br></td></tr
><tr
id=sl_svn99_3732

><td class="source">PhoneGap.addResource(&quot;notification&quot;);<br></td></tr
><tr
id=sl_svn99_3733

><td class="source"><br></td></tr
><tr
id=sl_svn99_3734

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3735

><td class="source"> * This class provides access to notifications on the device.<br></td></tr
><tr
id=sl_svn99_3736

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3737

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3738

><td class="source">var Notification = function() {<br></td></tr
><tr
id=sl_svn99_3739

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3740

><td class="source"><br></td></tr
><tr
id=sl_svn99_3741

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3742

><td class="source"> * Open a native alert dialog, with a customizable title and button text.<br></td></tr
><tr
id=sl_svn99_3743

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3744

><td class="source"> * @param {String} message              Message to print in the body of the alert<br></td></tr
><tr
id=sl_svn99_3745

><td class="source"> * @param {Function} completeCallback   The callback that is called when user clicks on a button.<br></td></tr
><tr
id=sl_svn99_3746

><td class="source"> * @param {String} title                Title of the alert dialog (default: Alert)<br></td></tr
><tr
id=sl_svn99_3747

><td class="source"> * @param {String} buttonLabel          Label of the close button (default: OK)<br></td></tr
><tr
id=sl_svn99_3748

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3749

><td class="source">Notification.prototype.alert = function(message, completeCallback, title, buttonLabel) {<br></td></tr
><tr
id=sl_svn99_3750

><td class="source">    var _title = (title || &quot;Alert&quot;);<br></td></tr
><tr
id=sl_svn99_3751

><td class="source">    var _buttonLabel = (buttonLabel || &quot;OK&quot;);<br></td></tr
><tr
id=sl_svn99_3752

><td class="source">    PhoneGap.exec(completeCallback, null, &quot;Notification&quot;, &quot;alert&quot;, [message,_title,_buttonLabel]);<br></td></tr
><tr
id=sl_svn99_3753

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3754

><td class="source"><br></td></tr
><tr
id=sl_svn99_3755

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3756

><td class="source"> * Open a native confirm dialog, with a customizable title and button text.<br></td></tr
><tr
id=sl_svn99_3757

><td class="source"> * The result that the user selects is returned to the result callback.<br></td></tr
><tr
id=sl_svn99_3758

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3759

><td class="source"> * @param {String} message              Message to print in the body of the alert<br></td></tr
><tr
id=sl_svn99_3760

><td class="source"> * @param {Function} resultCallback     The callback that is called when user clicks on a button.<br></td></tr
><tr
id=sl_svn99_3761

><td class="source"> * @param {String} title                Title of the alert dialog (default: Confirm)<br></td></tr
><tr
id=sl_svn99_3762

><td class="source"> * @param {String} buttonLabels         Comma separated list of the labels of the buttons (default: &#39;OK,Cancel&#39;)<br></td></tr
><tr
id=sl_svn99_3763

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3764

><td class="source">Notification.prototype.confirm = function(message, resultCallback, title, buttonLabels) {<br></td></tr
><tr
id=sl_svn99_3765

><td class="source">    var _title = (title || &quot;Confirm&quot;);<br></td></tr
><tr
id=sl_svn99_3766

><td class="source">    var _buttonLabels = (buttonLabels || &quot;OK,Cancel&quot;);<br></td></tr
><tr
id=sl_svn99_3767

><td class="source">    PhoneGap.exec(resultCallback, null, &quot;Notification&quot;, &quot;confirm&quot;, [message,_title,_buttonLabels]);<br></td></tr
><tr
id=sl_svn99_3768

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3769

><td class="source"><br></td></tr
><tr
id=sl_svn99_3770

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3771

><td class="source"> * Start spinning the activity indicator on the statusbar<br></td></tr
><tr
id=sl_svn99_3772

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3773

><td class="source">Notification.prototype.activityStart = function() {<br></td></tr
><tr
id=sl_svn99_3774

><td class="source">    PhoneGap.exec(null, null, &quot;Notification&quot;, &quot;activityStart&quot;, [&quot;Busy&quot;,&quot;Please wait...&quot;]);<br></td></tr
><tr
id=sl_svn99_3775

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3776

><td class="source"><br></td></tr
><tr
id=sl_svn99_3777

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3778

><td class="source"> * Stop spinning the activity indicator on the statusbar, if it&#39;s currently spinning<br></td></tr
><tr
id=sl_svn99_3779

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3780

><td class="source">Notification.prototype.activityStop = function() {<br></td></tr
><tr
id=sl_svn99_3781

><td class="source">    PhoneGap.exec(null, null, &quot;Notification&quot;, &quot;activityStop&quot;, []);<br></td></tr
><tr
id=sl_svn99_3782

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3783

><td class="source"><br></td></tr
><tr
id=sl_svn99_3784

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3785

><td class="source"> * Display a progress dialog with progress bar that goes from 0 to 100.<br></td></tr
><tr
id=sl_svn99_3786

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3787

><td class="source"> * @param {String} title        Title of the progress dialog.<br></td></tr
><tr
id=sl_svn99_3788

><td class="source"> * @param {String} message      Message to display in the dialog.<br></td></tr
><tr
id=sl_svn99_3789

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3790

><td class="source">Notification.prototype.progressStart = function(title, message) {<br></td></tr
><tr
id=sl_svn99_3791

><td class="source">    PhoneGap.exec(null, null, &quot;Notification&quot;, &quot;progressStart&quot;, [title, message]);<br></td></tr
><tr
id=sl_svn99_3792

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3793

><td class="source"><br></td></tr
><tr
id=sl_svn99_3794

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3795

><td class="source"> * Set the progress dialog value.<br></td></tr
><tr
id=sl_svn99_3796

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3797

><td class="source"> * @param {Number} value         0-100<br></td></tr
><tr
id=sl_svn99_3798

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3799

><td class="source">Notification.prototype.progressValue = function(value) {<br></td></tr
><tr
id=sl_svn99_3800

><td class="source">    PhoneGap.exec(null, null, &quot;Notification&quot;, &quot;progressValue&quot;, [value]);<br></td></tr
><tr
id=sl_svn99_3801

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3802

><td class="source"><br></td></tr
><tr
id=sl_svn99_3803

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3804

><td class="source"> * Close the progress dialog.<br></td></tr
><tr
id=sl_svn99_3805

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3806

><td class="source">Notification.prototype.progressStop = function() {<br></td></tr
><tr
id=sl_svn99_3807

><td class="source">    PhoneGap.exec(null, null, &quot;Notification&quot;, &quot;progressStop&quot;, []);<br></td></tr
><tr
id=sl_svn99_3808

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3809

><td class="source"><br></td></tr
><tr
id=sl_svn99_3810

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3811

><td class="source"> * Causes the device to blink a status LED.<br></td></tr
><tr
id=sl_svn99_3812

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3813

><td class="source"> * @param {Integer} count       The number of blinks.<br></td></tr
><tr
id=sl_svn99_3814

><td class="source"> * @param {String} colour       The colour of the light.<br></td></tr
><tr
id=sl_svn99_3815

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3816

><td class="source">Notification.prototype.blink = function(count, colour) {<br></td></tr
><tr
id=sl_svn99_3817

><td class="source">    // NOT IMPLEMENTED<br></td></tr
><tr
id=sl_svn99_3818

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3819

><td class="source"><br></td></tr
><tr
id=sl_svn99_3820

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3821

><td class="source"> * Causes the device to vibrate.<br></td></tr
><tr
id=sl_svn99_3822

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3823

><td class="source"> * @param {Integer} mills       The number of milliseconds to vibrate for.<br></td></tr
><tr
id=sl_svn99_3824

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3825

><td class="source">Notification.prototype.vibrate = function(mills) {<br></td></tr
><tr
id=sl_svn99_3826

><td class="source">    PhoneGap.exec(null, null, &quot;Notification&quot;, &quot;vibrate&quot;, [mills]);<br></td></tr
><tr
id=sl_svn99_3827

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3828

><td class="source"><br></td></tr
><tr
id=sl_svn99_3829

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3830

><td class="source"> * Causes the device to beep.<br></td></tr
><tr
id=sl_svn99_3831

><td class="source"> * On Android, the default notification ringtone is played &quot;count&quot; times.<br></td></tr
><tr
id=sl_svn99_3832

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3833

><td class="source"> * @param {Integer} count       The number of beeps.<br></td></tr
><tr
id=sl_svn99_3834

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3835

><td class="source">Notification.prototype.beep = function(count) {<br></td></tr
><tr
id=sl_svn99_3836

><td class="source">    PhoneGap.exec(null, null, &quot;Notification&quot;, &quot;beep&quot;, [count]);<br></td></tr
><tr
id=sl_svn99_3837

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3838

><td class="source"><br></td></tr
><tr
id=sl_svn99_3839

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_3840

><td class="source">    if (typeof navigator.notification === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_3841

><td class="source">        navigator.notification = new Notification();<br></td></tr
><tr
id=sl_svn99_3842

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_3843

><td class="source">});<br></td></tr
><tr
id=sl_svn99_3844

><td class="source">}<br></td></tr
><tr
id=sl_svn99_3845

><td class="source"><br></td></tr
><tr
id=sl_svn99_3846

><td class="source"><br></td></tr
><tr
id=sl_svn99_3847

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_3848

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_3849

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_3850

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3851

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_3852

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_3853

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3854

><td class="source"><br></td></tr
><tr
id=sl_svn99_3855

><td class="source">if (!PhoneGap.hasResource(&quot;position&quot;)) {<br></td></tr
><tr
id=sl_svn99_3856

><td class="source">PhoneGap.addResource(&quot;position&quot;);<br></td></tr
><tr
id=sl_svn99_3857

><td class="source"><br></td></tr
><tr
id=sl_svn99_3858

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3859

><td class="source"> * This class contains position information.<br></td></tr
><tr
id=sl_svn99_3860

><td class="source"> * @param {Object} lat<br></td></tr
><tr
id=sl_svn99_3861

><td class="source"> * @param {Object} lng<br></td></tr
><tr
id=sl_svn99_3862

><td class="source"> * @param {Object} acc<br></td></tr
><tr
id=sl_svn99_3863

><td class="source"> * @param {Object} alt<br></td></tr
><tr
id=sl_svn99_3864

><td class="source"> * @param {Object} altacc<br></td></tr
><tr
id=sl_svn99_3865

><td class="source"> * @param {Object} head<br></td></tr
><tr
id=sl_svn99_3866

><td class="source"> * @param {Object} vel<br></td></tr
><tr
id=sl_svn99_3867

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3868

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3869

><td class="source">var Position = function(coords, timestamp) {<br></td></tr
><tr
id=sl_svn99_3870

><td class="source">	this.coords = coords;<br></td></tr
><tr
id=sl_svn99_3871

><td class="source">	this.timestamp = (timestamp !== &#39;undefined&#39;) ? timestamp : new Date().getTime();<br></td></tr
><tr
id=sl_svn99_3872

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3873

><td class="source"><br></td></tr
><tr
id=sl_svn99_3874

><td class="source">/** @constructor */<br></td></tr
><tr
id=sl_svn99_3875

><td class="source">var Coordinates = function(lat, lng, alt, acc, head, vel, altacc) {<br></td></tr
><tr
id=sl_svn99_3876

><td class="source">	/**<br></td></tr
><tr
id=sl_svn99_3877

><td class="source">	 * The latitude of the position.<br></td></tr
><tr
id=sl_svn99_3878

><td class="source">	 */<br></td></tr
><tr
id=sl_svn99_3879

><td class="source">	this.latitude = lat;<br></td></tr
><tr
id=sl_svn99_3880

><td class="source">	/**<br></td></tr
><tr
id=sl_svn99_3881

><td class="source">	 * The longitude of the position,<br></td></tr
><tr
id=sl_svn99_3882

><td class="source">	 */<br></td></tr
><tr
id=sl_svn99_3883

><td class="source">	this.longitude = lng;<br></td></tr
><tr
id=sl_svn99_3884

><td class="source">	/**<br></td></tr
><tr
id=sl_svn99_3885

><td class="source">	 * The accuracy of the position.<br></td></tr
><tr
id=sl_svn99_3886

><td class="source">	 */<br></td></tr
><tr
id=sl_svn99_3887

><td class="source">	this.accuracy = acc;<br></td></tr
><tr
id=sl_svn99_3888

><td class="source">	/**<br></td></tr
><tr
id=sl_svn99_3889

><td class="source">	 * The altitude of the position.<br></td></tr
><tr
id=sl_svn99_3890

><td class="source">	 */<br></td></tr
><tr
id=sl_svn99_3891

><td class="source">	this.altitude = alt;<br></td></tr
><tr
id=sl_svn99_3892

><td class="source">	/**<br></td></tr
><tr
id=sl_svn99_3893

><td class="source">	 * The direction the device is moving at the position.<br></td></tr
><tr
id=sl_svn99_3894

><td class="source">	 */<br></td></tr
><tr
id=sl_svn99_3895

><td class="source">	this.heading = head;<br></td></tr
><tr
id=sl_svn99_3896

><td class="source">	/**<br></td></tr
><tr
id=sl_svn99_3897

><td class="source">	 * The velocity with which the device is moving at the position.<br></td></tr
><tr
id=sl_svn99_3898

><td class="source">	 */<br></td></tr
><tr
id=sl_svn99_3899

><td class="source">	this.speed = vel;<br></td></tr
><tr
id=sl_svn99_3900

><td class="source">	/**<br></td></tr
><tr
id=sl_svn99_3901

><td class="source">	 * The altitude accuracy of the position.<br></td></tr
><tr
id=sl_svn99_3902

><td class="source">	 */<br></td></tr
><tr
id=sl_svn99_3903

><td class="source">	this.altitudeAccuracy = (altacc !== &#39;undefined&#39;) ? altacc : null;<br></td></tr
><tr
id=sl_svn99_3904

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3905

><td class="source"><br></td></tr
><tr
id=sl_svn99_3906

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3907

><td class="source"> * This class specifies the options for requesting position data.<br></td></tr
><tr
id=sl_svn99_3908

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3909

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3910

><td class="source">var PositionOptions = function() {<br></td></tr
><tr
id=sl_svn99_3911

><td class="source">	/**<br></td></tr
><tr
id=sl_svn99_3912

><td class="source">	 * Specifies the desired position accuracy.<br></td></tr
><tr
id=sl_svn99_3913

><td class="source">	 */<br></td></tr
><tr
id=sl_svn99_3914

><td class="source">	this.enableHighAccuracy = true;<br></td></tr
><tr
id=sl_svn99_3915

><td class="source">	/**<br></td></tr
><tr
id=sl_svn99_3916

><td class="source">	 * The timeout after which if position data cannot be obtained the errorCallback<br></td></tr
><tr
id=sl_svn99_3917

><td class="source">	 * is called.<br></td></tr
><tr
id=sl_svn99_3918

><td class="source">	 */<br></td></tr
><tr
id=sl_svn99_3919

><td class="source">	this.timeout = 10000;<br></td></tr
><tr
id=sl_svn99_3920

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3921

><td class="source"><br></td></tr
><tr
id=sl_svn99_3922

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3923

><td class="source"> * This class contains information about any GSP errors.<br></td></tr
><tr
id=sl_svn99_3924

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3925

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3926

><td class="source">var PositionError = function() {<br></td></tr
><tr
id=sl_svn99_3927

><td class="source">	this.code = null;<br></td></tr
><tr
id=sl_svn99_3928

><td class="source">	this.message = &quot;&quot;;<br></td></tr
><tr
id=sl_svn99_3929

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3930

><td class="source"><br></td></tr
><tr
id=sl_svn99_3931

><td class="source">PositionError.UNKNOWN_ERROR = 0;<br></td></tr
><tr
id=sl_svn99_3932

><td class="source">PositionError.PERMISSION_DENIED = 1;<br></td></tr
><tr
id=sl_svn99_3933

><td class="source">PositionError.POSITION_UNAVAILABLE = 2;<br></td></tr
><tr
id=sl_svn99_3934

><td class="source">PositionError.TIMEOUT = 3;<br></td></tr
><tr
id=sl_svn99_3935

><td class="source">}<br></td></tr
><tr
id=sl_svn99_3936

><td class="source"><br></td></tr
><tr
id=sl_svn99_3937

><td class="source"><br></td></tr
><tr
id=sl_svn99_3938

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_3939

><td class="source"> * PhoneGap is available under *either* the terms of the modified BSD license *or* the<br></td></tr
><tr
id=sl_svn99_3940

><td class="source"> * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.<br></td></tr
><tr
id=sl_svn99_3941

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3942

><td class="source"> * Copyright (c) 2005-2010, Nitobi Software Inc.<br></td></tr
><tr
id=sl_svn99_3943

><td class="source"> * Copyright (c) 2010-2011, IBM Corporation<br></td></tr
><tr
id=sl_svn99_3944

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3945

><td class="source"><br></td></tr
><tr
id=sl_svn99_3946

><td class="source">/*<br></td></tr
><tr
id=sl_svn99_3947

><td class="source"> * This is purely for the Android 1.5/1.6 HTML 5 Storage<br></td></tr
><tr
id=sl_svn99_3948

><td class="source"> * I was hoping that Android 2.0 would deprecate this, but given the fact that<br></td></tr
><tr
id=sl_svn99_3949

><td class="source"> * most manufacturers ship with Android 1.5 and do not do OTA Updates, this is required<br></td></tr
><tr
id=sl_svn99_3950

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3951

><td class="source"><br></td></tr
><tr
id=sl_svn99_3952

><td class="source">if (!PhoneGap.hasResource(&quot;storage&quot;)) {<br></td></tr
><tr
id=sl_svn99_3953

><td class="source">PhoneGap.addResource(&quot;storage&quot;);<br></td></tr
><tr
id=sl_svn99_3954

><td class="source"><br></td></tr
><tr
id=sl_svn99_3955

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3956

><td class="source"> * SQL result set object<br></td></tr
><tr
id=sl_svn99_3957

><td class="source"> * PRIVATE METHOD<br></td></tr
><tr
id=sl_svn99_3958

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3959

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3960

><td class="source">var DroidDB_Rows = function() {<br></td></tr
><tr
id=sl_svn99_3961

><td class="source">    this.resultSet = [];    // results array<br></td></tr
><tr
id=sl_svn99_3962

><td class="source">    this.length = 0;        // number of rows<br></td></tr
><tr
id=sl_svn99_3963

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3964

><td class="source"><br></td></tr
><tr
id=sl_svn99_3965

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3966

><td class="source"> * Get item from SQL result set<br></td></tr
><tr
id=sl_svn99_3967

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3968

><td class="source"> * @param row           The row number to return<br></td></tr
><tr
id=sl_svn99_3969

><td class="source"> * @return              The row object<br></td></tr
><tr
id=sl_svn99_3970

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3971

><td class="source">DroidDB_Rows.prototype.item = function(row) {<br></td></tr
><tr
id=sl_svn99_3972

><td class="source">    return this.resultSet[row];<br></td></tr
><tr
id=sl_svn99_3973

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3974

><td class="source"><br></td></tr
><tr
id=sl_svn99_3975

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3976

><td class="source"> * SQL result set that is returned to user.<br></td></tr
><tr
id=sl_svn99_3977

><td class="source"> * PRIVATE METHOD<br></td></tr
><tr
id=sl_svn99_3978

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3979

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3980

><td class="source">var DroidDB_Result = function() {<br></td></tr
><tr
id=sl_svn99_3981

><td class="source">    this.rows = new DroidDB_Rows();<br></td></tr
><tr
id=sl_svn99_3982

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3983

><td class="source"><br></td></tr
><tr
id=sl_svn99_3984

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3985

><td class="source"> * Storage object that is called by native code when performing queries.<br></td></tr
><tr
id=sl_svn99_3986

><td class="source"> * PRIVATE METHOD<br></td></tr
><tr
id=sl_svn99_3987

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_3988

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3989

><td class="source">var DroidDB = function() {<br></td></tr
><tr
id=sl_svn99_3990

><td class="source">    this.queryQueue = {};<br></td></tr
><tr
id=sl_svn99_3991

><td class="source">};<br></td></tr
><tr
id=sl_svn99_3992

><td class="source"><br></td></tr
><tr
id=sl_svn99_3993

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_3994

><td class="source"> * Callback from native code when query is complete.<br></td></tr
><tr
id=sl_svn99_3995

><td class="source"> * PRIVATE METHOD<br></td></tr
><tr
id=sl_svn99_3996

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_3997

><td class="source"> * @param id                Query id<br></td></tr
><tr
id=sl_svn99_3998

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_3999

><td class="source">DroidDB.prototype.completeQuery = function(id, data) {<br></td></tr
><tr
id=sl_svn99_4000

><td class="source">    var query = this.queryQueue[id];<br></td></tr
><tr
id=sl_svn99_4001

><td class="source">    if (query) {<br></td></tr
><tr
id=sl_svn99_4002

><td class="source">        try {<br></td></tr
><tr
id=sl_svn99_4003

><td class="source">            delete this.queryQueue[id];<br></td></tr
><tr
id=sl_svn99_4004

><td class="source"><br></td></tr
><tr
id=sl_svn99_4005

><td class="source">            // Get transaction<br></td></tr
><tr
id=sl_svn99_4006

><td class="source">            var tx = query.tx;<br></td></tr
><tr
id=sl_svn99_4007

><td class="source"><br></td></tr
><tr
id=sl_svn99_4008

><td class="source">            // If transaction hasn&#39;t failed<br></td></tr
><tr
id=sl_svn99_4009

><td class="source">            // Note: We ignore all query results if previous query<br></td></tr
><tr
id=sl_svn99_4010

><td class="source">            //       in the same transaction failed.<br></td></tr
><tr
id=sl_svn99_4011

><td class="source">            if (tx &amp;&amp; tx.queryList[id]) {<br></td></tr
><tr
id=sl_svn99_4012

><td class="source"><br></td></tr
><tr
id=sl_svn99_4013

><td class="source">                // Save query results<br></td></tr
><tr
id=sl_svn99_4014

><td class="source">                var r = new DroidDB_Result();<br></td></tr
><tr
id=sl_svn99_4015

><td class="source">                r.rows.resultSet = data;<br></td></tr
><tr
id=sl_svn99_4016

><td class="source">                r.rows.length = data.length;<br></td></tr
><tr
id=sl_svn99_4017

><td class="source">                try {<br></td></tr
><tr
id=sl_svn99_4018

><td class="source">                    if (typeof query.successCallback === &#39;function&#39;) {<br></td></tr
><tr
id=sl_svn99_4019

><td class="source">                        query.successCallback(query.tx, r);<br></td></tr
><tr
id=sl_svn99_4020

><td class="source">                    }<br></td></tr
><tr
id=sl_svn99_4021

><td class="source">                } catch (ex) {<br></td></tr
><tr
id=sl_svn99_4022

><td class="source">                    console.log(&quot;executeSql error calling user success callback: &quot;+ex);<br></td></tr
><tr
id=sl_svn99_4023

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_4024

><td class="source"><br></td></tr
><tr
id=sl_svn99_4025

><td class="source">                tx.queryComplete(id);<br></td></tr
><tr
id=sl_svn99_4026

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_4027

><td class="source">        } catch (e) {<br></td></tr
><tr
id=sl_svn99_4028

><td class="source">            console.log(&quot;executeSql error: &quot;+e);<br></td></tr
><tr
id=sl_svn99_4029

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_4030

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_4031

><td class="source">};<br></td></tr
><tr
id=sl_svn99_4032

><td class="source"><br></td></tr
><tr
id=sl_svn99_4033

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_4034

><td class="source"> * Callback from native code when query fails<br></td></tr
><tr
id=sl_svn99_4035

><td class="source"> * PRIVATE METHOD<br></td></tr
><tr
id=sl_svn99_4036

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_4037

><td class="source"> * @param reason            Error message<br></td></tr
><tr
id=sl_svn99_4038

><td class="source"> * @param id                Query id<br></td></tr
><tr
id=sl_svn99_4039

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_4040

><td class="source">DroidDB.prototype.fail = function(reason, id) {<br></td></tr
><tr
id=sl_svn99_4041

><td class="source">    var query = this.queryQueue[id];<br></td></tr
><tr
id=sl_svn99_4042

><td class="source">    if (query) {<br></td></tr
><tr
id=sl_svn99_4043

><td class="source">        try {<br></td></tr
><tr
id=sl_svn99_4044

><td class="source">            delete this.queryQueue[id];<br></td></tr
><tr
id=sl_svn99_4045

><td class="source"><br></td></tr
><tr
id=sl_svn99_4046

><td class="source">            // Get transaction<br></td></tr
><tr
id=sl_svn99_4047

><td class="source">            var tx = query.tx;<br></td></tr
><tr
id=sl_svn99_4048

><td class="source"><br></td></tr
><tr
id=sl_svn99_4049

><td class="source">            // If transaction hasn&#39;t failed<br></td></tr
><tr
id=sl_svn99_4050

><td class="source">            // Note: We ignore all query results if previous query<br></td></tr
><tr
id=sl_svn99_4051

><td class="source">            //       in the same transaction failed.<br></td></tr
><tr
id=sl_svn99_4052

><td class="source">            if (tx &amp;&amp; tx.queryList[id]) {<br></td></tr
><tr
id=sl_svn99_4053

><td class="source">                tx.queryList = {};<br></td></tr
><tr
id=sl_svn99_4054

><td class="source"><br></td></tr
><tr
id=sl_svn99_4055

><td class="source">                try {<br></td></tr
><tr
id=sl_svn99_4056

><td class="source">                    if (typeof query.errorCallback === &#39;function&#39;) {<br></td></tr
><tr
id=sl_svn99_4057

><td class="source">                        query.errorCallback(query.tx, reason);<br></td></tr
><tr
id=sl_svn99_4058

><td class="source">                    }<br></td></tr
><tr
id=sl_svn99_4059

><td class="source">                } catch (ex) {<br></td></tr
><tr
id=sl_svn99_4060

><td class="source">                    console.log(&quot;executeSql error calling user error callback: &quot;+ex);<br></td></tr
><tr
id=sl_svn99_4061

><td class="source">                }<br></td></tr
><tr
id=sl_svn99_4062

><td class="source"><br></td></tr
><tr
id=sl_svn99_4063

><td class="source">                tx.queryFailed(id, reason);<br></td></tr
><tr
id=sl_svn99_4064

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_4065

><td class="source"><br></td></tr
><tr
id=sl_svn99_4066

><td class="source">        } catch (e) {<br></td></tr
><tr
id=sl_svn99_4067

><td class="source">            console.log(&quot;executeSql error: &quot;+e);<br></td></tr
><tr
id=sl_svn99_4068

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_4069

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_4070

><td class="source">};<br></td></tr
><tr
id=sl_svn99_4071

><td class="source"><br></td></tr
><tr
id=sl_svn99_4072

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_4073

><td class="source"> * SQL query object<br></td></tr
><tr
id=sl_svn99_4074

><td class="source"> * PRIVATE METHOD<br></td></tr
><tr
id=sl_svn99_4075

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_4076

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_4077

><td class="source"> * @param tx                The transaction object that this query belongs to<br></td></tr
><tr
id=sl_svn99_4078

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_4079

><td class="source">var DroidDB_Query = function(tx) {<br></td></tr
><tr
id=sl_svn99_4080

><td class="source"><br></td></tr
><tr
id=sl_svn99_4081

><td class="source">    // Set the id of the query<br></td></tr
><tr
id=sl_svn99_4082

><td class="source">    this.id = PhoneGap.createUUID();<br></td></tr
><tr
id=sl_svn99_4083

><td class="source"><br></td></tr
><tr
id=sl_svn99_4084

><td class="source">    // Add this query to the queue<br></td></tr
><tr
id=sl_svn99_4085

><td class="source">    droiddb.queryQueue[this.id] = this;<br></td></tr
><tr
id=sl_svn99_4086

><td class="source"><br></td></tr
><tr
id=sl_svn99_4087

><td class="source">    // Init result<br></td></tr
><tr
id=sl_svn99_4088

><td class="source">    this.resultSet = [];<br></td></tr
><tr
id=sl_svn99_4089

><td class="source"><br></td></tr
><tr
id=sl_svn99_4090

><td class="source">    // Set transaction that this query belongs to<br></td></tr
><tr
id=sl_svn99_4091

><td class="source">    this.tx = tx;<br></td></tr
><tr
id=sl_svn99_4092

><td class="source"><br></td></tr
><tr
id=sl_svn99_4093

><td class="source">    // Add this query to transaction list<br></td></tr
><tr
id=sl_svn99_4094

><td class="source">    this.tx.queryList[this.id] = this;<br></td></tr
><tr
id=sl_svn99_4095

><td class="source"><br></td></tr
><tr
id=sl_svn99_4096

><td class="source">    // Callbacks<br></td></tr
><tr
id=sl_svn99_4097

><td class="source">    this.successCallback = null;<br></td></tr
><tr
id=sl_svn99_4098

><td class="source">    this.errorCallback = null;<br></td></tr
><tr
id=sl_svn99_4099

><td class="source"><br></td></tr
><tr
id=sl_svn99_4100

><td class="source">};<br></td></tr
><tr
id=sl_svn99_4101

><td class="source"><br></td></tr
><tr
id=sl_svn99_4102

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_4103

><td class="source"> * Transaction object<br></td></tr
><tr
id=sl_svn99_4104

><td class="source"> * PRIVATE METHOD<br></td></tr
><tr
id=sl_svn99_4105

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_4106

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_4107

><td class="source">var DroidDB_Tx = function() {<br></td></tr
><tr
id=sl_svn99_4108

><td class="source"><br></td></tr
><tr
id=sl_svn99_4109

><td class="source">    // Set the id of the transaction<br></td></tr
><tr
id=sl_svn99_4110

><td class="source">    this.id = PhoneGap.createUUID();<br></td></tr
><tr
id=sl_svn99_4111

><td class="source"><br></td></tr
><tr
id=sl_svn99_4112

><td class="source">    // Callbacks<br></td></tr
><tr
id=sl_svn99_4113

><td class="source">    this.successCallback = null;<br></td></tr
><tr
id=sl_svn99_4114

><td class="source">    this.errorCallback = null;<br></td></tr
><tr
id=sl_svn99_4115

><td class="source"><br></td></tr
><tr
id=sl_svn99_4116

><td class="source">    // Query list<br></td></tr
><tr
id=sl_svn99_4117

><td class="source">    this.queryList = {};<br></td></tr
><tr
id=sl_svn99_4118

><td class="source">};<br></td></tr
><tr
id=sl_svn99_4119

><td class="source"><br></td></tr
><tr
id=sl_svn99_4120

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_4121

><td class="source"> * Mark query in transaction as complete.<br></td></tr
><tr
id=sl_svn99_4122

><td class="source"> * If all queries are complete, call the user&#39;s transaction success callback.<br></td></tr
><tr
id=sl_svn99_4123

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_4124

><td class="source"> * @param id                Query id<br></td></tr
><tr
id=sl_svn99_4125

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_4126

><td class="source">DroidDB_Tx.prototype.queryComplete = function(id) {<br></td></tr
><tr
id=sl_svn99_4127

><td class="source">    delete this.queryList[id];<br></td></tr
><tr
id=sl_svn99_4128

><td class="source"><br></td></tr
><tr
id=sl_svn99_4129

><td class="source">    // If no more outstanding queries, then fire transaction success<br></td></tr
><tr
id=sl_svn99_4130

><td class="source">    if (this.successCallback) {<br></td></tr
><tr
id=sl_svn99_4131

><td class="source">        var count = 0;<br></td></tr
><tr
id=sl_svn99_4132

><td class="source">        var i;<br></td></tr
><tr
id=sl_svn99_4133

><td class="source">        for (i in this.queryList) {<br></td></tr
><tr
id=sl_svn99_4134

><td class="source">            if (this.queryList.hasOwnProperty(i)) {<br></td></tr
><tr
id=sl_svn99_4135

><td class="source">                count++;<br></td></tr
><tr
id=sl_svn99_4136

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_4137

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_4138

><td class="source">        if (count === 0) {<br></td></tr
><tr
id=sl_svn99_4139

><td class="source">            try {<br></td></tr
><tr
id=sl_svn99_4140

><td class="source">                this.successCallback();<br></td></tr
><tr
id=sl_svn99_4141

><td class="source">            } catch(e) {<br></td></tr
><tr
id=sl_svn99_4142

><td class="source">                console.log(&quot;Transaction error calling user success callback: &quot; + e);<br></td></tr
><tr
id=sl_svn99_4143

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_4144

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_4145

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_4146

><td class="source">};<br></td></tr
><tr
id=sl_svn99_4147

><td class="source"><br></td></tr
><tr
id=sl_svn99_4148

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_4149

><td class="source"> * Mark query in transaction as failed.<br></td></tr
><tr
id=sl_svn99_4150

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_4151

><td class="source"> * @param id                Query id<br></td></tr
><tr
id=sl_svn99_4152

><td class="source"> * @param reason            Error message<br></td></tr
><tr
id=sl_svn99_4153

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_4154

><td class="source">DroidDB_Tx.prototype.queryFailed = function(id, reason) {<br></td></tr
><tr
id=sl_svn99_4155

><td class="source"><br></td></tr
><tr
id=sl_svn99_4156

><td class="source">    // The sql queries in this transaction have already been run, since<br></td></tr
><tr
id=sl_svn99_4157

><td class="source">    // we really don&#39;t have a real transaction implemented in native code.<br></td></tr
><tr
id=sl_svn99_4158

><td class="source">    // However, the user callbacks for the remaining sql queries in transaction<br></td></tr
><tr
id=sl_svn99_4159

><td class="source">    // will not be called.<br></td></tr
><tr
id=sl_svn99_4160

><td class="source">    this.queryList = {};<br></td></tr
><tr
id=sl_svn99_4161

><td class="source"><br></td></tr
><tr
id=sl_svn99_4162

><td class="source">    if (this.errorCallback) {<br></td></tr
><tr
id=sl_svn99_4163

><td class="source">        try {<br></td></tr
><tr
id=sl_svn99_4164

><td class="source">            this.errorCallback(reason);<br></td></tr
><tr
id=sl_svn99_4165

><td class="source">        } catch(e) {<br></td></tr
><tr
id=sl_svn99_4166

><td class="source">            console.log(&quot;Transaction error calling user error callback: &quot; + e);<br></td></tr
><tr
id=sl_svn99_4167

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_4168

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_4169

><td class="source">};<br></td></tr
><tr
id=sl_svn99_4170

><td class="source"><br></td></tr
><tr
id=sl_svn99_4171

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_4172

><td class="source"> * Execute SQL statement<br></td></tr
><tr
id=sl_svn99_4173

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_4174

><td class="source"> * @param sql                   SQL statement to execute<br></td></tr
><tr
id=sl_svn99_4175

><td class="source"> * @param params                Statement parameters<br></td></tr
><tr
id=sl_svn99_4176

><td class="source"> * @param successCallback       Success callback<br></td></tr
><tr
id=sl_svn99_4177

><td class="source"> * @param errorCallback         Error callback<br></td></tr
><tr
id=sl_svn99_4178

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_4179

><td class="source">DroidDB_Tx.prototype.executeSql = function(sql, params, successCallback, errorCallback) {<br></td></tr
><tr
id=sl_svn99_4180

><td class="source"><br></td></tr
><tr
id=sl_svn99_4181

><td class="source">    // Init params array<br></td></tr
><tr
id=sl_svn99_4182

><td class="source">    if (typeof params === &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn99_4183

><td class="source">        params = [];<br></td></tr
><tr
id=sl_svn99_4184

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_4185

><td class="source"><br></td></tr
><tr
id=sl_svn99_4186

><td class="source">    // Create query and add to queue<br></td></tr
><tr
id=sl_svn99_4187

><td class="source">    var query = new DroidDB_Query(this);<br></td></tr
><tr
id=sl_svn99_4188

><td class="source">    droiddb.queryQueue[query.id] = query;<br></td></tr
><tr
id=sl_svn99_4189

><td class="source"><br></td></tr
><tr
id=sl_svn99_4190

><td class="source">    // Save callbacks<br></td></tr
><tr
id=sl_svn99_4191

><td class="source">    query.successCallback = successCallback;<br></td></tr
><tr
id=sl_svn99_4192

><td class="source">    query.errorCallback = errorCallback;<br></td></tr
><tr
id=sl_svn99_4193

><td class="source"><br></td></tr
><tr
id=sl_svn99_4194

><td class="source">    // Call native code<br></td></tr
><tr
id=sl_svn99_4195

><td class="source">    PhoneGap.exec(null, null, &quot;Storage&quot;, &quot;executeSql&quot;, [sql, params, query.id]);<br></td></tr
><tr
id=sl_svn99_4196

><td class="source">};<br></td></tr
><tr
id=sl_svn99_4197

><td class="source"><br></td></tr
><tr
id=sl_svn99_4198

><td class="source">var DatabaseShell = function() {<br></td></tr
><tr
id=sl_svn99_4199

><td class="source">};<br></td></tr
><tr
id=sl_svn99_4200

><td class="source"><br></td></tr
><tr
id=sl_svn99_4201

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_4202

><td class="source"> * Start a transaction.<br></td></tr
><tr
id=sl_svn99_4203

><td class="source"> * Does not support rollback in event of failure.<br></td></tr
><tr
id=sl_svn99_4204

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_4205

><td class="source"> * @param process {Function}            The transaction function<br></td></tr
><tr
id=sl_svn99_4206

><td class="source"> * @param successCallback {Function}<br></td></tr
><tr
id=sl_svn99_4207

><td class="source"> * @param errorCallback {Function}<br></td></tr
><tr
id=sl_svn99_4208

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_4209

><td class="source">DatabaseShell.prototype.transaction = function(process, errorCallback, successCallback) {<br></td></tr
><tr
id=sl_svn99_4210

><td class="source">    var tx = new DroidDB_Tx();<br></td></tr
><tr
id=sl_svn99_4211

><td class="source">    tx.successCallback = successCallback;<br></td></tr
><tr
id=sl_svn99_4212

><td class="source">    tx.errorCallback = errorCallback;<br></td></tr
><tr
id=sl_svn99_4213

><td class="source">    try {<br></td></tr
><tr
id=sl_svn99_4214

><td class="source">        process(tx);<br></td></tr
><tr
id=sl_svn99_4215

><td class="source">    } catch (e) {<br></td></tr
><tr
id=sl_svn99_4216

><td class="source">        console.log(&quot;Transaction error: &quot;+e);<br></td></tr
><tr
id=sl_svn99_4217

><td class="source">        if (tx.errorCallback) {<br></td></tr
><tr
id=sl_svn99_4218

><td class="source">            try {<br></td></tr
><tr
id=sl_svn99_4219

><td class="source">                tx.errorCallback(e);<br></td></tr
><tr
id=sl_svn99_4220

><td class="source">            } catch (ex) {<br></td></tr
><tr
id=sl_svn99_4221

><td class="source">                console.log(&quot;Transaction error calling user error callback: &quot;+e);<br></td></tr
><tr
id=sl_svn99_4222

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_4223

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_4224

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_4225

><td class="source">};<br></td></tr
><tr
id=sl_svn99_4226

><td class="source"><br></td></tr
><tr
id=sl_svn99_4227

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_4228

><td class="source"> * Open database<br></td></tr
><tr
id=sl_svn99_4229

><td class="source"> *<br></td></tr
><tr
id=sl_svn99_4230

><td class="source"> * @param name              Database name<br></td></tr
><tr
id=sl_svn99_4231

><td class="source"> * @param version           Database version<br></td></tr
><tr
id=sl_svn99_4232

><td class="source"> * @param display_name      Database display name<br></td></tr
><tr
id=sl_svn99_4233

><td class="source"> * @param size              Database size in bytes<br></td></tr
><tr
id=sl_svn99_4234

><td class="source"> * @return                  Database object<br></td></tr
><tr
id=sl_svn99_4235

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_4236

><td class="source">var DroidDB_openDatabase = function(name, version, display_name, size) {<br></td></tr
><tr
id=sl_svn99_4237

><td class="source">    PhoneGap.exec(null, null, &quot;Storage&quot;, &quot;openDatabase&quot;, [name, version, display_name, size]);<br></td></tr
><tr
id=sl_svn99_4238

><td class="source">    var db = new DatabaseShell();<br></td></tr
><tr
id=sl_svn99_4239

><td class="source">    return db;<br></td></tr
><tr
id=sl_svn99_4240

><td class="source">};<br></td></tr
><tr
id=sl_svn99_4241

><td class="source"><br></td></tr
><tr
id=sl_svn99_4242

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_4243

><td class="source"> * For browsers with no localStorage we emulate it with SQLite. Follows the w3c api.<br></td></tr
><tr
id=sl_svn99_4244

><td class="source"> * TODO: Do similar for sessionStorage.<br></td></tr
><tr
id=sl_svn99_4245

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_4246

><td class="source"><br></td></tr
><tr
id=sl_svn99_4247

><td class="source">/**<br></td></tr
><tr
id=sl_svn99_4248

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn99_4249

><td class="source"> */<br></td></tr
><tr
id=sl_svn99_4250

><td class="source">var CupcakeLocalStorage = function() {<br></td></tr
><tr
id=sl_svn99_4251

><td class="source">		try {<br></td></tr
><tr
id=sl_svn99_4252

><td class="source"><br></td></tr
><tr
id=sl_svn99_4253

><td class="source">			this.db = openDatabase(&#39;localStorage&#39;, &#39;1.0&#39;, &#39;localStorage&#39;, 2621440);<br></td></tr
><tr
id=sl_svn99_4254

><td class="source">			var storage = {};<br></td></tr
><tr
id=sl_svn99_4255

><td class="source">			this.length = 0;<br></td></tr
><tr
id=sl_svn99_4256

><td class="source">			function setLength (length) {<br></td></tr
><tr
id=sl_svn99_4257

><td class="source">				this.length = length;<br></td></tr
><tr
id=sl_svn99_4258

><td class="source">				localStorage.length = length;<br></td></tr
><tr
id=sl_svn99_4259

><td class="source">			}<br></td></tr
><tr
id=sl_svn99_4260

><td class="source">			this.db.transaction(<br></td></tr
><tr
id=sl_svn99_4261

><td class="source">				function (transaction) {<br></td></tr
><tr
id=sl_svn99_4262

><td class="source">				    var i;<br></td></tr
><tr
id=sl_svn99_4263

><td class="source">					transaction.executeSql(&#39;CREATE TABLE IF NOT EXISTS storage (id NVARCHAR(40) PRIMARY KEY, body NVARCHAR(255))&#39;);<br></td></tr
><tr
id=sl_svn99_4264

><td class="source">					transaction.executeSql(&#39;SELECT * FROM storage&#39;, [], function(tx, result) {<br></td></tr
><tr
id=sl_svn99_4265

><td class="source">						for(var i = 0; i &lt; result.rows.length; i++) {<br></td></tr
><tr
id=sl_svn99_4266

><td class="source">							storage[result.rows.item(i)[&#39;id&#39;]] =  result.rows.item(i)[&#39;body&#39;];<br></td></tr
><tr
id=sl_svn99_4267

><td class="source">						}<br></td></tr
><tr
id=sl_svn99_4268

><td class="source">						setLength(result.rows.length);<br></td></tr
><tr
id=sl_svn99_4269

><td class="source">						PhoneGap.initializationComplete(&quot;cupcakeStorage&quot;);<br></td></tr
><tr
id=sl_svn99_4270

><td class="source">					});<br></td></tr
><tr
id=sl_svn99_4271

><td class="source"><br></td></tr
><tr
id=sl_svn99_4272

><td class="source">				},<br></td></tr
><tr
id=sl_svn99_4273

><td class="source">				function (err) {<br></td></tr
><tr
id=sl_svn99_4274

><td class="source">					alert(err.message);<br></td></tr
><tr
id=sl_svn99_4275

><td class="source">				}<br></td></tr
><tr
id=sl_svn99_4276

><td class="source">			);<br></td></tr
><tr
id=sl_svn99_4277

><td class="source">			this.setItem = function(key, val) {<br></td></tr
><tr
id=sl_svn99_4278

><td class="source">				if (typeof(storage[key])==&#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn99_4279

><td class="source">					this.length++;<br></td></tr
><tr
id=sl_svn99_4280

><td class="source">				}<br></td></tr
><tr
id=sl_svn99_4281

><td class="source">				storage[key] = val;<br></td></tr
><tr
id=sl_svn99_4282

><td class="source">				this.db.transaction(<br></td></tr
><tr
id=sl_svn99_4283

><td class="source">					function (transaction) {<br></td></tr
><tr
id=sl_svn99_4284

><td class="source">						transaction.executeSql(&#39;CREATE TABLE IF NOT EXISTS storage (id NVARCHAR(40) PRIMARY KEY, body NVARCHAR(255))&#39;);<br></td></tr
><tr
id=sl_svn99_4285

><td class="source">						transaction.executeSql(&#39;REPLACE INTO storage (id, body) values(?,?)&#39;, [key,val]);<br></td></tr
><tr
id=sl_svn99_4286

><td class="source">					}<br></td></tr
><tr
id=sl_svn99_4287

><td class="source">				);<br></td></tr
><tr
id=sl_svn99_4288

><td class="source">			};<br></td></tr
><tr
id=sl_svn99_4289

><td class="source">			this.getItem = function(key) {<br></td></tr
><tr
id=sl_svn99_4290

><td class="source">				return storage[key];<br></td></tr
><tr
id=sl_svn99_4291

><td class="source">			};<br></td></tr
><tr
id=sl_svn99_4292

><td class="source">			this.removeItem = function(key) {<br></td></tr
><tr
id=sl_svn99_4293

><td class="source">				delete storage[key];<br></td></tr
><tr
id=sl_svn99_4294

><td class="source">				this.length--;<br></td></tr
><tr
id=sl_svn99_4295

><td class="source">				this.db.transaction(<br></td></tr
><tr
id=sl_svn99_4296

><td class="source">					function (transaction) {<br></td></tr
><tr
id=sl_svn99_4297

><td class="source">						transaction.executeSql(&#39;CREATE TABLE IF NOT EXISTS storage (id NVARCHAR(40) PRIMARY KEY, body NVARCHAR(255))&#39;);<br></td></tr
><tr
id=sl_svn99_4298

><td class="source">						transaction.executeSql(&#39;DELETE FROM storage where id=?&#39;, [key]);<br></td></tr
><tr
id=sl_svn99_4299

><td class="source">					}<br></td></tr
><tr
id=sl_svn99_4300

><td class="source">				);<br></td></tr
><tr
id=sl_svn99_4301

><td class="source">			};<br></td></tr
><tr
id=sl_svn99_4302

><td class="source">			this.clear = function() {<br></td></tr
><tr
id=sl_svn99_4303

><td class="source">				storage = {};<br></td></tr
><tr
id=sl_svn99_4304

><td class="source">				this.length = 0;<br></td></tr
><tr
id=sl_svn99_4305

><td class="source">				this.db.transaction(<br></td></tr
><tr
id=sl_svn99_4306

><td class="source">					function (transaction) {<br></td></tr
><tr
id=sl_svn99_4307

><td class="source">						transaction.executeSql(&#39;CREATE TABLE IF NOT EXISTS storage (id NVARCHAR(40) PRIMARY KEY, body NVARCHAR(255))&#39;);<br></td></tr
><tr
id=sl_svn99_4308

><td class="source">						transaction.executeSql(&#39;DELETE FROM storage&#39;, []);<br></td></tr
><tr
id=sl_svn99_4309

><td class="source">					}<br></td></tr
><tr
id=sl_svn99_4310

><td class="source">				);<br></td></tr
><tr
id=sl_svn99_4311

><td class="source">			};<br></td></tr
><tr
id=sl_svn99_4312

><td class="source">			this.key = function(index) {<br></td></tr
><tr
id=sl_svn99_4313

><td class="source">				var i = 0;<br></td></tr
><tr
id=sl_svn99_4314

><td class="source">				for (var j in storage) {<br></td></tr
><tr
id=sl_svn99_4315

><td class="source">					if (i==index) {<br></td></tr
><tr
id=sl_svn99_4316

><td class="source">						return j;<br></td></tr
><tr
id=sl_svn99_4317

><td class="source">					} else {<br></td></tr
><tr
id=sl_svn99_4318

><td class="source">						i++;<br></td></tr
><tr
id=sl_svn99_4319

><td class="source">					}<br></td></tr
><tr
id=sl_svn99_4320

><td class="source">				}<br></td></tr
><tr
id=sl_svn99_4321

><td class="source">				return null;<br></td></tr
><tr
id=sl_svn99_4322

><td class="source">			};<br></td></tr
><tr
id=sl_svn99_4323

><td class="source"><br></td></tr
><tr
id=sl_svn99_4324

><td class="source">		} catch(e) {<br></td></tr
><tr
id=sl_svn99_4325

><td class="source">			alert(&quot;Database error &quot;+e+&quot;.&quot;);<br></td></tr
><tr
id=sl_svn99_4326

><td class="source">		    return;<br></td></tr
><tr
id=sl_svn99_4327

><td class="source">		}<br></td></tr
><tr
id=sl_svn99_4328

><td class="source">};<br></td></tr
><tr
id=sl_svn99_4329

><td class="source"><br></td></tr
><tr
id=sl_svn99_4330

><td class="source">PhoneGap.addConstructor(function() {<br></td></tr
><tr
id=sl_svn99_4331

><td class="source">    var setupDroidDB = function() {<br></td></tr
><tr
id=sl_svn99_4332

><td class="source">        navigator.openDatabase = window.openDatabase = DroidDB_openDatabase;<br></td></tr
><tr
id=sl_svn99_4333

><td class="source">        window.droiddb = new DroidDB();<br></td></tr
><tr
id=sl_svn99_4334

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_4335

><td class="source">    if (typeof window.openDatabase === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_4336

><td class="source">        setupDroidDB();<br></td></tr
><tr
id=sl_svn99_4337

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn99_4338

><td class="source">        window.openDatabase_orig = window.openDatabase;<br></td></tr
><tr
id=sl_svn99_4339

><td class="source">        window.openDatabase = function(name, version, desc, size){<br></td></tr
><tr
id=sl_svn99_4340

><td class="source">            // Some versions of Android will throw a SECURITY_ERR so we need <br></td></tr
><tr
id=sl_svn99_4341

><td class="source">            // to catch the exception and seutp our own DB handling.<br></td></tr
><tr
id=sl_svn99_4342

><td class="source">            var db = null;<br></td></tr
><tr
id=sl_svn99_4343

><td class="source">            try {<br></td></tr
><tr
id=sl_svn99_4344

><td class="source">                db = window.openDatabase_orig(name, version, desc, size);<br></td></tr
><tr
id=sl_svn99_4345

><td class="source">            } <br></td></tr
><tr
id=sl_svn99_4346

><td class="source">            catch (ex) {<br></td></tr
><tr
id=sl_svn99_4347

><td class="source">                db = null;<br></td></tr
><tr
id=sl_svn99_4348

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_4349

><td class="source"><br></td></tr
><tr
id=sl_svn99_4350

><td class="source">            if (db == null) {<br></td></tr
><tr
id=sl_svn99_4351

><td class="source">                setupDroidDB();<br></td></tr
><tr
id=sl_svn99_4352

><td class="source">                return DroidDB_openDatabase(name, version, desc, size);<br></td></tr
><tr
id=sl_svn99_4353

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_4354

><td class="source">            else {<br></td></tr
><tr
id=sl_svn99_4355

><td class="source">                return db;<br></td></tr
><tr
id=sl_svn99_4356

><td class="source">            }<br></td></tr
><tr
id=sl_svn99_4357

><td class="source">        }<br></td></tr
><tr
id=sl_svn99_4358

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_4359

><td class="source">    <br></td></tr
><tr
id=sl_svn99_4360

><td class="source">    if (typeof window.localStorage === &quot;undefined&quot;) {<br></td></tr
><tr
id=sl_svn99_4361

><td class="source">        navigator.localStorage = window.localStorage = new CupcakeLocalStorage();<br></td></tr
><tr
id=sl_svn99_4362

><td class="source">        PhoneGap.waitForInitialization(&quot;cupcakeStorage&quot;);<br></td></tr
><tr
id=sl_svn99_4363

><td class="source">    }<br></td></tr
><tr
id=sl_svn99_4364

><td class="source">});<br></td></tr
><tr
id=sl_svn99_4365

><td class="source">}<br></td></tr
><tr
id=sl_svn99_4366

><td class="source"><br></td></tr
><tr
id=sl_svn99_4367

><td class="source"><br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn99_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn99_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?spec=svn99&amp;r=99">r99</a>
 by paul.beusterien
 on Aug 16, 2011
 &nbsp; <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/diff?spec=svn99&r=99&amp;format=side&amp;path=/trunk/com.mds.apg/resources/phonegap/js/phonegap-1.0.0.js&amp;old_path=/trunk/com.mds.apg/resources/phonegap/js/phonegap-1.0.0.js&amp;old=">Diff</a>
 </div>
 <pre>Update bundled PhoneGap from 0.9.5 to
1.0.0</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=99&spec=svn99';
 var publish_url = '/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/detail?r=99&spec=svn99#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/com.mds.apg/resources/jqm/phonegapExample/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/phonegapExample/index.html?r\x3d99\x26spec\x3dsvn99');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/phonegap/Sample/index.html');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/Sample/index.html?r\x3d99\x26spec\x3dsvn99');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/phonegap/jar/phonegap.jar');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/jar/phonegap.jar?r\x3d99\x26spec\x3dsvn99');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/phonegap/js/phonegap-1.0.0.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/js/phonegap-1.0.0.js?r\x3d99\x26spec\x3dsvn99');
 
 var selected_path = '/trunk/com.mds.apg/resources/phonegap/js/phonegap-1.0.0.js';
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/phonegap/js/phonegap.0.9.5.js');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/js/phonegap.0.9.5.js?r\x3d99\x26spec\x3dsvn99');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/phonegap/res');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/res?r\x3d99\x26spec\x3dsvn99');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/phonegap/res/xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/res/xml?r\x3d99\x26spec\x3dsvn99');
 
 
 changed_paths.push('/trunk/com.mds.apg/resources/phonegap/res/xml/plugins.xml');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/res/xml/plugins.xml?r\x3d99\x26spec\x3dsvn99');
 
 
 changed_paths.push('/trunk/com.mds.apg/src/com/mds/apg/wizards/PagePhonegapPathSet.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/src/com/mds/apg/wizards/PagePhonegapPathSet.java?r\x3d99\x26spec\x3dsvn99');
 
 
 changed_paths.push('/trunk/com.mds.apg/src/com/mds/apg/wizards/PhonegapProjectPopulate.java');
 changed_urls.push('/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/src/com/mds/apg/wizards/PhonegapProjectPopulate.java?r\x3d99\x26spec\x3dsvn99');
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/jqm/phonegapExample/index.html?r=99&amp;spec=svn99"
 
 >...s/jqm/phonegapExample/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/Sample/index.html?r=99&amp;spec=svn99"
 
 >...urces/phonegap/Sample/index.html</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/jar/phonegap.jar?r=99&amp;spec=svn99"
 
 >...ources/phonegap/jar/phonegap.jar</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/js/phonegap-1.0.0.js?r=99&amp;spec=svn99"
 selected="selected"
 >...es/phonegap/js/phonegap-1.0.0.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/js/phonegap.0.9.5.js?r=99&amp;spec=svn99"
 
 >...es/phonegap/js/phonegap.0.9.5.js</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/res?r=99&amp;spec=svn99"
 
 >...m.mds.apg/resources/phonegap/res</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/res/xml?r=99&amp;spec=svn99"
 
 >...s.apg/resources/phonegap/res/xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/resources/phonegap/res/xml/plugins.xml?r=99&amp;spec=svn99"
 
 >...ces/phonegap/res/xml/plugins.xml</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/src/com/mds/apg/wizards/PagePhonegapPathSet.java?r=99&amp;spec=svn99"
 
 >...wizards/PagePhonegapPathSet.java</option>
 
 <option value="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/browse/trunk/com.mds.apg/src/com/mds/apg/wizards/PhonegapProjectPopulate.java?r=99&amp;spec=svn99"
 
 >...rds/PhonegapProjectPopulate.java</option>
 
 </select>
 </td></tr></table>
 
 
 



 <div style="white-space:nowrap">
 Project members,
 <a href="https://www.google.com/accounts/ServiceLogin?service=code&amp;ltmpl=phosting&amp;continue=http%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fphonegap%2Fjs%2Fphonegap-1.0.0.js%3Fr%3D99&amp;followup=http%3A%2F%2Fcode.google.com%2Fa%2Feclipselabs.org%2Fp%2Fmobile-web-development-with-phonegap%2Fsource%2Fbrowse%2Ftrunk%2Fcom.mds.apg%2Fresources%2Fphonegap%2Fjs%2Fphonegap-1.0.0.js%3Fr%3D99"
 >sign in</a> to write a code review</div>


 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/a/eclipselabs.org/p/mobile-web-development-with-phonegap/source/list?path=/trunk/com.mds.apg/resources/phonegap/js/phonegap-1.0.0.js&start=99">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 132034 bytes,
 4367 lines</div>
 
 <div><a href="//mobile-web-development-with-phonegap.eclipselabs.org.codespot.com/svn-history/r99/trunk/com.mds.apg/resources/phonegap/js/phonegap-1.0.0.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:mime-type</dt>
 <dd>text/plain</dd>
 
 <dt>svn:executable</dt>
 <dd>*</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>


<script src="http://www.gstatic.com/codesite/ph/16993219237270412160/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/16993219237270412160/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/16993219237270412160/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn99': '/trunk/com.mds.apg/resources/phonegap/js/phonegap-1.0.0.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":null,"projectHomeUrl":"/a/eclipselabs.org/p/mobile-web-development-with-phonegap","token":null,"loggedInUserEmail":null,"assetHostPath":"http://www.gstatic.com/codesite/ph","assetVersionPath":"http://www.gstatic.com/codesite/ph/16993219237270412160","domainName":"eclipselabs.org","projectName":"mobile-web-development-with-phonegap","relativeBaseUrl":"/a/eclipselabs.org"}, '', 'svn99', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/16993219237270412160/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/16993219237270412160/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

