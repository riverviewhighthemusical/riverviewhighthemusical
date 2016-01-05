---
layout: default
slug: sheet-music
title: Sheet Music
---

Sheet music will be delivered by email (PDF) within 1-2 business days.

{% for item in site.categories.scores reversed %}
<div class="col-2up sheet-music__row">
    <div class="col-2up__column">
        <img src="/img/screenshots/{{ item.image }}" title="{{ item.title }}" />
    </div>
    <div class="col-2up__column sheet-music__info">
        <h2>{{ item.title }}</h2>

        <span class="sheet-music__key">in {{ item.key }}</span>
        <ul>
            {% for range in item.ranges %}
            <li class="sheet-music__range">{{ range.name }}: <strong>{{ range.range }}</strong></li>
            {% endfor %}
        </ul>

        <p class="sheet-music__price">Price: <strong>${{ item.price }}</strong></p>

        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="{{ item.paypal }}" />
        <input type="image" alt="PayPal - The safer, easier way to pay online!" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" />
        <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" border="0" /></form>
    </div>
</div>
{% endfor %}

<blockquote class="callout callout--music">
    <p class="callout__content"><a href="/soundtrack" class="callout__link">Get the soundtracks!</a></p>
</blockquote>
