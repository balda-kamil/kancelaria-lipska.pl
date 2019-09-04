<?php
  $name = $_POST['name'];
  $surname = $_POST['surname'];
  $sender_email = $_POST['email'];
  $tel = $_POST['tel'];
  $message_from_form = $_POST['message'];

  // $name = 'imie i naziwsko';
  // $sender_email = 'email osoby wysyłającej emaila';
  // $company = 'firma tej osoby';
  // $selectedSubject = 'wybrany temat';
  // $message_from_form = 'tresc wiadomosci';

  $message = '
              <html>
              <head>
                <title>wiadomość ze strony kancelaria-lipska.pl</title>
              </head>
              <body>
                <h1>wiadomość ze strony kancelaria-lipska.pl </h1>
                <table style="border-color: #666;" cellpadding="10">
                  <tr style="background: #eee;">
                    <th style="width: 130px"><strong>Imie i nazwisko</strong></th><th style="width: 130px"><strong>e-mail</strong></th><th style="width: 130px"><strong>telefon</strong></th>
                  </tr>
                  <tr>
                    <td>' . $name . " " . $surname . '</td><td> ' . $sender_email . ' </td><td> ' . $tel . ' </td>
                  </tr>
                </table>

                <table style="border-color: #666;" cellpadding="10">
                  <tr style="background: #eee;">
                    <th style="width: 130px"><strong>Treść wiadomości</strong></th>
                  </tr>
                  <tr>
                    <td>' . $message_from_form . '</td>
                  </tr>
                </table>

              </body>
              </html>
              ';

  

  $to = 'mlipska@kancelaria-lipska.pl';
  $from = "admin@kancelaria-lipska.pl";
  $subject = 'Wiadomość od: ' . $name . ' ' . $surname . ' z formularza na stronie kancelaria-lipska.pl';

  $headers = "Content-type: text/html; charset=utf-8" . "\r\n" .
             "From: " . $from . "\r\n" .
             "Reply-To: " . $sender_email;

  mail($to, $subject, $message, $headers);

