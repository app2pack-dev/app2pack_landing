import 'dart:math';

import 'package:app2pack_landing/app_resources.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:url_launcher/url_launcher.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
    with SingleTickerProviderStateMixin {
  late AnimationController _initAnimController;

  late Animation<double> _scaleAnim;
  late Animation<double> _opacityAnim;

  @override
  void initState() {
    super.initState();
    _initAnimController = AnimationController(
      vsync: this,
      duration: const Duration(
        milliseconds: 800,
      ),
    );
    _scaleAnim = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(
      CurvedAnimation(
        parent: _initAnimController,
        curve: const Interval(
          0.3,
          1.0,
          curve: Curves.elasticOut,
        ),
      ),
    );

    _opacityAnim = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(
      CurvedAnimation(
        parent: _initAnimController,
        curve: const Interval(
          0.0,
          0.8,
          curve: Curves.linear,
        ),
      ),
    );

    _initAnimController.forward();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LayoutBuilder(builder: (context, constraints) {
        final buttonWidth = constraints.maxWidth / 3;
        return Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                AppColors.purpleColor,
                AppColors.orangeColor,
              ],
            ),
          ),
          child: AnimatedBuilder(
            animation: _initAnimController,
            builder: (context, child) {
              return Transform.scale(
                scale: _scaleAnim.value,
                child: Opacity(
                  opacity: _opacityAnim.value,
                  child: child,
                ),
              );
            },
            child: Center(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Expanded(flex: 5, child: Container()),
                  SvgPicture.asset(
                    'assets/app2pack.svg',
                    width: constraints.maxWidth / 2,
                  ),
                  SvgPicture.asset(
                    'assets/app2pack_subtitle.svg',
                    width: constraints.maxWidth / 3,
                  ),
                  Expanded(
                    flex: 1,
                    child: Container(),
                  ),
                  SizedBox(
                    width: buttonWidth,
                    height: 40,
                    child: ElevatedButton(
                      onPressed: () async {
                        const url = 'mailto:support@app2pack.dev';
                        await launchUrl(Uri.parse(url));
                      },
                      style: ElevatedButton.styleFrom(
                        foregroundColor: Colors.black,
                        backgroundColor: Colors.white,
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(
                            Icons.email_outlined,
                            color: AppColors.orangeColor,
                            size: min(buttonWidth * 0.1, 20),
                          ),
                          const SizedBox(width: 8),
                          GradientText(
                            'Drop us an email',
                            style: TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: min(buttonWidth * 0.084, 18.0),
                            ),
                            gradient: const LinearGradient(
                              colors: [
                                AppColors.orangeColor,
                                AppColors.purpleColor,
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 4,
                  ),
                  const SelectableText(
                    'support@app2pack.dev',
                    style: TextStyle(
                      color: Colors.white,
                    ),
                  ),
                  Expanded(flex: 5, child: Container()),
                ],
              ),
            ),
          ),
        );
      }),
    );
  }

  @override
  void dispose() {
    _initAnimController.dispose();
    super.dispose();
  }
}

class GradientText extends StatelessWidget {
  const GradientText(
    this.text, {
    super.key,
    required this.gradient,
    this.style,
  });

  final String text;
  final TextStyle? style;
  final Gradient gradient;

  @override
  Widget build(BuildContext context) {
    return ShaderMask(
      blendMode: BlendMode.srcIn,
      shaderCallback: (bounds) => gradient.createShader(
        Rect.fromLTWH(0, 0, bounds.width, bounds.height),
      ),
      child: Text(text, style: style),
    );
  }
}
