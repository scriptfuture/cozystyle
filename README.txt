“Cozy Style”,  это плагин для JQuery позволяющий довольно просто устанавливать блокам градиенты и закруглённые края. 

Подключение:
<script type="text/javascript" src="jquery-1.9.1.min.js"></script>  
<script type='text/javascript' src="cozystyle.js"></script>

Пример работы:

Код внутри ready:

  $(document).ready(function(){

      $(".cozy").cozyStyle({'location': 'top',
      'gradient': 'red black',
      'nogradient': '#808080',
      'rounding' : '10px'});
        
  });


Код внутри тега body:

<div class='cozy'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ligula id sem tristique ultrices eget id neque. Duis enim turpis, tempus at accumsan vitae,lobortis id sapien.</p>
</div>

Настройки:

gradient – указываются 2 цвета, через пробел в html-формате
nogradient – цвет фона блока, на случай если градиент в браузере не поддерживается.
rounding – величина закруглённых краёв в пикселях. 

Библиотека распространяется на условиях свободной лицензии MIT. http://opensource.org/licenses/mit-license.php