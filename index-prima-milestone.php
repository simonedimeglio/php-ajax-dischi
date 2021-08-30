<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Prima Milestone</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    <body>

        <header>
            <nav>
                <div class="navbar">
                    <i class="fab fa-spotify"></i>
                </div>
            </nav>
        </header>

        <main>
            <div class="custom-container">
                <?php 

                    require_once __DIR__ . "/database/database.php";

                    foreach($database as $disc) {
                        echo "

                        <div class=\"disc\">
                            <div class=\"disc-img\">
                                <img src=\"{$disc[poster]}\" alt=\"Album Cover\">
                            </div>
                            <div class=\"disc-info\">
                                <div class=\"disc-title\">{$disc[title]}</div>
                                <div class=\"disc-author\">{$disc[author]}</div>
                                <div class=\"disc-year\">{$disc[year]}</div>
                            </div>
                        </div>


                        
                        ";

                    }


                ?>
            </div>

        </main>

        
    </body>
</html>



