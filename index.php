<?php include 'settings.php'; ?>
<!DOCTYPE html>
<html lang="cs">
<head>
<!-- vygenerovano z PHP -->
  <meta charset="utf-8" />
  <meta name="robots" content="index, follow">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="MobileOptimized" content="width">
  <meta name="HandheldFriendly" content="true">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="canonical" href="<?php echo $page_url; ?>"/>
  <link rel="shortcut icon" href="/favicon.ico" />
  <meta name="theme-color" content="<?php echo $theme_color; ?>"/>
  <meta name="description" content="<?php echo $page_description; ?>"/>
  <meta name="keywords" content="<?php echo $page_keywords; ?>"/>
  <title><?php echo $main_title; ?></title>
  <?php include 'inc/critical-css.php'; ?>
</head> 
<body class="<?php echo $page_id; ?>">
<div class="layout-container" id="tabs">
<?php include 'inc/header.php'; ?>
<main role="main" class="main">

  
    <div class="layout-content">

        <h1><span><?php echo $main_title; ?></span></h1>
        
        <?php include 'inc/set-pages.php'; ?>

    </div>

</main>

<?php //<!-- #footer --> ?>
<?php include 'inc/footer.php'; ?>

</div>

<script src="design/js/jquery-1.12.4.min.js"></script>
<script src="design/js/jquery-ui.min.js"></script>
<script src="design/js/global.js?v=27" async=""></script>
<script src="design/js/colorbox/jquery.colorbox-min.js"></script>
<script src="design/js/owlcarousel/owl.carousel.min.js"></script>

<link rel="stylesheet" href="design/css/styles.css" media="all">
<link rel="stylesheet" href="design/font-awesome-4.7.0/scss/font-awesome.critical.css" media="all">
<link rel="stylesheet" href="design/font-awesome-4.7.0/scss/font-awesome.css" media="all">


<style>

@import url('https://fonts.googleapis.com/css?family=<?php echo $font1; ?>:300,400&subset=latin-ext');
@import url('https://fonts.googleapis.com/css2?family=<?php echo $font2; ?>:wght@100;300;400;500&display=swap');

</style>

</body>
</html>