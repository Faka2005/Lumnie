    <div
      class="w3-sidebar w3-bar-block w3-card w3-animate-left"
      style="display: none"
      id="leftMenu"
    >
      <button onclick="closeLeftMenu()" class="w3-bar-item w3-button w3-large">
        Close &times;
      </button>
      <div
        class="w3-sidebar w3-bar-block w3-light-grey w3-card"
        style="width: 30%"
      >
        <a href="#" class="w3-bar-item w3-button">Link 1</a>
        <a href="#" class="w3-bar-item w3-button">Link 2</a>
        <div class="w3-dropdown-hover">
          <button class="w3-button">
            Dropdown
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="w3-dropdown-content w3-bar-block">
            <a href="#" class="w3-bar-item w3-button">Link</a>
            <a href="#" class="w3-bar-item w3-button">Link</a>
          </div>
        </div>
        <a href="#" class="w3-bar-item w3-button">Link 3</a>
      </div>
    </div>

    <div
      class="w3-sidebar w3-bar-block w3-card w3-animate-right"
      style="display: none; right: 0"
      id="rightMenu"
    >
      <button onclick="closeRightMenu()" class="w3-bar-item w3-button w3-large">
        Close &times;
      </button>
      <a href="#" class="w3-bar-item w3-button">Link 1</a>
      <a href="#" class="w3-bar-item w3-button">Link 2</a>
      <a href="#" class="w3-bar-item w3-button">Link 3</a>
    </div>

    <div class="w3-teal">
      <button
        class="w3-button w3-teal w3-xlarge w3-left"
        onclick="openLeftMenu()"
      >
        &#9776;
      </button>
      <button
        class="w3-button w3-teal w3-xlarge w3-right"
        onclick="openRightMenu()"
      >
        &#9776;
      </button>
      <div class="w3-container">
        <h1>Acceuill</h1>
      </div>
    </div>