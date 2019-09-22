<!DOCTYPE html>
<html>
<?php 
$file = file_get_contents("menu.json");
$menu = json_decode($file); ?>
<head>
    <meta charset="utf-8" />
    <title>Заголовок</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="favicon.png" />
    <link rel="stylesheet" href="css/bootstrap-grid.min.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i&display=swap&subset=cyrillic" rel="stylesheet">
    <link rel="stylesheet" href="css/fonts.css" />
    <link rel="stylesheet" href="css/slick.css" />
    <link rel="stylesheet" href="css/main.min.css" />
</head>

<body>
    <div class="wrap">
        <div class="slider-wrap">
            <div>
                <div>
                    <div class="main-block">
                        <div class="title-wrap">
                            <h1>
                                <span>F</span>
                                <span>U</span>
                                <span>G</span>
                                <span>U</span>
                            </h1>
                            <p>Food</p>
                        </div>
                        <div class="contacts-wrap">
                            <a href="tel:+380931317403">+38(093)131-74-03</a>
                            <a href="tel:+380979714834">+38(097)971-48-34</a>
                            <p><span>Режим работы</span> пн. -вс. с 11:00 до 23:00 <br>доставка с 12:00 до 22:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div class="rolls big">
                        <div class="title"><h2>Ролы</h2></div>
                        <div class="wrap">
                            <?php 
                            foreach ($menu->bigroll as $key => $value) {?>
                                <div class="<?= $value->tip?> <?= $value->hot?>">
                                    <h3><?= $value->name?></h3>
                                    <p><?= $value->consist?></p>
                                    <img src="img/<?= $value->image?>.png" alt="">
                                    <div class="price-block">
                                        <p><?= $value->price?></p>
                                        <p><?= $value->weight?></p>
                                    </div>
                                </div>
                              <?php  }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div class="rolls">
                        <h2></h2>
                        <div></div>
                    </div>
                    <div class="maki"></div>
                    <div class="more"></div>
                </div>
            </div>
            <div>
                <div>
                    <div class="sets"></div>
                </div>
            </div>
            <div>
                <div>
                    <div class="burned"></div>
                    <div class="tempura"></div>
                    <div class="soups"></div>
                    <div>
                        <div class="salad"></div>
                        <div class="sendvich"></div>
                    </div>
                    <div class="garnirs"></div>
                </div>
            </div>
            <div>
                <div>
                    <div class="contacts"></div>
                </div>
            </div>
        </div>
    </div>
    <!--[if lt IE 9]>
	<script src="libs/html5shiv/es5-shim.min.js"></script>
	<script src="libs/html5shiv/html5shiv.min.js"></script>
	<script src="libs/html5shiv/html5shiv-printshiv.min.js"></script>
	<script src="libs/respond/respond.min.js"></script>
	<![endif]-->

    <script src="js/jquery-3.4.1.min.js" type="text/javascript"></script>
    <script src="js/jqBootstrapValidation.js" type="text/javascript"></script>
    <script src="js/slick.min.js" type="text/javascript"></script>
    <script src="js/common.js" type="text/javascript"></script>
    <!-- Yandex.Metrika counter -->
    <!-- /Yandex.Metrika counter -->
    <!-- Google Analytics counter -->
    <!-- /Google Analytics counter -->
</body>

</html>