export const ovalTheme = (d) => {
  const colors = ["#278B8D", "#404040", "#0C5C73", "#33C6CB"];
  const color = colors[d.depth % colors.length];
  return `
            <div style="background-color:${color}; position:relative;margin-top:-1px; margin-left:-1px;width:${d.width}px;height:${d.height}px;border-radius:50px">
               <img src=" ${d.data.imageUrl
    }" style="position:absolute;left: 0;margin-top:5px;margin-left:${5}px;border-radius:100px;width:60px;height:60px;" />
               <div style="position:absolute;top:-15px;width:${d.width
    }px;text-align:center;color:#fafafa;">
                     <div style="margin:0 auto;background-color:${color};display:inline-block;padding:8px;padding-bottom:0px;border-radius:5px"> ${d.data.id}</div>
              </div>

              <div style="color:#fafafa;font-size:${d.depth < 2 ? 16 : 12
    }px;font-weight:bold;margin-left:70px;margin-top:15px"> ${d.depth < 2 ? d.data.name : (d.data.name || "").trim().split(/\s+/g)[0]} </div>
              <div style="color:#fafafa;margin-left:70px;margin-top:5px"> ${d.depth < 2 ? d.data.positionName : d.data.area
    } </div>
              
               <!--
               <div style="padding:20px; padding-top:35px;text-align:center">
                  
                   
               </div> 
              
               <div style="display:flex;justify-content:space-between;padding-left:15px;padding-right:15px;">
                 <div > Manages:  ${d.data._directSubordinates} 👤</div>  
                 <div > Oversees: ${d.data._totalSubordinates} 👤</div>    
               </div>
               -->
           </div>
  `
}

export const galaxyTheme = (d) => {
  const svgStr = `<svg width=150 height=75  style="background-color:none"> <path d="M 0,15 L15,0 L135,0 L150,15 L150,60 L135,75 L15,75 L0,60" fill="#2599DD" stroke="#2599DD"/> </svg>`;
  return `
                          <div class="left-top" style="position:absolute;left:-10px;top:-10px">  ${svgStr}</div>
                          <div class="right-top" style="position:absolute;right:-10px;top:-10px">  ${svgStr}</div>
                          <div class="right-bottom" style="position:absolute;right:-10px;bottom:-14px">  ${svgStr}</div>
                          <div class="left-bottom" style="position:absolute;left:-10px;bottom:-14px">  ${svgStr}</div>
                          <div style="font-family: 'Inter'; background-color:#040910;sans-serif; position:absolute;margin-top:-1px; margin-left:-1px;width:${d.width
    }px;height:${d.height}px;border-radius:0px;border: 2px solid #2CAAE5">
                             
                             <div class="pie-chart-wrapper" style="margin-left:-10px;margin-top:5px;width:320px;height:300px"></div>
                           
                            <div style="color:#2CAAE5;position:absolute;right:15px;top:-20px;">
                              <div style="font-size:15px;color:#2CAAE5;margin-top:32px"> ${d.data.name
    } </div>
                              <div style="font-size:10px;"> ${d.data.positionName || ''
    } </div>
                              <div style="font-size:10px;"> ${d.data.id || ''
    } </div>
                              ${d.depth == 0
      ? `                              <br/>
                              <div style="max-width:200px;font-size:10px;">
                                A corporate history of Ian is a chronological account of a business or other co-operative organization he founded.  <br><br>Usually it is produced in written format but it can also be done in audio or audiovisually  
                              </div>`
      : ''
    }

                            </div>

                            <div style="position:absolute;left:-5px;bottom:10px;">
                              <div style="font-size:10px;color:#2CAAE5;margin-left:20px;margin-top:32px"> Progress </div>
                              <div style="color:#2CAAE5;margin-left:20px;margin-top:3px;font-size:10px;"> 
                                <svg width=150 height=30> ${d?.data?.progress
      ?.map((h, i) => {
        return `<rect  width=10 x="${i * 12
          }" height=${h}  y=${30 - h
          } fill="#B41425"/>`;
      })
      .join('')}  </svg>
                                </div>
                            </div>
                          </div>
                          
  `
}

export const skyTheme = (d) => {
  return `
            <div style="padding-top:30px;background-color:none;margin-left:1px;height:${d.height
    }px;border-radius:2px;overflow:visible">
              <div style="height:${d.height - 32
    }px;padding-top:0px;background-color:white;border:1px solid lightgray;">

                <img src=" ${d.data.imageUrl
    }" style="margin-top:-30px;margin-left:${d.width / 2 - 30}px;border-radius:100px;width:60px;height:60px;" />

               <div style="margin-right:10px;margin-top:15px;float:right">${d.data.id
    }</div>
               
               <div style="margin-top:-30px;background-color:#3AB6E3;height:10px;width:${d.width - 2
    }px;border-radius:1px"></div>

               <div style="padding:20px; padding-top:35px;text-align:center">
                   <div style="color:#111672;font-size:16px;font-weight:bold"> ${d.data.name
    } </div>
                   <div style="color:#404040;font-size:16px;margin-top:4px"> ${d.data.positionName
    } </div>
               </div> 
               <div style="display:flex;justify-content:space-between;padding-left:15px;padding-right:15px;">
                 <div > Manages:  ${d.data._directSubordinates} 👤</div>  
                 <div > Oversees: ${d.data._totalSubordinates} 👤</div>    
               </div>
              </div>     
      </div>
  `
}