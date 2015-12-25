---
layout: default
slug: soundtrack
title: Soundtrack
---

Soundtracks will be delivered by email (MP3s) within 1-2 business days.

{% for item in site.categories.albums reversed %}
<div class="col-2up soundtrack__row">
    <div class="col-2up__column">
        <img src="/img/{{ item.image }}" title="{{ item.title }}" />
    </div>
    <div class="col-2up__column u--padding-left">
        <h2>{{ item.title }}</h2>

        <span class="soundtrack__featuring">featuring:</span>
        <ul>
            {% for song in item.songs %}
            <li class="soundtrack__title"><em>{{ song.name }}</em></li>
            {% endfor %}
        </ul>

        <p class="soundtrack__price">Price: <strong>${{ item.price }}</strong></p>

        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="{{ item.paypal }}" />
        <input type="image" alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" />
        <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" border="0" /></form>
    </div>
</div>
{% endfor %}

<blockquote class="callout callout--music">
    <p class="callout__content"><a href="/sheet-music" class="callout__link">
    Sheet music now available!</a></p>
</blockquote>
