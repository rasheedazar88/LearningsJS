import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewProperty from './NewProperty';
import TagCloud from './TagCloud';
import PlusSign from './PlusSign';
import {setDemographics,unsetDemographics,removeAllGroupTraits,setTechology,unsetTechnology, setTraitsCondition, addEvent} from '../actions/action';
import {setUtm,unsetUtm,setOthers,unsetOthers,setTraits,setTraitsVal, unsetTraits, addGroupTraits, addCommonPropsEvent, removeAllUserTraits, removeAllEvents} from '../actions/action';
import {setGroupTraits, unsetGroupTraits, unsetGroupTraitsAttribs, unsetTraitsAttrib, removeCommonGroupProp, removeCommonPropsEvent} from '../actions/action';
import PropertyTag from './PropertyTag';
import {Button} from 'react-bootstrap';
import ActionQuery from './ActionQuery';
var React = require('react');


var CommonProperties = React.createClass({
  getInitialState: function () {
    return {
      add_demographics: false,
      add_technology: false,
      add_utm: false,
      add_other: false,
      add_traits: false,
      add_groupTraits: false, // newly added
      condition: "and",
    };
  },

  render: function() {
    var that=this;
    var {addCommonPropsEvent, setTraitsCondition} = this.props;
    const onDemoCicked = bool => {
      that.setState({
        add_demographics: bool
      });
    };
    const onTechCicked = bool => {
      that.setState({
        add_technology: bool
      });
    };
    const onUtmCicked = bool => {
      that.setState({
        add_utm: bool
      });
    };
    const onOthersCicked = bool => {
      that.setState({
        add_other: bool
      });
    };
    const onTraitsCicked = bool => {
      that.setState({
        add_traits: bool
      });
    };

    const onGroupTraitsClicked = bool => {
      that.setState({
        add_groupTraits: bool
      });
    }; // newly added

    const handleCondition = event => {
      console.log(event);
        
         that.setState({
           condition: event.value
       })
      setTraitsCondition({condition: event.value});
      
    }

    let {setDemographics,addGroupTraits,unsetDemographics,removeAllGroupTraits,setTechology,unsetTechnology, addEvent, removeAllEvents} = this.props;
    let {setUtm,unsetUtm,setTraitsVal,setOthers,unsetOthers,setTraits,removeAllUserTraits,unsetTraits} = this.props;
    let { setGroupTraits, unsetGroupTraits, unsetGroupTraitsAttribs, removeCommonPropsEvent, unsetTraitsAttrib, removeCommonGroupProp} = this.props; // newly added
    let {demographics,technology,utm_params,other_params,traits} = this.props.query_cond;
    let { group_traits } = this.props.query_cond; // newly added
    const onDemoSave = cond => {
      console.log('cond=' + JSON.stringify(cond));
     setDemographics(cond);
    };
    const onDemoRemove = cond =>{
      unsetDemographics(cond);
    };
    const onTechSave = cond => {
     setTechology(cond);
    };
    const onTechRemove = cond =>{
      unsetTechnology(cond);
    };
    const onUtmSave = cond => {
      setUtm(cond);
    };
    const onUtmRemove = cond =>{
      unsetUtm(cond);
    };

    const onTraitsSave = cond => {
      setTraits(cond);
    };
    const onTraitsRemove = cond =>{
      unsetTraits(cond);
    };

    const onOthersSave = cond => {
      setOthers(cond);
    };
    const onOthersRemove = cond =>{
      unsetOthers(cond);
    };

    const onGroupTraitsSave = cond => {
      setGroupTraits(cond);
    }; // newly added

    const onGroupTraitsRemove = cond => {
      unsetGroupTraits(cond);
    }; // newly added
    
    console.log("Common group Length", this.props.query_cond.common_group_field.length)
    console.log('did events length', this.props.eventqry_cond.did_events.length)
    console.log('didnot events length', this.props.eventqry_cond.didnt_events.length)
    return (
      <div className="row fallback-margin">
        <div className="col-lg-12 col-xs-12 border-grey-filter padding-bottom-30">
          <h3 className="margin-filters">Choose Common Properties</h3>
          <div className="col-xs-12 col-md-12">
            { this.props.selectedOption === "groupSegments"
                ? <div>
                    <h4 className="margin-filters">
                    {!this.props.query_cond.common_group_field.length > 0 ?
                    <div>
                      By Account
                      <a data-testid="add_group_component" onClick={addGroupTraits}>
                        <i className="fa fa-plus-circle margin-left-25 button-plus-grey" aria-hidden="true"></i>
                      </a> 
                    </div>: 
                    <div>
                      By Account
                      <button data-testid="add_group_component" type="button" onClick={() => addGroupTraits()} className="btn margin-left-25 btn-outline btn-white">
                        <i className="fa fa-plus" aria-hidden="true">Add another account trait</i>
                      </button>
                      <a data-testid="remove_event" onClick={() => removeAllGroupTraits()}>
                        <i className="fa fa-times-circle margin-left-25 button-plus-grey" aria-hidden="true"></i>
                      </a>
                   </div>}
                      {/* {(this.state.add_groupTraits)? null : <PlusSign onCicked={onGroupTraitsClicked} />} */}
                    </h4>
                    <PropertyTag
                      field="gtraits"
                      unsetTraitsAttrib={unsetGroupTraitsAttribs}
                      onRemoveProps={removeCommonGroupProp}
                      displayFields={this.props.query_cond.common_group_field}
                      key={this.props.query_cond.group_traits["prop"].length} 
                      handleCondition = {handleCondition} onSave={setGroupTraits} 
                      condition={this.props.query_cond.condition}
                      onDelete={unsetGroupTraits}
                    />
                    {/* {(this.state.add_groupTraits)? <NewProperty field="gtraits"  onSave={onGroupTraitsSave} /> : null}
                    {(group_traits.length>0)? <TagCloud tags={group_traits} onDelete={onGroupTraitsRemove}/> : null} */}
                    <h4 className="margin-filters">
                    <div className="row">
                    {!this.props.eventqry_cond.did_events.length > 0 ?
                    <div>
                      <div className="col-lg-1 col-xs-1">
                        By Events
                      </div>
                      <a data-testid="add_event" onClick={() => addEvent()}>
                        <i className="fa fa-plus-circle margin-left-25 button-plus-grey" aria-hidden="true"></i>
                      </a></div>
                     :
                     <div>
                    <div className="col-lg-1 col-xs-1" style={{paddingTop: "10px"}}>
                        By Events
                      </div>
                     <button type="button" onClick={() => this.props.addEvent()} className="btn margin-left-25 btn-outline btn-white"><i className="fa fa-plus" aria-hidden="true"></i>Add another action</button>
                      <a data-testid="remove_event" onClick={() => removeAllEvents()}>
                        <i className="fa fa-times-circle margin-left-25 button-plus-grey" aria-hidden="true"></i>
                      </a>
                      </div>
                    }
                    </div>
                  </h4>
                  {this.props.eventqry_cond.did_events.length > 0 || this.props.eventqry_cond.didnt_events.length > 0 ? <ActionQuery addEvent={this.props.addEvent}/> : null}
                  </div>
                : 
                <div>
                  <h4 className="margin-filters">
                    By Demographics
                    {(this.state.add_demographics)? null : <PlusSign onCicked={onDemoCicked} />}
                  </h4>
                  {(this.state.add_demographics)? <NewProperty field="demo" value="fetch" onSave={onDemoSave} /> : null}
                  {(demographics.length>0)? <TagCloud tags={demographics} onDelete={onDemoRemove} /> : null}
                  <h4 className="margin-filters">
                    By Technology
                    {(this.state.add_technology)? null : <PlusSign onCicked={onTechCicked} />}
                  </h4>
                  {(this.state.add_technology)? <NewProperty field="tech"  onSave={onTechSave} /> : null}
                  {(technology.length>0)? <TagCloud tags={technology} onDelete={onTechRemove}/> : null}
                  <h4 className="margin-filters">
                    By UTM Parameters
                    {(this.state.add_utm)? null : <PlusSign onCicked={onUtmCicked} />}
                  </h4>
                  {(this.state.add_utm)? <NewProperty field="utm"  onSave={onUtmSave} /> : null}
                  {(utm_params.length>0)? <TagCloud tags={utm_params} onDelete={onUtmRemove}/> : null}
                  <h4 className="margin-filters mbottom-30">
                    By Other Parameters
                    {(this.state.add_other)? null : <PlusSign onCicked={onOthersCicked} />}
                  </h4>
                  {(this.state.add_other)? <NewProperty field="other"  onSave={onOthersSave} /> : null}
                  {(other_params.length>0)? <TagCloud tags={other_params} onDelete={onOthersRemove}/> : null}

                  <h4 className="margin-filters">
                    {!this.props.query_cond.common_properties_field.length > 0 ?
                    <div>
                      By User Traits
                    
                    <a data-testid="add_component" onClick={() => addCommonPropsEvent()}>
                      <i className="fa fa-plus-circle margin-left-25 button-plus-grey" aria-hidden="true"></i>
                    </a> </div>: 
                    <div>
                    By User Traits
                  
                  <button data-testid="add_component" type="button" onClick={() => addCommonPropsEvent()} className="btn margin-left-25 btn-outline btn-white">
                    <i className="fa fa-plus" aria-hidden="true">Add another User Traits</i>
                  </button>
                  <a data-testid="remove_event" onClick={() => removeAllUserTraits()}>
                        <i className="fa fa-times-circle margin-left-25 button-plus-grey" aria-hidden="true"></i>
                      </a>
                   </div>}
                  </h4>
                  <PropertyTag
                    field="utraits"
                    unsetTraitsAttrib={unsetTraitsAttrib}
                    onRemoveProps={removeCommonPropsEvent}
                    onDelete={unsetTraits}
                    displayFields={this.props.query_cond.common_properties_field}
                    key={this.props.query_cond.common_properties_field.length} 
                    handleCondition = {handleCondition} onSave={setTraitsVal}
                    condition={this.props.query_cond.condition}
                  />
                  <h4 className="margin-filters">
                    <div className="row">
                    {this.props.eventqry_cond.did_events.length > 0 || this.props.eventqry_cond.didnt_events.length > 0 ? 
                        <div>
                          <div className="col-lg-1 col-xs-1" style={{paddingTop: "10px"}}>
                            By Events
                          </div>
                          <button type="button" onClick={() => this.props.addEvent()} className="btn margin-left-25 btn-outline btn-white">
                            <i className="fa fa-plus" aria-hidden="true"></i>Add another action
                          </button>
                          <a data-testid="remove_event" onClick={() => removeAllEvents()}>
                            <i className="fa fa-times-circle margin-left-25 button-plus-grey" aria-hidden="true"></i>
                          </a>
                        </div>
                     :
                        <div>
                          <div className="col-lg-1 col-xs-1">
                            By Events
                          </div>
                          <a data-testid="add_event" onClick={() => addEvent()}>
                            <i className="fa fa-plus-circle margin-left-25 button-plus-grey" aria-hidden="true"></i>
                          </a>
                        </div>
                    }
                    </div>
                  </h4>
                  {this.props.eventqry_cond.did_events.length > 0 || this.props.eventqry_cond.didnt_events.length > 0 ? <ActionQuery addEvent={this.props.addEvent}/> : null}
                </div>
            }
          </div>
          </div>
        </div>
    );
  }
});

const mapStateToProps = state => ({
ui:state.ui,
query_cond: state.query_cond,
options:state.options,
eventqry_cond: state.eventqry_cond
});

const mapDispatchToProps = dispatch => bindActionCreators({
setDemographics,unsetDemographics,setTechology,unsetTechnology,setUtm,unsetUtm,setOthers,unsetOthers,setTraits,unsetTraits,
setGroupTraits, unsetGroupTraits, setTraitsVal,removeCommonPropsEvent,addCommonPropsEvent, removeAllGroupTraits,addGroupTraits, 
setTraitsCondition, removeAllUserTraits, addEvent, unsetGroupTraitsAttribs, removeAllEvents, removeCommonGroupProp, unsetTraitsAttrib// last 2 newly added
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(CommonProperties);
