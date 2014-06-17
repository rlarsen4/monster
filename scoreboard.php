<?php  ?>
<div class="scoreboard">
    <fieldset><legend>Stats</legend>
        <div class="playerStats">
                <fieldset><legend>Quick Start Rules</legend>
                    <ol>
                        <li>Choose a player you want to be</li>
                        <li>Click the Start button</li>
                        <li>The Game board opens for you</li>
                        <li>Use the Up/ Down/ Side arrows to move around the board</li>
                        <li>Fight monsters, get rewards, get points and figure it out. That's all the information you get.</li>
                    </ol>
                </fieldset>
                <fieldset><legend>Player</legend>
                    <div><span class ="playerImage"><img alt="You"> </span></div>
                    <div class="divider">---</div>
                    <div>Player Type: <span class ="playerType"></span></div>
                    <div>Player Bio: <span class="bio"></span></div>
                    <div class="health inactive">Player Health: <span class="healthSpan"></span></div>
                    <div class="score inactive">Player Score: <span class="score inactive"></span></div>
                    <div>Current Weapon: <span class="weapon"></span></div>
                    <div>Weapon Description: <span class="weaponDesc"></span></div>
                    <div class="divider">---</div>
                    <div><span class="weaponImage"><img src="image/bowAndArrowThumbnail.png" alt="Your weapon"> </span></div>
                </fieldset>
        </div>
        <div class="monsterStats inactive">
            <fieldset><legend class="monsterLegend">Monster</legend>
                <div>Opponent: <span class="monsterName"></span></div>
                <div>Bio: <span class="monsterBio"></span></div>
                <div>Level: <span class="monsterLevel"></span></div>
                <div>Weapon: <span class="monsterWeapon"></span></div>
            </fieldset>
        </div>
    </fieldset>
</div>