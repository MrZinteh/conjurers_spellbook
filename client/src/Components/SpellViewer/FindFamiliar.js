import React from "react";

class FindFamiliar extends React.Component {
    render() {
        return (
            <div className="FindFamiliar">
                <div className="SpellHeading"><h1 className="SpellTitle">Find Familiar</h1><i className="i-ritual">Ritual</i></div>
                <div className="SpellDetails">
                    <section className="MoreInfo">
                        <section className="detailContent">
                            <div className="statBlock">
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Level</div>
                                    <div className="statBlockItemValue">1st</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Casting Time</div>
                                    <div className="statBlockItemValue">1 Hour <i className="i-ritual">Ritual</i></div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Range/Area</div>
                                    <div className="statBlockItemValue">10 ft</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Components</div>
                                    <div className="statBlockItemValue">V, S, M *</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Duration</div>
                                    <div className="statBlockItemValue">Instantaneous</div>
                                </div>
                                <div className="statBlockItem">
                                    <div className="statBlockItemLabel">Attack/Save</div>
                                    <div className="statBlockItemValue">None</div>
                                </div>
                                <div className="spellLine"></div>
                                <div className="more-info-content">
                                    <p>You gain the service of a familiar, a spirit that takes an animal form you choose: <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/bat">bat</a>, <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/cat">cat</a>, <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/crab">crab</a>, <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/frog">frog</a> (toad), <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/hawk">hawk</a>, <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/lizard">lizard</a>, <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/octopus">octopus</a>, <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/owl">owl</a>, <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/poisonous-snake">poisonous snake</a>, fish (<a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/quipper">quipper</a>), <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/rat">rat</a>, <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/raven">raven</a>, <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/sea-horse">sea horse</a>, <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/spider">spider</a>, or <a className="tooltip-hover monster-tooltip" href="https://www.dndbeyond.com/monsters/weasel">weasel</a>. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast. </p>
                                    <p>Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack, but it can take other actions as normal.</p>
                                    <p>When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. As an action, you can temporarily dismiss the familiar to a pocket dimension. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you. Whenever the familiar drops to 0 hit points or disappears into the pocket dimension, it leaves behind in its space anything it was wearing or carrying.</p>
                                    <p>While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.</p>
                                    <p>You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.</p>
                                    <p>Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.</p>
                    
                                    <span className="components-blurb">* - (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)</span>
                        
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}

export default FindFamiliar;