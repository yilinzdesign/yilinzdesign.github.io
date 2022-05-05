//
//  ContentView.swift
//  LooksGood
//
//  Created by YL Z on 2022/5/4.
//

import SwiftUI
import RealityKit
import ARKit

var arView: ARView!
struct ContentView : View {


  @State var propId: Int = 0
  let Names: [String] = ["Spring Selection","Outsider"]
    var body: some View {
      // 1 put ar view with button into a z stack
      ZStack(alignment: .bottom) {
        // 2 completing the binding
        ARViewContainer(propId: $propId).edgesIgnoringSafeArea(.all)
        VStack{
//
//          Text("Iamtest")
          Text("\(Names[propId])")
            .foregroundColor(.black)
            .background(Color.white)
            .font(.largeTitle)
            .frame(width:800)
        HStack {
          Spacer()
          Button(action: {
            self.propId = self.propId <= 0 ? 0 : self.propId - 1
          }) {
            Image("PreviousButton")
          }
//          Spacer()
          Button(action: {
            self.TakeSnapshot()
          }) {
            Image("ShutterButton")
          }
//          Spacer()
          Button(action: {
            self.propId = self.propId >= 2 ? 2 : self.propId + 1
          }) {
            Image("NextButton")
          }
          Spacer()

        }
      }
      }
    }
  func TakeSnapshot() {
    // 1
    arView.snapshot(saveToHDR: false) { (image) in
      // 2
      let compressedImage = UIImage(
        data: (image?.pngData())!)
      // 3
      UIImageWriteToSavedPhotosAlbum(
        compressedImage!, nil, nil, nil)
    }
  }

}

struct ARViewContainer: UIViewRepresentable {
  @Binding var propId: Int

    func makeUIView(context: Context) -> ARView {
        
      arView = ARView(frame: .zero)
      return arView

        
    }
    
    func updateUIView(_ uiView: ARView, context: Context) {
//      // 1
//      let arConfiguration1 = ARWorldTrackingConfiguration()
////      // 2
////
//      uiView.session.run(arConfiguration1,
//                         options:[.resetTracking, .removeExistingAnchors])
      // 1
      let arConfiguration = ARFaceTrackingConfiguration()
      // 2
      uiView.session.run(arConfiguration,
                         options:[.resetTracking, .removeExistingAnchors])

      
      
      switch(propId) {
        
      case 0: // spring
        let arAnchor = try! Experience.loadSpring()
        uiView.scene.anchors.append(arAnchor)
        break
        
      case 1: // Glasses
        let arAnchor = try! Experience.loadOutsider()
        uiView.scene.anchors.append(arAnchor)
        break
//
//      case 2: // Mustache
//        let arAnchor = try! Experience.loadMustache()
//        uiView.scene.anchors.append(arAnchor)
//        break

      default:
        break
      }

    }
    
}

#if DEBUG
struct ContentView_Previews : PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
#endif
